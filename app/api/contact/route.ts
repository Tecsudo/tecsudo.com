import { NextResponse } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// Add debugging to check API key
const apiKey = process.env.MAILERSEND_API_KEY || '';
console.log('API Key exists:', !!apiKey);

// Initialize MailerSend with API key from environment variables
const mailerSend = new MailerSend({
    apiKey: apiKey,
});

const salesEmail = process.env.SALES_EMAIL || 'sales@tecsudo.com';
const senderEmail = process.env.SENDER_EMAIL || 'no-reply@tecsudo.com';

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body = await request.json();

        // Validate required fields
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Log the submission for debugging
        console.log('Contact form submission:', body);

        // Check if we have an API key before attempting to send
        if (!apiKey) {
            console.error('No MailerSend API key found in environment variables');
            // Still return success to the user, but log the issue
            return NextResponse.json(
                { success: true, message: 'Contact form submitted successfully' },
                { status: 200 }
            );
        }

        try {
            // Set up email parameters
            const sentFrom = new Sender(senderEmail, "Contact Form");

            // Company email that will receive the contact form submissions
            const recipients = [
                new Recipient(salesEmail, "Contact Team")
            ];

            // Create email content
            const emailParams = new EmailParams()
                .setFrom(sentFrom)
                .setTo(recipients)
                .setReplyTo(new Sender(email, name))
                .setSubject(`New Contact Form Submission from ${name}`)
                .setHtml(`
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
                    <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
                    <h3>Message:</h3>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `)
                .setText(`
                    New Contact Form Submission
                    
                    Name: ${name}
                    Email: ${email}
                    Phone: ${body.phone || 'Not provided'}
                    Company: ${body.company || 'Not provided'}
                    
                    Message:
                    ${message}
                `);

            // Send the email
            const response = await mailerSend.email.send(emailParams);
            console.log('Email API response:', response);
            console.log('Contact email sent successfully');

            // // Send thank you email to the sender
            // const thankYouRecipients = [
            //     new Recipient(email, name)
            // ];

            // const thankYouEmailParams = new EmailParams()
            //     .setFrom(sentFrom)
            //     .setTo(thankYouRecipients)
            //     .setSubject(`Thank you for contacting Tecsudo`)
            //     .setHtml(`
            //         <h2>Thank You for Contacting Us</h2>
            //         <p>Dear ${name},</p>
            //         <p>Thank you for reaching out to Tecsudo. We have received your message and our team will review it promptly.</p>
            //         <p>We typically respond within 24-48 business hours.</p>
            //         <p>In the meantime, feel free to explore our website for more information about our services.</p>
            //         <p>Best regards,</p>
            //         <p>The Tecsudo Team</p>
            //     `)
            //     .setText(`
            //         Thank You for Contacting Us

            //         Dear ${name},

            //         Thank you for reaching out to Tecsudo. We have received your message and our team will review it promptly.

            //         We typically respond within 24-48 business hours.

            //         In the meantime, feel free to explore our website for more information about our services.

            //         Best regards,
            //         The Tecsudo Team
            //     `);

            // await mailerSend.email.send(thankYouEmailParams);
            // console.log('Thank you email sent successfully');

        } catch (emailError) {
            // Log email sending error but don't fail the request
            console.error('Error sending contact email:', emailError);
            // You might want to implement a fallback notification method here
        }

        // Return success response
        return NextResponse.json(
            { success: true, message: 'Contact form submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing contact form:', error);

        return NextResponse.json(
            { error: 'Failed to process contact form submission' },
            { status: 500 }
        );
    }
} 