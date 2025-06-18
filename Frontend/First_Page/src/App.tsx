
// import { Button } from "../components/ui/button"
import { HoverCard } from "@radix-ui/react-hover-card"
import Header from "./components/Header"
// import { But
import { AppSidebar } from "./components/app-sidebar"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { SidebarTrigger } from "./components/ui/sidebar"


function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <Header/>
      changed
      <HoverCard/>
    <div className="flex min-h-svh">
      <AppSidebar />
      <SidebarTrigger/>
      <div className="flex flex-1 flex-col p-4 items-center justify-center">
        <Card />
        <Button>Click me</Button>
      </div>
    </div>
  )
}

export default App