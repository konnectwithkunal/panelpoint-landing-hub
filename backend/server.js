// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Validate env
if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
  console.error("❌ Missing MAIL_USER or MAIL_PASS environment variables");
  // Do not exit on Render startup — let Render show the log, but we warn.
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  // For dev only. Remove for production if possible.
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify transporter when app starts (non-blocking)
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Nodemailer verify failed:", err);
  } else {
    console.log("✅ Nodemailer is ready to send messages");
  }
});

app.get("/", (req, res) => res.send("Server is up and running."));

const isValidEmail = (s) => typeof s === "string" && /\S+@\S+\.\S+/.test(s);

app.post("/send", async (req, res) => {
  const { name, email, phone, message, productName } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Missing required fields: name, email or phone" });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  const mailOptions = {
    from: process.env.MAIL_USER,         // use authenticated mailbox as the sender
    replyTo: email,                      // reply goes to form submitter
    to: "jpshineelectrical@gmail.com, konnectwithkunal@gmail.com", // comma separated
    subject: `New Inquiry${productName ? " — " + productName : ""} from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Product:</strong> ${productName || "-"}</p>
      <p><strong>Message:</strong><br/>${message || "-"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email error:", err);
    return res.status(500).json({ message: "Failed to send email." });
  }
});

// listen on provided port
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
