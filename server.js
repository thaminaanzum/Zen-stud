const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3500;

// Middleware to handle CORS
app.use(cors({
    origin: "*"
}));

// Middleware for parsing application/x-www-form-urlencoded (form data)
app.use(bodyParser.urlencoded({ extended: true }));

// Static file serving
app.use(express.static(path.join(__dirname, './public')));

// Serve the admin login page on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'adminlogin.html'));
});

app.get('/adminlogin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'adminlogin.html'));
});

// Handle admin login form submission
app.post('/', (req, res) => {
    const { username, password } = req.body;

    // Dummy credentials for admin
    const validUsername = "admin";
    const validPassword = "admin123";

    // Check if the entered credentials are correct
    if (username === validUsername && password === validPassword) {
        // Redirect to the admin request page
        res.redirect('/adminreq.html');
    } else {
        // Redirect back to admin login with error message (you can handle this in the front end)
        res.sendFile(path.join(__dirname, 'adminlogin.html'));
    }
});

// Serve the student login page
app.get('/studentlogin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'studentlogin.html'));
});

// Handle student login form submission
app.post('/studentlogin', (req, res) => {
    const { username, password } = req.body;

    // Dummy credentials for student
    const validStudentUsername = "student";
    const validStudentPassword = "student123";

    // Check if the entered credentials are correct
    if (username === validStudentUsername && password === validStudentPassword) {
        // Redirect to the student front page
        res.redirect('/studentfrontpage.html');
    } else {
        // Redirect back to student login with error message
        res.sendFile(path.join(__dirname, 'studentlogin.html')); // You can add error message handling here
    }
});

// Serve adminreq.html
app.get('/adminreq.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'adminreq.html'));
});

// Serve studentfrontpage.html
app.get('/studentfrontpage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'studentfrontpage.html'));
});

app.get('/personal.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'personal.html'));
});

app.get('/academic.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'academic.html'));
});

app.get('/report.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'report.html'));
});

app.get('/sem2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem2.html'));
});

app.get('/sem3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem3.html'));
});

app.get('/sem4.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem4.html'));
});

app.get('/sem5.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem5.html'));
});

app.get('/sem6.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem6.html'));
});

app.get('/sem7.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem7.html'));
});

app.get('/sem8.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem8.html'));
});

app.get('/logout', (req, res) => {
    console.log('Logout route accessed'); // Log when this route is accessed
    res.redirect('/'); // Redirect to the root route to access the admin login page
});

// Handle 404 errors
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
