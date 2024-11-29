import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import CadastrarTelefonesCliente from "./cadastrarTelefonesCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroClienteAcomodacao from "../cadastroClienteAcomodacao";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('\nIniciando o cadastro de um novo cliente...\n')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente:')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente:')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento:')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastrarTelefonesCliente(cliente)
        this.processo.processar()

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()
        
        this.processo = new CadastroClienteAcomodacao(cliente);
        this.processo.processar();

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('\nFinalizando o cadastro do cliente...\n')
    }
}