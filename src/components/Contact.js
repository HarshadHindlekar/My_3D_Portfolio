import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import EarthCanvas from "./Contact-Comps/Earth";
import '../css/Contact.css';

export const Contact = () => {
  const [initialValidationStatus, setInitialValidationStatus] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    message: true
  });
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formDetails.firstName === '' || !formDetails.firstName.match(/^[A-Za-z]*$/)) {
      setInitialValidationStatus({ firstName: false, email: true, lastName: true, phone: true, message: true });
      setStatus({
        success: false,
        message: (formDetails.firstName === '')
          ? 'Oops, you forgot to enter your First Name.'
          : 'Oops, you cannot enter numbers in your First Name.'
      });
    } else if (formDetails.lastName === '' || !formDetails.lastName.match(/^[A-Za-z]*$/)) {
      setInitialValidationStatus({ lastName: false, firstName: true, email: true, phone: true, message: true });
      setStatus({
        success: false, message: (formDetails.lastName === '')
          ? 'oups, yoy forget to enter your Last Name.'
          : 'Oops, you cannot enter numbers in your Last Name.'
      });
    } else if (formDetails.email === '' || !formDetails.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setInitialValidationStatus({ email: false, firstName: true, lastName: true, phone: true, message: true });
      setStatus({
        success: false,
        message: (formDetails.email === '')
          ? 'Oops, you forgot to enter your Email.'
          : 'Oops, your Email Can not be Identical.'
      });
    } else if (!formDetails.phone.match(/^\d*$/)) {
      setInitialValidationStatus({ phone: false, firstName: true, email: true, lastName: true, message: true });
      setStatus({ success: false, message: 'Oops, phone number seems wrong.' });
    } else if (formDetails.message === '') {
      setInitialValidationStatus({ message: false, firstName: true, email: true, lastName: true, phone: true });
      setStatus({ success: false, message: 'Oops, you forget to type message.' });
    } else if (!(Number(localStorage.getItem('attempts')) < 3) || localStorage.getItem('attempts') === null) {
      setInitialValidationStatus({ firstName: true, email: true, lastName: true, phone: true, message: true });
      setStatus({
        success: false, message: (localStorage.getItem('attempts') === null)
          ? 'You can not hack me.'
          : 'Oops, you can not send us message at a time more than three. Please try later.'
      });
    } else {
      setButtonText("Sending...");
      setInitialValidationStatus({ firstName: true, email: true, lastName: true, phone: true, message: true });
      setStatus({ success: true, message: 'Message sent successfully' });
      const attempts = Number(localStorage.getItem('attempts')) || 0;
      localStorage.setItem('attempts', (attempts + 1).toString());
      setTimeout(() => {
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ message: null });
      }, 10000);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility className="earth-container">
              <EarthCanvas />
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="header-box">
                    <h2 className={isVisible ? "text-focus-in" : ""}>Get In Touch</h2>
                    {
                      status.message &&
                      <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    }</div>
                  <form>
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
                        <button type="submit" onClick={handleSubmit}><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
