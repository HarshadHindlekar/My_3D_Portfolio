import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import EarthCanvas from "./Contact-Comps/Earth";
import '../css/Contact.css';
import { handleSubmit } from "./Contact-Comps/Handler";
import { isMobile } from 'react-device-detect';
import { MissionSection } from "./MissionSection";

export const Contact = () => {
  const [initialValidationStatus, setInitialValidationStatus] = useState(
    { firstName: true, lastName: true, email: true, phone: true, message: true });
  const formInitialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    handleSubmit(formDetails, setInitialValidationStatus, setStatus, setButtonText, setFormDetails, formInitialDetails);
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
              <EarthCanvas />
            </div>
          </Col>}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-form-panel ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <div className="contact-mission-copy">
                    <h2>Let's Build What's Next. Together.</h2>
                    <p>Ready to collaborate or launch your next idea? Let's establish contact.</p>
                    <div className="mission-status-card">
                      <strong>Status: Connected</strong>
                      <span>Thanks for following the mission. Let's create impact together.</span>
                    </div>
                    <div className="contact-methods">
                      <a href="mailto:harshadhindlekar24@gmail.com">harshadhindlekar24@gmail.com</a>
                      <span>India</span>
                    </div>
                  </div>
                  <form className="form-cointainer">
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
                        <button type="submit" onClick={handleSubmitButton}><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </MissionSection>
  )
}
