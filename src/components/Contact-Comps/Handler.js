import emailjs from '@emailjs/browser';

const sendEmail = (formDetails, setButtonText, setFormDetails, setStatus, formInitialDetails) => {

    const form = document.createElement('form');
    form.id = 'myForm' + Math.random().toString(36).substr(2, 9);
    form.innerHTML = `
    <input type="hidden" name="firstName" value="${formDetails.firstName}" />
    <input type="hidden" name="lastName" value="${formDetails.lastName}" />
    <input type="hidden" name="email" value="${formDetails.email}" />
    <input type="hidden" name="phone" value="${formDetails.phone}" />
    <input type="hidden" name="message" value="${formDetails.message}" />
  `;

    emailjs.sendForm('service_x32hwrr', 'template_3xo4m1d', form, 'hJAFj2ubHF8dnkFaf')
        .then((result) => {
            console.log(result.text);
            setButtonText('Send');
            setFormDetails(formInitialDetails);
            setStatus({ message: null });
        })
        .catch((error) => {
            setStatus({ success: false, message: error.text });
        });
};

export const handleSubmit = (formDetails, setInitialValidationStatus, setStatus, setButtonText, setFormDetails, formInitialDetails) => {
    if (formDetails.firstName === '' || !formDetails.firstName.match(/^[A-Za-z]*$/)) {
        setInitialValidationStatus({ firstName: false, email: true, lastName: true, phone: true, message: true });
        setStatus({
            success: false,
            message: formDetails.firstName === ''
                ? 'Oops, you forgot to enter your First Name.'
                : 'Oops, you cannot enter numbers or empty space in your First Name.',
        });
    } else if (formDetails.lastName === '' || !formDetails.lastName.match(/^[A-Za-z]*$/)) {
        setInitialValidationStatus({ lastName: false, firstName: true, email: true, phone: true, message: true });
        setStatus({
            success: false,
            message: formDetails.lastName === ''
                ? 'oups, yoy forget to enter your Last Name.'
                : 'Oops, you cannot enter numbers or empty space in your Last Name.',
        });
    } else if (formDetails.email === '' || !formDetails.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        setInitialValidationStatus({ email: false, firstName: true, lastName: true, phone: true, message: true });
        setStatus({
            success: false,
            message: formDetails.email === ''
                ? 'Oops, you forgot to enter your Email.'
                : 'Oops, your Email Can not be Identical.',
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
            success: false,
            message: localStorage.getItem('attempts') === null
                ? 'You can not hack me.'
                : 'Oops, you can not send us message at a time more than three. Please try later.',
        });
    } else {
        setButtonText('Sending...');
        setInitialValidationStatus({ firstName: true, email: true, lastName: true, phone: true, message: true });
        setStatus({ success: true, message: 'Message sent successfully' });
        const attempts = Number(localStorage.getItem('attempts')) || 0;
        localStorage.setItem('attempts', (attempts + 1).toString());
        sendEmail(formDetails, setButtonText, setFormDetails, setStatus, formInitialDetails);
    }
};
