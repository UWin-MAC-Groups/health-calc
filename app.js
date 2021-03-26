const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

/**
 * Load static resources like the landing page and the site assets like css, js and images
 */
app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname + 'public')));


/**
 * Use router for specified path
 */
app.use('/app', router);

/**
 * Handle invalid routes
 */
app.get('*', (req, res) => res.status(404).render('pages/error404', {
    reason: "Resource not found"
}));
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server is running at port " + port);
});

module.exports = app;