# Hero Section & Header Refactor

## 🎬 Changes Made

### 1. Hero Section - Video Background

**BEFORE:**

```jsx
// Background image with gradient overlay
<div
  style={{
    backgroundImage: `linear-gradient(...), url('${HERO_CONTENT.backgroundImage}')`,
  }}
/>
```

**AFTER:**

```jsx
// HTML5 video element
<video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay={isVideoPlaying}
  muted
  loop
  playsInline
>
  <source src="/clip1.mp4" type="video/mp4" />
</video>;

{
  /* Video Overlay */
}
<div className="absolute inset-0 w-full h-full bg-black/40" />;
```

**Features:**
✅ Full-screen video background  
✅ Auto-play, muted, looping  
✅ Black 40% overlay for text contrast  
✅ Responsive (object-cover)

---

### 2. Header - Logo Image Instead of Text

**BEFORE:**

```jsx
<Link to="/" className="text-2xl font-bold tracking-wider ...">
  {LOGO_TEXT} {/* "SKF" */}
</Link>
```

**AFTER:**

```jsx
<Link to="/" className="h-12 flex items-center ...">
  <img
    src="/logohj1.png"
    alt="Huda Jaya Logo"
    className={`h-full w-auto ... ${
      isScrolled
        ? "filter brightness(0)"
        : "filter brightness(200%) drop-shadow-lg"
    }`}
  />
</Link>
```

**Features:**
✅ Image-based logo (logohj1.png)  
✅ Full white when not scrolled  
✅ Dark (brightness-0) when scrolled  
✅ Drop shadow effect on hero  
✅ Height: 48px (h-12)

---

### 3. Header - Transparent Background (No Scroll)

**BEFORE:**

```jsx
className={`... ${
  isScrolled ? "bg-white/80 ..." : "bg-slate-700"
}`}
```

**AFTER:**

```jsx
className={`... ${
  isScrolled ? "bg-white/80 ..." : "bg-transparent"
}`}
```

**Result:**

- Not scrolled: Transparent header with white text
- Scrolled: White/blur header with dark text
- Matches SKF website style

---

### 4. Navigation Colors - White on Hero

**Not Scrolled (Transparent Header):**

```
Hamburger: border-white text-white
Nav Items: text-white/80 (inactive), text-white (hover)
Icons: text-white hover:text-white/80
Underline: border-white/50
```

**Scrolled (White Header):**

```
Hamburger: border-gray-400 text-gray-600
Nav Items: text-gray-600 (inactive), text-slate-700 (hover)
Icons: text-gray-600 hover:text-slate-700
Underline: border-gray-400
```

---

### 5. Mobile Menu - Transparent Style

**Not Scrolled:**

```jsx
className = "border-white/20 bg-black/20 backdrop-blur-sm";
```

**Result:**

- Semi-transparent black background
- Blur effect
- White text

**Scrolled:**

```jsx
className = "border-gray-300 bg-gray-50";
```

---

## 📁 Assets Required

```
src/assets/
├── clip1.mp4      ✅ Video background
├── logohj1.png    ✅ Logo image
├── hero.png
├── logohj.png
├── react.svg
└── vite.svg
```

---

## 🎨 Visual Result

### Top of Page (Hero Section)

```
┌────────────────────────────────────────┐
│ 🍔 Products Services About [Logo] 🔍  │ ← transparent
│                                        │
│ [Video Background Playing]             │
│                                        │
│              TOO GOOD TO BE REPLACED   │
│              [Description]             │
│              [CTA Button]              │
│                                        │
└────────────────────────────────────────┘
```

### Scrolled Down

```
┌────────────────────────────────────────┐
│ 🍔 Products Services About [Logo] 🔍  │ ← white + blur
│                                        │
│ [Scrolled Content]                     │
│                                        │
└────────────────────────────────────────┘
```

---

## ✨ Features

✅ Video background dengan overlay  
✅ Logo image (full white on hero)  
✅ Transparent header matching SKF style  
✅ White navigation on hero  
✅ Dark navigation when scrolled  
✅ Responsive mobile menu  
✅ Smooth transitions (300ms)

---

## 🧪 Testing Checklist

- [ ] Video plays on page load
- [ ] Video loops continuously
- [ ] Logo image visible and white
- [ ] Navigation text white on hero
- [ ] Scroll down → header turns white + blur
- [ ] Logo changes color based on scroll
- [ ] Navigation colors update on scroll
- [ ] Mobile hamburger menu works
- [ ] Mobile menu styling correct
- [ ] Icons responsive
- [ ] All transitions smooth (300ms)

---

**Refactor complete!** 🚀
