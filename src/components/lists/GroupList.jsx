import { useFetch } from "../../hooks/useFetch";
import "./CarList.css";

export function GroupList() {
  const carList = useFetch();

  const groupCarByBrand = carList.reduce((groupCar, car) => {
    const brand = car.marca_nome;
    if (groupCar[brand] == null) groupCar[brand] = [];
    groupCar[brand].push(car);
    return groupCar;
  }, {});

  const brandList = Object.entries(groupCarByBrand);

  return (
    <>
      <div className="carlist">
        {brandList.map(([key, value]) => {
          return (
            <div key={key}>
              <h4>{key}</h4>
              <div className="cards-container">
                {value.map((list) => (
                  <div key={list.id}>
                    <div className="card">
                      <span className="model">
                        {list.nome_modelo.toLowerCase()}
                      </span>
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
          );
        })}
      </div>
      {/* <div className="carlist">
        {Object.entries(groupCarByBrand).map(([key, value, index]) => {
          return (
            <>
              <h4 key={index}>{key}</h4>
              <div className="cards-container">
                {console.log("carniça!")}
                {console.log(value)}
                <ul>
                  {value.map((list, index) => (
                    <li key={index}>
                      <div className="card">
                        <span className="model">
                          {list.nome_modelo.toLowerCase()}
                        </span>
                        <span className="year">{list.ano}</span>
                        <span className="fipe">
                          {list.valor_fipe.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          );
        })}
      </div> */}
    </>
  );
}
