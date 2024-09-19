const axios = require('axios');

// Function to get ML Confidence Score from an external API
async function getMLConfidenceScore(behaviorData) {
    try {
        const response = await axios.post('http://192.168.100.166:8000/predict', behaviorData);
        return response.average_confidence_human;  // Example: returns a score between 0 and 1
    } catch (error) {
        console.error('Error fetching ML confidence score:', error);
        return 0;  // Default fallback score
    }
}

module.exports = { getMLConfidenceScore };
