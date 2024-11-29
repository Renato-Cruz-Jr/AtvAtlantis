import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import CadastrarTelefonesCliente from "./cadastrarTelefonesCliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Endereco from "../../modelos/endereco";

export default class CadastroClienteDependente extends Processo {
    private clientes: Cliente[];
    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
        this.execucao = true;
    }

    processar(): void {
        console.log('\nIniciando o cadastro de um novo dependente...\n')
        
        let cpfCliente = this.entrada.receberTexto(`Qual o CPF do titular a ser vinculado:`);
        this.clientes.forEach((clienteForEach) =>
            clienteForEach.Documentos.filter((dadosCPF) => {
                if (dadosCPF.Numero === cpfCliente && dadosCPF.Tipo === TipoDocumento.CPF) {
                    while (this.execucao) {

                        let nome = this.entrada.receberTexto('Qual o nome do novo cliente:')
                        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente:')
                        let dataNascimento = this.entrada.receberData('Qual a data de nascimento:')
                        let clienteDependente = new Cliente(nome, nomeSocial, dataNascimento)

                        clienteForEach.Dependentes.push(clienteDependente);

                        this.processo = new CadastrarTelefonesCliente(clienteDependente)
                        this.processo.processar()

                        clienteDependente.Endereco = clienteForEach.Endereco.clonar() as Endereco;

                        this.processo = new CadastrarDocumentosCliente(clienteDependente);
                        this.processo.processar();
                        this.execucao = false;

                        console.log('\nFinalizando o cadastro do dependente...\n')
                    }
                }
            })
        );
    }
}