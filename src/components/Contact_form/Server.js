const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, phone, company, email, category } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: 'harispandey990@gmail.com', // Your email
      pass: 'masnkebklzzbooii', // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: 'harishpandey990@gmail.com',
    to: 'harishpandey9958@gmail.com', // Where the email will be sent
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Phone: ${phone}
      Company: ${company}
      Email: ${email}
      Product Category: ${category}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
