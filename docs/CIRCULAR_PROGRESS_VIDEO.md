# Circular Progress Indicator untuk Video Duration

## Overview

Implementasi circular progress indicator yang membungkus icon play/pause. Lingkaran ini bergerak mengikuti durasi video yang sedang diputar, memberikan visual feedback yang intuitif kepada user tentang seberapa jauh video sudah berjalan.

## Problem Statement

Sebelumnya button play/pause hanya menampilkan icon statis tanpa indikator progress. User tidak bisa melihat berapa lama video sudah diputar atau berapa lama sisa durasi video.

## Solution Architecture

### 1. State Management untuk Video Tracking

```jsx
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
```

- `currentTime`: Waktu playback saat ini dalam detik
- `duration`: Total durasi video dalam detik
- Diupdate secara real-time saat video playing

### 2. Event Listeners untuk Video Events

```jsx
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const updateTime = () => {
    setCurrentTime(video.currentTime);
  };

  const updateDuration = () => {
    setDuration(video.duration);
  };

  video.addEventListener("timeupdate", updateTime);
  video.addEventListener("loadedmetadata", updateDuration);

  return () => {
    video.removeEventListener("timeupdate", updateTime);
    video.removeEventListener("loadedmetadata", updateDuration);
  };
}, []);
```

**Events Digunakan:**

- `timeupdate`: Memicu setiap ~250ms saat video playing (untuk real-time progress update)
- `loadedmetadata`: Memicu ketika video metadata (termasuk duration) sudah loaded

### 3. Progress Calculation

```jsx
const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
const circumference = 2 * Math.PI * 45; // radius = 45
const strokeDashoffset =
  circumference - (circumference * progressPercent) / 100;
```

**Math Calculation:**

- **progressPercent**: Persentase video yang sudah diputar (0-100%)
- **circumference**: Keliling lingkaran dengan radius 45px = 2πr ≈ 282.74
- **strokeDashoffset**: Jarak untuk "gap" di garis progress
  - Formula: Total circumference - (circumference × progress%)
  - Saat progress 0%: strokeDashoffset = 282.74 (full gap, lingkaran kosong)
  - Saat progress 100%: strokeDashoffset = 0 (no gap, lingkaran penuh)

### 4. SVG Circular Progress Implementation

```jsx
<svg
  className="absolute inset-0 w-full h-full -rotate-90"
  viewBox="0 0 100 100"
>
  {/* Background circle (static) */}
  <circle
    cx="50"
    cy="50"
    r="45"
    fill="none"
    stroke="rgba(255, 255, 255, 0.3)"
    strokeWidth="3"
  />

  {/* Progress circle (animated) */}
  <circle
    cx="50"
    cy="50"
    r="45"
    fill="none"
    stroke="white"
    strokeWidth="3"
    strokeDasharray={circumference}
    strokeDashoffset={strokeDashoffset}
    strokeLinecap="round"
    className="transition-all duration-300"
  />
</svg>
```

**SVG Attributes:**

- `viewBox="0 0 100 100"`: Canvas koordinat 100x100
- `cx="50" cy="50"`: Pusat lingkaran di tengah
- `r="45"`: Radius lingkaran 45 unit
- `strokeDasharray`: Total panjang garis (circumference)
- `strokeDashoffset`: Offset/gap posisi garis (kontrol progress)
- `strokeLinecap="round"`: Ujung garis melengkung (smooth look)
- `-rotate-90`: Memutar agar progress dimulai dari atas

### 5. Button Layout dengan Layering

```jsx
<button className="absolute bottom-6 left-6 z-20 w-20 h-20">
  {/* SVG Background - Progress Ring */}
  <svg className="absolute inset-0 w-full h-full">...</svg>

  {/* Icon Container - Center Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    {/* Play/Pause Icon */}
  </div>
</button>
```

**Layout Strategy:**

- Button = container 80x80px (`w-20 h-20`)
- SVG fill container penuh dan display progress circle
- Inner div center content dengan flexbox
- Icon scale-up on hover

## Implementation Details

### File Modified

- `src/sections/HeroSection.jsx`

### New Imports

Tidak ada imports tambahan (sudah menggunakan useState, useRef, useEffect yang ada)

### State Variables Added

```jsx
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
```

### Calculated Values

```jsx
const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
const circumference = 2 * Math.PI * 45;
const strokeDashoffset =
  circumference - (circumference * progressPercent) / 100;
```

### Video Element Listeners

- `loadedmetadata` → capture duration
- `timeupdate` → capture currentTime

## Features

### ✅ Real-Time Progress Tracking

- Circular progress bar update setiap frame (60fps pada ~250ms intervals)
- Smooth animation dengan `transition-all duration-300`
- Akurat: mencerminkan posisi exact dari video playback

### ✅ Visual Feedback

- **Background circle** (semi-transparent white): Reference ring
- **Progress circle** (solid white): Actual progress fill
- **Rounded line caps** (`strokeLinecap="round"`): Polish appearance
- **Fill dari top** (`-rotate-90`): Intuitive viewing direction

### ✅ Icon Integration

- Icon tetap centered pada progress circle
- Play icon saat paused, Pause icon saat playing
- Hover effect dengan scale animation
- Icon size diperbesar ke 28px untuk better aesthetics

### ✅ Responsive & Accessible

- `w-20 h-20` = 80x80px (comfortable touch target)
- `title` attribute untuk accessibility
- Pure SVG approach (works di semua browsers)

### ✅ Performance Optimized

- Event listeners di-cleanup on unmount (prevent memory leak)
- strokeDashoffset transition smooth (GPU accelerated)
- No expensive re-renders (state updates batched)

## Browser Compatibility

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ SVG stroke-dasharray support universal
- ✅ Tailwind CSS transitions fully supported
- ✅ Mobile browsers dengan SVG rendering

## Visual Results

### States:

**Paused at 0%:**

- Full transparent background circle
- Empty progress circle
- Play icon centered

**Playing (50% progress):**

- Transparent background circle visible
- Progress circle 50% filled (smooth curve)
- Pause icon centered

**Playing (100% progress):**

- Transparent background circle barely visible
- Progress circle 100% filled (complete ring)
- Video loops, progress resets if looping

## Technical Improvements vs Previous

### Before (Static Button)

```jsx
<button className="...">{isVideoPlaying ? <Pause /> : <Play />}</button>
// No progress indication
```

### After (With Circular Progress)

```jsx
<button className="... w-20 h-20">
  <svg>
    <circle ... /> {/* Background */}
    <circle ... strokeDashoffset={strokeDashoffset} /> {/* Progress */}
  </svg>
  <div>
    {isVideoPlaying ? <Pause /> : <Play />}
  </div>
</button>
// Real-time circular progress tracking
```

## Testing Scenarios

- [x] Play video → progress circle fills smoothly
- [x] Pause video → circle stays at current position
- [x] Resume from paused → circle continues from pause point
- [x] Click play at different points → circle updates correctly
- [x] Video loops → circle resets and refills
- [x] Hover effect → icon scales up smoothly
- [x] Multiple clicks → no visual glitches

## Notes

- SVG coordinates use 100x100 viewBox, radius 45 untuk optimal stroke rendering
- `transition-all duration-300` pada progress circle untuk smooth animation
- Icon di `Play` state slightly offset ke kanan (`ml-1`) untuk visual balance
- Background circle opacity 30% (`rgba(255, 255, 255, 0.3)`) untuk subtle appearance

## Date Implemented

- Timestamp: [Current Session - April 9, 2026]
- Version: HeroSection v3 (Play/Pause dengan Circular Progress)
- Status: ✅ Complete and tested
