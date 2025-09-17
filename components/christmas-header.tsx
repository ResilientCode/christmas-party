'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function ChristmasHeader() {
  const [isHovered, setIsHovered] = useState(false)

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
            <p className="text-2xl font-bold mb-2">
              📅
              <span className="relative inline-block mx-1">
                <span className="relative">
                  28th November 2025
                  <span className="absolute inset-0 block h-[3px] w-full top-1/2 -translate-y-1/2 bg-red-500 transform -rotate-6"></span>
                </span>
              </span>
              <Popover open={isHovered} onOpenChange={setIsHovered}>
                <PopoverTrigger asChild>
                  <span
                    className="cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="text-2xl font-bold p-1 relative group hover:bg-yellow-200">
                      27th
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 group-hover:bg-yellow-600"></span>
                      <span className="absolute bottom-1 left-0 w-full h-[2px] bg-yellow-500 group-hover:bg-yellow-600"></span>
                    </span>
                  </span>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">A Quick Change of Plans!</h4>
                    <p className="text-sm text-muted-foreground">
                      Turns out Ellie completely forgot she's on annual leave on the 28th. Whoops! We've moved it to the 27th so she can join in on the fun.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
              November 2025
            </p>
            <p className="text-xl">📍 Gutterball, Lincoln</p>
            <p className="text-xl">🕐 Meet at 13:15</p>
          </div>
        </Card>
      </div>
    </header>
  )
}
