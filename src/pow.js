// const crypto = require('crypto-browserify'); // Use crypto-browserify for browser compatibility

// // Generate a simple hash puzzle
// function generateChallenge(difficulty = 4) {
//     const challenge = crypto.randomBytes(16).toString('hex');
//     const target = '0'.repeat(difficulty);
//     return { challenge, target };
// }

// // Verify the PoW solution
// function verifySolution(challenge, nonce, target) {
//     const hash = crypto.createHash('sha256').update(challenge + nonce).digest('hex');
//     return hash.startsWith(target);
// }

// // Solve the PoW (Client-side simulation)
// function solveChallenge(challenge, target) {
//     let nonce = 0;
//     while (!verifySolution(challenge, nonce.toString(), target)) {
//         nonce++;
//     }
//     return nonce;
// }

// module.exports = { generateChallenge, verifySolution, solveChallenge };
