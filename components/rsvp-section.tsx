import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
export function RSVPSection() {

  const handleRsvpClick = () => {
    alert('Seriously, you clicked this? Just send a thumbs up in slack 😉');
  };

  return (
    <section className="text-center pb-16">
      <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{"🎄 Ready to Join the Fun? 🎄"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-xl text-primary-foreground/90">{"Don't miss out on the DGI Christmas Extravaganza!"}</p>
          <Button
            size="lg"
            className="bg-card text-card-foreground hover:bg-card/90 text-xl px-8 py-4 font-bold border-2 border-accent"
            onClick={handleRsvpClick}
          >
            🎉 RSVP NOW 🎉
          </Button>
          <div className="text-sm text-primary-foreground/80 space-y-1">
            <p>Questions? Contact the DGI team</p>
            <p>📧 Drop Ellie message | 📱 01522 123456</p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
