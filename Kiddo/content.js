const pageText = document.body.innerText;

const matches = analyzeText(pageText);

const domain = window.location.hostname;

const score = calculateRiskScore(matches, domain);

highlightPhrases(matches);

showKiddoOverlay(score, matches);

function highlightPhrases(phrases) {

  phrases.forEach(p => {

    const regex = new RegExp(p, "gi");

    document.body.innerHTML =
      document.body.innerHTML.replace(
        regex,
        `<span class="kiddo-highlight">${p}</span>`
      );

  });

}

function showKiddoOverlay(score, matches) {

  if (matches.length === 0 && score > 80) return;

  const box = document.createElement("div");
  box.id = "kiddo-warning";

  box.innerHTML = `
    <div class="kiddo-header">
      <span>Kiddo Safety Check</span>
      <button id="kiddo-close">✕</button>
    </div>

    <div class="kiddo-body">

      <p><strong>Safety score:</strong> ${score}</p>
      <p><strong>Risk level:</strong> ${getRiskLevel(score)}</p>

      <p class="kiddo-warning-text">
        This page contains phrases often used in scams.
      </p>

      <div class="kiddo-phrases">
        ${matches.map(p => `<div class="kiddo-phrase">${p}</div>`).join("")}
      </div>

      <button id="kiddo-dismiss">Dismiss</button>

    </div>
  `;

  document.body.appendChild(box);

  document.getElementById("kiddo-close").onclick = () => box.remove();
  document.getElementById("kiddo-dismiss").onclick = () => box.remove();
}

function getRiskLevel(score) {

  if (score < 40) return "High Risk";
  if (score < 70) return "Be Careful";
  return "Safe";

}