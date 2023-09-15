export const ControlPresupuesto = ({presupuesto}) => {

    const formateCantidad =(cantidad) => {
       return cantidad.toLocaleString("en-US",{
            style: "currency",
            currency:"USD"
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica</p>
      </div>
      <div className="contenido-presupuesto">
        <p><span>Presupuesto: </span>{formateCantidad(presupuesto)}</p>
        <p><span>Disponible: </span>{formateCantidad(presupuesto)}</p>
        <p><span>Gastado: </span>{formateCantidad(0)}</p>
      </div>
    </div>
  );
};
