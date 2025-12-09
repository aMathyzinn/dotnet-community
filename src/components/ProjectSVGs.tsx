export const BlazorDashboardSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A1F2E"/>
    <rect x="20" y="20" width="360" height="260" rx="8" fill="#0A0E14" stroke="#00D4FF" strokeWidth="2"/>
    
    {/* Chart Bars */}
    <rect x="50" y="180" width="40" height="80" fill="#00D4FF" opacity="0.3"/>
    <rect x="110" y="140" width="40" height="120" fill="#00D4FF" opacity="0.5"/>
    <rect x="170" y="120" width="40" height="140" fill="#00D4FF" opacity="0.7"/>
    <rect x="230" y="100" width="40" height="160" fill="#00D4FF"/>
    <rect x="290" y="150" width="40" height="110" fill="#00D4FF" opacity="0.6"/>
    
    {/* Grid Lines */}
    <line x1="40" y1="100" x2="350" y2="100" stroke="#00D4FF" strokeOpacity="0.2" strokeWidth="1"/>
    <line x1="40" y1="140" x2="350" y2="140" stroke="#00D4FF" strokeOpacity="0.2" strokeWidth="1"/>
    <line x1="40" y1="180" x2="350" y2="180" stroke="#00D4FF" strokeOpacity="0.2" strokeWidth="1"/>
    <line x1="40" y1="220" x2="350" y2="220" stroke="#00D4FF" strokeOpacity="0.2" strokeWidth="1"/>
    
    {/* Title */}
    <text x="200" y="50" fill="#00D4FF" fontSize="24" fontWeight="bold" textAnchor="middle">
      DASHBOARD
    </text>
    
    {/* Blazor Icon */}
    <circle cx="350" cy="40" r="15" fill="#7B2BE8"/>
    <path d="M345 35 L350 45 L355 35" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

export const MauiAppSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A1F2E"/>
    
    {/* Phone Frame */}
    <rect x="120" y="30" width="160" height="240" rx="20" fill="#0A0E14" stroke="#00D4FF" strokeWidth="3"/>
    <rect x="130" y="50" width="140" height="200" fill="#0F1419"/>
    
    {/* Screen Content */}
    <rect x="140" y="70" width="120" height="30" rx="4" fill="#00D4FF" opacity="0.3"/>
    <rect x="140" y="110" width="120" height="20" rx="4" fill="#00D4FF" opacity="0.2"/>
    <rect x="140" y="140" width="80" height="20" rx="4" fill="#00D4FF" opacity="0.2"/>
    
    {/* App Icons */}
    <circle cx="160" cy="190" r="15" fill="#7B2BE8"/>
    <circle cx="200" cy="190" r="15" fill="#FF8C42"/>
    <circle cx="240" cy="190" r="15" fill="#00D4FF"/>
    
    {/* Home Button */}
    <circle cx="200" cy="245" r="8" stroke="#00D4FF" strokeWidth="2"/>
    
    {/* MAUI Text */}
    <text x="200" y="290" fill="#00D4FF" fontSize="20" fontWeight="bold" textAnchor="middle">
      .NET MAUI
    </text>
  </svg>
);

export const MicroservicesSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A1F2E"/>
    
    {/* Service Boxes */}
    <rect x="30" y="100" width="80" height="80" rx="8" fill="#0A0E14" stroke="#00D4FF" strokeWidth="2"/>
    <rect x="160" y="50" width="80" height="80" rx="8" fill="#0A0E14" stroke="#7B2BE8" strokeWidth="2"/>
    <rect x="160" y="170" width="80" height="80" rx="8" fill="#0A0E14" stroke="#FF8C42" strokeWidth="2"/>
    <rect x="290" y="100" width="80" height="80" rx="8" fill="#0A0E14" stroke="#00D4FF" strokeWidth="2"/>
    
    {/* Connection Lines */}
    <line x1="110" y1="140" x2="160" y2="90" stroke="#00D4FF" strokeWidth="2" strokeDasharray="4 4"/>
    <line x1="110" y1="140" x2="160" y2="210" stroke="#00D4FF" strokeWidth="2" strokeDasharray="4 4"/>
    <line x1="240" y1="90" x2="290" y2="140" stroke="#7B2BE8" strokeWidth="2" strokeDasharray="4 4"/>
    <line x1="240" y1="210" x2="290" y2="140" stroke="#FF8C42" strokeWidth="2" strokeDasharray="4 4"/>
    
    {/* Service Labels */}
    <text x="70" y="145" fill="#00D4FF" fontSize="12" fontWeight="bold" textAnchor="middle">API</text>
    <text x="200" y="95" fill="#7B2BE8" fontSize="12" fontWeight="bold" textAnchor="middle">AUTH</text>
    <text x="200" y="215" fill="#FF8C42" fontSize="12" fontWeight="bold" textAnchor="middle">DATA</text>
    <text x="330" y="145" fill="#00D4FF" fontSize="12" fontWeight="bold" textAnchor="middle">CACHE</text>
    
    {/* Title */}
    <text x="200" y="30" fill="#00D4FF" fontSize="18" fontWeight="bold" textAnchor="middle">
      MICROSERVICES
    </text>
  </svg>
);

