import { lazy, Suspense, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../css/Contact.css';
import { handleSubmit } from "./Contact-Comps/Handler";
import { isMobile } from 'react-device-detect';
import { MissionSection } from "./MissionSection";
import { EarthLoader } from "./LoadingShell";

const EarthCanvas = lazy(() => import("./Contact-Comps/Earth"));
const CONTACT_SUCCESS_KEY = 'portfolio-contact-success-at';
const CONTACT_COOLDOWN_MS = 24 * 60 * 60 * 1000;

const hasRecentContactSuccess = () => {
  try {
    const sentAt = Number(window.localStorage.getItem(CONTACT_SUCCESS_KEY));

    if (!Number.isFinite(sentAt) || Date.now() - sentAt >= CONTACT_COOLDOWN_MS) {
      window.localStorage.removeItem(CONTACT_SUCCESS_KEY);
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

export const Contact = () => {
  const [initialValidationStatus, setInitialValidationStatus] = useState(
    { firstName: true, lastName: true, email: true, phone: true, message: true });
  const formInitialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(hasRecentContactSuccess);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    handleSubmit(
      formDetails,
      setInitialValidationStatus,
      setStatus,
      setButtonText,
      setFormDetails,
      formInitialDetails,
      () => {
        try {
          window.localStorage.setItem(CONTACT_SUCCESS_KEY, Date.now().toString());
        } catch {
          // The thank-you state still works if storage is unavailable.
        }
        setIsSubmitted(true);
      },
    );
  };

  return (
    <MissionSection id="connect" className="contact">
      <Container>
        <Row className="align-items-center">
          {!isMobile &&<Col size={12} md={6}>
            <div className="earth-container">
              <div className="contact-orbit-shell" aria-hidden="true">
                <span></span>
                <span></span>
              </div>
              <Suspense fallback={<EarthLoader />}>
                <EarthCanvas />
              </Suspense>
            </div>
          </Col>}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-form-panel ${isSubmitted ? 'contact-form-panel--success' : ''} ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  {isSubmitted ? (
                    <div className="contact-success-panel" role="status" aria-live="polite">
                      <div className="contact-success-panel__topline">
                        <span>04 / Transmission complete</span>
                        <span>Message 01 / 01</span>
                      </div>
                      <div className="contact-success-panel__body">
                        <div className="contact-success-panel__icon" aria-hidden="true">
                          <span>✓</span>
                        </div>
                        <div>
                          <span className="contact-success-panel__eyebrow">Signal received</span>
                          <h2>Thank you.<br />I’ll be in touch.</h2>
                          <p>Your message is safely in my inbox. I’ll review it and get back to you soon.</p>
                        </div>
                      </div>
                      <div className="contact-success-panel__status">
                        <span>Channel status</span>
                        <strong>Message queued successfully</strong>
                      </div>
                      <a className="mission-btn mission-btn--ghost" href="mailto:harshadhindlekar24@gmail.com">
                        Email me directly <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="contact-mission-copy">
                        <h2>Recruiters, Teams, Let's Connect.</h2>
                        <p>Open to frontend and full stack software engineering roles where React, Next.js, TypeScript, cloud, and product thinking matter.</p>
                        <div className="mission-status-card">
                          <strong>Status: Open to Opportunities</strong>
                          <span>Available for recruiter conversations, engineering roles, and product-focused collaboration.</span>
                        </div>
                        <div className="contact-methods">
                          <a href="mailto:harshadhindlekar24@gmail.com">harshadhindlekar24@gmail.com</a>
                          <span>India</span>
                        </div>
                      </div>
                    <form className="form-cointainer" onSubmit={handleSubmitButton}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} className={initialValidationStatus.firstName ? '' : 'invalid-input'} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} className={initialValidationStatus.lastName ? '' : 'invalid-input'} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} className={initialValidationStatus.email ? '' : 'invalid-input'} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} className={initialValidationStatus.phone ? '' : 'invalid-input'} />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} className={initialValidationStatus.message ? '' : 'invalid-input'}></textarea>
                          {
                            status.message &&
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          }
                          <button type="submit" disabled={buttonText === 'Sending...'}><span>{buttonText}</span></button>
                        </Col>
                      </Row>
                    </form>
                    </>
                  )}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </MissionSection>
  )
}
