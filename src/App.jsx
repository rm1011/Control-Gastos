import { useState } from "react"
import { Header } from "./components/Header"

export const App = () => {
 
  const [presupuesto, setPresupuesto] = useState(0);

const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
    </>
  )
}
