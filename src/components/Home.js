import React, { useContext, useEffect, useState, useRef } from 'react';
import Prompt from './Prompt';
import AiContext from '../AIContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { marked } from 'marked';

const Home = () => {
  const context = useContext(AiContext);
  const { prompt, setprompt, image, setimage, resp } = context;
  const [resps, setresps] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (resp) setresps((prevResps) => [...prevResps, { mess: resp, domain: 'mr-[40%] !bg-zinc-900' }]);
  }, [resp]);

  useEffect(() => {
    if (prompt) setresps((prevResps) => [...prevResps, { mess: prompt, domain: 'ml-[40%]' }]);
  }, [prompt]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [resps]);

  const renderer = new marked.Renderer();
  renderer.code = (code, language) => {
    return `<div class="code-block">${code}</div>`;
  };

  const renderCodeBlocks = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const codeBlocks = doc.querySelectorAll('.code-block');

    codeBlocks.forEach((block) => {
      const code = block.innerHTML;
      const highlightedCode = (
        <SyntaxHighlighter style={dark} language={block.getAttribute('class')} children={code} />
      );
      block.parentNode.replaceChild(highlightedCode, block);
    });

    return { __html: doc.body.innerHTML };
  };

  return (
    <div className='min-h-full overflow-y-auto max-h-screen w-screen'>
      <div className='mb-[20%] mt-[2%] w-full'>
        { 
          resps.map((res, index) => {
            const renderedHTML = marked(res.mess, { renderer });
            return (
              <div
                key={index}
                className={`max-w-[70%] overflow-x-auto ml-auto mr-auto bg-zinc-700 mb-8 p-3 rounded-xl ${res.domain}`}
                dangerouslySetInnerHTML={renderCodeBlocks(renderedHTML)}
              />
            );
          })
        }
        <div ref={bottomRef}></div>
      </div>
      <Prompt />
    </div>
  );
};

export default Home;
