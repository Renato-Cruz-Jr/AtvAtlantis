import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";

export default class ImpressorAcomodacao implements Impressor {
    private acomodacao: Acomodacao
    constructor(acomodacao: Acomodacao) {
        this.acomodacao = acomodacao
    }
    imprimir(): string {
        let descricao = `\nNOMENCLATURA: ${this.acomodacao.NomeAcomodacao.toString()}\n`
            + `-- Quantia de leitos p/ solteiros: ${this.acomodacao.CamaSolteiro}\n`
            + `-- Quantia de leitos p/ casais: ${this.acomodacao.CamaCasal}\n`
            + `-- Quantia de suites: ${this.acomodacao.Suite}\n`
            + `-- Climatização: ${this.converterBooleano(this.acomodacao.Climatizacao)}\n`
            + `-- Quantia de garagens disponíveis: ${this.acomodacao.Garagem}\n`
        return descricao
    }

    private converterBooleano(valor: Boolean) {
        if (!valor) {
            return `NÃO`
        } else {
            return `SIM`
        }
    }
}