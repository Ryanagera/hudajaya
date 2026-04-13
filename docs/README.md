# Hudajaya - Industrial Engineering Solution Company

Aplikasi React modern untuk website korporat Hudajaya dengan layered architecture yang terstruktur.

## 🚀 Fitur Utama

✅ **Responsive Hero Section** - Sesuai dengan design SKF  
✅ **Layered Architecture** - Struktur folder yang terorganisir dan scalable  
✅ **Reusable Components** - Button, Header, Footer, Card, Container  
✅ **Custom Hooks** - useMenu, useScroll untuk reusability  
✅ **Tailwind CSS 4** - Modern styling dengan utility-first approach  
✅ **React Router** - Navigation antar halaman  
✅ **Context API** - State management sederhana  
✅ **Development Guide** - Dokumentasi lengkap untuk development

---

## 🛠️ Tech Stack

- **React 19.2** - UI Library
- **Vite 8** - Build tool & dev server
- **Tailwind CSS 4** - Styling
- **React Router 7** - Routing
- **React Hot Toast 2** - Toast notifications
- **Lucide React** - Icons

---

## 📦 Installation & Setup

### 1. Clone Repository

```bash
git clone <repo-url>
cd hudajaya
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

```bash
cp .env.example .env.local
```

### 4. Start Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173/`

---

## 📂 Folder Structure (Layered Architecture)

```
src/
├── components/
│   └── common/               # Reusable UI Components
│       ├── Button.jsx        # Customizable button
│       ├── Header.jsx        # Navigation header
│       ├── Footer.jsx        # Footer
│       ├── Container.jsx     # Layout wrapper
│       ├── Card.jsx          # Card component
│       └── index.js
│
├── sections/                 # Page Sections
│   ├── HeroSection.jsx       # Hero section
│   └── index.js
│
├── layouts/                  # Layout Templates
│   └── MainLayout.jsx        # Main layout wrapper
│
├── pages/                    # Page Components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   ├── Services.jsx
│   └── ...
│
├── hooks/                    # Custom React Hooks
│   ├── useMenu.js
│   ├── useScroll.js
│   └── index.js
│
├── services/                 # API & Business Logic
│   ├── api.js
│   └── index.js
│
├── context/                  # State Management
│   ├── HeaderContext.js
│   └── useHeader.js
│
├── constants/                # Configuration
│   ├── navigation.js
│   ├── hero.js
│   └── index.js
│
├── types/                    # TypeScript Definitions
│   └── index.ts
│
├── utils/                    # Helper Functions
│   ├── helpers.js
│   └── index.js
│
├── data/                     # Static Data
│   └── data.json
│
└── assets/                   # Images, Icons

```

**Untuk detail lebih lanjut, lihat [ARCHITECTURE.md](./ARCHITECTURE.md)**

---

## 🎨 Components

### Available Components

- **Button** - Customizable dengan variants & sizes
- **Header** - Responsive navigation dengan menu toggle
- **Footer** - Links, company info, copyright
- **Container** - Layout wrapper dengan max-width
- **Card** - Component untuk display konten

**Dokumentasi lengkap:** [COMPONENTS.md](./COMPONENTS.md)

### Quick Example

```jsx
import { Button, Container, Card } from "@/components/common";

export default function MyPage() {
  return (
    <Container>
      <Card hoverable>
        <h2>Welcome</h2>
        <Button onClick={() => console.log("Clicked!")}>Click Me</Button>
      </Card>
    </Container>
  );
}
```

---

## 📖 Development Guide

Untuk memulai development, ikuti panduan di [DEVELOPMENT.md](./DEVELOPMENT.md) yang mencakup:

- Common development tasks
- Styling guidelines
- State management
- API integration
- Debugging tips
- Best practices

---

## 🚀 Available Scripts

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

## 📝 Pages

- **Home** (`/`) - Landing page dengan hero section
- **About** (`/about`) - Tentang kami
- **Products** (`/products`) - Produk SKF
- **Services** (`/services`) - Layanan kami

---

## 🎯 Key Features Breakdown

### Hero Section

- Full-screen height dengan background image
- Responsive title & description
- CTA button dengan hover effect
- Pause video button
- Scroll indicator

### Header/Navigation

- Fixed positioning
- Responsive hamburger menu (mobile)
- Desktop navigation
- Search functionality
- Language selector stub
- Icons links (login, grid, search)

### Footer

- Multi-column layout
- Links to all pages
- Company contact info
- Copyright section

---

## 🌐 Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android

---

## 🔧 Configuration

### Tailwind CSS

Dikonfigurasi di:

- `tailwind.config.js` - Tailwind settings
- `src/index.css` - Global styles & imports

### Vite

Dikonfigurasi di:

- `vite.config.js` - Vite settings
- `.env.example` - Environment variables

### ESLint

Dikonfigurasi di:

- `eslint.config.js` - Linting rules

---

## 📚 Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Layered architecture explanation
- **[COMPONENTS.md](./COMPONENTS.md)** - Components documentation & examples
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development guide & best practices

---

## 🚦 Getting Started

### 1. Membuat Komponen Baru

```bash
touch src/components/common/MyComponent.jsx
```

### 2. Membuat Halaman Baru

```bash
touch src/pages/MyPage.jsx
# Update routing di App.jsx
```

### 3. Menambah Constants

```bash
# Edit src/constants/index.js atau buat file baru
```

### 4. Custom Hooks

```bash
touch src/hooks/useMyHook.js
# Export di src/hooks/index.js
```

---

## 💡 Best Practices

✅ Gunakan functional components dengan hooks  
✅ Buat komponen yang reusable dan generic  
✅ Pisahkan logic dari UI menggunakan custom hooks  
✅ Gunakan constants untuk values yang berulang  
✅ Ikuti naming convention (camelCase untuk functions, PascalCase untuk components)  
✅ Buat barrel files untuk export yang rapi  
✅ Dokumentasikan komponen kompleks  
✅ Test komponenserta sebelum merge

---

## 🐛 Troubleshooting

### Port 5173 sudah digunakan

```bash
npm run dev -- --port 3000
```

### Tailwind classes tidak muncul

1. Restart dev server
2. Clear browser cache (Cmd+Shift+R)
3. Check `tailwind.config.js` paths

### Import path error

Pastikan file existe dan path benar. Gunakan alias shortcuts jika tersedia.

---

## 📞 Support & Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)

---

## 📄 License

This project is proprietary. All rights reserved to Hudajaya.

---

## 🤝 Contributing

Untuk berkontribusi, silakan:

1. Create feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open Pull Request

---

**Built with ❤️ using React, Vite & Tailwind CSS**
