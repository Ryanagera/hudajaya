# Layered Architecture Documentation

## Struktur Folder Proyek

```
src/
├── components/
│   ├── common/              # Reusable UI Components
│   │   ├── Button.jsx       # Reusable Button component
│   │   ├── Header.jsx       # Header/Navigation component
│   │   └── index.js         # Export barrel file
│   └── hero/                # Hero-specific components (if needed)
│
├── sections/                # Page Sections/Features
│   ├── HeroSection.jsx      # Hero section component
│   └── index.js             # Export barrel file
│
├── layouts/                 # Layout Wrappers
│   └── MainLayout.jsx       # Main layout wrapper
│
├── pages/                   # Page Components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   └── Services.jsx
│
├── context/                 # React Context (State Management)
│   ├── HeaderContext.js
│   └── useHeader.js
│
├── hooks/                   # Custom React Hooks (future expansion)
│
├── services/                # Business Logic & API Services (future expansion)
│
├── utils/                   # Utility Functions
│   ├── helpers.js           # Helper functions (cn, debounce, throttle, etc)
│   └── index.js
│
├── constants/               # Constants & Configuration
│   ├── navigation.js        # Navigation constants
│   ├── hero.js              # Hero content constants
│   └── index.js             # Export barrel file
│
├── types/                   # TypeScript Types/Interfaces
│   └── index.ts
│
├── data/                    # Static Data & JSON Files
│   └── data.json            # Application data
│
├── assets/                  # Images, Icons, etc
│
├── App.jsx                  # Main app component with routing
├── main.jsx                 # Entry point
├── index.css                # Global styles
└── vite.config.js
```

## Penjelasan Setiap Layer

### 1. **Components Layer** (`components/`)

- **Reusable UI Components** yang dapat digunakan di berbagai halaman
- Contoh: `Button`, `Header`, `Footer`, `Card`, dll
- Komponen harus **generic dan tidak terikat** pada satu halaman tertentu
- Menerima props untuk konfigurasi

### 2. **Sections Layer** (`sections/`)

- **Komponen besar** yang menggabungkan multiple components
- Merupakan bagian dari sebuah halaman, contoh: `HeroSection`, `FeatureSection`, `TestimonialSection`
- Lebih spesifik daripada `components` tapi lebih reusable daripada `pages`

### 3. **Layouts Layer** (`layouts/`)

- **Template/wrapper** untuk halaman dengan struktur yang sama
- Contoh: `MainLayout`, `AuthLayout`, `AdminLayout`
- Mengatur positioning header, footer, sidebar, dll

### 4. **Pages Layer** (`pages/`)

- **Halaman utama** aplikasi
- Menggunakan kombinasi dari `layouts`, `sections`, dan `components`
- Menghubungkan dengan routing

### 5. **Context Layer** (`context/`)

- **State Management** menggunakan React Context
- Untuk sharing state antar komponen tanpa prop drilling

### 6. **Services Layer** (`services/`)

- **Business logic** dan API calls
- Fungsi-fungsi untuk fetch data, POST, PUT, DELETE
- Separation of concerns antara UI dan logic

### 7. **Utils Layer** (`utils/`)

- **Helper functions** yang reusable
- Contoh: date formatting, string manipulation, debounce, throttle

### 8. **Constants Layer** (`constants/`)

- **Konfigurasi statis** seperti API endpoints, menu items, etc
- Mudah untuk diperbarui di satu tempat

### 9. **Types Layer** (`types/`)

- **TypeScript interfaces** dan types
- Untuk type safety dan dokumentasi

## Keuntungan Layered Architecture

✅ **Organized**: Mudah menemukan file dengan struktur yang jelas
✅ **Scalable**: Mudah menambah fitur baru tanpa mengganggu yang sudah ada
✅ **Reusable**: Komponen terpisah dapat digunakan di berbagai tempat
✅ **Maintainable**: Perubahan di satu layer tidak langsung mempengaruhi layer lain
✅ **Testable**: Setiap layer dapat ditest secara independen

## Workflow Development

1. **Buat Component** → `src/components/common/MyComponent.jsx`
2. **Buat Section** (jika perlu) → `src/sections/MySection.jsx`
3. **Buat Page** → `src/pages/MyPage.jsx`
4. **Add Route** → Update `App.jsx`
5. **Extract Constants** → Tambahkan ke `src/constants/`

## Contoh Pengembangan Fitur

### Menambah Fitur Baru

```
1. Buat komponen UI di components/
   └── Button, Card, Input, dll

2. Buat section yang menggabungkan komponen
   └── FeatureSection, AboutSection, dll

3. Buat page yang menggunakan section + layout
   └── Features.jsx, About.jsx, dll

4. Update routing di App.jsx

5. Extract reusable logic ke services/utils/
```

## Best Practices

- ✅ Simpan komponen dalam folder dengan nama yang deskriptif
- ✅ Gunakan barrel files (`index.js`) untuk export yang rapi
- ✅ Pisahkan logic dari UI (Container vs Presentational Components)
- ✅ Gunakan constants untuk nilai-nilai yang bersifat statis
- ✅ Dokumentasikan komponen kompleks dengan JSDoc comments
- ✅ Hindari import dari parent directory (`../../../`)
