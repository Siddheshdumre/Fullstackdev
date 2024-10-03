const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://sid:sid114@cluster0.jrweoks.mongodb.net/registrationDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// Schema and Model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String,
});

// Mongoose model connected to 'users' collection in 'registrationDB'
const User = mongoose.model('User', userSchema, 'users');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to serve the root URL
app.get('/test-save', async (req, res) => {
    const testUser = new User({
        username: 'TestUser',
        email: 'test@example.com',
        phone: '1234567890',
        password: 'TestPassword123!',
    });

    try {
        await testUser.save();
        res.send('Test user saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to save test user');
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
