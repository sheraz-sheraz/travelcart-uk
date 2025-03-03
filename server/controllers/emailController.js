const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

// Configure Nodemailer with Namecheap's SMTP settings
const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 465, // Use 465 for SSL, 587 for TLS
  secure: true, // Set to `true` if using port 465 (SSL)
  auth: {
    user: process.env.EMAIL_USER, // Namecheap email (e.g., yourname@yourdomain.com)
    pass: process.env.EMAIL_PASS  // Email password or App Password
  },
  tls: {
    rejectUnauthorized: false // Required to avoid self-signed certificate issues
  }
});

// Function to send an email
const sendEmail = async (req, res) => {
  try {
    const { to, subject, text, html } = req.body;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email (must be your Namecheap email)
      to, // Recipient email(s)
      subject, // Email subject
      text, // Plain text body
      html  // HTML version of the email (optional)
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email: ', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
};

module.exports = { sendEmail };
