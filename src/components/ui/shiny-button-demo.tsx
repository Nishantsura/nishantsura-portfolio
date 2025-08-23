import { GlowButton } from "./shiny-button-1";

export default function ShinyButtonDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 gap-8 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Shiny Button Demo</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <GlowButton onClick={() => console.log('Button clicked!')}>
          Let's Build Together
        </GlowButton>
        <GlowButton onClick={() => console.log('Process clicked!')}>
          See My Process
        </GlowButton>
        <GlowButton onClick={() => console.log('Contact clicked!')}>
          Get In Touch
        </GlowButton>
      </div>
    </div>
  );
}
