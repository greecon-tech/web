import { AgricultureIcon, EnergyIcon, WaterIcon } from "./icons";

export function ProcessDiagram() {
  return (
    <svg width="400" height="300" viewBox="-20 0 400 300" fill="none" role="img" aria-label="Platform automation connecting renewable energy, water management, and smart agriculture">
      <rect x="70" y="60" width="220" height="180" rx="6" stroke="#2f3d35" strokeWidth="1.6" fill="none" />
      <line x1="180" y1="60" x2="180" y2="30" stroke="#2f3d35" strokeWidth="1.6" />
      <line x1="180" y1="150" x2="180" y2="180" stroke="#2f3d35" strokeWidth="1.6" />
      <line x1="70" y1="150" x2="40" y2="150" stroke="#2f3d35" strokeWidth="1.6" />
      <line x1="290" y1="150" x2="320" y2="150" stroke="#2f3d35" strokeWidth="1.6" />

      <g transform="translate(180,150)">
        <text x="0" y="-24" textAnchor="middle" fontSize="12" fontWeight="700" letterSpacing="1" fill="#2f3d35">
          AUTOMATION
        </text>
      </g>

      <g transform="translate(140,10)">
        <path
          d="M10 26c0-9 7-16 16-16 1 0 2 0 3 .3C31 4 37 0 44 0c9 0 16 6.5 17 15 6 1 10 6 10 12 0 7-6 13-13 13H14C7 40 2 35 2 28c0-6 4-11 8-13Z"
          fill="#448561"
        />
        <text x="40" y="24" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f7f1e9">
          Platform
        </text>
      </g>

      <g transform="translate(0,120)">
        <circle cx="40" cy="30" r="24" fill="#448561" />
        <g transform="translate(28,18)">
          <EnergyIcon />
        </g>
        <text x="40" y="70" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.5" fill="#2f3d35">
          RENEWABLE
        </text>
        <text x="40" y="84" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.5" fill="#2f3d35">
          ENERGY
        </text>
      </g>

      <g transform="translate(280,120)">
        <circle cx="40" cy="30" r="24" fill="#448561" />
        <g transform="translate(28,18)">
          <WaterIcon />
        </g>
        <text x="40" y="70" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.5" fill="#2f3d35">
          WATER
        </text>
        <text x="40" y="84" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.5" fill="#2f3d35">
          MANAGEMENT
        </text>
      </g>

      <g transform="translate(140,190)">
        <circle cx="40" cy="30" r="24" fill="#448561" />
        <g transform="translate(28,18)">
          <AgricultureIcon />
        </g>
        <text x="40" y="70" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.5" fill="#2f3d35">
          SMART
        </text>
        <text x="40" y="84" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="0.5" fill="#2f3d35">
          AGRICULTURE
        </text>
      </g>
    </svg>
  );
}
