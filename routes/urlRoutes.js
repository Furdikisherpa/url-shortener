const express = require('express');
const { shortenUrl, redirectUrl } = require('../controllers/urlController');

const router = express.Router();

// POST endpoint to shorten the URL
router.post('/shorten', shortenUrl);

// GET endpoint for URL redirection
router.get('/:shortUrl', redirectUrl);

module.exports = router;
