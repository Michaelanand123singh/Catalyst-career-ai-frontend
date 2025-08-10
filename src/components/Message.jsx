import React from 'react';

const bubbleBase = 'max-w-[85%] md:max-w-[70%] px-3 py-2 rounded-lg text-sm shadow-sm';

const Message = ({ role = 'assistant', content = '', meta = {} }) => {
  const isUser = role === 'user';
  const bubbleClass = isUser
    ? 'bg-amber-500 text-white rounded-br-none'
    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`${bubbleBase} ${bubbleClass}`}>
        <div className="whitespace-pre-wrap leading-relaxed">{content}</div>
        {meta && (meta.agent || meta.sources?.length || meta.status) && (
          <div className="mt-2 text-[11px] text-slate-500 flex flex-wrap items-center gap-2">
            {meta.agent && <span>Agent: {meta.agent}</span>}
            {meta.contextUsed && <span>Context used</span>}
            {meta.status && meta.status !== 'success' && (
              <span className="uppercase tracking-wide text-amber-600">{meta.status}</span>
            )}
            {meta.sources?.length ? (
              <span>Sources: {meta.sources.join(', ')}</span>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;


