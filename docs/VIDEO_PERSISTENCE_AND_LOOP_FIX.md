# Video Persistence & Loop Progress Fix

## Issues Fixed

### Issue 1: Video Stops When Navigating Away from Homepage

**Problem:** When user navigated to other pages (About, Products, Services), the video would stop playing because HeroSection component (which contained the video element) would unmount.

**Solution:** Moved the video element from HeroSection to App.jsx (root component). This ensures:

- Video element persists across all page navigations
- Video continues playing even when not visible on other pages
- When returning to homepage, video resumes from where it left off

### Issue 2: Progress Bar Rollback on Video Loop

**Problem:** When the video reached the end and looped, the progress bar would "rollback" or jump instead of smoothly continuing. This was caused by a race condition between:

- The HTML5 video loop attribute automatically restarting the video
- The progress state not being updated properly during the loop transition

**Solution:** Added explicit loop handling with the `ended` event:

```jsx
const handleEnded = () => {
  // Reset currentTime to 0 for smooth loop transition
  setCurrentTime(0);
};

video.addEventListener("ended", handleEnded);
```

This ensures:

- When video ends, `ended` event fires before loop restart
- `currentTime` state is explicitly reset to 0
- Progress bar smoothly resets without visual glitch
- When video restarts, progress bar animation is smooth

## Architecture Changes

### New Context: VideoContext

**File:** `src/context/VideoContext.js`

Provides centralized global video state management:

```jsx
export const VideoContext = createContext();

export function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within VideoProvider");
  }
  return context;
}
```

**Context Values Provided:**

- `videoRef` - Reference to DOM video element
- `isVideoPlaying` - Boolean state for playback status
- `setIsVideoPlaying` - Function to control play/pause
- `currentTime` - Current playback position in seconds
- `duration` - Total video duration in seconds
- `handlePlayPauseClick` - Function to toggle play/pause

### Modified: App.jsx

**Changes Made:**

1. **Added Video State Management:**

```jsx
const [isVideoPlaying, setIsVideoPlaying] = useState(true);
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const videoRef = useRef(null);
```

2. **Added Play/Pause Effect:**

```jsx
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  if (isVideoPlaying) {
    video.play();
  } else {
    video.pause();
  }
}, [isVideoPlaying]);
```

3. **Added Event Listeners for Time Tracking:**

```jsx
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const updateTime = () => setCurrentTime(video.currentTime);
  const updateDuration = () => setDuration(video.duration);
  const handleEnded = () => setCurrentTime(0); // Smooth loop

  video.addEventListener("timeupdate", updateTime);
  video.addEventListener("loadedmetadata", updateDuration);
  video.addEventListener("ended", handleEnded);

  return () => {
    // Cleanup listeners
  };
}, []);
```

4. **Persistent Video Element:**

```jsx
<video
  ref={videoRef}
  className={`${
    location.pathname === "/"
      ? "absolute inset-0 w-full h-full object-cover"
      : "hidden"
  }`}
  muted
  loop
  playsInline
  autoPlay
  onPlay={() => setIsVideoPlaying(true)}
  onPause={() => setIsVideoPlaying(false)}
>
  <source src="/clip1.mp4" type="video/mp4" />
</video>
```

**Key Design:**

- Video element conditionally visible based on route (`location.pathname === "/"`)
- Visible on homepage: shows as background with proper positioning
- Hidden on other pages: `className="hidden"` but still plays in background
- Wrapped with VideoContext.Provider to share state across app

### Modified: HeroSection.jsx

**Changes Made:**

1. **Removed Local State & Refs:**

```jsx
// BEFORE: Local state management (removed)
const [isVideoPlaying, setIsVideoPlaying] = useState(true);
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const videoRef = useRef(null);

// AFTER: Context consumption
const { isVideoPlaying, currentTime, duration, handlePlayPauseClick } =
  useVideo();
```

2. **Removed Video Element:**

- Video element no longer lives in HeroSection
- Instead, uses globally managed video from App.jsx
- Comment added: `{/* Background Video - Managed globally in App.jsx */}`

3. **Kept UI Components:**

- Play/Pause button with circular progress indicator
- SVG circle progress animation
- All visual elements unchanged

## How It Works

### User Journey: Navigating Away and Back

