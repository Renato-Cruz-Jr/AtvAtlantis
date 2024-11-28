import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import MenuEditarCliente from "../../menus/menuEditarCliente";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";

import EditarDataDeNascimento from "./editarDataDeNascimento";
import EditarDocumento from "./editarDocumento";
import EditarEndereco from "./editarEndereco";
import EditarNome from "./editarNome";
import EditarNomeSocial from "./editarNomeSocial";
import EditarTelefone from "./editarTelefone";

import CadastrarTelefonesCliente from "../CadastroCliente/cadastrarTelefonesCliente";
import CadastrarDocumentosCliente from "../CadastroCliente/cadastrarDocumentosCliente";

export default class EdicaoClienteTitular extends Processo {
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
    let clienteCPF = this.entrada.receberTexto("Qual o CPF do titular a ser editado?");
    
    this.clientes.forEach((clienteForEach) => {
      clienteForEach.Documentos.filter((clienteDocFilter) => {
        if(clienteDocFilter.Numero === clienteCPF && clienteDocFilter.Tipo === TipoDocumento.CPF){
          
            while (this.execucao) {
            this.menu.mostrar();
            console.log(`Nome do cliente: ${clienteForEach.Nome}`);
            console.log(`CPF do cliente: ${clienteDocFilter.Numero}`);
            this.opcao = this.entrada.receberNumero(`Qual opção deseja? `);
            
            switch (this.opcao) {
              case 1:
                this.processo = new EditarNome(clienteForEach);
                this.processo.processar();
                break;
              case 2:
                this.processo = new EditarNomeSocial(clienteForEach);
                this.processo.processar();
                break;
              case 3:
                this.processo = new EditarDataDeNascimento(clienteForEach);
                this.processo.processar();
                break;
              case 4:
                this.processo = new EditarTelefone(clienteForEach);
                this.processo.processar();
                break;
              case 5:
                this.processo = new EditarEndereco(clienteForEach);
                this.processo.processar();
                break;
              case 6:
                this.processo = new EditarDocumento(clienteForEach);
                this.processo.processar();
                break;
              case 7:
                this.processo = new CadastrarTelefonesCliente(clienteForEach);
                this.processo.processar();
                break;
              case 8:
                this.processo = new CadastrarDocumentosCliente(clienteForEach);
                this.processo.processar();
                break;
              case 0:
                this.execucao = false;
                break;
              default:
                console.log('Opção não entendida :(')
            }
          }
        }
      });
    });
  }
}