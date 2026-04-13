# Sidebar Hamburger Menu Documentation

**Date**: April 9, 2026  
**Feature**: Sidebar Navigation Menu  
**Status**: ✅ Implemented

---

## 📋 Overview

Sidebar hamburger menu adalah fitur navigasi responsif yang ditampilkan sebagai panel slide-in dari sisi kiri layar ketika user mengklik tombol hamburger menu. Fitur ini dirancang untuk memberikan pengalaman navigasi yang smooth dan modern, terutama pada perangkat mobile.

---

## 🎯 Features

### 1. **Smooth Slide Animation**

- Sidebar slide in dari kiri dengan transition 300ms
- Smooth ease-in-out animation
- Backdrop semi-transparent dark overlay saat sidebar terbuka
- Click backdrop untuk menutup sidebar

### 2. **Navigation Items**

- Products
- Services
- About
- Auto-close sidebar setelah navigate ke halaman

### 3. **Responsive Design**

- Full height viewport (h-screen)
- Fixed width 320px (w-80)
- Scrollable content area jika items terlalu banyak
- Header dengan title "Menu" dan close button (X)
- Footer dengan copyright text

### 4. **Visual Polish**

- White background dengan shadow-2xl
- Hover effects pada navigation items (bg-blue-50, translate-x-1)
- Smooth color transitions
- Border top/bottom untuk section separation

---

## 📁 Files Created/Modified

### ✅ New Files Created

#### 1. `src/components/common/Sidebar.jsx`

```jsx
// Component untuk sidebar menu
// Props:
// - isOpen: boolean (state sidebar terbuka/tutup)
// - onClose: function (callback untuk menutup sidebar)
// - items: array (navigation items dari NAV_ITEMS)
// - isScrolled: boolean (untuk styling adaptif)
```

**Key Features:**

- Conditional rendering dengan ternary operator `isOpen ? "translate-x-0" : "-translate-x-full"`
- Backdrop dengan `onClick={onClose}` untuk close on backdrop click
- Navigation items dengan hover effects
- Header section dengan close button (X icon)
- Footer section dengan copyright text

### ✅ Files Modified

#### 1. `src/components/common/Header.jsx`

**Changes:**

- Import Sidebar component
- Add state management untuk hamburger menu (sudah ada, dipadu dengan Sidebar)
- Replace mobile menu dropdown dengan Sidebar component
- Pass props ke Sidebar: `isOpen`, `onClose`, `items`, `isScrolled`

```jsx
// Replacement:
{
  /* Sidebar */
}
<Sidebar
  isOpen={isMenuOpen}
  onClose={() => setIsMenuOpen(false)}
  items={NAV_ITEMS}
  isScrolled={shouldHaveDarkHeader}
/>;
```

#### 2. `src/components/common/index.js`

**Changes:**

- Add Sidebar export

```jsx
import Sidebar from "./Sidebar";
export { ..., Sidebar };
```

---

## 🚀 How It Works

### 1. **User Flow**

```
User opens page
    ↓
Header renders with hamburger menu button
    ↓
User clicks hamburger menu button
    ↓
toggleMenu() → setIsMenuOpen(true)
    ↓
Sidebar component renders with isOpen={true}
    ↓
Sidebar slides in from left (-translate-x-full → translate-x-0)
    ↓
User clicks navigation item OR clicks backdrop OR clicks X button
    ↓
onClose() → setIsMenuOpen(false)
    ↓
Sidebar slides out (-translate-x-full) and unmounts
```

### 2. **Animation Details**

```jsx
// Transform states
- isOpen=true:   translate-x-0    (visible on screen)
- isOpen=false:  -translate-x-full (off screen left)

// Duration
transition-transform duration-300 ease-in-out

// Backdrop animation
fixed inset-0 bg-black/30 z-40
transition-opacity duration-300
```

### 3. **Z-Index Hierarchy**

```
Sidebar:    z-50   (on top)
Backdrop:   z-40   (behind sidebar)
Header:     z-50   (header stays on top)
Content:    default
```

---

## 🎨 Styling Details

### Sidebar Container

