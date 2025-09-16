import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function VenueInfo() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">{"📍 Venue Information 📍"}</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="bg-card border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
              <span>🎳</span>
              Gutterball, Lincoln
            </CardTitle>
          </CardHeader>
          <CardContent className="text-card-foreground space-y-3">
            <p className="text-lg">
              <strong>Meeting Point & Activities</strong>
            </p>
            <p>Our main venue for bowling, darts, pool, shuffleboard, and beer pong!</p>
            <p className="text-primary font-semibold">📍 Lincoln City Centre</p>
            <p className="text-muted-foreground">Arrive at 13:15 sharp!</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
              <span>🍽️</span>
              The Cosy Club
            </CardTitle>
          </CardHeader>
          <CardContent className="text-card-foreground space-y-3">
            <p className="text-lg">
              <strong>Festive Dinner Venue</strong>
            </p>
            <p>Enjoy a delicious 3-course festive meal to fuel up for the evening!</p>
            <p className="text-primary font-semibold">🕰️ 19:00 (7:00 PM)</p>
            <p className="text-muted-foreground">Get ready for some amazing food!</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-2 border-accent/20 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
              <span>🏕️</span>
              {"Thor's Tipi - The Grand Finale"}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-card-foreground space-y-3">
            <p className="text-lg">
              <strong>DGI Tradition Continues!</strong>
            </p>
            <p>
              {
                "End the evening in true DGI style at Thor's Tipi - our legendary final destination that's become a beloved tradition for all our celebrations!"
              }
            </p>
            <p className="text-primary font-semibold">🎉 The perfect end to a perfect day!</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
