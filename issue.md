# Code Review & Improvements

Berdasarkan review kode secara keseluruhan, aplikasi ini sudah memiliki struktur yang cukup baik (menggunakan Vite, React 19, dan Tailwind v4). Namun, terdapat beberapa area yang dapat di-improve untuk meningkatkan performa, aksesibilitas (a11y), dan konsistensi kode. 

Berikut adalah temuan dan saran perbaikan yang dikelompokkan ke dalam beberapa kategori:

## 1. Arsitektur & Routing (Layouting Pattern)
**Issue:** 
Komponen `MainLayout` saat ini di-import dan membungkus secara manual di setiap halaman (`Home.jsx`, `About.jsx`, `Products.jsx`, `Services.jsx`).
**Dampak:** 
Setiap kali terjadi perpindahan route klien (client-side routing), komponen `Header` dan `Footer` akan mengalami proses *unmount* dan *remount*. Hal ini menyebabkan state pada `Header` (seperti scroll state, isMenuOpen, dsb) dapat terrestart dan menambah beban rendering yang tidak perlu.
**Solusi:**
Gunakan pola **Nested Routes** dari React Router (`<Outlet />`) pada level `App.jsx` atau `main.jsx`.
```jsx
// Di dalam App.jsx
import { Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

function LayoutWrapper() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

// Routes
<Routes>
  <Route element={<LayoutWrapper />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/services" element={<Services />} />
  </Route>
</Routes>
```
Lalu Hapus import dan tag `<MainLayout>` dari masing-masing komponen halaman.

## 2. Performa (Code Splitting / Lazy Loading)
**Issue:** 
Semua komponen halaman di-import secara langsung (eager load) di `App.jsx`.
**Dampak:** 
Ukuran *bundle* awal (initial load) akan membengkak karena semua halaman dimuat di awal secara bersamaan, bahkan untuk halaman yang belum atau mungkin tidak akan dikunjungi user.
**Solusi:**
Gunakan `React.lazy` dan `Suspense` untuk memecah *bundle* per halaman.
```jsx
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
// Terapkan pada Routes dengan komponen Loading fallback seperti <LoadingPage />
```

## 3. Typo Pada Utility Class Tailwind
**Issue:** 
Ditemukan kesalahan pengetikan utility class pada `src/pages/Services.jsx`.
**File:** `src/pages/Services.jsx` (Baris 7)
```jsx
<section className="mt-24 py-20 bg-gradien-to-b from-gray-50 to-white">
```
Kata `bg-gradien-to-b` typo dan tidak dikenali oleh Tailwind.
**Solusi:**
Ubah menjadi `bg-gradient-to-b`. (Serta pastikan konsistensinya bila Anda mulai menggunakan utility `bg-linear-to-*` yang baru di Tailwind v4, seperti yang ada di halaman `About.jsx`).

## 4. Konfigurasi CSS Global (Anti-pattern Tailwind)
**Issue:** 
Pada `src/index.css` (Baris 5), font global diatur menggunakan selektor asterisk `*`.
```css
* {
  font-family: "Roboto", sans-serif;
}
```
**Dampak:** 
Menggunakan selektor global `*` untuk mendefinisikan *font-family* adalah antipattern dalam Tailwind, karena dapat menyebabkan kelas utility *font-family* Tailwind di tingkat spesifik tertimpa dan gagal berjalan. Selain itu berdampak buruk pada performa rendering browser.
**Solusi:**
Implementasikan font family tersebut ke dalam tag `body` saja atau definisikan *theme* CSS variable Tailwind v4.
```css
body {
  font-family: "Roboto", sans-serif;
}
```

## 5. Aksesibilitas (Accessibility / A11Y) pada Sidebar & Header
**Issue:** 
Ketika fitur menu hamburger sidebar (`Sidebar.jsx`) atau `SearchSidebar` terbuka, *Focus Lock* belum diimplementasikan.
**Dampak:** 
User yang mengandalkan keyboard navigasi (Tombol `Tab`) tetap bisa menavigasi ke elemen-elemen di bawah *overlay* modal/sidebar. Hal ini buruk dari kacamata aksesibilitas (WAI-ARIA).
**Solusi:**
Implementasikan *Focus Trap* (misalnya menggunakan *library* kecil seperti `focus-trap-react` atau membuat *custom hook*) di `Sidebar.jsx` saat `isOpen` bernilai `true`.

## 6. Scroll Restoration pada React Router
**Issue:** 
Pada `App.jsx`, terdapat implementasi scroll manual ke posisi (0,0) menggunakan `useEffect`.
**Solusi:** 
Karena Anda sudah menggunakan `react-router-dom` v6/v7 terbaru, disarankan menggunakan komponen bawaan `<ScrollRestoration />` sebagai best practice dibanding *Window hacking*. Komponen ini menangani restorasi scroll yang lebih canggih (seperti saat tombol *Back* pada browser ditekan).
