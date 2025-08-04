import { cn } from '@/lib/utils'

interface PatternCardProps {
  children: React.ReactNode
  className?: string
  patternClassName?: string
  gradientClassName?: string
}

export function PatternCard({ 
  children, 
  className,
  patternClassName,
  gradientClassName
}: PatternCardProps) {
  return (
    <div className={cn(
      "border w-full rounded-md overflow-hidden",
      "bg-background",
      "border-border",
      "p-3",
      "relative", // Added relative positioning
      className
    )}>
      <div className={cn(
        "absolute inset-0", // Position absolutely to fill the container
        "bg-repeat",
        "bg-dot-pattern-light dark:bg-dot-pattern",
        patternClassName
      )}></div>
      <div className={cn(
        "absolute inset-0", // Position absolutely to fill the container
        "bg-gradient-to-tr",
        "from-background/90 via-background/40 to-background/10",
        gradientClassName
      )}></div>
      <div className="relative z-10"> {/* Wrapper to ensure content is above background layers */}
        {children}
      </div>
    </div>
  )
}

export function PatternCardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-left p-4 md:p-6 relative", className)} {...props} />;
}
