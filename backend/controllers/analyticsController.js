// controllers/analyticsController.js
import Analytics from '../models/Analytics';

export const saveAnalytics = async (analyticsData) => {
  try {
    const newAnalytics = new Analytics(analyticsData);
    await newAnalytics.save();
    console.log('Analytics saved successfully');
  } catch (error) {
    console.error('Error saving analytics:', error);
  }
};


