// import { Button } from "../components/ui/button"
import { HoverCard } from "@radix-ui/react-hover-card"
import Header from "./components/Header"
import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <Header/>
      changed
      <HoverCard/>
    </div>
    
    

  )
}

export default App