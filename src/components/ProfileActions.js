import { BoxArrowUpRight } from 'react-bootstrap-icons';
import { SocialIcons } from './Service';
import { OpenPDF } from './Banner-Comps/OpenPdf';
import '../css/ProfileActions.css';

export const ProfileActions = ({ variant = 'navbar' }) => (
  <div className={`profile-actions profile-actions--${variant}`}>
    <div className="profile-actions__social">
      {SocialIcons.map((socialIcon) => (
        <a
          href={socialIcon.href}
          key={socialIcon.altText}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialIcon.altText}
        >
          <img src={socialIcon.imgSrc} alt={socialIcon.altText} loading="lazy" />
        </a>
      ))}
    </div>
    <button className="profile-actions__resume" onClick={OpenPDF}>
      <span>{variant === 'footer' ? 'View Resume' : 'See Resume'}</span>
      <BoxArrowUpRight size={16} />
    </button>
  </div>
);
