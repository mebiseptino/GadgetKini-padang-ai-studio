import React from 'react';

interface RumahGadangLogoProps {
  className?: string;
  size?: number;
}

export const RumahGadangLogo: React.FC<RumahGadangLogoProps> = ({
  className = 'w-12 h-12',
  size = 48,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`shrink-0 drop-shadow-[0_0_12px_rgba(234,179,8,0.45)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Luxury Gold Gradients */}
        <linearGradient id="goldPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>

        <linearGradient id="goldBright" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FEF08A" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>

        <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#F59E0B" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#B45309" stopOpacity="0.4" />
          <stop offset="75%" stopColor="#FBBF24" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FEF08A" stopOpacity="0.95" />
        </linearGradient>

        {/* Glow Filter */}
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Dark Backdrop Disc */}
      <circle cx="100" cy="100" r="94" fill="#09090b" />

      {/* Outer Dual Gold Ring Frame */}
      <circle
        cx="100"
        cy="100"
        r="92"
        stroke="url(#goldRing)"
        strokeWidth="2.5"
        strokeDasharray="18 4 6 4"
      />
      <circle
        cx="100"
        cy="100"
        r="86"
        stroke="url(#goldPrimary)"
        strokeWidth="1.2"
        opacity="0.85"
      />

      {/* Outer Orbit Accents / Circuit Nodes on Ring */}
      <circle cx="100" cy="8" r="2.5" fill="#FDE047" />
      <circle cx="100" cy="192" r="2.5" fill="#FDE047" />
      <circle cx="8" cy="100" r="2.5" fill="#FDE047" />
      <circle cx="192" cy="100" r="2.5" fill="#FDE047" />

      {/* ================= RUMAH GADANG GONJONG ROOF ================= */}
      {/* Black Roof Foundation with Gold Border */}
      <path
        d="M 28 88 
           C 40 40, 52 24, 52 22 
           C 54 36, 68 62, 80 66 
           C 86 46, 96 22, 100 20 
           C 104 22, 114 46, 120 66 
           C 132 62, 146 36, 148 22 
           C 148 24, 160 40, 172 88 
           C 148 76, 122 72, 100 72 
           C 78 72, 52 76, 28 88 Z"
        fill="#0d0d10"
        stroke="url(#goldPrimary)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Secondary Curved Eaves Layer */}
      <path
        d="M 32 86 
           C 56 74, 78 70, 100 70 
           C 122 70, 144 74, 168 86
           C 146 96, 124 100, 100 100
           C 76 100, 54 96, 32 86 Z"
        fill="#18181b"
        stroke="url(#goldBright)"
        strokeWidth="1.5"
      />

      {/* Left Wing Gonjong Roof Ribs & PCB Traces */}
      <path
        d="M 50 30 Q 58 54 68 70"
        stroke="url(#goldPrimary)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 40 50 Q 52 64 60 76"
        stroke="url(#goldPrimary)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Left Gable Microchip Node */}
      <rect
        x="42"
        y="62"
        width="10"
        height="10"
        rx="2"
        fill="#09090b"
        stroke="url(#goldBright)"
        strokeWidth="1.4"
      />
      <circle cx="47" cy="67" r="2" fill="#FDE047" />
      <path d="M 47 62 L 47 56" stroke="url(#goldBright)" strokeWidth="1" />
      <path d="M 47 72 L 47 78" stroke="url(#goldBright)" strokeWidth="1" />
      <path d="M 42 67 L 36 67" stroke="url(#goldBright)" strokeWidth="1" />
      <path d="M 52 67 L 58 67" stroke="url(#goldBright)" strokeWidth="1" />

      {/* Center Gonjong Roof Ribs & PCB Traces */}
      <path
        d="M 100 24 L 100 66"
        stroke="url(#goldPrimary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 92 42 L 92 68 M 108 42 L 108 68"
        stroke="url(#goldPrimary)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Circuit track herringbone angles */}
      <path
        d="M 92 50 L 100 58 L 108 50"
        stroke="url(#goldBright)"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M 92 60 L 100 68 L 108 60"
        stroke="url(#goldBright)"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Right Wing Gonjong Roof Ribs & PCB Traces */}
      <path
        d="M 150 30 Q 142 54 132 70"
        stroke="url(#goldPrimary)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 160 50 Q 148 64 140 76"
        stroke="url(#goldPrimary)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Right Gable Microchip Node */}
      <rect
        x="148"
        y="62"
        width="10"
        height="10"
        rx="2"
        fill="#09090b"
        stroke="url(#goldBright)"
        strokeWidth="1.4"
      />
      <circle cx="153" cy="67" r="2" fill="#FDE047" />
      <path d="M 153 62 L 153 56" stroke="url(#goldBright)" strokeWidth="1" />
      <path d="M 153 72 L 153 78" stroke="url(#goldBright)" strokeWidth="1" />
      <path d="M 148 67 L 142 67" stroke="url(#goldBright)" strokeWidth="1" />
      <path d="M 158 67 L 164 67" stroke="url(#goldBright)" strokeWidth="1" />

      {/* Gonjong Horn Tips - Gold Highlights */}
      <circle cx="52" cy="22" r="2.5" fill="#FEF08A" filter="url(#goldGlow)" />
      <circle cx="100" cy="20" r="3" fill="#FEF08A" filter="url(#goldGlow)" />
      <circle cx="148" cy="22" r="2.5" fill="#FEF08A" filter="url(#goldGlow)" />

      {/* Under-Roof Balcony / Eaves Silhouette */}
      <path
        d="M 68 96 L 76 112 L 124 112 L 132 96 Z"
        fill="#111115"
        stroke="url(#goldPrimary)"
        strokeWidth="1.5"
      />

      {/* ================= CENTER TECH PROCESSOR CHIP ================= */}
      {/* Main Square CPU Body */}
      <rect
        x="76"
        y="108"
        width="48"
        height="48"
        rx="10"
        fill="#0d0d11"
        stroke="url(#goldPrimary)"
        strokeWidth="3"
      />

      {/* Wi-Fi / Radio Wave Signal Arcs (Top Corners of Chip) */}
      {/* Left wave */}
      <path
        d="M 83 118 A 6 6 0 0 1 89 114"
        stroke="url(#goldBright)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 81 122 A 10 10 0 0 1 91 112"
        stroke="url(#goldBright)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right wave */}
      <path
        d="M 111 114 A 6 6 0 0 1 117 118"
        stroke="url(#goldBright)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 109 112 A 10 10 0 0 1 119 122"
        stroke="url(#goldBright)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Core Silicon Processor Die (Center of Chip) */}
      <rect
        x="92"
        y="124"
        width="16"
        height="16"
        rx="3"
        fill="url(#goldPrimary)"
        stroke="#FEF08A"
        strokeWidth="1.2"
      />
      <rect
        x="95"
        y="127"
        width="10"
        height="10"
        rx="1.5"
        fill="#09090b"
      />
      <circle cx="100" cy="132" r="2.5" fill="#FDE047" />

      {/* Micro-Traces around central die */}
      <path
        d="M 86 132 L 92 132 M 108 132 L 114 132"
        stroke="url(#goldBright)"
        strokeWidth="1.4"
      />
      <path
        d="M 100 118 L 100 124 M 100 140 L 100 146"
        stroke="url(#goldBright)"
        strokeWidth="1.4"
      />

      {/* Diagonal traces with solder dots */}
      <path d="M 89 125 L 93 127" stroke="url(#goldBright)" strokeWidth="1.2" />
      <circle cx="87" cy="124" r="1.2" fill="#FDE047" />
      <path d="M 111 125 L 107 127" stroke="url(#goldBright)" strokeWidth="1.2" />
      <circle cx="113" cy="124" r="1.2" fill="#FDE047" />
      <path d="M 89 139 L 93 137" stroke="url(#goldBright)" strokeWidth="1.2" />
      <circle cx="87" cy="140" r="1.2" fill="#FDE047" />
      <path d="M 111 139 L 107 137" stroke="url(#goldBright)" strokeWidth="1.2" />
      <circle cx="113" cy="140" r="1.2" fill="#FDE047" />

      {/* Connector Pins at Bottom */}
      <g stroke="url(#goldBright)" strokeWidth="2" strokeLinecap="round">
        <line x1="88" y1="156" x2="88" y2="163" />
        <line x1="94" y1="156" x2="94" y2="165" />
        <line x1="100" y1="156" x2="100" y2="167" />
        <line x1="106" y1="156" x2="106" y2="165" />
        <line x1="112" y1="156" x2="112" y2="163" />
      </g>

      {/* Bottom Horizontal Base Bar */}
      <path
        d="M 72 168 Q 100 172 128 168"
        stroke="url(#goldPrimary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
