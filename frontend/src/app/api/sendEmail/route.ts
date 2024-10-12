// app/api/sendEmail/route.ts

import { NextResponse } from 'next/server';









export async function POST(request: Request) {
    const nodemailer =  (await import('nodemailer')).default;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
});



transporter.verify((error) => {
    if (error) {
        console.error('Error verifying transporter:', error);
    } else {
        console.log('Transporter is ready to send emails');
    }
});

    try {
        console.log(process.env.GMAIL_PASSWORD)
        console.log(process.env.EMAIL_USER)
        const body = await request.json();
        const { name, email, phone, projectDetails } = body;

        if (!name || !email || !phone || !projectDetails) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

       

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'focusflowsoftware@gmail.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Details: ${projectDetails}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Project Details:</strong> ${projectDetails}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        const errorMessage = (error as Error).message || 'An error occurred';
        return NextResponse.json({ message: 'Failed to send email', error: errorMessage }, { status: 500 });
    }
}

export async function OPTIONS() {
    return NextResponse.json({ message: 'CORS preflight check' }, { status: 200 });
}
