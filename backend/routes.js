import express from 'express';
import PageTimeAnalytics from './models/analytics.model.js'; // Adjust this path based on your file structure

const router = express.Router();

router.post('/track-page-time', async (req, res) => {
  try {
    const analyticsData = req.body;
    console.log('tha analytics to be sent',analyticsData)
    // Create a new instance of the Analytics model with the received data
    const newAnalytics = new PageTimeAnalytics(analyticsData);
    
    // Save the analytics data to the database
    await newAnalytics.save();
    
    console.log('Analytics saved successfully');
    res.status(201).json({ message: 'Page time analytics data saved successfully' });
  } catch (error) {
    console.error('Error saving page time analytics data:', error);
    res.status(500).json({ error: 'Error saving page time analytics data' });
  }
});

export default router;
