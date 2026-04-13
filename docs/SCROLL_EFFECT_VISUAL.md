# Scroll Effect Visual Demo

## 🎬 Before & After Comparison

### BEFORE: Original Header

```
┌────────────────────────────────────────────────────────────┐
│ Header Background: Gradient (dark-to-transparent)         │
│ ┌──────────────────────────────────────────────────────────┤
│ │ 🍔    SKF       🌐 📊 👤 🔍                            │
│ │        Products  Services  About                         │
│ └──────────────────────────────────────────────────────────┤
└────────────────────────────────────────────────────────────┘
  ↓ Scroll - No change in header background
┌────────────────────────────────────────────────────────────┐
│ Header Background: Still gradient (same as top)            │
│ ┌──────────────────────────────────────────────────────────┤
│ │ 🍔    SKF       🌐 📊 👤 🔍                            │
│ │        Products  Services  About                         │
│ └──────────────────────────────────────────────────────────┤
└────────────────────────────────────────────────────────────┘
```

### AFTER: New Header with Scroll Effect

#### State 1: Top of Page (0px - 50px)

```
┌────────────────────────────────────────────────────────────┐
│ Header: Solid Slate-700 Background                        │
│ ┌──────────────────────────────────────────────────────────┤
│ │ 🍔    SKF       🌐 📊 👤 🔍                            │
│ │        Products  Services  About                         │
│ │        ↑                                                 │
│ │     gray-300  text                   text-white on hover│
│ └──────────────────────────────────────────────────────────┤
└────────────────────────────────────────────────────────────┘
         ↓ Scroll down
         ↓
      Scroll: 50px+
         ↓
```

#### State 2: Scrolled Down (50px+)

```
┌────────────────────────────────────────────────────────────┐
│ Header: White + Blur Background (bg-white/80 + blur)      │
│ ┌──────────────────────────────────────────────────────────┤
│ │ 🍔    SKF       🌐 📊 👤 🔍  ⬅ Shadow underneath      │
│ │        Products  Services  About                         │
│ │        ↑                                                 │
│ │     gray-600  text              text-slate-700 on hover│
│ └──────────────────────────────────────────────────────────┤
└────────────────────────────────────────────────────────────┘
    (Blur effect visible - content behind is blurred)
         ↓ Scroll up
         ↓
      Scroll: 0-49px
         ↓
   (Back to State 1)
```

---

## 🎨 Color Evolution on Scroll

### Text Color Transition Timeline

```
Not Scrolled                          Scrolled
(0px threshold)                      (50px threshold)
     ↓                                    ↓
┌──────────────────────┐          ┌──────────────────────┐
│ Logo: WHITE          │  300ms   │ Logo: SLATE-700      │
│ Nav: GRAY-300        │   →→→→   │ Nav: GRAY-600        │
│ Icons: GRAY-300      │  (smooth)│ Icons: GRAY-600      │
│ Background: SLATE-700│          │ Background: WHITE/80 │
└──────────────────────┘          └──────────────────────┘
```

### Navigation Link Colors

```
NOT SCROLLED (Slate-700 Background)
┌─────────────────────────────┐
│ Products     Services     About    │
│ gray-300 ← default              │
│ white    ← hover                │
│ white    ← active (current page)│
│ + blue underline                │
└─────────────────────────────┘

SCROLLED (White/Blur Background)
┌─────────────────────────────┐
│ Products     Services     About    │
│ gray-600 ← default              │
│ slate-700 ← hover               │
│ slate-700 ← active (current page)│
│ + blue underline                │
└─────────────────────────────┘
```

---

## 📐 Trigger & Threshold

```
Window Scroll Position
      0px      ← Page loaded (top)
      |
      | (Scroll detection OFF)
      |
     20px
      |
     30px
      |
     40px
      |
┌────50px────┐ ← THRESHOLD
│   TRIGGER  │    (isScrolled becomes TRUE)
└─┬──────────┘
  |
  | (Scroll detection ON)
  |
 100px
  |
 200px
  |
 500px ... etc
```

---

## 🎬 Animation Frame by Frame

### Scroll from 40px to 60px

```
Frame 1: scrollY = 40px
- isScrolled = false
- background = slate-700
- text = white/gray-300
- opacity = 100%

Frame 2: scrollY = 45px
- isScrolled = false (not yet triggered)
- background = slate-700
- text = white/gray-300
- opacity = 100%

Frame 3: scrollY = 50px
- isScrolled = true (TRIGGERED!)
- background = starting transition to white/80
- transition-all duration-300 starts
- opacity transitioning

Frame 4: scrollY = 55px (mid-transition ~50ms in)
- isScrolled = true
- background = white/80 + blur (transitioning)
- text color = transitioning
- opacity = ~67% done

Frame 5: scrollY = 60px (transition complete ~300ms)
- isScrolled = true
- background = white/80 backdrop-blur-md shadow-md (FINAL)
- text = gray-600/slate-700
- opacity = 100% (final state)
```

---

## 🎭 Desktop vs Mobile View

### Desktop View (≥768px)

```
At Top:
┌──────────────────────────────────────────┐
│ 🍔    SKF    [•••••••••••••••••••] 🔍  │
│        Products  Services  About          │ ← horizontal menu
└──────────────────────────────────────────┘

Scrolled:
┌──────────────────────────────────────────┐
│ 🍔    SKF    [•••••••••••••••••••] 🔍  │ (same layout)
│        Products  Services  About          │ (colors changed)
└──────────────────────────────────────────┘ (white + blur bg)
```

