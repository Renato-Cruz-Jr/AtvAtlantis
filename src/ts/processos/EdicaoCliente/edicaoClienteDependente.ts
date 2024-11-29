import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import MenuEditarCliente from "../../menus/menuEditarCliente";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";

import EditarDataDeNascimento from "./editarDataDeNascimento";
import EditarDocumento from "./editarDocumento";
import EditarNome from "./editarNome";
import EditarNomeSocial from "./editarNomeSocial";
import EditarTelefone from "./editarTelefone";

import CadastrarTelefonesCliente from "../CadastroCliente/cadastrarTelefonesCliente";
import CadastrarDocumentosCliente from "../CadastroCliente/cadastrarDocumentosCliente";

export default class EdicaoClienteDependente extends Processo {
  private clientes: Cliente[];
  constructor() {
    super();
    this.execucao = true;
    this.menu = new MenuEditarCliente();
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }
  processar(): void {
    console.clear();
    console.log('\nIniciando edição...\n')
    let titular = this.entrada.receberTexto("Qual o CPF do titular vinculado: ");

    console.log("Listagem dos dependentes:")

    this.clientes.map((clienteMap) => {
      clienteMap.Documentos.filter((docFilter) => {
        if(docFilter.Numero === titular && docFilter.Tipo === TipoDocumento.CPF) {
          clienteMap.Dependentes.forEach((dependentesForEach) => {
            dependentesForEach.Documentos.forEach(
              (documentoDependenteForEach) => { 
                console.log(`Nome: ${dependentesForEach.Nome}`)
                console.log(`Número do CPF: ${documentoDependenteForEach.Numero}\n`)
              }
            );
            dependentesForEach.Documentos.filter((dependenteFilter) => {
              let entradaDoCpf = this.entrada.receberTexto("Qual o CPF do dependente: ");
              if (dependenteFilter.Numero === entradaDoCpf && dependenteFilter.Tipo === TipoDocumento.CPF) {

                while (this.execucao) {
                  this.menu.mostrar();
                  console.log(`Nome do dependente: ${dependentesForEach.Nome}`)
                  console.log(`CPF do dependente: ${dependenteFilter.Numero}\n`)
                  this.opcao = this.entrada.receberNumero(`Qual opção deseja: `);

                  switch (this.opcao) {
                    case 1:
                      this.processo = new EditarNome(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 2:
                      this.processo = new EditarNomeSocial(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 3:
                      this.processo = new EditarDataDeNascimento(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 4:
                      this.processo = new EditarTelefone(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 5:
                      console.log('Não é possível editar endereço de dependentes!')
                      console.log('\nEndereço de dependente é através do titular')
                      break;
                    case 6:
                      this.processo = new EditarDocumento(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 7:
                      this.processo = new CadastrarTelefonesCliente(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 8:
                      this.processo = new CadastrarDocumentosCliente(dependentesForEach);
                      this.processo.processar();
                      break;
                    case 0:
                      this.execucao = false;
                      break;
                    default:
                      console.log('Essa opção não existe ')
                  }
                }
              }
            });
          });
        }
      })
    })
  }
}