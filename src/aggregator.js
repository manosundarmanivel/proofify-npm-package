const { detectBrowserQuirks } = require('./browser-quirk');
const { probeAPIs } = require('./api-probing');
const { verifySolution } = require('./pow');
const { verifyProofOfSpace } = require('./pos');

// Function to aggregate the bot detection scores from different methods
function aggregateScores(quirks, apis, mlConfidence, puzzle = null, proofOfSpace = null) {
    let score = 0;
    console.log(score);  // Base score

    // // Proof-of-Work (Optional)
    // if (puzzle && verifySolution(puzzle.challenge, puzzle.nonce, puzzle.target)) {
    //     score += 20;
    //     console.log(score);
    // }

    // // Proof-of-Space (Optional)
    // if (proofOfSpace && verifyProofOfSpace(proofOfSpace.filePath, proofOfSpace.sizeMB)) {
    //     score += 10;
    //     console.log(score);
    // }

    // Browser Quirks
    if (quirks && !quirks.headlessChrome && quirks.javaEnabled) {
        score += 20;
        console.log(score);
    }

    // API Probing
    if (apis && apis.webGL && apis.geolocation) {
        score += 10;
        console.log(score);
    }

    // Machine Learning Confidence Score
    if (mlConfidence > 0) {
        score += Math.min(30, mlConfidence * 30);  // Scale ML confidence to a max of 30 points
        console.log(score);
    }

    return score;
}

module.exports = { aggregateScores };
