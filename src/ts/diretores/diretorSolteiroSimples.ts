import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomodacao } from "../enumeracoes/NomeAcomodacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorSolteiroSimples extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomodacao.SolteiroSimples
        objetoConstrutor.CamaSolteiro = 1
        objetoConstrutor.CamaCasal = 0
        objetoConstrutor.Suite = 1
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 0
        return objetoConstrutor.construir()
    }
}