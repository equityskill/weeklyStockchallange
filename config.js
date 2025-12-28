/* ================== GLOBAL CONFIG ================== */

const CONFIG = {

  APP_NAME: "EquitySkill",

  // ===== WEB APPS =====
  DAILY_WEB_APP_URL:
    "https://script.google.com/macros/s/AKfycby-e2iA1vMZWP5TDrZm1TO4jRZSrTohI-S4OeU87wH665gfE2rMuJSbio6Sgahh9Ppi/exec",

  WEEKLY_WEB_APP_URL:
    "https://script.google.com/macros/s/AKfycbzNYJN-zqKGRMeXYkhF2L5ODnHo9rnBrKm4nAImOkpodAEyqnF4xoQ6bGR0T_UZVKeI/exec",

  USER_WEB_APP_URL:
  "https://script.google.com/macros/s/AKfycbxTYoXjKLVaI4PTNZQMGQR_uZ9k9gGIlgRCNIqotskg0dKwpWOlt_OaIr34ue-HLUrW/exec",
  // ===== DEFAULT MODE =====
  // "weekly" | "daily"
  DEFAULT_MODE: "weekly",

  // ===== PRIZE CONFIG (UI only) =====
  PRIZES: {
    weekly: 25000,
    daily: 10000
  }
};


/* ================== HELPERS ================== */

// Get active mode (from URL ?mode=daily or localStorage)
function getGameMode() {
  const urlMode = new URLSearchParams(window.location.search).get("mode");
  const savedMode = localStorage.getItem("GAME_MODE");

  let mode = urlMode || savedMode || CONFIG.DEFAULT_MODE;
  if (!["daily", "weekly"].includes(mode)) {
    mode = CONFIG.DEFAULT_MODE;
  }

  localStorage.setItem("GAME_MODE", mode);
  return mode;
}

// Get correct API based on mode
function getAPI() {
  const mode = getGameMode();
  return mode === "daily"
    ? CONFIG.DAILY_WEB_APP_URL
    : CONFIG.WEEKLY_WEB_APP_URL;
}

// Get prize amount
function getPrizeAmount() {
  const mode = getGameMode();
  return CONFIG.PRIZES[mode];
}


