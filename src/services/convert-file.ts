import { json2xml } from "xml-js";

interface ICSVFile {
    Chave: string;
    Valor: string;
}

export const convertFile = (files: ICSVFile[], id: number) => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    if (id === 3) {
        const input = {
            operadora: {
                registroAns: files[0].Valor,
                cnpjOperadora: files[1].Valor,
                solicitacao: {
                    nossoNumero: files[2].Valor,
                    isencaoOnus: files[3].Valor,
                    inclusaoPrestador: {
                        classificacao: files[4].Valor,
                        cnpjCpf: files[5].Valor,
                        cnes: files[6].Valor,
                        uf: files[7].Valor,
                        codigoMunicipioIBGE: files[8].Valor,
                        razaoSocial: files[9].Valor,
                        relacaoOperadora: files[10].Valor,
                        tipoContratualizacao: files[11].Valor,
                        registroANSOperadoraIntermediaria: files[12].Valor,
                        dataContratualizacao: files[13].Valor,
                        dataInicioPrestacaoServico: files[14].Valor,
                        disponibilidadeServico: files[15].Valor,
                        urgenciaEmergencia: files[16].Valor,
                        vinculacao: {
                            numeroRegistroPlanoVinculacao: files[17].Valor,
                            codigoPlanoOperadoraVinculacao: files[18].Valor
                        }
                    }
                }
            }
        }; 
        const xml2 = json2xml(input, { compact: true, spaces: 4 });
        xml += xml2
    }

    console.log(xml);
    return xml;
};
