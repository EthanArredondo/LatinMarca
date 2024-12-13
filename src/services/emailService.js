import emailjs from 'emailjs-com';

const sendEmail = (formData) => {
    // React variables de entorno deben comenzar con "REACT_APP_"
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    console.log(serviceId);
    console.log(templateId);
    console.log(userId);

    if (!serviceId || !templateId || !userId) {
        throw new Error('Missing EmailJS credentials');
    }

    return emailjs.send(serviceId, templateId, { ...formData }, userId)
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            throw error; // Re-throw the error
        });
};

export default sendEmail;