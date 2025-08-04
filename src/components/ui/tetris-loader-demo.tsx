import TetrisLoading from "@/components/ui/tetris-loader";

export default function TetrisLoaderDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Tetris Loading Component</h1>
        <p className="text-gray-300 text-lg">A fun loading animation for your portfolio</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <h3 className="text-white font-semibold mb-4">Small & Fast</h3>
          <TetrisLoading size="sm" speed="fast" loadingText="Loading quickly..." />
        </div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-white font-semibold mb-4">Medium & Normal</h3>
          <TetrisLoading size="md" speed="normal" loadingText="Loading..." />
        </div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-white font-semibold mb-4">Large & Slow</h3>
          <TetrisLoading size="lg" speed="slow" loadingText="Loading slowly..." />
        </div>
      </div>
    </div>
  );
} 