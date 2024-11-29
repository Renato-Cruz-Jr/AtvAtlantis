import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarNomeSocial extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }

  processar() {
    let novoNomeSocial = this.entrada.receberTexto("Qual o novo nome social: ");
    this.cliente.NomeSocial = novoNomeSocial;
  }
}
