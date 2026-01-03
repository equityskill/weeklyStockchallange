/* ================== GLOBAL CONFIG ================== */

const CONFIG = {

  APP_NAME: "EquitySkill",

  // ===== WEB APPS =====
  DAILY_WEB_APP_URL:
    "https://script.google.com/macros/s/AKfycbwRhd9YFStzAjKmZQtKrpozvNaLzV4tH2USF5CRH7upengxjdNVqVVsuE12v47r2UBp/exec",

  WEEKLY_WEB_APP_URL:
    "https://script.google.com/macros/s/AKfycbx6FvC2mg66d5vXPvz7cpT0KXNKKejPN7bCUmRWZfJwbvGMzcuwD2OUtqSSfFk80SHr/exec",

  USER_WEB_APP_URL:
  "https://script.google.com/macros/s/AKfycbyk_-pdyN6Fkf4arvnvRtiGBeUaSTYiVk4NGmQZjgQghGthTunaWVwQ4oUIaU1B-f_f/exec",
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