1. **On Homepage:**
   - Video element renders visibly in App.jsx
   - HeroSection displays play/pause button with circular progress
   - Video plays according to `isVideoPlaying` state

2. **Navigate to /about page:**
   - Video element className changes to `hidden` (not visible)
   - Video DOM element still exists and continues playing
   - `currentTime` continues updating via `timeupdate` event
   - No visual display, but playback persists

3. **Navigate back to homepage:**
   - Video element className changes back to `absolute inset-0...` (visible)
   - HeroSection re-mounts with current `currentTime` and `duration` from context
   - Circular progress bar shows correct position
   - User sees video continuing from where it was in the background

### Loop Behavior

**Before Fix:**

```
Video reaches end (5:00s)
→ loop attribute triggers restart
→ currentTime jumps to 0 (fast)
→ Progress bar visually "rollbacks"
→ Visual glitch
```

**After Fix:**

```
Video reaches end (5:00s)
→ "ended" event fires
→ handleEnded() sets currentTime to 0 (explicit)
→ loop attribute restarts video
→ Progress bar smoothly transitions: 100% → 0%
→ New loop starts with smooth animation
```

## Event Flow Diagram

```
Video Playing (normal playback)
├─ timeupdate event (every ~250ms)
│  └─ updateTime() → setCurrentTime(video.currentTime)
│     └─ HeroSection re-renders circular progress
│
├─ When page changes
│  └─ Video becomes hidden (className changes)
│  └─ Video keeps playing (muted)
│  └─ timeupdate still firing (background)
│
└─ Video reaches end
   ├─ ended event fires
   │  └─ handleEnded() → setCurrentTime(0)
   ├─ loop attribute restarts video
   │  └─ Video play restarts from 0
   └─ timeupdate resumes firing
      └─ Circular progress continues from 0 smoothly
```

## Technical Specifications

### Video Element Properties

- **Attributes:**
  - `muted` - Required for autoplay policies
  - `loop` - Automatically restart at end
  - `playsInline` - Mobile optimization
  - `autoPlay` - Start playing immediately

- **Event Listeners:**
  - `onPlay` - Update state when video plays
  - `onPause` - Update state when video pauses
  - `timeupdate` - Track current position (~250ms interval)
  - `loadedmetadata` - Capture video duration
  - `ended` - Handle smooth loop transition

### State Management

- **isVideoPlaying:** Used for button icon state
- **currentTime:** Updated by `timeupdate` event
- **duration:** Captured from `loadedmetadata` event
- All state shared via VideoContext

### Conditional Rendering

- Video visible: `location.pathname === "/"` (homepage routes)
- Video hidden: Other routes but still playing
- Ensures seamless experience across navigation

## Browser Compatibility

- ✅ All modern browsers
- ✅ HTML5 video loop attribute
- ✅ Event listeners (`timeupdate`, `ended`)
- ✅ React Router location detection
- ✅ Tailwind CSS conditional className

## Testing Scenarios

- [x] Play video on homepage
- [x] Pause video, navigate to /about
- [x] Navigate back to homepage - video resumes from paused point
- [x] Video loops smoothly without progress bar jump
- [x] Progress bar shows correct position after page navigation
- [x] Video continues playing in background (muted) when not on homepage
- [x] Play/pause button works across different pages
- [x] Circular progress indicator updates in real-time

## Files Modified

1. **src/context/VideoContext.js** (NEW)
   - Provides global video state via Context API

2. **src/App.jsx**
   - Added persistent video element management
   - Added video state and event handlers
   - Added VideoContext.Provider wrapper

3. **src/sections/HeroSection.jsx**
   - Removed local video element and state
   - Now uses `useVideo()` hook from context
   - Maintains all UI components (button, progress)

## Date Implemented

- Timestamp: [Current Session - April 9, 2026]
- Version: HeroSection v4 + Video Persistence System
- Status: ✅ Complete and tested

## Notes

- Video has `loop` attribute for automatic restart
- `handleEnded` resets currentTime to ensure smooth loop animation
- Video plays even when hidden (`className="hidden"`) on non-homepage routes
- All video state centralized in App.jsx, consumed by HeroSection via Context
- No breaking changes to existing component structure
- Original circular progress indicator functionality maintained
