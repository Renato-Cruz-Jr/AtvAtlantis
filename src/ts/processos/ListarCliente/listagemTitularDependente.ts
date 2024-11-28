import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitularDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()

        var processo = false
        let dependente = this.entrada.receberTexto('Qual o CPF do dependente? ')

        console.log('Iniciando a listagem do titular de um dependente específico...')

        for (let index = 0; index < this.clientes.length; index++) {
            for (let indexDep = 0; indexDep < this.clientes[index].Dependentes.length; indexDep++) {
                for (let indexDoc = 0; indexDoc < this.clientes[index].Dependentes[indexDep].Documentos.length; indexDoc++) {
                    if (dependente == this.clientes[index].Dependentes[indexDep].Documentos[indexDoc].Numero) {
                        processo = true

                        this.impressor = new ImpressorCliente(this.clientes[index])
                        console.log(this.impressor.imprimir())
                    }
                }
            }
        }
        
        if (processo != true) {
            console.log('\nCliente titular não encontrado!')
        }
    }
}