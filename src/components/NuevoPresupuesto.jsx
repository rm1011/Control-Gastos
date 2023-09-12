import { useState } from "react";
import { Mensaje } from "./Mensaje";



export const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState("")


    const handlePresupuesto = (e) => {
        e.preventDefault();
        if (!Number(presupuesto) || Number(presupuesto) < 0) {
            setMensaje("No es un presupuesto valido")
        } else{
            console.log("valido");
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" >
            <div className="campo">
               <label htmlFor="">Definir Presupuesto</label>
               <input 
                type="text" 
                className="nuevo-presupuesto" 
                placeholder="Añade tu Presupuesto"
                value={presupuesto}
                onChange={handlePresupuesto}
                />
                
            </div>

            <input type="submit" value="Añadir" />
            {
                mensaje &&
                <Mensaje tipo="error">{mensaje}</Mensaje>            }
        </form>
    </div>
  )
}
