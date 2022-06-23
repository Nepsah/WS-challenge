import { useFetch } from "../../hooks/useFetch";
import "./CarList.css";

export function CarList() {
  const carList = useFetch();

  const new_cars = carList.sort(
    (car1, car2) => car1.timestamp_cadastro - car2.timestamp_cadastro
  );
  const first = new_cars.slice(0, 5);

  const old_cars = carList.filter((x) => x.ano < 2005);

  const promo_cars = carList.sort(
    (car1, car2) => car1.valor_fipe - car2.valor_fipe
  );

  const cheapestCars = promo_cars.slice(0, 3);

  console.log(first);
  return (
    <>
      <div className="carlist">
        <h4>Mais recentes</h4>
        <div className="cards-container">
          {first.map((list) => (
            <div key={list.id}>
              <div className="card">
                <span className="model">{list.nome_modelo.toLowerCase()}</span>
                <span className="year">{list.ano}</span>
                <span className="fipe">
                  {list.valor_fipe.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carlist">
        <h4>Carros antigos</h4>
        <div className="cards-container">
          {old_cars.map((list) => (
            <div key={list.id}>
              <div className="card">
                <span className="model">{list.nome_modelo.toLowerCase()}</span>
                <span className="year">{list.ano}</span>
                <span className="fipe">
                  {list.valor_fipe.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carlist">
        <h4>Promoção</h4>
        <div className="cards-container">
          {cheapestCars.map((list) => (
            <div key={list.id}>
              <div className="card">
                <span className="model">{list.nome_modelo.toLowerCase()}</span>
                <span className="year">{list.ano}</span>
                <span className="fipe">
                  {list.valor_fipe.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
