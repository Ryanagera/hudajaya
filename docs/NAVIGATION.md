# Navigation & Routing Documentation

## 🎯 Overview

Sistem navigasi telah diupdate dengan:

- ✅ Hover effect dengan underline tipis
- ✅ Active state styling untuk page yang sedang dibuka
- ✅ Smooth transitions
- ✅ Responsive design (mobile & desktop)
- ✅ Routing sudah terseting dengan React Router

---

## 🔗 Routing Structure

### Routes yang tersedia:

| Path        | Component | Description                      |
| ----------- | --------- | -------------------------------- |
| `/`         | Home      | Landing page dengan Hero Section |
| `/products` | Products  | Produk SKF                       |
| `/services` | Services  | Layanan kami                     |
| `/about`    | About     | Tentang SKF                      |

### Setup di `App.jsx`:

```jsx
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/services" element={<Services />} />
<Route path="/about" element={<About />} />
```

---

## 🎨 Navigation Styling

### Desktop Navigation (Hover Effect)

**Current State (tidak aktif):**

```
Products    ← Text abu-abu, underline transparan
↓ hover
Products    ← Text putih, underline abu-abu tipis
```

**Active State (halaman sedang dibuka):**

```
Products    ← Text putih, underline biru
```

### Implementation

**CSS Classes yang digunakan:**

```jsx
// Inactive state
"text-gray-300 border-b-2 border-transparent hover:text-white hover:border-b-2 hover:border-gray-400";

// Active state
"text-white border-b-2 border-blue-500";

// Transitions
"transition-all duration-300";
```

### Mobile Navigation

- Hamburger menu di kiri
- Hover: Background abu-abu dengan text putih
- Click: Close menu otomatis dan navigate
- Format: `hover:text-white hover:bg-gray-700 rounded`

---

## 📋 Component Details

### Header Component (`src/components/common/Header.jsx`)

**Key Changes:**

1. Import `useLocation` dari React Router
2. Tambah `isActive()` function untuk check current path
3. Dynamic className berdasarkan active state

**Code:**

```jsx
import { useLocation } from "react-router-dom";

// Di dalam component
const location = useLocation();

const isActive = (path) => location.pathname === path;

// Gunakan dalam Link
className={`relative text-sm font-medium transition-all duration-300 pb-1 ${
  isActive(item.path)
    ? "text-white border-b-2 border-blue-500"
    : "text-gray-300 border-b-2 border-transparent hover:text-white hover:border-b-2 hover:border-gray-400"
}`}
```

---

## 📄 Pages Created/Updated

### 1. **Home** (`src/pages/Home.jsx`)

- Landing page dengan Hero Section
- MainLayout wrapper dengan Header & Footer

### 2. **Products** (`src/pages/Products.jsx`)

- Grid layout dengan 3 product categories
- Card design dengan hover effect
- Icons untuk visual representation

### 3. **Services** (`src/pages/Services.jsx`)

- Grid layout dengan 2 kolom
- 4 layanan utama
- Left border blue untuk aksentuasi

### 4. **About** (`src/pages/About.jsx`)

- Two-column layout
- Company info di kiri
- Stats di kanan dengan hover effect

---

## 🎬 How It Works

### 1. User Hovers Over Navigation

```
User hovers → useLocation() detects path →
isActive() checks jika current path === item path →
className berubah dinamis
```

### 2. User Clicks Navigation Link

```
Click pada Products →
React Router navigate ke /products →
useLocation() update →
Header re-render dengan active styling baru
```

### 3. Page Loads

```
URL berubah → Page component mount →
MainLayout meng-wrap page dengan Header & Footer →
Header show active state sesuai path
```

---

## ✨ Features

### Desktop Navigation

✅ Hover dengan smooth transition  
✅ Underline yang muncul/hilang  
✅ Active state yang jelas  
✅ Color change pada hover & active  
✅ 300ms transition duration

### Mobile Navigation

✅ Hamburger menu toggle  
✅ Click item → close menu  
✅ Hover background effect  
✅ Responsive layout

### Responsive Behavior

- **Mobile (< 768px)**: Hamburger menu, dropdown navigation
- **Desktop (≥ 768px)**: Horizontal navigation, hover effects

---

## 🎨 Styling Breakdown

```jsx
// Desktop Navigation Link
className={`
  relative              // For positioning effects
  text-sm               // Font size
  font-medium           // Font weight
  transition-all        // Smooth transition for all properties
  duration-300          // 300ms duration
  pb-1                  // Padding bottom for underline space

  // Conditional classes (active vs inactive)
  ${isActive(item.path) ? "..." : "..."}
