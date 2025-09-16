import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  { time: "13:30", activity: "Bowling", icon: "🎳", description: "Strike up some fun!" },
  { time: "14:30", activity: "Darts", icon: "🎯", description: "Aim for the bullseye!" },
  { time: "15:30", activity: "Pool", icon: "🎱", description: "Rack 'em up!" },
  { time: "16:30", activity: "Shuffleboard", icon: "🏒", description: "Slide to victory!" },
  { time: "17:30", activity: "Beer Pong", icon: "🍺", description: "Cheers to good times!" },
  { time: "19:00", activity: "3 Course Festive Dinner", icon: "🍽️", description: "At The Cosy Club" },
  { time: "Late", activity: "Thor's Tipi", icon: "🏕️", description: "DGI tradition continues!" },
]

export function ActivityTimeline() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">{"🕐 Activity Schedule 🕐"}</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((item, index) => (
            <Card key={index} className="bg-card border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="text-2xl font-bold text-primary">{item.time}</div>
                    <div className="text-lg">{item.activity}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
