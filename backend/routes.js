// routes/analytics.js
import express from 'express';


const router = express.Router();

router.post('/track-page-time', async (req, res) => {
  try {
    await savePageTimeAnalytics(req.body);
    res.status(201).json({ message: 'Page time analytics data saved successfully' });
  } catch (error) {
    console.error('Error saving page time analytics data:', error);
    res.status(500).json({ error: 'Error saving page time analytics data' });
  }
});

export default router;
