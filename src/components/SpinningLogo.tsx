import React from 'react';

interface SpinningLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  className?: string;
}

const SpinningLogo: React.FC<SpinningLogoProps> = ({ 
  size = 'md', 
  variant = 'light',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const colors = {
    light: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      accent: '#06B6D4'
    },
    dark: {
      primary: '#60A5FA',
      secondary: '#A78BFA',
      accent: '#22D3EE'
    }
  };

  const currentColors = colors[variant];

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
   {/* Outer wavy ring */}
<div className="absolute inset-0 animate-wave">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke={currentColors.primary}
      strokeWidth="2"
      strokeDasharray="20 10"
      opacity="0.6"
    />
  </svg>
</div>

{/* Middle wavy path */}
<div className="absolute inset-2 animate-waveReverse">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path
      d="M50,10 Q80,30 70,50 Q60,70 50,90 Q40,70 30,50 Q20,30 50,10"
      fill="none"
      stroke={currentColors.secondary}
      strokeWidth="3"
      opacity="0.8"
    />
  </svg>
</div>


  {/* Inner core as full logo (bigger inside ring) */}
<div className="absolute inset-2 rounded-full flex items-center justify-center animate-pulse-slow overflow-hidden shadow-lg">
  <img 
    src="/WhatsApp Image 2025-08-13 at 2.39.12 PM.jpeg" 
    alt="Logo" 
    className="w-full h-full object-cover rounded-full"
  />
</div>



      {/* Rotating dots */}
      <div className="absolute inset-0 animate-spin">
        <div 
          className="absolute w-2 h-2 rounded-full top-0 left-1/2 transform -translate-x-1/2"
          style={{ backgroundColor: currentColors.accent }}
        ></div>
        <div 
          className="absolute w-2 h-2 rounded-full bottom-0 left-1/2 transform -translate-x-1/2"
          style={{ backgroundColor: currentColors.accent }}
        ></div>
        <div 
          className="absolute w-2 h-2 rounded-full left-0 top-1/2 transform -translate-y-1/2"
          style={{ backgroundColor: currentColors.accent }}
        ></div>
        <div 
          className="absolute w-2 h-2 rounded-full right-0 top-1/2 transform -translate-y-1/2"
          style={{ backgroundColor: currentColors.accent }}
        ></div>
      </div>
    </div>
  );
};

export default SpinningLogo;