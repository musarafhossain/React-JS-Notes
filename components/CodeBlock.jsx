import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CodeBlock = ({ codeString, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter language={language} style={okaidia}>
        {codeString}
      </SyntaxHighlighter>
      <button
        className="absolute top-4 right-2 bg-gray-200 px-2 py-1 rounded-md text-gray-600 hover:bg-gray-300"
        onClick={copyToClipboard}
      >
        <FontAwesomeIcon icon={faCopy} /> {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeBlock;
