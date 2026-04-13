# Scroll Effect & Header Styling Documentation

## 🎯 Overview

Header sekarang memiliki fitur:

- ✅ Solid background slate-700 (tanpa gradient)
- ✅ Scroll detection dengan threshold 50px
- ✅ Background blur effect saat scroll
- ✅ Dynamic text color berdasarkan scroll state
- ✅ Smooth transitions (300ms)
- ✅ Navigation layout sejajar horizontal

---

## 🎬 How It Works

### State 1: Top of Page (Not Scrolled)

```
Desktop View:
┌──────────────────────────────────────────┐
│ 🍔    SKF    🌐 📊 👤 🔍               │
│      Products  Services  About           │  ← gray text
│                                          │  ← slate-700 solid background
└──────────────────────────────────────────┘
         ↓
      [Website Content - Hero Section]
```

**Styling:**

- Background: `bg-slate-700` (solid dark blue-gray)
- Text: `text-white` untuk logo
- Navigation: `text-gray-300` inactive, `text-white` hover
- Icons: `text-gray-300` yang bisa hover jadi white

### State 2: Scroll Down (50px+)

```
Desktop View:
┌──────────────────────────────────────────┐
│ 🍔    SKF    🌐 📊 👤 🔍               │
│      Products  Services  About           │  ← dark gray text
│                                          │  ← white + blur background
└──────────────────────────────────────────┘
         ↓
      [Scrolled Website Content]
```

**Styling:**

- Background: `bg-white/80 backdrop-blur-md shadow-md` (white + blur + shadow)
- Text: `text-slate-700` untuk logo
- Navigation: `text-gray-600` inactive, `text-slate-700` hover
- Icons: `text-gray-600` yang bisa hover jadi slate-700
- Smooth transition: 300ms

---

## 🔧 Technical Implementation

### 1. **useScroll Hook** - `src/hooks/useScroll.js`

```javascript
import { useState, useCallback, useEffect } from "react";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50); // 50px threshold
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isScrolled, handleScroll };
};
```

**Key Points:**

- `window.scrollY > 50` = trigger saat scroll 50px ke bawah
- Event listener di-cleanup saat component unmount
- useCallback untuk prevent re-render

### 2. **Header Component** - `src/components/common/Header.jsx`

```javascript
import { useScroll } from "@/hooks";

export default function Header() {
  const { isScrolled } = useScroll();

  return (
    <header
      className={`... transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-slate-700"
      }`}
    >
      {/* Dynamic colored elements */}
      <button
        className={`... ${
          isScrolled
            ? "text-gray-600 hover:text-slate-700"
            : "text-gray-300 hover:text-white"
        }`}
      ></button>
    </header>
  );
}
```

---

## 🎨 Color Palette

### State: Not Scrolled (Slate-700 Background)

| Element               | Color                        |
| --------------------- | ---------------------------- |
| Background            | `bg-slate-700`               |
| Logo                  | `text-white`                 |
| Navigation (inactive) | `text-gray-300`              |
| Navigation (hover)    | `text-white`                 |
| Navigation (active)   | `text-white border-blue-500` |
| Icons                 | `text-gray-300`              |
| Icons (hover)         | `text-white`                 |

### State: Scrolled (White/Blur Background)

| Element               | Color                            |
| --------------------- | -------------------------------- |
| Background            | `bg-white/80 backdrop-blur-md`   |
| Logo                  | `text-slate-700`                 |
| Navigation (inactive) | `text-gray-600`                  |
| Navigation (hover)    | `text-slate-700`                 |
| Navigation (active)   | `text-slate-700 border-blue-500` |
| Icons                 | `text-gray-600`                  |
| Icons (hover)         | `text-slate-700`                 |

---

## 📱 Responsive Design

### Desktop (≥768px)

- Navigation items horizontal sejajar
- Hover effect dengan underline
- Full width background transition
- Blur + shadow saat scroll

### Mobile (<768px)

- Hamburger menu toggle
- Vertical dropdown menu
- Same scroll effect
- Mobile-optimized colors

---

## 🎬 Animation & Transition

### Background Transition

```
Not Scrolled: bg-slate-700
   ↓
   (scroll down 50px)
   ↓
Scrolled: bg-white/80 backdrop-blur-md shadow-md

Duration: 300ms (transition-all duration-300)
Timing: Linear
```

