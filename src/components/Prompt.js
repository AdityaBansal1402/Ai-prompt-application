import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import AiContext from '../AIContext';

const Prompt = () => {
  const prompref = useRef();
  const Context = useContext(AiContext);
  const { prompt, setprompt, image, setimage, resp } = Context;
  const [pro, setpro] = useState('');
  
  const prompy = (e) => {
    setpro(e.target.value);
  };

  const clicky = () => {
    setprompt(pro);
    setpro('');
    const textarea = prompref.current;
    textarea.style.height = `${Math.min(textarea.scrollHeight, 2*24)}px`;
  };

  const handleInput = () => {
    const textarea = prompref.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 10 * 24)}px`; // 24px is the approximate line height
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      clicky();
    }
  };

  return (
    <div className="absolute bottom-0 w-[85%] p-5 bg-zinc-900 opacity-65 backdrop-filter backdrop-blur-sm flex justify-end">
      <div className="sticky bottom-0 text-gray-800 w-[85%] max-h-full flex justify-center">
        <div className='w-[90%] flex justify-center bg-zinc-700 rounded-3xl items-center'>
          <span className="material-symbols-outlined text-white">attach_file</span>
          <textarea
            ref={prompref}
            value={pro}
            onChange={prompy}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            rows="1"
            placeholder='Enter your prompt'
            onFocus={() =>
              prompref.current &&
              prompref.current.parentElement.parentElement.parentElement.classList.add("!opacity-100")
            }
            onBlur={() =>
              prompref.current &&
              prompref.current.parentElement.parentElement.parentElement.classList.remove("!opacity-100")
            }
            className="max-w-[90%] rounded-3xl text-white bg-zinc-700 w-[90%] block resize-none max-h-full outline-none focus:outline-none p-3 overflow-y-auto box-border"
          ></textarea>
          <button onClick={clicky}>
            <span className="material-symbols-outlined text-zinc-400 hover:!text-white">arrow_circle_up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;