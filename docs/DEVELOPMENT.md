# Development Guide

## Memulai Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

```bash
cp .env.example .env.local
# Edit .env.local sesuai kebutuhan
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173/`

---

## Project Structure Quick Reference

```
src/
├── components/          # UI Components
│   ├── common/         # Reusable components (Button, Header, etc)
│   └── hero/           # Hero-specific components (if needed)
├── sections/           # Page sections/features
├── pages/              # Page components
├── layouts/            # Layout wrappers
├── hooks/              # Custom React hooks
├── services/           # API & business logic
├── context/            # State management
├── constants/          # Configuration & constants
├── types/              # TypeScript types
├── utils/              # Helper functions
├── data/               # Static JSON data
└── assets/             # Images, icons, etc
```

---

## Common Development Tasks

### Membuat Komponen Baru

```bash
# 1. Buat file komponen
touch src/components/common/MyComponent.jsx

# 2. Buat file test (optional)
touch src/components/common/MyComponent.test.jsx

# 3. Export di index.js
# Edit src/components/common/index.js

# 4. Gunakan di halaman
import { MyComponent } from "@/components/common";
```

### Membuat Halaman Baru

```bash
# 1. Buat file page
touch src/pages/MyPage.jsx

# 2. Add route di App.jsx
# import MyPage from "./pages/MyPage";
# <Route path="/mypage" element={<MyPage />} />

# 3. Add link di navigation
# Edit src/constants/navigation.js
```

### Membuat Custom Hook

```bash
# 1. Buat file hook
touch src/hooks/useMyHook.js

# 2. Export di src/hooks/index.js
# export { default as useMyHook } from "./useMyHook";

# 3. Gunakan di komponen
# import { useMyHook } from "@/hooks";
```

### Menambah Constants

```bash
# Edit src/constants/index.js
# Atau buat file baru src/constants/myConstants.js

# Export di src/constants/index.js
export * from "./myConstants";
```

---

## Available Scripts

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint -- --fix
```

---

## Styling Guidelines

### Menggunakan Tailwind CSS

Project menggunakan Tailwind CSS 4. Semua styling menggunakan utility classes.

```jsx
// ✅ Good
<div className="flex items-center justify-between p-4 bg-blue-500 rounded-lg">
  <h1 className="text-xl font-bold text-white">Title</h1>
</div>

// ❌ Avoid
<div style={{display: 'flex', ...}}>
  <h1 style={{fontSize: '20px', ...}}>Title</h1>
</div>
```

### Color & Responsive

```jsx
// Responsive design
<div className="w-full md:w-1/2 lg:w-1/3">
  <p className="text-sm md:text-base lg:text-lg">Responsive text</p>
</div>

// Color variants
<button className="bg-blue-600 hover:bg-blue-700 text-white">
  Click me
</button>
```

---

## State Management

### Context API (untuk state sederhana)

```jsx
// Gunakan existing HeaderContext
import { HeaderProvider, useHeader } from "@/context";

export default function MyComponent() {
  const headerData = useHeader();
  return <div>{headerData.title}</div>;
}
```

### Hooks (untuk local state)

```jsx
import { useState, useCallback } from "react";
import { useMenu } from "@/hooks";

export default function MyComponent() {
  const { isMenuOpen, toggleMenu } = useMenu();
  const [count, setCount] = useState(0);

  return (
    <button onClick={toggleMenu}>Menu: {isMenuOpen ? "Open" : "Closed"}</button>
  );
}
```

---

## API Integration

### Menggunakan API Service

```jsx
import { apiService } from "@/services";

export default function MyComponent() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const result = await apiService.fetchData("/endpoint");
      setData(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ... component code
}
```

### Environment Variables

```jsx
// Gunakan import.meta.env
const apiUrl = import.meta.env.VITE_API_URL;
const apiTimeout = import.meta.env.VITE_API_TIMEOUT;

// Hanya variables yang diawali VITE_ yang accessible di client
```

---

## Debugging Tips

### React DevTools

Gunakan browser extension untuk debug React components.

```
1. Install React DevTools dari Chrome Web Store
2. Buka DevTools (F12)
3. Tab "Components" untuk inspect React tree
```

### Vite DevTools

```
1. Buka DevTools (F12)
2. Console untuk error/logs
3. Network untuk API calls monitoring
```

### Logging

```jsx
// Gunakan console untuk debugging
console.log("Value:", value);
console.error("Error:", error);
console.table([data, data2]); // Format array sebagai table
```

---

## Browser Compatibility

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android

---

## Performance Tips

### Code Splitting

```jsx
import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Memoization

```jsx
import { memo } from "react";

// Prevent unnecessary re-renders
const MyComponent = memo(function MyComponent({ name }) {
  return <div>{name}</div>;
});

export default MyComponent;
```

### Image Optimization

```jsx
// Gunakan responsive images
<img
  src="/image.jpg"
  srcSet="/image-sm.jpg 640w, /image-lg.jpg 1024w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Description"
  className="w-full h-auto"
/>
```

---

## Build & Deploy

### Build untuk Production

```bash
npm run build
```

Output akan di-generate di folder `dist/`.

### Deploy ke Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy ke Netlify

```bash
# Build terlebih dahulu
npm run build

# Deploy folder dist/ ke Netlify
```

---

## Common Issues & Solutions

### Issue: Module not found

```
Solution: Pastikan import path benar dan file ada di lokasi yang tepat
```

### Issue: Tailwind classes tidak muncul

```
Solution:
1. Restart dev server
2. Cek tailwind.config.js file paths
3. Clear browser cache
```

### Issue: API calls tidak bekerja

```
Solution:
1. Cek .env variables
2. Check CORS settings
3. Lihat Network tab di DevTools
```

---

## Best Practices Checklist

- ✅ Gunakan functional components dengan hooks
- ✅ Naming convention: camelCase untuk variables, PascalCase untuk components
- ✅ Kompon terpisah dari logic menggunakan custom hooks
- ✅ Export components menggunakan barrel files
- ✅ Gunakan constants untuk values yang berulang
- ✅ Implement error boundaries untuk error handling
- ✅ Test komponen sebelum merge
- ✅ Keep components reusable dan generic

---

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

---

## Getting Help

- Check ARCHITECTURE.md untuk folder structure
- Check COMPONENTS.md untuk component docs
- Check project README.md untuk setup instructions
- Use browser DevTools untuk debugging

Happy coding! 🚀
