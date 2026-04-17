import React from "react";

/**
 * ActionCard Component
 * A reusable high-fidelity card with an image header, overlay title,
 * content area, and a primary action button.
 */
export default function ActionCard({
  image,
  title,
  buttonText,
  onButtonClick,
  buttonColor = "bg-[#001D3D]",
  hoverButtonColor = "hover:bg-blue-900",
  children,
  className = "",
  imageAspectRatio = "aspect-[16/10]",
}) {
  const isImageUrl = typeof image === "string" && image.length > 10;

  return (
    <div
      className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col ${className}`}
    >
      {/* Image Header - Full Width */}
      <div className={`relative ${imageAspectRatio} overflow-hidden bg-gray-100`}>
        {isImageUrl ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {image}
          </div>
        )}
        {/* Overlay Title */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
          <h3 className="text-2xl font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8 flex-1 flex flex-col">
        {/* Child Content (List, Technical Info, etc.) */}
        <div className="flex-1">
          {children}
        </div>

        {/* Action Button */}
        {buttonText && (
          <button
            onClick={onButtonClick}
            className={`mt-8 w-full px-6 py-4 text-center ${buttonColor} ${hoverButtonColor} text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/10 active:scale-95`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