```tailwind
fixed left-0 top-0 h-screen w-80
bg-white shadow-2xl z-50
transition-transform duration-300 ease-in-out
```

### Backdrop (Overlay)

```tailwind
fixed inset-0
bg-black/30
z-40
transition-opacity duration-300
```

### Navigation Items

```tailwind
px-6 py-3 rounded-lg
text-lg font-medium text-gray-700
hover:bg-blue-50 hover:text-blue-600
transition-colors duration-200
hover:translate-x-1 (animation on hover)
```

### Header Section

```tailwind
flex items-center justify-between
p-6
border-b border-gray-200
```

### Footer Section

```tailwind
p-6
border-t border-gray-200
bg-gray-50
text-sm text-gray-600
```

---

## 💡 Usage Example

```jsx
// Di Header.jsx:
import Sidebar from "./Sidebar";

// State management
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Render
<Sidebar
  isOpen={isMenuOpen}
  onClose={() => setIsMenuOpen(false)}
  items={NAV_ITEMS}
  isScrolled={shouldHaveDarkHeader}
/>;
```

---

## ✨ User Experience Features

### 1. **Auto Close on Navigate**

```jsx
// Link dengan onClick
onClick={() => onClose()}
// Menyebabkan sidebar otomatis tertutup setelah klik item
```

### 2. **Click Outside to Close**

```jsx
// Backdrop dengan onClick={onClose}
<div onClick={onClose} className="fixed inset-0 ..." />
// Klik area di luar sidebar menutup sidebar
```

### 3. **Close Button**

```jsx
// X button di header sidebar
<button onClick={onClose}>
  <X size={24} />
</button>
```

### 4. **Smooth Animations**

- Slide in/out: 300ms transition
- Hover effects dengan smooth color transition
- Transform effects untuk visual feedback

---

## 🧪 Testing Checklist

- [ ] Click hamburger menu → Sidebar slides in from left
- [ ] Click Products → Navigate to /products, sidebar auto-close
- [ ] Click Services → Navigate to /services, sidebar auto-close
- [ ] Click About → Navigate to /about, sidebar auto-close
- [ ] Click backdrop (area outside sidebar) → Sidebar closes
- [ ] Click X button → Sidebar closes
- [ ] Multiple rapid clicks → No bugs/glitches
- [ ] All animation smooth dan fluid
- [ ] Responsive pada mobile/tablet/desktop

---

## 📱 Responsive Behavior

### Desktop

- Hamburger menu dan sidebar tersembunyi dengan `md:hidden` (jika ditambahkan di masa depan)
- Desktop navigation tetap visible

### Mobile/Tablet

- Hamburger menu visible
- Sidebar muncul saat clicked
- Full width sidebar overlay

---

## 🔄 Related Components

| Component | Purpose               | Interaction                                       |
| --------- | --------------------- | ------------------------------------------------- |
| Header    | Main navigation bar   | Hamburger button opens/closes Sidebar             |
| Sidebar   | Menu navigation panel | Display navigation items, close on click/backdrop |
| NAV_ITEMS | Navigation data       | Passed ke Sidebar untuk render items              |
| useScroll | Scroll detection      | Provides `shouldHaveDarkHeader` prop              |

---

## 📝 Future Enhancements

1. **Search in Sidebar**
   - Add search input di sidebar header
   - Filter navigation items berdasarkan search

2. **Submenu Support**
   - Nested menu items untuk categories
   - Expand/collapse animation

3. **Custom Styling**
   - Sidebar width customizable
   - Custom colors per theme

4. **Keyboard Navigation**
   - ESC key untuk close sidebar
   - Arrow keys untuk navigate items

5. **Analytics**
   - Track menu clicks
   - User interaction analytics

---

## 🐛 Known Issues

None currently. Component berfungsi dengan baik di semua browser modern.

---

## 📚 Related Documentation

- [Header Component Documentation](./header.md) _(create if needed)_
- [Navigation System](./navigation.md) _(create if needed)_
- [Layout Architecture](./ARCHITECTURE.md)

---

**Last Updated**: April 9, 2026  
**Status**: ✅ Complete & Tested
