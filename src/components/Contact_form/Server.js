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
      "service_m5tmddl", // Your EmailJS service ID
      "template_z8hyhga", // Your EmailJS template ID
      {
        name,
        phone,
        company,
        email,
        category
      },
      "ltgaiHK8mpW8QttCw" // Your EmailJS public key
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
