import React, { useEffect, useRef } from 'react';

const Prompt = () => {
  const prompref = useRef();

  useEffect(() => {
    console.log(prompref.current);
  }, []);

  const handleInput = () => {
    const textarea = prompref.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 10 * 24)}px`; // 24px is the approximate line height
    }
  };

  return (
    <div className="absolute flex-grow bottom-0 w-full min-w-full p-5 bg-zinc-900 opacity-65 backdrop-filter backdrop-blur-sm">
      <div className="sticky bottom-0 text-gray-800 w-[85%] ml-auto mr-auto max-h-full flex justify-center">
        <div className='w-[90%] flex justify-center bg-zinc-700 rounded-full items-center'>
          <span className="material-symbols-outlined text-white">attach_file</span>
          <textarea
            ref={prompref}
            rows="1"
            onInput={handleInput}
            onFocus={() =>
              prompref.current &&
              prompref.current.parentElement.parentElement.parentElement.classList.add("!opacity-100")
            }
            onBlur={() =>
              prompref.current &&
              prompref.current.parentElement.parentElement.parentElement.classList.remove("!opacity-100")
            }
            className="max-w-[90%] text-white bg-zinc-700 w-[90%] block resize-none max-h-full outline-none focus:outline-none p-3 overflow-y-auto box-border"
            ></textarea>
          <span className="material-symbols-outlined text-zinc-400">arrow_circle_up</span>
          </div>
      </div>
    </div>
  );
};

export default Prompt;