### Mobile View (<768px)

```
At Top:
┌──────────────────────────────────────────┐
│ 🍔    SKF    🌐 📊 👤 🔍              │
└──────────────────────────────────────────┘

Hamburger Opened:
┌──────────────────────────────────────────┐
│ ✕    SKF    🌐 📊 👤 🔍              │
│ Products                                 │ ← vertical menu
│ Services                                 │
│ About                                    │
└──────────────────────────────────────────┘

Scrolled:
┌──────────────────────────────────────────┐
│ 🍔    SKF    🌐 📊 👤 🔍              │ (colors changed)
└──────────────────────────────────────────┘ (white + blur bg)

Hamburger Opened (Scrolled):
┌──────────────────────────────────────────┐
│ ✕    SKF    🌐 📊 👤 🔍              │ (same styling)
│ Products                                 │
│ Services                                 │
│ About                                    │
└──────────────────────────────────────────┘
```

---

## 🔍 Under The Hood: Execution Flow

```
1. Page Loads
   ↓
2. useScroll Hook Initializes
   ├─ Create event listener
   ├─ isScrolled = false
   └─ Listen for window scroll
   ↓
3. Header Renders
   ├─ Check isScrolled state
   ├─ Apply styles based on state
   └─ User sees slate-700 background
   ↓
4. User Scrolls Down
   ├─ window.scrollY increases
   ├─ Event fires: handleScroll()
   ├─ Check: scrollY > 50? YES
   ├─ setIsScrolled(true)
   └─ Re-render triggered
   ↓
5. Header Re-renders
   ├─ className recalculates
   ├─ Switch to: bg-white/80 backdrop-blur-md
   ├─ transition-all duration-300 animates
   ├─ Text colors update to gray-600/slate-700
   └─ All elements smooth transition
   ↓
6. Scrolling Continues / Stops
   ├─ Header stays with scroll styles
   └─ Efficient re-renders (throttled by browser)
   ↓
7. User Scrolls Back Up
   ├─ window.scrollY decreases
   ├─ Check: scrollY > 50? NO
   ├─ setIsScrolled(false)
   └─ Re-render triggered
   ↓
8. Header Re-renders
   ├─ Switch back to: bg-slate-700
   ├─ transition-all duration-300 animates
   ├─ Text colors update to white/gray-300
   └─ Back to original state
   ↓
9. Unmount (Navigate away, page close, etc)
   ├─ useEffect cleanup runs
   ├─ removeEventListener: scroll
   └─ Memory cleaned up
```

---

## 📊 State Diagram

```
                    ┌─────────────────┐
                    │   Page Loaded   │
                    │ scrollY = 0px   │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │ NOT_SCROLLED    │
                    │ (isScrolled:    │
                    │  false)         │
                    │                 │
                    │ • bg-slate-700  │
                    │ • text-white    │
                    │ • blur: no      │
                    └────────┬────────┘
                             │
                 (Scroll ↓ 50px)
                    ┌────────▼────────┐
    ┌──────────────→│  TRANSITION    │←──────────────┐
    │               │ (300ms)         │               │
    │               │                 │               │
    │               │ Animation       │               │
    │               │ running...      │               │
    │               └────────┬────────┘               │
    │                        │                        │
    │                        │                        │
    │               ┌────────▼────────┐               │
    │               │    SCROLLED     │               │
    │               │ (isScrolled:    │               │
    │               │  true)          │               │
    │               │                 │               │
    │               │ • bg-white/80   │               │
    │               │ • text-gray-600 │               │
    │               │ • blur: md      │               │
    │               │ • shadow: md    │               │
    │               └────────┬────────┘               │
    │                        │                        │
    │        (Scroll ↑ <50px)│                        │
    │                        │                        │
    └────────────────────────┘                        │
                                    (Scroll ↓ 50px)
                                           ↑
                                           │
                                    Back to NOT_SCROLLED
```

---

## ✨ CSS Classes Reference

### Header States

```css
/* NOT SCROLLED */
.header {
  @apply fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-700;
}

/* SCROLLED */
.header {
  @apply fixed top-0 left-0 right-0 z-50 transition-all duration-300 
         bg-white/80 backdrop-blur-md shadow-md;
}
```

### Text Colors

```css
/* Logo - Not Scrolled */
.logo {
  @apply text-white;
}

/* Logo - Scrolled */
.logo {
  @apply text-slate-700;
}

/* Navigation - Not Scrolled Inactive */
.nav-item {
  @apply text-gray-300;
}

/* Navigation - Scrolled Inactive */
.nav-item {
  @apply text-gray-600;
}

/* Navigation - Scrolled Hover */
.nav-item:hover {
  @apply text-slate-700;
}
```

---

## 🎯 Performance Metrics

- **Scroll Listener**: Optimized with useCallback
- **Re-renders**: Only when crossing 50px threshold (2 re-renders max)
- **Animation Duration**: 300ms (balance between smooth & responsive)
- **Memory**: Event listener cleaned up on unmount
- **Browser Paint**: Minimal repaints due to transform-like animations

---

**Visual reference complete!** 🎬
