import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Send, Paperclip, Sparkles, Info, Loader2 } from 'lucide-react';
import api from '../services/api';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const suggestedPromptsFallback = [
  'How do I transition to a new career?',
  'Help me improve my resume',
  'Prepare me for an upcoming interview',
  'What skills should I develop?',
  'How do I negotiate salary?',
];

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isComprehensive, setIsComprehensive] = useState(false);
  const [starters, setStarters] = useState(suggestedPromptsFallback);
  const [systemStatus, setSystemStatus] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  const userId = useMemo(() => `web_${Math.random().toString(36).slice(2, 8)}`, []);
  const endRef = useRef(null);

  const scrollToBottom = () => endRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        console.log('🔍 Starting bootstrap...');
        const [[health], [status], [startersResp]] = await Promise.all([
          api.getHealth(),
          api.getSystemStatus(),
          api.getConversationStarters(),
        ]);
        console.log('📊 Bootstrap results:', { health, status, startersResp });
        
        if (health) {
          console.log('✅ Health check successful:', health);
          setSystemStatus(health);
        }
        if (status) {
          console.log('✅ System status successful:', status);
          setSystemStatus((s) => ({ ...(s || {}), ...status }));
        }
        if (startersResp?.starters?.length) {
          console.log('✅ Conversation starters loaded:', startersResp.starters);
          setStarters(startersResp.starters);
        }
      } catch (error) {
        console.error('❌ Bootstrap error:', error);
        setError('Failed to initialize chat system');
      }
    };
    bootstrap();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    console.log('🚀 Sending message:', input);
    console.log('🔧 Comprehensive mode:', isComprehensive);
    console.log('👤 User ID:', userId);
    
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const [data, err] = isComprehensive
        ? await api.comprehensiveChat(userMessage.content, userId)
        : await api.chat(userMessage.content, userId);
      
      console.log('📨 API response:', { data, err });
      
      if (err) {
        console.error('❌ Chat error:', err);
        setError(err.message || 'Something went wrong');
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "I'm experiencing some technical difficulties. Please try again later.",
            meta: { status: 'error' },
          },
        ]);
      } else if (data) {
        console.log('✅ Chat successful:', data);
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: data.response,
            meta: {
              agent: data.agent_used,
              sources: data.sources,
              status: data.status,
              contextUsed: data.context_used,
            },
          },
        ]);
      }
    } catch (error) {
      console.error('❌ Unexpected error in sendMessage:', error);
      setError('An unexpected error occurred');
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm experiencing some technical difficulties. Please try again later.",
          meta: { status: 'error' },
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const [data, err] = await api.uploadDocument(file);
    if (err) {
      setError(err.message || 'Upload failed');
    } else if (data) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'system',
          content: `Uploaded ${data.filename || file.name}: ${data.message || 'Document added to knowledge base.'}`,
        },
      ]);
    }
    setUploading(false);
    event.target.value = '';
  };

  return (
    <div className="flex h-screen w-full bg-slate-50">
      <aside className="hidden md:flex w-80 flex-col border-r bg-white">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 text-slate-700">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <h2 className="font-semibold">Catalyst Career AI</h2>
          </div>
          <p className="mt-1 text-xs text-slate-500">Career guidance, resume, interviews, salary and more.</p>
        </div>
        <div className="p-4 space-y-2">
          <div className="text-xs font-medium text-slate-600">Suggested prompts</div>
          <div className="flex flex-wrap gap-2">
            {starters.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-left text-xs px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
       
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="flex items-center justify-between gap-4 p-3 md:p-4 border-b bg-white">
          <div className="flex items-center gap-2 text-slate-800">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <div className="font-semibold">Career Assistant</div>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isComprehensive}
                onChange={(e) => setIsComprehensive(e.target.checked)}
              />
              Comprehensive
            </label>
            <div className="hidden md:flex flex-col items-end">
              <div className="text-xs text-slate-500">
                {systemStatus?.status && (
                  <span className={
                    systemStatus.status === 'healthy' || systemStatus.status === 'operational'
                      ? 'text-emerald-600'
                      : 'text-amber-600'
                  }>
                    {systemStatus.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-4">
          {messages.length === 0 && (
            <div className="mt-10 text-center text-slate-500 text-sm">
              Start by asking a question or picking a suggested prompt.
            </div>
          )}
          {messages.map((m, idx) => (
            <Message key={idx} role={m.role} content={m.content} meta={m.meta} />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={endRef} />
        </div>

        <footer className="border-t bg-white p-3 md:p-4">
          {error && (
            <div className="mb-3 text-xs text-rose-600">{error}</div>
          )}
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <textarea
                className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                rows={2}
                placeholder="Ask about resumes, interviews, salary, skills..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="flex items-center gap-2">
              <label className={`inline-flex items-center justify-center h-10 w-10 rounded-lg border ${uploading ? 'opacity-60' : 'hover:bg-slate-50'} cursor-pointer`}>
                <Paperclip className="h-5 w-5 text-slate-600" />
                <input type="file" accept=".txt" className="hidden" onChange={handleUpload} disabled={uploading} />
              </label>
              <button
                onClick={sendMessage}
                disabled={isLoading}
                className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-amber-500 text-white text-sm font-medium hover:bg-amber-600 disabled:opacity-60"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Send
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Chat;