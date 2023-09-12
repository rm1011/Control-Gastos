import { useState } from "react"
import { Header } from "./components/Header"

export const App = () => {
 
  const [presupuesto, setPresupuesto] = useState(0)

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </>
  )
}
