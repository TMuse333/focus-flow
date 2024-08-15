// textImage.routes.js

import express from 'express';
import TextImage from './models/textImage.model.js';

const router = express.Router();

// Route to add new text and image URLs
router.post('/text-image', async (req, res) => {
  const { texts, imageUrls } = req.body;

  try {
    const newEntry = new TextImage({ texts, imageUrls });
    await newEntry.save();
    
    res.json({ success: true, message: 'Texts and image URLs submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route to get all text and image URLs
router.get('/text-image', async (req, res) => {
  try {
    const data = await TextImage.find();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
