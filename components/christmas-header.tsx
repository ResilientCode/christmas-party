import { Card } from "@/components/ui/card"

export function ChristmasHeader() {
  return (
    <header className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90" />
      <div className="absolute inset-0 bg-[url('/festive-christmas-decorations-with-lights-and-orna.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative container mx-auto px-4 py-16 text-center">
        <div className="inline-block mb-4">
          <span className="text-6xl">🎄</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4 text-balance text-white drop-shadow-lg">
          DGI CHRISTMAS
          <br />
          <span className="text-white">EXTRAVAGANZA</span>
        </h1>
        <Card className="inline-block bg-white/95 backdrop-blur-sm border-2 border-white/30 p-6 mt-8">
          <div className="text-gray-800">
            <p className="text-2xl font-bold mb-2">📅 28th November 2025</p>
            <p className="text-xl">📍 Gutterball, Lincoln</p>
            <p className="text-xl">🕐 Meet at 13:15</p>
          </div>
        </Card>
      </div>
    </header>
  )
}
