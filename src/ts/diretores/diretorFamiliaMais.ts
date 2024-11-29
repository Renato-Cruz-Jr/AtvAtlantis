import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomodacao } from "../enumeracoes/NomeAcomodacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomodacao.FamiliaMais
        objetoConstrutor.CamaSolteiro = 5
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.Suite = 2
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        return objetoConstrutor.construir()
    }
}