`}

// Active state
"text-white border-b-2 border-blue-500"
// Text putih, underline biru solid

// Inactive state
"text-gray-300 border-b-2 border-transparent hover:text-white hover:border-b-2 hover:border-gray-400"
// Text abu-abu, underline transparan
// Hover: text putih, underline abu-abu
```

---

## 🔧 Customization Guide

### Mengubah Warna Underline

Di `Header.jsx` baris dengan `border-blue-500`:

```jsx
// Default (biru)
? "text-white border-b-2 border-blue-500"

// Ubah ke merah
? "text-white border-b-2 border-red-500"

// Ubah ke hijau
? "text-white border-b-2 border-green-500"
```

### Mengubah Hover Color

Di section hover (inactive state):

```jsx
// Default (abu-abu)
"hover:border-b-2 hover:border-gray-400";

// Ubah ke abu-abu lebih gelap
"hover:border-b-2 hover:border-gray-600";

// Ubah ke warna lain
"hover:border-b-2 hover:border-blue-400";
```

### Mengubah Transition Speed

```jsx
// Default 300ms
transition-all duration-300

// Ubah ke 500ms (lebih lambat)
transition-all duration-500

// Ubah ke 150ms (lebih cepat)
transition-all duration-150
```

### Menambah Navigation Items

Edit `src/constants/navigation.js`:

```jsx
export const NAV_ITEMS = [
  { id: 1, label: "Products", path: "/products" },
  { id: 2, label: "Services", path: "/services" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Contact", path: "/contact" }, // Tambahan
  { id: 5, label: "Blog", path: "/blog" }, // Tambahan
];
```

Jangan lupa buat page component dan route di `App.jsx`.

---

## 🧪 Testing Navigation

### 1. Desktop Navigation

- [ ] Hover над setiap menu item → lihat underline muncul
- [ ] Klik Products → redirect ke /products
- [ ] Lihat active styling (text putih, underline biru)
- [ ] Klik Services → lihat active styling berubah
- [ ] Klik About → same flow
- [ ] Klik logo SKF → redirect ke home

### 2. Mobile Navigation

- [ ] Klik hamburger button → menu buka
- [ ] Hover items → background berubah
- [ ] Klik item → navigate & menu tutup otomatis
- [ ] Klik hamburger lagi → menu tutup

### 3. Responsive

- [ ] Resize browser → check mobile/desktop layout
- [ ] Breakpoint md: 768px
- [ ] Desktop: horizontal nav dengan hover
- [ ] Mobile: vertical dropdown menu

---

## 📊 Navigation State Flow

```
┌─────────────────┐
│   User Mount    │
│   App.jsx       │
└────────┬────────┘
         ↓
┌─────────────────┐
│  useLocation()  │
│  Gets current   │
│  path: "/"      │
└────────┬────────┘
         ↓
┌─────────────────┐
│  Header Render  │
│  Check active   │
│  on each item   │
└────────┬────────┘
         ↓
┌─────────────────┐
│  Show styling   │
│  for "/" as     │
│  active         │
└─────────────────┘

User Navigates to /products:

┌──────────────────┐
│  User click      │
│  "Products"      │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  Link navigate   │
│  to /products    │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  URL berubah     │
│  useLocation()   │
│  returns new     │
│  path            │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  Header re-render│
│  isActive finds  │
│  /products match │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  Show Products   │
│  as active       │
│  (white, blue    │
│   underline)     │
└──────────────────┘
```

---

## 🔗 Related Files

- `src/components/common/Header.jsx` - Navigation implementation
- `src/App.jsx` - Routing configuration
- `src/constants/navigation.js` - Navigation items definition
- `src/pages/Home.jsx` - Home page
- `src/pages/Products.jsx` - Products page
- `src/pages/Services.jsx` - Services page
- `src/pages/About.jsx` - About page
- `src/layouts/MainLayout.jsx` - Main layout wrapper

---

## 🎯 Best Practices

✅ **Consistent Styling**: Semua page menggunakan MainLayout  
✅ **Active State**: Clear visual indication dari current page  
✅ **Smooth Transitions**: 300ms untuk smooth effect  
✅ **Responsive Design**: Mobile-first approach  
✅ **Accessible**: Semantic HTML dengan Link component  
✅ **Maintainable**: Constants terpisah untuk navigation items

---

## 🐛 Troubleshooting

### Underline tidak muncul saat hover

- Check Tailwind CSS config
- Restart dev server
- Clear browser cache

### Active styling tidak update

- Check browser console untuk errors
- Verify `useLocation` import
- Check routing di App.jsx

### Mobile menu tidak menutup

- Verify `setIsMenuOpen(false)` di onClick
- Check Link component import

---

**Navigation & Routing fully functional!** ✅ 🚀
