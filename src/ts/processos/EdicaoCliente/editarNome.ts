import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarNome extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }

  processar() {
    let novoNome = this.entrada.receberTexto("Qual o novo nome: ");
    this.cliente.Nome = novoNome;
  }
}
