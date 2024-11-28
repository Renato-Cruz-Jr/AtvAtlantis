import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";

export default class DeletaTitular extends Processo {
  private cliente: Cliente[];
  constructor() {
    super();
    this.cliente = Armazem.InstanciaUnica.Clientes;
    this.execucao = true;
  }
  processar(): void {
    while (this.execucao) {
      if (this.cliente.length == 0) {
        console.clear()
        console.log("Não há clientes no momento!");
        this.execucao = false;
      } else {
        this.cliente.forEach((clientesForEach) => {
          clientesForEach.Documentos.forEach((docsForEach) => {
            console.log(`Nome: ${clientesForEach.Nome}`)
            console.log(`CPF: ${docsForEach.Numero} `)
          });
        });
        this.cliente.forEach((clientesForEach) => {
          clientesForEach.Documentos.forEach((docsForEach) => {
            let numeroCpf = this.entrada.receberTexto("\nQual o número do CPF do cliente a deletar? ");
            if (numeroCpf === docsForEach.Numero && TipoDocumento.CPF === docsForEach.Tipo) {
              let index = this.cliente.indexOf(clientesForEach);
              this.cliente.splice(index, 1);
              this.execucao = false;
              console.clear()
              console.log("Cliente deletado com sucesso!")
            } else {
              console.log('Opção não entendida :(')
              this.execucao = false;
            }
          });
        });
      }
    }
  }
}