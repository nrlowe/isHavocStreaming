// server.js
const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('path/to/your/firebase/credentials.json');

const app = express();
const port = 3000;

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-firebase-database.firebaseio.com'
});

// Define an API endpoint to check the stream status
app.get('/check-stream-status', (req, res) => {
  // Implement the logic to check the stream status and update Firebase here
  // You can use the Firebase Admin SDK to interact with Firestore or Realtime Database, for example
  // Update database values as needed
  res.json({ status: 'Stream is running' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
