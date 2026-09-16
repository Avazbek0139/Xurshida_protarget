# 🎯 Target va Sun'iy Intellekt Masterklass Landing Page

Ushbu veb-sayt taqdim etilgan eskiz va spiker rasmi asosida zamonaviy, to'liq moslashuvchan (responsive) va yuqori konversiyali qilib tayyorlandi.

---

## 📁 Loyiha Tuzilishi

- **`index.html`** - Saytning asosiy strukturasi va matnlari
- **`style.css`** - Zamonaviy targetologiya/marketing uslubidagi dizayn, animatsiyalar va neon effektlar
- **`script.js`** - Jonli hisoblagich (countdown timer) va tugma hodisalari
- **`config.js`** - Sayt sozlamalari (havola, ism, sana, vaqtni oson o'zgartirish fayli)
- **`assets/xurshida.png`** - Spiker surati

---

## ⚙️ Havolani (URL) Qanday O'zgartirish Mumkin?

`config.js` faylini oching va `REGISTRATION_URL` qiymatini o'zingizning havolangizga (masalan, Telegram bot, kanal yoki Zoom) almashtiring:

```javascript
const CONFIG = {
  // Tugma bosilganda o'tiladigan havola:
  REGISTRATION_URL: "https://t.me/SIZNING_BOTINGIZ_YOKI_KANALINGIZ",
  ...
};
```

---

## 🚀 Saytni Ishga Tushirish

1. `index.html` faylini ikki marta bosib istalgan brauzerda (Chrome, Edge, Safari va h.k.) oching.
2. Yoki VS Code / Live Server orqali ochishingiz mumkin.
