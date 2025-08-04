"use client"

import { AnimatedCard } from "@/components/ui/feature-block-animated-card"

export function AnimatedCardDemo() {
  return (
    <AnimatedCard
      title="Product Management Tools"
      description="Essential tools and platforms I use to ship fast, solve real problems, and build with startup-minded teams."
      icons={[
        {
          icon: <FigmaIcon className="h-4 w-4" />,
          size: "sm",
        },
        {
          icon: <JiraIcon className="h-6 w-6 dark:text-white" />,
          size: "md",
        },
        {
          icon: <AnalyticsIcon className="h-8 w-8 dark:text-white" />,
          size: "lg",
        },
        {
          icon: <StripeIcon className="h-6 w-6" />,
          size: "md",
        },
        {
          icon: <FirebaseIcon className="h-4 w-4" />,
          size: "sm",
        },
      ]}
    />
  )
}

const FigmaIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7C21 5.9 20.1 5 19 5H16V12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12V5H9C7.9 5 7 5.9 7 7V9C7 10.1 7.9 11 9 11H12V12C12 14.21 13.79 16 16 16C18.21 16 20 14.21 20 12V11H19C17.9 11 17 10.1 17 9Z"/>
    </svg>
  )
}

const JiraIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13c2.493 0 4.209-1.96 4.209-4.208 0-2.493-1.96-4.209-4.209-4.209H0v2.202h11.571zM23.017 11.513H11.455a5.215 5.215 0 0 0 5.215 5.214h2.129A4.209 4.209 0 0 0 23.017 12.5V11.513zM5.736 0v2.202h17.281A4.209 4.209 0 0 0 18.808 0H5.736z"/>
    </svg>
  )
}

const StripeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.831 3.47 1.426 3.47 2.338 0 .914-.796 1.431-2.126 1.431-1.72 0-4.516-.924-6.378-2.168l-.9 5.555C8.203 22.99 10.82 24 13.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h-.001z"/>
    </svg>
  )
}

const AnalyticsIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
    </svg>
  )
}

const FirebaseIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-16a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/>
    </svg>
  )
} 