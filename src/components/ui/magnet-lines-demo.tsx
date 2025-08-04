import { MagnetLines } from "@/components/ui/magnet-lines"

function MagnetLinesDemo() {
  return (
    <MagnetLines
      rows={4}
      columns={4}
      containerSize="80px"
      lineColor="#4fd1c5"
      lineWidth="0.3vmin"
      lineHeight="1.5vmin"
      baseAngle={0}
      style={{ margin: "0" }}
      className="opacity-70"
    />
  )
}

export { MagnetLinesDemo };
