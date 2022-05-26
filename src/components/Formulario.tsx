import React, { useState } from "react";
import Cliente from "../core/Cliente";
import Botão from "./Botão";
import Entrada from "./Entrada";
interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void;
  clienteMudou?: (cliente: Cliente) => void;
}

function Formulario(props: FormularioProps) {
  const id = props.cliente.id ?? null;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada somenteLeitura valor={id} texto="Codigo" className="mb-4" />
      ) : (
        false
      )}
      <Entrada
        valor={nome}
        valorMudou={setNome}
        texto="Nome"
        className="mb-4"
      />

      <Entrada
        valorMudou={setIdade}
        valor={idade}
        tipo="number"
        texto="Idade"
        className="mb-4"
      />
      <div className=" mt-3 flex justify-end">
        <Botão
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
          className={"bg-gradient-to-r from-blue-400 to-blue-700"}
        >
          {id ? "Alterar" : "Salvar"}
        </Botão>
        <Botão
          className={"bg-gradient-to-r from-gray-400 to-gray-700 ml-3"}
          onClick={props.cancelado}
        >
          Cancelar
        </Botão>
      </div>
    </div>
  );
}

export default Formulario;
