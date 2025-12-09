export const DotNetReleasePartySVG = () => (
  <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#1A1F2E"/>
    
    {/* Stage */}
    <rect x="100" y="250" width="600" height="120" fill="#0A0E14" stroke="#00D4FF" strokeWidth="3"/>
    
    {/* .NET 9 Logo */}
    <circle cx="400" cy="200" r="80" fill="#7B2BE8" opacity="0.2"/>
    <text x="400" y="180" fill="#00D4FF" fontSize="48" fontWeight="bold" textAnchor="middle">
      .NET
    </text>
    <text x="400" y="230" fill="#7B2BE8" fontSize="72" fontWeight="bold" textAnchor="middle">
      9
    </text>
    
    {/* Confetti */}
    <rect x="150" y="80" width="15" height="15" fill="#FF8C42" transform="rotate(45 157.5 87.5)"/>
    <rect x="250" y="60" width="12" height="12" fill="#00D4FF" transform="rotate(30 256 66)"/>
    <rect x="350" y="50" width="10" height="10" fill="#7B2BE8" transform="rotate(60 355 55)"/>
    <rect x="450" y="70" width="15" height="15" fill="#FF8C42" transform="rotate(20 457.5 77.5)"/>
    <rect x="550" y="55" width="12" height="12" fill="#00D4FF" transform="rotate(45 556 61)"/>
    <rect x="650" y="85" width="10" height="10" fill="#7B2BE8" transform="rotate(75 655 90)"/>
    
    {/* Spotlight */}
    <defs>
      <radialGradient id="spotlight" cx="50%" cy="0%">
        <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#00D4FF" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="400" cy="150" rx="200" ry="100" fill="url(#spotlight)"/>
    
    {/* People Icons */}
    <circle cx="200" cy="320" r="20" fill="#00D4FF" opacity="0.5"/>
    <circle cx="250" cy="310" r="20" fill="#7B2BE8" opacity="0.5"/>
    <circle cx="300" cy="320" r="20" fill="#FF8C42" opacity="0.5"/>
    <circle cx="500" cy="320" r="20" fill="#00D4FF" opacity="0.5"/>
    <circle cx="550" cy="310" r="20" fill="#7B2BE8" opacity="0.5"/>
    <circle cx="600" cy="320" r="20" fill="#FF8C42" opacity="0.5"/>
  </svg>
);

export const BlazorWorkshopSVG = () => (
  <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#1A1F2E"/>
    
    {/* Laptop Screen */}
    <rect x="150" y="80" width="500" height="280" rx="10" fill="#0A0E14" stroke="#00D4FF" strokeWidth="3"/>
    <rect x="170" y="100" width="460" height="240" fill="#0F1419"/>
    
    {/* Code Editor Interface */}
    <rect x="180" y="110" width="150" height="220" fill="#1A1F2E"/>
    
    {/* Code Lines */}
    <rect x="350" y="120" width="260" height="10" rx="2" fill="#00D4FF" opacity="0.3"/>
    <rect x="350" y="140" width="200" height="10" rx="2" fill="#7B2BE8" opacity="0.3"/>
    <rect x="350" y="160" width="240" height="10" rx="2" fill="#00D4FF" opacity="0.3"/>
    <rect x="350" y="180" width="180" height="10" rx="2" fill="#FF8C42" opacity="0.3"/>
    <rect x="350" y="200" width="220" height="10" rx="2" fill="#00D4FF" opacity="0.3"/>
    <rect x="350" y="220" width="190" height="10" rx="2" fill="#7B2BE8" opacity="0.3"/>
    <rect x="350" y="240" width="250" height="10" rx="2" fill="#00D4FF" opacity="0.3"/>
    
    {/* Blazor Logo */}
    <circle cx="255" cy="220" r="50" fill="#7B2BE8" opacity="0.8"/>
    <path d="M245 205 L255 235 L265 205" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Workshop Text */}
    <text x="400" y="380" fill="#00D4FF" fontSize="32" fontWeight="bold" textAnchor="middle">
      BLAZOR WORKSHOP
    </text>
    
    {/* Laptop Base */}
    <path d="M100 360 L700 360 L650 380 L150 380 Z" fill="#0A0E14" stroke="#00D4FF" strokeWidth="2"/>
  </svg>
);

export const MicroservicesTalkSVG = () => (
  <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="400" fill="#1A1F2E"/>
    
    {/* Presentation Screen */}
    <rect x="100" y="50" width="600" height="300" rx="8" fill="#0A0E14" stroke="#00D4FF" strokeWidth="3"/>
    
    {/* Architecture Diagram */}
    {/* API Gateway */}
    <rect x="350" y="100" width="100" height="60" rx="8" fill="#0F1419" stroke="#00D4FF" strokeWidth="2"/>
    <text x="400" y="135" fill="#00D4FF" fontSize="16" fontWeight="bold" textAnchor="middle">
      API
    </text>
    
    {/* Microservices */}
    <rect x="200" y="220" width="80" height="50" rx="6" fill="#0F1419" stroke="#7B2BE8" strokeWidth="2"/>
    <text x="240" y="250" fill="#7B2BE8" fontSize="12" fontWeight="bold" textAnchor="middle">
      AUTH
    </text>
    
    <rect x="320" y="220" width="80" height="50" rx="6" fill="#0F1419" stroke="#FF8C42" strokeWidth="2"/>
    <text x="360" y="250" fill="#FF8C42" fontSize="12" fontWeight="bold" textAnchor="middle">
      ORDER
    </text>
    
    <rect x="440" y="220" width="80" height="50" rx="6" fill="#0F1419" stroke="#00D4FF" strokeWidth="2"/>
    <text x="480" y="250" fill="#00D4FF" fontSize="12" fontWeight="bold" textAnchor="middle">
      PAYMENT
    </text>
    
    <rect x="560" y="220" width="80" height="50" rx="6" fill="#0F1419" stroke="#7B2BE8" strokeWidth="2"/>
    <text x="600" y="250" fill="#7B2BE8" fontSize="12" fontWeight="bold" textAnchor="middle">
      NOTIFY
    </text>
    
    {/* Connection Lines */}
    <line x1="400" y1="160" x2="240" y2="220" stroke="#7B2BE8" strokeWidth="2" strokeDasharray="4 4"/>
    <line x1="400" y1="160" x2="360" y2="220" stroke="#FF8C42" strokeWidth="2" strokeDasharray="4 4"/>
    <line x1="400" y1="160" x2="480" y2="220" stroke="#00D4FF" strokeWidth="2" strokeDasharray="4 4"/>
    <line x1="400" y1="160" x2="600" y2="220" stroke="#7B2BE8" strokeWidth="2" strokeDasharray="4 4"/>
    
    {/* Docker Icon */}
    <rect x="150" y="290" width="40" height="30" fill="#00D4FF" opacity="0.3" rx="4"/>
    <rect x="155" y="295" width="30" height="8" fill="#00D4FF" opacity="0.6"/>
    <rect x="155" y="306" width="30" height="8" fill="#00D4FF" opacity="0.6"/>
    
    {/* Title */}
    <text x="400" y="380" fill="#00D4FF" fontSize="28" fontWeight="bold" textAnchor="middle">
      MICROSERVICES ARCHITECTURE
    </text>
  </svg>
);
