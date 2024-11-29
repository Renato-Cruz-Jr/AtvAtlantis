import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarDocumento extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
    this.execucao = true;
  }

  processar() {
    console.clear();
    console.log(`Listagem dos Documentos:`);

    this.cliente.Documentos.forEach((i) => {
      console.log(`------------------------------`);
      console.log(`|  Documento:`);
      console.log(`|  Tipo: ${i.Tipo}`);
      console.log(`|  Número: ${i.Numero}`);
      console.log(`|  Data de expedicao: ${i.DataExpedicao.toLocaleDateString()}`);
      console.log(`------------------------------`);
    });

    let documento = this.entrada.receberTexto("Qual o número do documento: ");
    this.cliente.Documentos.filter((doc) => doc.Numero == documento).forEach(
      (novo) => {
        let novoNumero = this.entrada.receberTexto("Qual o novo número: ");
        let novaData = this.entrada.receberData("Qual a nova data de expedição: ");
        novo.Numero = novoNumero;
        novo.DataExpedicao = novaData;
      }
    );
  }
}
