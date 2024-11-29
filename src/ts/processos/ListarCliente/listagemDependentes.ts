import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDosDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    
    processar(): void {
        console.clear()
        console.log('Listagem de Dependentes')
        this.clientes.forEach(cliente => {
            cliente.Dependentes.forEach(dependente => {
                this.impressor = new ImpressorCliente(dependente)
                console.log(this.impressor.imprimir())
            })
        })
    }
}