// models/PageTimeAnalytics.js
import { Schema, model } from 'mongoose';

const ComponentTimeSchema = new Schema({
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
});

const PageTimeAnalyticsSchema = new Schema({
  componentsTime: {
    type: [ComponentTimeSchema],
    required: true,
    description: "Array of components with their time spent in view",
  },
  totalTimeOnPage: {
    type: Number,
    required: true,
    description: "Total time spent on the page in milliseconds",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    description: "Timestamp of when the analytics data was recorded",
  },
});

const PageTimeAnalytics = model('PageTimeAnalytics', PageTimeAnalyticsSchema, 'PageTimeAnalytics');

export default PageTimeAnalytics;
