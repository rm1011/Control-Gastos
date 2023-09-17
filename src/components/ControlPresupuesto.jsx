import { useEffect, useState } from "react";

export const ControlPresupuesto = ({ gastos, presupuesto }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  const formateCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formateCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {formateCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formateCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};
