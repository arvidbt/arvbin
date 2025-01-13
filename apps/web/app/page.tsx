import { Button } from "@workspace/ui/components/button"
import { Mail } from "lucide-react"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-6xl font-bold font-serif">Arvbin Habits</h1>
        <p className="text-xl">Ta kontroll över ditt liv</p>
        <Button size="sm" className="w-min">
          <Mail />
          Logga in för att börja</Button>
      </div>
    </div>
  )
}

