import "./CarAdd.css";
import { useState } from "react";
import api from "../../services/api";
import { nanoid } from "nanoid";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export function CarAdd() {
  const [newCarForm, setNewCarForm] = useState({
    marca_nome: "",
    nome_modelo: "",
    ano: "",
    combustivel: "",
    num_portas: "",
    valor_fipe: "",
    cor: "",
  });

  function handler(e) {
    const newData = { ...newCarForm };
    newData[e.target.id] = e.target.value;
    setNewCarForm(newData);
  }

  const createContactHandler = async (e) => {
    e.preventDefault();
    const timeElapsed = Date.now();
    await api.post("cars", {
      id: nanoid(),
      marca_nome: newCarForm.marca_nome,
      nome_modelo: newCarForm.nome_modelo,
      ano: newCarForm.ano,
      combustivel: newCarForm.combustivel,
      num_portas: newCarForm.num_portas,
      valor_fipe: newCarForm.valor_fipe,
      cor: newCarForm.cor,
      timestamp_cadastro: timeElapsed,
    });
    setNewCarForm({
      marca_nome: "",
      nome_modelo: "",
      ano: "",
      combustivel: "",
      num_portas: "",
      valor_fipe: "",
      cor: "",
    });
  };

  return (
    <>
      <div className="card-car-add">
        <div className="form-car">
          <form onSubmit={createContactHandler}>
            <div className="form-row">
              <div className="form-col">
                <h5>Modelo</h5>
                <InputText
                  value={newCarForm.nome_modelo}
                  id="nome_modelo"
                  onChange={(e) => handler(e)}
                />
              </div>
              <div className="form-col">
                <h5>Marca</h5>
                <InputText
                  value={newCarForm.marca_nome}
                  id="marca_nome"
                  onChange={(e) => handler(e)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <h5>Ano</h5>
                <InputText
                  value={newCarForm.ano}
                  id="ano"
                  onChange={(e) => handler(e)}
                />
              </div>
              <div className="form-col">
                <h5>Cor</h5>
                <InputText
                  value={newCarForm.cor}
                  id="cor"
                  onChange={(e) => handler(e)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <h5>Valor Fipe</h5>
                <InputText
                  value={newCarForm.valor_fipe}
                  id="valor_fipe"
                  onChange={(e) => handler(e)}
                />
              </div>
              <div className="form-col">
                <h5>Combustível</h5>
                <InputText
                  value={newCarForm.combustivel}
                  id="combustivel"
                  onChange={(e) => handler(e)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <h5>Número de Portas</h5>
                <InputText
                  value={newCarForm.num_portas}
                  id="num_portas"
                  onChange={(e) => handler(e)}
                />
              </div>
              <div className="form-col">
                <button type="submit">Adicionar Carro</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
