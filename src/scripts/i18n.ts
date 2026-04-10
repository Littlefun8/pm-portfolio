/**
 * i18n — client-side language switcher
 * Uses data-zh / data-en attributes on elements to toggle visibility.
 * Language preference is persisted in localStorage.
 */

const STORAGE_KEY = "lang";
type Lang = "zh" | "en";

function getLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "zh" || stored === "en") return stored;
  return "zh";
}

function setLang(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
  applyLang(lang);
}

function applyLang(lang: Lang): void {
  // Update <html lang="...">
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.documentElement.setAttribute("data-lang", lang);

  // Update toggle button labels
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = lang === "zh" ? "EN" : "中";
  }
  const mobileBtn = document.getElementById("lang-toggle-mobile");
  if (mobileBtn) {
    mobileBtn.textContent = lang === "zh" ? "EN" : "中";
  }
}

function toggleLang(): void {
  const current = getLang();
  setLang(current === "zh" ? "en" : "zh");
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  applyLang(lang);

  const btn = document.getElementById("lang-toggle");
  btn?.addEventListener("click", toggleLang);
});

export { getLang, setLang, toggleLang };
