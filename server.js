// server.js - Render-এর জন্য মেইন সার্ভার

const express = require('express');
const app = express();

// JSON বডি পার্স করার জন্য (webhook-এর জন্য দরকার)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// আপনার বটের মেইন কোড লোড করুন
require('./Main.js');  // এটা আপনার বট চালু করবে

// হেলথ চেক রুট (UptimeRobot-এর জন্য)
app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

// Render-এর জন্য PORT বাইন্ড (অবশ্যই!)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit: https://test-chat-bot-jynz.onrender.com`);
});
