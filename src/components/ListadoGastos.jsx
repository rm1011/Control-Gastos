import { Gasto } from "./Gasto";

export const ListadoGastos = ({ gastos }) => {
  return (
    <div className="listo-gasstos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos Aún"}</h2>

      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};