### Text Color Transition

```
Logo: white → slate-700 (300ms)
Nav Text: gray-300 → gray-600 (300ms)
Icons: gray-300 → gray-600 (300ms)
```

### Blur Effect Breakdown

```
bg-white/80           ← white background dengan 80% opacity
backdrop-blur-md      ← medium blur effect untuk content di belakang
shadow-md             ← medium drop shadow untuk depth
```

---

## 🧪 Testing Checklist

- [ ] Load halaman → header slate-700 solid
- [ ] Logo text putih on slate background
- [ ] Navigation text abu-abu on slate background
- [ ] Hover navigation → text jadi putih
- [ ] Scroll down 50px → background berubah putih blend
- [ ] Scroll saat putih → blur effect terlihat
- [ ] Scroll naik kembali ke atas → background jadi slate kembali
- [ ] Mobile: Hamburger menu berfungsi with scroll styles
- [ ] Responsive: Resize browser → layout adjust

---

## 🎯 Features Breakdown

### 1. Solid Background (No Gradient)

```
BEFORE: bg-gradient-to-b from-gray-800 to-transparent
AFTER:  bg-slate-700  (solid)
```

### 2. Scroll Detection

- Threshold: 50px dari top
- Trigger: `window.scrollY > 50`
- Update otomatis saat scroll

### 3. Blur Effect

- Menggunakan CSS backdrop-filter
- `backdrop-blur-md` untuk medium blur
- Smooth transition 300ms

### 4. Dynamic Colors

- Semua elements berubah warna based on `isScrolled` state
- Smooth transition untuk semua color changes
- Active state tetap blue underline

### 5. Navigation Layout

- Horizontal sejajar di desktop
- Same custom underline hover effect
- Responsive hamburger di mobile

---

## 🛠️ Customization Guide

### Mengubah Scroll Threshold

Di `src/hooks/useScroll.js`:

```javascript
// Default 50px
setIsScrolled(window.scrollY > 50);

// Ubah ke 100px
setIsScrolled(window.scrollY > 100);

// Ubah ke 0px (instant)
setIsScrolled(window.scrollY > 0);
```

### Mengubah Background Blur

Di `src/components/common/Header.jsx`:

```javascript
// Current
"bg-white/80 backdrop-blur-md shadow-md";

// Lebih blur
"bg-white/80 backdrop-blur-lg shadow-md";

// Lebih transparan
"bg-white/60 backdrop-blur-md shadow-md";

// Lebih solid
"bg-white/95 backdrop-blur-sm shadow-md";
```

### Mengubah Transition Speed

Di Header (semua className dengan transition):

```jsx
// Current
transition-all duration-300

// Lebih cepat
transition-all duration-200

// Lebih lambat
transition-all duration-500
```

### Mengubah Warna Scroll Background

```javascript
// Current
isScrolled ? "bg-white/80 ..." : "bg-slate-700";

// Tertarik ke pilihan lain:
isScrolled ? "bg-gray-50/80 ..." : "bg-slate-700"; // Lebih abu
isScrolled ? "bg-blue-50/80 ..." : "bg-slate-700"; // Tint blue
```

---

## 🎬 Browser Compatibility

- ✅ Chrome/Edge: Full support (backdrop-filter)
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ⚠️ IE 11: No support (graceful fallback)

---

## 📊 Performance Note

- Event listener: Added di useEffect, cleaned up pada unmount
- useCallback: Prevent unnecessary re-renders
- Transition: 300ms adalah standar UI (smooth tapi responsive)
- Threshold: 50px prevents excessive state changes

---

## 🔗 Related Files

- `src/hooks/useScroll.js` - Scroll detection hook
- `src/components/common/Header.jsx` - Header with scroll effect
- `src/constants/navigation.js` - Navigation items
- `src/App.jsx` - App routing

---

## 🎉 Features Complete

✅ Solid slate-700 background (no gradient)
✅ Scroll detection (50px threshold)
✅ White + blur background on scroll
✅ Dynamic text colors
✅ 300ms smooth transitions
✅ Navigation sejajar horizontal
✅ Responsive mobile/desktop
✅ Active state styling maintained

---

**Scroll effect fully implemented!** 🚀
