# Quick Reference Guide

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
# http://localhost:5173/
```

---

## 📂 File Locations

| Item       | Location                 |
| ---------- | ------------------------ |
| Components | `src/components/common/` |
| Sections   | `src/sections/`          |
| Pages      | `src/pages/`             |
| Hooks      | `src/hooks/`             |
| Constants  | `src/constants/`         |
| Utilities  | `src/utils/`             |
| Services   | `src/services/`          |
| Styles     | `src/index.css`          |
| Routing    | `src/App.jsx`            |

---

## 💻 Common Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check linting errors
npm run lint -- --fix # Fix linting errors
```

---

## 🎨 Components Quick Use

### Button

```jsx
import { Button } from "@/components/common";

<Button variant="primary" size="md">Click</Button>
<Button variant="secondary" size="lg">Secondary</Button>
<Button variant="outline" disabled>Disabled</Button>
```

### Container

```jsx
import { Container } from "@/components/common";

<Container size="lg">
  <div>Your content</div>
</Container>;
```

### Card

```jsx
import { Card } from "@/components/common";

<Card hoverable shadow="lg">
  Content here
</Card>;
```

### Hero Section

```jsx
import { HeroSection } from "@/sections";

<HeroSection />;
```

### Main Layout

```jsx
import MainLayout from "@/layouts/MainLayout";

<MainLayout>
  <YourContent />
</MainLayout>;
```

---

## 🪝 Custom Hooks

```jsx
import { useMenu, useScroll } from "@/hooks";

// useMenu
const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

// useScroll
const { isScrolled, handleScroll } = useScroll();
```

---

## 📦 Importing

### From Components

```jsx
import { Button, Header, Footer, Container, Card } from "@/components/common";
```

### From Sections

```jsx
import { HeroSection } from "@/sections";
```

### From Hooks

```jsx
import { useMenu, useScroll } from "@/hooks";
```

### From Constants

```jsx
import { NAV_ITEMS, HERO_CONTENT } from "@/constants";
```

### From Utils

```jsx
import { cn, debounce, throttle } from "@/utils";
```

---

## 📝 Creating New Components

```bash
# 1. Create component file
touch src/components/common/MyComponent.jsx

# 2. Write component
# Edit src/components/common/MyComponent.jsx

# 3. Export in barrel file
# Edit src/components/common/index.js
# export { default as MyComponent } from "./MyComponent";

# 4. Use in pages
import { MyComponent } from "@/components/common";
```

---

## 📄 Creating New Pages

```bash
# 1. Create page file
touch src/pages/MyPage.jsx

# 2. Add route in App.jsx
# import MyPage from "./pages/MyPage";
# <Route path="/mypage" element={<MyPage />} />

# 3. Update navigation
# Edit src/constants/navigation.js
# Add navigation item
```

---

## 🎯 Constants Reference

### Navigation Items

```js
import { NAV_ITEMS } from "@/constants";
// [{ id, label, path }, ...]
```

### Hero Content

```js
import { HERO_CONTENT } from "@/constants";
// { title, description, ctaButton, backgroundImage }
```

---

## 🌐 Environment Variables

File: `.env.local`

```
VITE_API_URL=https://api.example.com
VITE_API_TIMEOUT=5000
```

Usage in code:

```js
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🎨 Tailwind Classes Quick Reference

```jsx
// Colors
class="bg-blue-600 text-white"

// Responsive
class="w-full md:w-1/2 lg:w-1/3"

// Spacing
class="p-4 m-2 gap-3"

// Flexbox
class="flex items-center justify-between"

// Grid
class="grid grid-cols-1 md:grid-cols-3 gap-4"

// Hover & States
class="hover:bg-blue-700 active:bg-blue-800"

// Rounded
class="rounded-lg"

// Shadow
class="shadow-md hover:shadow-lg"
```

---

## 🔍 Finding Things

| What       | Where                         | Command                              |
| ---------- | ----------------------------- | ------------------------------------ |
| Components | `src/components/common/*.jsx` | `grep -r "function" src/components/` |
| Sections   | `src/sections/*.jsx`          | `ls src/sections/`                   |
| Hooks      | `src/hooks/*.js`              | `ls src/hooks/`                      |
| Constants  | `src/constants/*.js`          | `cat src/constants/index.js`         |
| Styles     | `src/index.css`               | `cat src/index.css`                  |

---

## 📚 Full Documentation

- **README.md** - Project overview
- **ARCHITECTURE.md** - Folder structure & explanation
- **COMPONENTS.md** - Component docs with examples
- **DEVELOPMENT.md** - Development guide & best practices
- **IMPLEMENTATION_SUMMARY.md** - What was done

---

## 🐛 Common Issues

| Issue                   | Solution                     |
| ----------------------- | ---------------------------- |
| Port in use             | `npm run dev -- --port 3000` |
| Tailwind not working    | Restart server, clear cache  |
| Import error            | Check file path, file exists |
| Component not rendering | Check JSX syntax, props      |
| Build fails             | Check console for errors     |

---

## ✅ Development Checklist

- [ ] Read README.md for overview
- [ ] Read ARCHITECTURE.md for structure
- [ ] Read COMPONENTS.md for component docs
- [ ] Read DEVELOPMENT.md for development guide
- [ ] Install dependencies (`npm install`)
- [ ] Start dev server (`npm run dev`)
- [ ] Test homepage in browser
- [ ] Make changes & test
- [ ] Check for linting errors (`npm run lint`)

---

## 💬 Tips & Tricks

1. **Use Ctrl+` (backtick) to open terminal in VS Code**
2. **Use `npm run lint -- --fix` untuk auto-fix linting issues**
3. **Use React DevTools extension untuk debug**
4. **Use Tailwind CSS IntelliSense extension untuk autocomplete**
5. **Check Network tab untuk monitor API calls**

---

## 🎯 Next Steps

1. Read full documentation files
2. Customize colors & content
3. Create pages untuk About, Products, Services
4. Add more sections
5. Connect ke API backend
6. Deploy to production

---

**Bookmark this page for quick reference! 📌**
