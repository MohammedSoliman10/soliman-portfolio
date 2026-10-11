// Ethereum.org-style illustration. Three parallax layers move at different speeds on scroll.
export default function HeroScene() {
  return (
    <svg
      viewBox="0 0 1200 560"
      role="img"
      aria-label="Illustration of a sunlit hall with palm trees and a large Ethereum diamond"
      className="h-auto w-full [mask-image:linear-gradient(to_bottom,#000_82%,transparent)]"
    >
      <defs>
        <path id="leaf" d="M0 0Q30-22 88 0Q30 19 0 0Z" />
        <clipPath id="hall"><rect x="120" y="440" width="960" height="120" /></clipPath>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe6ff" />
          <stop offset="1" stopColor="#b9ecef" />
        </linearGradient>
      </defs>
      <g stroke="#4a4fd0" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        {/* far layer: arches, floor */}
        <g className="layer-far">
          <path d="M120 560V270Q120 30 600 30T1080 270V560Z" fill="#e4e9ff" />
          <path d="M190 560V280Q190 90 600 90T1010 280V560Z" fill="#f7f8ff" />
          <rect x="120" y="440" width="960" height="120" fill="url(#floor)" stroke="none" />
          <g fill="none" strokeWidth="1.3" opacity=".5" clipPath="url(#hall)">
            <path d="M600 440L0 560M600 440L200 560M600 440L400 560M600 440L800 560M600 440L1000 560M600 440L1200 560" />
            <path d="M0 462H1200M0 492H1200M0 530H1200" />
          </g>
        </g>

        {/* mid layer: columns, plinth, diamond */}
        <g className="layer-mid">
          <g fill="#fff">
            <rect x="262" y="150" width="30" height="290" />
            <rect x="406" y="150" width="30" height="290" />
            <rect x="764" y="150" width="30" height="290" />
            <rect x="908" y="150" width="30" height="290" />
            <rect x="254" y="138" width="46" height="14" rx="3" />
            <rect x="398" y="138" width="46" height="14" rx="3" />
            <rect x="756" y="138" width="46" height="14" rx="3" />
            <rect x="900" y="138" width="46" height="14" rx="3" />
          </g>
          <ellipse cx="600" cy="444" rx="96" ry="14" fill="#fff" />
          <g className="gem" transform="translate(600 -20) scale(1.5) translate(-200 0)">
            <path d="M200 100 150 195 200 215 250 195Z" fill="#c4b2f6" />
            <path d="M200 100 250 195 200 215Z" fill="#86e0e2" />
            <path d="M150 195 200 215 200 258Z" fill="#7b8cf0" />
            <path d="M250 195 200 215 200 258Z" fill="#c4b2f6" />
            <path d="M150 207 200 228 250 207 200 292Z" fill="#7b8cf0" />
            <path d="M200 228 250 207 200 292Z" fill="#c4b2f6" />
          </g>
        </g>

        {/* near layer: palms and cats */}
        <g className="layer-near">
          <path d="M70 560Q110 330 190 120" fill="none" strokeWidth="5" />
          <path d="M1130 560Q1090 330 1010 120" fill="none" strokeWidth="5" />
          <g fill="#7b8cf0" strokeWidth="1.8">
            <use href="#leaf" transform="translate(190 120) rotate(-160)" />
            <use href="#leaf" transform="translate(190 120) rotate(-130)" />
            <use href="#leaf" transform="translate(190 120) rotate(-95)" />
            <use href="#leaf" transform="translate(190 120) rotate(-55)" />
            <use href="#leaf" transform="translate(190 120) rotate(-20)" />
            <use href="#leaf" transform="translate(1010 120) rotate(-20) scale(-1 1)" />
            <use href="#leaf" transform="translate(1010 120) rotate(-50) scale(-1 1)" />
            <use href="#leaf" transform="translate(1010 120) rotate(-85) scale(-1 1)" />
            <use href="#leaf" transform="translate(1010 120) rotate(-125) scale(-1 1)" />
            <use href="#leaf" transform="translate(1010 120) rotate(-160) scale(-1 1)" />
          </g>
          <g fill="#c4b2f6" strokeWidth="1.8">
            <use href="#leaf" transform="translate(-10 540) rotate(-35) scale(1.2)" />
            <use href="#leaf" transform="translate(-10 540) rotate(-62) scale(1.2)" />
            <use href="#leaf" transform="translate(-10 540) rotate(-8) scale(1.2)" />
            <use href="#leaf" transform="translate(1210 540) rotate(215) scale(1.2)" />
            <use href="#leaf" transform="translate(1210 540) rotate(242) scale(1.2)" />
            <use href="#leaf" transform="translate(1210 540) rotate(188) scale(1.2)" />
          </g>
          <g fill="#f6c2a6" strokeWidth="1.8">
            <circle cx="470" cy="508" r="15" />
            <path d="M461 495 465 482 472 494M472 494 479 483 482 497" />
            <ellipse cx="760" cy="522" rx="28" ry="11" />
          </g>
        </g>
      </g>
    </svg>
  );
}
