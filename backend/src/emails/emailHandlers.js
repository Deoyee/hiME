import { resendClient, sender } from '../lib/resend.js';
import { createWelcomeEmailTemplate } from '../emails/emailTemplates.js';

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const { data, error } = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`, 
        to: email,
        subject: 'Welcome to hiME',
        html: createWelcomeEmailTemplate(name, clientURL),
    });
    if (error) {
        console.error('Error sending email:', error);
        throw error;
    }

    console.log('Email sent successfully:', data);
    // return data;
};