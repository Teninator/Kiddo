
**Kiddo** is a lightweight, privacy-focused browser extension (Chrome / Manifest V3) designed to protect users from malicious clipboards, high-risk content pasting, code injection attempts, and excessive input payload sizes.

---

##  Features

* **Paste Protect:** Intercepts paste events in the browser capture phase before webpage scripts process them.
* **Payload Inspection:** Detects malicious payload patterns, including inline `<script>` injection, `javascript:` pseudo-protocols, and rapid multiline terminal command injection.
* **Risk Score Integration:** Routes suspended clipboard data through an internal risk engine (`riskAnalyzer.js`) to calculate threat confidence scores.
* **Sensitive Field Guarding:** Prevents suspicious automated or scripted entries into protected input fields (`password`, `credit-card`, etc.).
* **On-Screen Alerts:** Provides visual feedback via an active toast banner whenever a potentially unsafe paste action is intercepted.

---

##  Repository Structure

```text
Kiddo/
├── manifest.json              # Extension configuration and permissions
├── content.js                 # DOM interaction and Paste Protect listeners
├── background.js              # Background service worker
├── styles.css                 # Global injection styles
├── services/
│   └── riskAnalyzer.js        # Core threat detection & risk evaluation logic
├── popup/
│   ├── popup.html             # Extension toolbar UI
│   ├── popup.css              # Toolbar UI styling
│   └── popup.js               # Toolbar control logic
└── accessibility/
    ├── accessibility.html     # Accessibility dashboard
    ├── accessibility.css      # Accessibility styling
    └── accessibility.js       # Accessibility engine