export const ECommerceSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A1F2E"/>
    <rect x="20" y="20" width="360" height="260" rx="8" fill="#0A0E14" stroke="#00D4FF" strokeWidth="2"/>
    
    {/* Shopping Cart Icon */}
    <circle cx="200" cy="120" r="50" fill="#00D4FF" opacity="0.2"/>
    <path d="M170 100 L180 100 L190 140 L210 140 L220 100 L230 100" stroke="#00D4FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="195" cy="150" r="5" fill="#00D4FF"/>
    <circle cx="215" cy="150" r="5" fill="#00D4FF"/>
    
    {/* Product Cards */}
    <rect x="40" y="180" width="80" height="80" rx="4" fill="#0F1419" stroke="#00D4FF" strokeWidth="1"/>
    <rect x="160" y="180" width="80" height="80" rx="4" fill="#0F1419" stroke="#00D4FF" strokeWidth="1"/>
    <rect x="280" y="180" width="80" height="80" rx="4" fill="#0F1419" stroke="#00D4FF" strokeWidth="1"/>
    
    {/* Title */}
    <text x="200" y="50" fill="#00D4FF" fontSize="22" fontWeight="bold" textAnchor="middle">
      E-COMMERCE
    </text>
  </svg>
);

export const AIChatBotSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A1F2E"/>
    
    {/* Robot Head */}
    <rect x="140" y="80" width="120" height="120" rx="20" fill="#0A0E14" stroke="#00D4FF" strokeWidth="3"/>
    
    {/* Eyes */}
    <circle cx="175" cy="130" r="15" fill="#00D4FF"/>
    <circle cx="175" cy="130" r="8" fill="#0A0E14"/>
    <circle cx="225" cy="130" r="15" fill="#00D4FF"/>
    <circle cx="225" cy="130" r="8" fill="#0A0E14"/>
    
    {/* Antenna */}
    <line x1="200" y1="80" x2="200" y2="50" stroke="#00D4FF" strokeWidth="3"/>
    <circle cx="200" cy="45" r="8" fill="#7B2BE8"/>
    
    {/* Mouth/Speech Line */}
    <rect x="160" y="165" width="80" height="20" rx="10" fill="#0A0E14" stroke="#00D4FF" strokeWidth="2"/>
    <line x1="170" y1="175" x2="190" y2="175" stroke="#00D4FF" strokeWidth="2"/>
    <line x1="195" y1="175" x2="210" y2="175" stroke="#00D4FF" strokeWidth="2"/>
    <line x1="215" y1="175" x2="230" y2="175" stroke="#00D4FF" strokeWidth="2"/>
    
    {/* Chat Bubbles */}
    <circle cx="80" cy="120" r="25" fill="#7B2BE8" opacity="0.3"/>
    <circle cx="320" cy="160" r="20" fill="#FF8C42" opacity="0.3"/>
    
    {/* AI Text */}
    <text x="200" y="240" fill="#00D4FF" fontSize="24" fontWeight="bold" textAnchor="middle">
      AI CHATBOT
    </text>
  </svg>
);

export const DevOpsSVG = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#1A1F2E"/>
    
    {/* Pipeline Flow */}
    <rect x="40" y="120" width="70" height="60" rx="8" fill="#0A0E14" stroke="#00D4FF" strokeWidth="2"/>
    <text x="75" y="155" fill="#00D4FF" fontSize="12" fontWeight="bold" textAnchor="middle">CODE</text>
    
    <path d="M110 150 L140 150" stroke="#00D4FF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
    
    <rect x="140" y="120" width="70" height="60" rx="8" fill="#0A0E14" stroke="#7B2BE8" strokeWidth="2"/>
    <text x="175" y="155" fill="#7B2BE8" fontSize="12" fontWeight="bold" textAnchor="middle">BUILD</text>
    
    <path d="M210 150 L240 150" stroke="#7B2BE8" strokeWidth="3" markerEnd="url(#arrowhead2)"/>
    
    <rect x="240" y="120" width="70" height="60" rx="8" fill="#0A0E14" stroke="#FF8C42" strokeWidth="2"/>
    <text x="275" y="155" fill="#FF8C42" fontSize="12" fontWeight="bold" textAnchor="middle">TEST</text>
    
    <path d="M310 150 L340 150" stroke="#FF8C42" strokeWidth="3" markerEnd="url(#arrowhead3)"/>
    
    {/* Deploy Icon */}
    <circle cx="355" cy="150" r="25" fill="#0A0E14" stroke="#00D4FF" strokeWidth="2"/>
    <path d="M355 140 L355 160 M345 150 L365 150" stroke="#00D4FF" strokeWidth="2"/>
    
    {/* Title */}
    <text x="200" y="40" fill="#00D4FF" fontSize="20" fontWeight="bold" textAnchor="middle">
      CI/CD PIPELINE
    </text>
    
    {/* Arrows */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#00D4FF" />
      </marker>
      <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#7B2BE8" />
      </marker>
      <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#FF8C42" />
      </marker>
    </defs>
  </svg>
);
