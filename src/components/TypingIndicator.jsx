import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="inline-flex items-center gap-1 rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-500">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        Typing...
      </div>
    </div>
  );
};

export default TypingIndicator;


