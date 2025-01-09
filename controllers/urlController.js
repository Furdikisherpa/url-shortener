const { nanoid } = require('nanoid');
const Url = require('../models/urlModel');

// Shorten URL
const shortenUrl = async (req, res) => {
  try {
    const { original_url } = req.body;
    const short_url = nanoid(6); // 6 characters long short URL
    await Url.create({ original_url, short_url });
    res.status(201).json({ short_url: `http://localhost:3000/${short_url}` });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Redirect to original URL
const redirectUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ where: { short_url: shortUrl } });
    if (url) {
      return res.redirect(url.original_url);
    } else {
      return res.status(404).send('URL Not Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = { shortenUrl, redirectUrl };
