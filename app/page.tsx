'use client';
import { useEffect, useRef } from "react";

export default function LandingPage() {
  const feImageRef = useRef<SVGFEImageElement>(null);

  useEffect(() => {
    if (feImageRef.current) {
      feImageRef.current.setAttribute("href", "/map.png");
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/Blackish.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

      {/* SVG Filter for Liquid Glass Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter
          id="liquid-glass"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          primitiveUnits="objectBoundingBox"
        >
          <feImage
            ref={feImageRef}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            result="map"
          />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur" />
         
        </filter>
      </svg>

      {/* Glass Blur Block */}
      <div
        className="absolute left-1/2 top-1/2 w-[230px] h-[80px]
         -translate-x-1/2 -translate-y-1/2 rounded-3xl z-20 flex 
         flex-col items-center justify-center gap-4 user-select-none pointer-events-none"
        style={{
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px) saturate(120%)',
          WebkitBackdropFilter: 'blur(20px) saturate(120%)',
          filter: 'url(#liquid-glass)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
        }}
      />

      {/* Centered Content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center gap-1 w-[500px]">
        <img
          src="/blackish_logo.png"
          alt="Blackish Logo"
          className="w-[500px] h-auto object-contain select-none pointer-events-none user-select-none"
          style={{ filter: 'none' }}
          draggable={false}
        />
        <span className="block text-white text-base font-bold tracking-widest text-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          COMING SOON!!!
        </span>
        <a
          href="https://www.instagram.com/blackish_theclothing/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          aria-label="Instagram"
        >
          <svg className="w-6 h-6 text-white hover:text-pink-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
