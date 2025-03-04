const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

// Configure Nodemailer with Namecheap's SMTP settings
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465, // Use 465 for SSL, 587 for TLS
  secure: true, // Set to `true` if using port 465 (SSL)
  auth: {
    user: "sheraz@travelcart.uk",
    //process.env.EMAIL_USER, // Namecheap email (e.g., yourname@yourdomain.com)
    pass: "Mailbox..@1",
    //process.env.EMAIL_PASS  // Email password or App Password
  },
  tls: {
    rejectUnauthorized: false, // Required to avoid self-signed certificate issues
  },
});

// Function to send an email
const sendEmail = async (req, res) => {
  try {
    const {
      adults,
      cabinClass,
      children,
      from,
      departureDate,
      returnDate,
      infants,
      email,
      phone,
      tripType,
      text,
      html,
      to,
    } = req.body;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email (must be your Namecheap email)
      to: "zaryab@travelcart.uk", // Recipient email
      subject: "Booking", // Email subject
      text: `Here are the booking details:\n
      
      \nDeparture from: ${from}
      \nDeparture to: ${to}\n
      \nDeparture Date: ${departureDate}
      \nReturn Date: ${returnDate}
      \nAdults: ${adults}
      \nChildren: ${children}
      \nInfants: ${infants}
      \nTrip Type: ${tripType}
      \nEmail: ${email}
      \nPhone: ${phone}
      \n
      \nThank you for booking with us!`, // Plain text body

      html: `<p>Here are the booking details:</p>
             <p><strong>Departure from:</strong> ${from}</p>
             <p><strong>Departure to:</strong> ${to}</p>
             <p><strong>Departure Date:</strong> ${departureDate}</p>
             <p><strong>Return Date:</strong> ${returnDate}</p>
             <p><strong>Adults:</strong> ${adults}</p>
             <p><strong>Children:</strong> ${children}</p>
             <p><strong>Infants:</strong> ${infants}</p>
             <p><strong>Trip Type:</strong> ${tripType}</p>
               <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Phone:</strong> ${phone}</p>
                 <p>Thank you for booking with us!</p>`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to send email",
        error: error.message,
      });
  }
};

module.exports = { sendEmail };
