import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import MenuEditarEndereco from "../../menus/menuEditarEndereco";

export default class EditarEndereco extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.execucao = true;
    this.menu = new MenuEditarEndereco();
    this.cliente = cliente;
  }

  processar() {
    while (this.execucao) {
      this.menu.mostrar();
      this.opcao = this.entrada.receberNumero(`Qual opção deseja? `);      
        switch (this.opcao) {
          case 1:
            let rua = this.entrada.receberTexto("Qual a nova rua?");
            this.cliente.Endereco.Rua = rua;
            break;
          case 2:
            let bairro = this.entrada.receberTexto("Qual o novo bairro?");
            this.cliente.Endereco.Bairro = bairro;
            break;
          case 3:
            let cidade = this.entrada.receberTexto("Qual a nova cidade?");
            this.cliente.Endereco.Cidade = cidade;
            break;
          case 4:
            let estado = this.entrada.receberTexto("Qual o novo estado?");
            this.cliente.Endereco.Estado = estado;
            break;
          case 5:
            let pais = this.entrada.receberTexto("Qual o novo país?");
            this.cliente.Endereco.Pais = pais;
            break;
          case 6:
            let codigoPostal = this.entrada.receberTexto("Qual o novo código postal?");
            this.cliente.Endereco.CodigoPostal = codigoPostal;
            break;
          case 0:
            this.execucao = false;
            break;
          default:
            console.log('Opção não entendida :(')

          this.cliente.Dependentes.map(
            (clienteEndereco) => (clienteEndereco.Endereco = this.cliente.Endereco as Endereco)
          );
        }
    }
  }
}