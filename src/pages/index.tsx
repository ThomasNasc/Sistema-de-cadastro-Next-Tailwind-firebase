import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

import Botão from "../components/Botão";
import Formulario from "../components/Formulario";

import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    tabelaVisivel,
    cliente,
    clientes,
    exibirTabela,
    salvarCliente,
    novoCliente,
    clienteExcluido,
    clienteSelecionado,
  } = useClientes();
  return (
    <div
      className={
        " flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500  text-white"
      }
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botão
                className={"mb-4 bg-gradient-to-r from-green-400 to-green-700"}
                onClick={novoCliente}
              >
                Novo Cliente
              </Botão>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela()}
          />
        )}
      </Layout>
    </div>
  );
}
