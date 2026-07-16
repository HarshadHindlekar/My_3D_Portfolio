import { Stars } from 'react-bootstrap-icons';
import { useState } from 'react';
import '../css/AskAi.css';

const portfolioUrl = 'https://harshad-portfolio.vercel.app/';
const aiProfileUrl = 'https://harshad-portfolio.vercel.app/ai-profile.txt';

const researchPrompt = `Tell me about Harshad Hindlekar. Use live web sources and read these public sources first: portfolio ${portfolioUrl}, AI profile ${aiProfileUrl}, LinkedIn https://www.linkedin.com/in/harshad-hindlekar-b94a07236/, GitHub https://github.com/HarshadHindlekar, and resume ${portfolioUrl}pdf/Harshad_Resume.pdf. Summarize his background, software engineering experience, core technology stack, notable projects, strengths, and availability. Only use facts supported by these sources, and include source links in the answer.`;

const encodePrompt = (prompt) => encodeURIComponent(prompt);

const copyPrompt = async (prompt) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(prompt);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = prompt;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();

  if (!copied) {
    throw new Error('Could not copy the AI prompt');
  }
};

const aiTools = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg',
    href: `https://chatgpt.com/?q=${encodePrompt(researchPrompt)}`,
  },
  {
    id: 'claude',
    name: 'Claude',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg',
    href: `https://claude.ai/new?q=${encodePrompt(researchPrompt)}`,
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg',
    href: 'https://gemini.google.com/app',
    copyPrompt: true,
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/perplexity.svg',
    href: `https://www.perplexity.ai/search/new?q=${encodePrompt(researchPrompt)}`,
  },
  {
    id: 'copilot',
    name: 'Microsoft Copilot',
    logo: 'https://copilot.microsoft.com/favicon.ico',
    href: 'https://copilot.microsoft.com/',
    copyPrompt: true,
  },
];

export const AskAi = () => {
  const [pendingTool, setPendingTool] = useState(null);

  const handleToolClick = (event, tool) => {
    if (!tool.copyPrompt) return;

    event.preventDefault();
    copyPrompt(researchPrompt)
      .then(() => setPendingTool(tool))
      .catch(() => setPendingTool(null));
  };

  const handleRedirect = () => {
    if (!pendingTool) return;

    const destination = pendingTool.href;
    setPendingTool(null);
    window.open(destination, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => setPendingTool(null);

  return (
    <div className="ask-ai-control" aria-label="Ask an AI tool about Harshad">
      <span className="ask-ai-control__label">
        <Stars aria-hidden="true" /> Ask AI about Harshad
      </span>
      <div className="ask-ai-control__buttons">
        {aiTools.map((tool) => {
          const handoffLabel = tool.copyPrompt
            ? `Copies the research prompt, then opens ${tool.name} after confirmation.`
            : `Ask ${tool.name} about Harshad`;

          return (
            <a
              className={`ask-ai-control__button ask-ai-control__button--${tool.id}`}
              href={tool.href}
              key={tool.id}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={handoffLabel}
              title={handoffLabel}
              onClick={(event) => handleToolClick(event, tool)}
            >
              <img src={tool.logo} alt="" aria-hidden="true" loading="lazy" />
            </a>
          );
        })}
      </div>
      {pendingTool && (
        <div
          className="ask-ai-dialog-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) handleClose();
          }}
        >
          <div
            className="ask-ai-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ask-ai-dialog-title"
          >
            <div className="ask-ai-dialog__icon">
              <Stars aria-hidden="true" />
            </div>
            <div className="ask-ai-dialog__content">
              <p className="ask-ai-dialog__eyebrow">Prompt copied</p>
              <h3 id="ask-ai-dialog-title">Paste it into {pendingTool.name}</h3>
              <p>
                Open the chat, paste the copied text, and send it to learn more about Harshad.
              </p>
            </div>
            <div className="ask-ai-dialog__actions">
              <button
                type="button"
                className="ask-ai-dialog__button ask-ai-dialog__button--secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="ask-ai-dialog__button ask-ai-dialog__button--primary"
                onClick={handleRedirect}
                autoFocus
              >
                OK, open chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
