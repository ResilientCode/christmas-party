import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EventDetails() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-8 text-foreground">{"🎉 Get Ready for an Amazing Day! 🎉"}</h2>
      <Card className="max-w-2xl mx-auto bg-card border-2 border-accent/20">
        <CardHeader>
          <CardTitle className="text-2xl text-card-foreground flex items-center justify-center gap-2">
            <span>🎯</span>
            Event Overview
            <span>🎯</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-card-foreground space-y-4">
          <p className="text-pretty">
            Join us for the ultimate Christmas celebration featuring bowling, darts, pool, shuffleboard, and beer pong,
            followed by a festive 3-course dinner!
          </p>
          <p className="font-semibold text-primary">
            {"We'll finish the evening at Thor's Tipi - a true DGI tradition! 🏕️"}
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
