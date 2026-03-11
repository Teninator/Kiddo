const scamPhrases = [
  "urgent action required",
  "verify your account",
  "you have won",
  "claim your prize",
  "click here immediately",
  "limited time offer",
  "act now",
  "update your payment",
  "confirm your identity"
];

function analyzeText(text) {

  const lower = text.toLowerCase();

  let matches = [];

  scamPhrases.forEach(p => {
    if (lower.includes(p)) {
      matches.push(p);
    }
  });

  return matches;
}

function calculateRiskScore(matches, domain) {

  let score = 100;

  score -= matches.length * 10;

  if (domain.includes("-")) score -= 10;
  if (domain.length > 25) score -= 10;

  return Math.max(score, 0);

}