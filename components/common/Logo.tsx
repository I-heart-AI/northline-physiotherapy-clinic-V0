export interface LogoProps {
  variant?: 'header' | 'footer'
  showText?: boolean
}

export function Logo({ variant = 'header', showText = true }: LogoProps) {
  const height = variant === 'header' ? 32 : 40

  return (
    <div className="flex items-center gap-3">
      {/* Abstract "N" symbol - inspired by movement/progression */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left vertical line */}
        <rect x="8" y="6" width="4" height="36" fill="currentColor" className="text-primary" />
        {/* Diagonal line (movement) */}
        <line
          x1="12"
          y1="32"
          x2="36"
          y2="10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-primary-light"
        />
        {/* Right vertical line */}
        <rect x="36" y="6" width="4" height="36" fill="currentColor" className="text-primary" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-foreground text-sm md:text-base">Northline</span>
          <span className="text-xs md:text-sm text-muted">Physiotherapy</span>
        </div>
      )}
    </div>
  )
}
