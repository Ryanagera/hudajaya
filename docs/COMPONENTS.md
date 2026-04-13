# Components Documentation

## Reusable Components (`src/components/common/`)

### Button Component

Tombol yang dapat dikustomisasi dengan berbagai variasi dan ukuran.

**Props:**

- `children` (string | React.ReactNode) - Konten button
- `onClick` (function) - Callback saat button diklik
- `variant` (string) - "primary" | "secondary" | "outline" (default: "primary")
- `size` (string) - "sm" | "md" | "lg" (default: "md")
- `disabled` (boolean) - Disable button (default: false)
- `className` (string) - Additional CSS classes
- `type` (string) - "button" | "submit" | "reset" (default: "button")

**Contoh Penggunaan:**

```jsx
import { Button } from "@/components/common";

export default function MyComponent() {
  return (
    <>
      <Button onClick={() => console.log("Clicked!")}>Click Me</Button>

      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>

      <Button variant="outline" disabled>
        Disabled
      </Button>

      <Button type="submit">Submit Form</Button>
    </>
  );
}
```

---

### Header Component

Navigation header dengan responsive menu dan search functionality.

**Features:**

- Fixed positioning di top of page
- Responsive hamburger menu untuk mobile
- Search bar toggle
- Icon navigation di atas (language, grid, login, search)
- Logo di center

**Props:** None

**Contoh Penggunaan:**

```jsx
import { Header } from "@/components/common";

// Header akan otomatis ditampilkan oleh MainLayout
export default function App() {
  return <Header />;
}
```

---

### Footer Component

Footer dengan links, company info, dan copyright.

**Features:**

- Grid layout dengan 4 kolom (Company, Products, Services, Contact)
- Links navigation
- Social media stubs
- Copyright info

**Props:** None

**Contoh Penggunaan:**

```jsx
import { Footer } from "@/components/common";

export default function App() {
  return <Footer />;
}
```

---

### Container Component

Wrapper komponen untuk consistent padding dan max-width.

**Props:**

- `children` (React.ReactNode) - Konten dalam container
- `size` (string) - "sm" | "md" | "lg" | "xl" (default: "lg")
- `className` (string) - Additional CSS classes

**Contoh Penggunaan:**

```jsx
import { Container } from "@/components/common";

export default function MySection() {
  return (
    <Container size="lg">
      <div className="grid grid-cols-3 gap-4">{/* Content here */}</div>
    </Container>
  );
}
```

---

### Card Component

Komponenuntuk menampilkan konten dalam box dengan shadow.

**Props:**

- `children` (React.ReactNode) - Konten dalam card
- `hoverable` (boolean) - Tambah hover effect (default: false)
- `shadow` (string) - "sm" | "md" | "lg" | "xl" (default: "md")
- `className` (string) - Additional CSS classes

**Contoh Penggunaan:**

```jsx
import { Card } from "@/components/common";

export default function ProductCard() {
  return (
    <Card hoverable shadow="lg">
      <h3 className="text-xl font-bold mb-2">Product Name</h3>
      <p className="text-gray-600">Product description here</p>
    </Card>
  );
}
```

---

## Sections (`src/sections/`)

### HeroSection Component

Hero section besar dengan background image, judul, deskripsi, dan CTA button.

**Features:**

- Full screen height
- Background image dengan overlay gradient
- Responsive title dan description
- CTA button dengan icon
- Pause video button
- Page feedback button
- Scroll indicator

**Props:** None (menggunakan constants dari `src/constants/hero.js`)

**Contoh Penggunaan:**

```jsx
import { HeroSection } from "@/sections";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
    </MainLayout>
  );
}
```

---

## Layouts (`src/layouts/`)

### MainLayout Component

Layout utama yang membungkus seluruh halaman dengan Header dan Footer.

**Props:**

- `children` (React.ReactNode) - Page content

**Contoh Penggunaan:**

```jsx
import MainLayout from "@/layouts/MainLayout";
import { HeroSection } from "@/sections";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      {/* More sections here */}
    </MainLayout>
  );
}
```

---

## Customization Guide

### Mengubah Warna & Tema

Edit `src/components/common/Button.jsx`:

```jsx
const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700", // Change here
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline: "border-2 border-blue-600 text-blue-600",
};
```

### Menambah Ukuran Button Baru

```jsx
const sizes = {
  xs: "px-2 py-1 text-xs", // Tambah ini
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl", // Or tambah ini
};
```

### Menambah Varian Card

Edit `src/components/common/Card.jsx` dan tambah di shadows object.

---

## Component Import Shortcuts

Menggunakan barrel files untuk import yang lebih rapi:

```jsx
// Alih-alih
import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import { Container, Card } from "@/components/common/Card";

// Gunakan
import { Button, Header, Container, Card } from "@/components/common";
```

---

## Best Practices

1. ✅ Selalu gunakan TypeScript props jika memungkinkan
2. ✅ Dokumentasikan props dengan JSDoc comments
3. ✅ Gunakan Tailwind classes untuk styling
4. ✅ Buat komponen yang reusable dan generic
5. ✅ Hindari hard-coding values, gunakan props
6. ✅ Test komponen dengan berbagai props
7. ✅ Keep komponen simple dan focused

---

## Component Composition Example

Menggabungkan multiple komponen:

```jsx
import { Container, Card, Button } from "@/components/common";

export default function FeatureSection() {
  return (
    <section className="py-12 bg-gray-50">
      <Container size="lg">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Feature 1", "Feature 2", "Feature 3"].map((feature, idx) => (
            <Card key={idx} hoverable shadow="lg">
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p className="text-gray-600 mb-4">Description of {feature}</p>
              <Button size="sm" variant="outline">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## Troubleshooting

### Button styles tidak muncul

→ Pastikan Tailwind CSS sudah di-configure di `src/index.css` dan `tailwind.config.js`

### Header tidak sticky

→ Cek props className, mungkin ada override di CSS

### Container max-width tidak bekerja

→ Pastikan parent container tidak memiliki restrictive width

---

## Next Steps

Komponen siap digunakan dalam development! Untuk menambah komponen baru:

1. Buat file di `src/components/common/NamaKomponen.jsx`
2. Export di `src/components/common/index.js`
3. Update dokumentasi ini
4. Use di halaman dengan `import { NamaKomponen } from "@/components/common"`
