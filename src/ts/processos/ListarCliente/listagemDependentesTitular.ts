import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependente from "../../impressores/impressorDependente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentesTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear();
        let titular = this.entrada.receberTexto(`Qual o CPF do titular? `);
        console.log("Iniciando a listagem dos dependentes de um titular específico...");
        
        this.clientes.map((clienteMap) => {
          clienteMap.Documentos.filter((docFilter) => {

            if (docFilter.Numero === titular) {
              clienteMap.Dependentes.forEach((dependentes) => {
                this.impressor = new ImpressorDependente(dependentes);
                console.log(this.impressor.imprimir());
              });
            }
            
          });
        });
    }
}