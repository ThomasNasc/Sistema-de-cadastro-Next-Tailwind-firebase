import Cliente from "../core/Cliente";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela } =
    useTabelaOuForm();
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(ObterTodos, [clientes]);
  function ObterTodos() {
    repo.ObterTodos().then((clientes) => {
      setClientes(clientes);
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }
  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
  }
  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    exibirTabela();
  }
  function novoCliente(cliente: Cliente) {
    exibirFormulario();
    setCliente(Cliente.vazio());
  }
  return {
    tabelaVisivel,
    formularioVisivel,
    cliente,
    clientes,
    exibirFormulario,
    exibirTabela,
    salvarCliente,
    novoCliente,
    clienteExcluido,
    clienteSelecionado,
    ObterTodos,
  };
}

export default useClientes;
