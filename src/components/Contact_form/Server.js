const express = require("express");
const cors = require("cors");
const emailjs = require("@emailjs/browser");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email sending endpoint
app.post("/send-email", async (req, res) => {
  const { name, phone, company, email, category } = req.body;

  try {
    // Sending email using EmailJS
    const emailSend = await emailjs.send(
      "service_g7j4352", // Your EmailJS service ID
      "template_n0m1203", // Your EmailJS template ID
      {
        name,
        phone,
        company,
        email,
        category
      },
      "FzEIxAhpYWKLu_uYT" // Your EmailJS public key
    );

    res.status(200).send({ ok: true, emailSend });
  } catch (err) {
    console.error("Error sending email:", err); // Log the error for debugging
    res.status(500).send("Error sending email");
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
