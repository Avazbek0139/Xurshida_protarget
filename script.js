/**
 * Targetologiya & AI Landing Page Scripts
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Ma'lumotlarni CONFIG orqali yuklash
  initDataFromConfig();

  // 2. Countdown Taymerni ishga tushirish
  initCountdownTimer();

  // 3. CTA Tugmasini sozlash
  initCtaButton();
});

/**
 * CONFIG faylidagi ma'lumotlarni sahifaga joylash
 */
function initDataFromConfig() {
  if (typeof CONFIG === "undefined") return;

  if (CONFIG.EVENT_BADGE) {
    const badgeEl = document.getElementById("eventBadge");
    if (badgeEl) {
      badgeEl.innerHTML = `<span class="pulsing-dot"></span><span>${CONFIG.EVENT_BADGE}</span>`;
    }
  }

  if (CONFIG.EVENT_TITLE_MAIN) {
    const title1 = document.getElementById("titleLine1");
    if (title1) title1.textContent = CONFIG.EVENT_TITLE_MAIN;
  }

  if (CONFIG.EVENT_TITLE_HIGHLIGHT) {
    const title2 = document.getElementById("titleLine2");
    if (title2) title2.textContent = CONFIG.EVENT_TITLE_HIGHLIGHT;
  }

  if (CONFIG.EVENT_DATE_TEXT) {
    const dateEl = document.getElementById("eventDateText");
    if (dateEl) dateEl.textContent = CONFIG.EVENT_DATE_TEXT;
  }

  if (CONFIG.EVENT_TIME_TEXT) {
    const timeEl = document.getElementById("eventTimeText");
    if (timeEl) timeEl.textContent = CONFIG.EVENT_TIME_TEXT;
  }

  if (CONFIG.SPEAKER) {
    const speakerName = document.getElementById("speakerName");
    const speakerRole = document.getElementById("speakerRole");
    const speakerImg = document.getElementById("speakerImg");

    if (speakerName && CONFIG.SPEAKER.name) speakerName.textContent = CONFIG.SPEAKER.name;
    if (speakerRole && CONFIG.SPEAKER.role) speakerRole.textContent = CONFIG.SPEAKER.role;
    if (speakerImg && CONFIG.SPEAKER.image) speakerImg.src = CONFIG.SPEAKER.image;
  }

  if (CONFIG.CTA_BUTTON_TEXT) {
    const ctaText = document.getElementById("ctaBtnText");
    if (ctaText) ctaText.textContent = CONFIG.CTA_BUTTON_TEXT;
  }

  if (CONFIG.CTA_NOTE) {
    const ctaNote = document.getElementById("ctaNote");
    if (ctaNote) ctaNote.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${CONFIG.CTA_NOTE}`;
  }
}

/**
 * Jonli Countdown Taymer
 */
function initCountdownTimer() {
  let targetDate;
  if (typeof CONFIG !== "undefined" && CONFIG.TARGET_DATE) {
    targetDate = new Date(CONFIG.TARGET_DATE).getTime();
  } else {
    const now = new Date();
    targetDate = new Date(now.getFullYear(), 8, 25, 17, 0, 0).getTime();
  }

  const daysEl = document.getElementById("cdDays");
  const hoursEl = document.getElementById("cdHours");
  const minutesEl = document.getElementById("cdMinutes");
  const secondsEl = document.getElementById("cdSeconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/**
 * CTA Tugma bosilganda Telegram kanalga yo'naltirish
 */
function initCtaButton() {
  const ctaBtn = document.getElementById("ctaButton");
  if (!ctaBtn) return;

  const targetUrl = (typeof CONFIG !== "undefined" && CONFIG.REGISTRATION_URL) 
    ? CONFIG.REGISTRATION_URL 
    : "https://t.me/Xurshida_Sapparova_protarget";

  ctaBtn.setAttribute("href", targetUrl);

  ctaBtn.addEventListener("click", () => {
    ctaBtn.style.transform = "scale(0.96)";
    setTimeout(() => {
      ctaBtn.style.transform = "";
    }, 150);
  });
}
