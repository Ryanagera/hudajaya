export default function LoadingPage() {
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-white flex items-center justify-center animate-fadeOut"
        style={{ zIndex: 9999 }}
      >
        {/* Container */}
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo */}
          <div className="relative w-lg h-lg">
            <img
              src="/logohj.png"
              alt="Loading Logo"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
        </div>
      </div>

      {/* Fade out animation styles */}
      <style>{`
        @keyframes fadeOutSlideUp {
          0% {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
          70% {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
          100% {
            opacity: 0.9;
            transform: translateY(-100%);
            visibility: hidden;
            pointer-events: none;
          }
        }
        .animate-fadeOut {
          animation: fadeOutSlideUp 3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
