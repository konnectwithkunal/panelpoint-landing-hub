// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

async function main() {
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());

  // Initialize transporter (supports real Gmail or ethereal test account for dev)
  let transporter;
  if (process.env.MAIL_USER && process.env.MAIL_PASS) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // app password if using Gmail with 2FA
      },
      tls: { rejectUnauthorized: false },
    });
    console.log("Using Gmail transporter.");
  } else {
    // dev fallback: create ephemeral ethereal account
    console.warn("MAIL_USER / MAIL_PASS not set — creating Ethereal test account (dev only).");
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log("Ethereal test account created. Emails will be viewable via preview URL in logs.");
  }

  // Verify transporter (non-fatal)
  transporter.verify((err, success) => {
    if (err) {
      console.error("Nodemailer verify failed:", err);
    } else {
      console.log("Nodemailer ready to send messages.");
    }
  });

  // Root route
  app.get("/", (req, res) => {
    res.send("Server is up and running.");
  });

  const isValidEmail = (s) => typeof s === "string" && /\S+@\S+\.\S+/.test(s);

  app.post("/send", async (req, res) => {
    const { name, email, phone, message, productName } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields: name, email, or phone" });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const mailOptions = {
      from: process.env.MAIL_USER || email, // prefer authenticated mailbox as sender
      replyTo: email,
      to: "jpshineelectrical@gmail.com,konnectwithkunal@gmail.com", // set RECEIVER_EMAILS in .env or use default
      subject: `New Inquiry${productName ? ` — ${productName}` : ""} from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Product:</strong> ${productName || "-"}</p>
        <p><strong>Message:</strong><br/>${message || "-"}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);

      // If using Ethereal show preview URL
      if (nodemailer.getTestMessageUrl(info)) {
        console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
      }

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (err) {
      console.error("Email error:", err);
      return res.status(500).json({ message: "Failed to send email." });
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
