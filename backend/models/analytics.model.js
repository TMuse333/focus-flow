import { Schema, model } from 'mongoose';

// Define the PageTimeAnalytics schema with componentsTime as an array of objects
const PageTimeAnalyticsSchema = new Schema({
  componentsTime: {
    type: [
      {
        name: {
          type: String,
          required: true,
          description: "The name or ID of the component",
        },
        time: {
          type: Number,
          required: true,
          description: "Total time the component was in view (in milliseconds)",
        },
      },
    ],
    required: true, // You can keep this if you want the array to always be present
  },
});

// Use the model for the PageTimeAnalytics collection
const PageTimeAnalytics = model('PageTimeAnalytics', PageTimeAnalyticsSchema,'Website analytics');

export default PageTimeAnalytics;
