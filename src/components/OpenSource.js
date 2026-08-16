import { Container } from 'react-bootstrap';
import { MissionSection } from './MissionSection';
import { MissionVisual } from './MissionVisual';
import webUiScreenshot from '../assets/img/open-source/moneyprinter-webui.jpg';
import apiScreenshot from '../assets/img/open-source/moneyprinter-api.jpg';
import '../css/OpenSource.css';

const contributionHighlights = [
  'Modernized the frontend with TypeScript, Next.js, and Tailwind CSS',
  'Separated the interactive studio workspace from the Python video engine',
  'Added runtime settings drawers for providers, materials, voices, language, and credentials',
  'Made generation progress, task history, previews, and downloads easier to follow',
];

export const OpenSource = () => {
  return (
    <MissionSection id="open-source" className="open-source">
      <MissionVisual
        variant="contact"
        className="open-source-section-visual"
        alt="Astronaut beside a communication beacon above Earth"
      />
      <Container fluid className="open-source-container">
        <div className="open-source__header">
          <div>
            <span className="mission-eyebrow">04 / Open source contribution</span>
            <h2>Building better tools in public.</h2>
            <p>
              I helped modernize the frontend experience of MoneyPrinterTurbo, an all-in-one AI short video generator,
              while keeping its Python generation workflow intact.
            </p>
          </div>
          <div className="open-source__actions">
            <a
              className="mission-btn mission-btn--primary"
              href="https://github.com/HarshadHindlekar/MoneyPrinterTurbo"
              target="_blank"
              rel="noopener noreferrer"
            >
              View repository
            </a>
            <a
              className="mission-btn mission-btn--ghost"
              href="https://github.com/HarshadHindlekar/MoneyPrinterTurbo/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read contribution notes
            </a>
          </div>
        </div>

        <div className="open-source__workspace">
          <div className="open-source__brief">
            <div className="open-source__terminal-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <strong>moneyprinterturbo / frontend-modernization</strong>
            </div>
            <div className="open-source__project-heading">
              <span className="open-source__badge">Frontend contribution</span>
              <h3>MoneyPrinterTurbo</h3>
              <p>Next.js Studio Workspace · Python video engine · API workflow</p>
            </div>
            <ul className="open-source__highlights">
              {contributionHighlights.map((highlight) => (
                <li key={highlight}>
                  <span aria-hidden="true">↳</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="open-source__screenshots" aria-label="MoneyPrinterTurbo screenshots">
            <figure className="open-source-shot open-source-shot--wide">
              <div className="open-source-shot__frame">
                <img src={webUiScreenshot} alt="MoneyPrinterTurbo Next.js Studio workspace showing generation workflow" loading="lazy" />
              </div>
              <figcaption>
                <span>01 / Studio workspace</span>
                <strong>Generation feed, runtime settings, and finished video preview</strong>
              </figcaption>
            </figure>
            <figure className="open-source-shot">
              <div className="open-source-shot__frame">
                <img src={apiScreenshot} alt="MoneyPrinterTurbo API documentation with video generation endpoints" loading="lazy" />
              </div>
              <figcaption>
                <span>02 / API surface</span>
                <strong>Typed workflow endpoints for scripts, tasks, media, and rendering</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </MissionSection>
  );
};
