import { json2xml } from "xml-js";

interface ICSVFile {
    Chave: string;
    Valor: string;
}

export const convertFile = (files: ICSVFile[], id: number) => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';

    if (id === 1) {
        const input = {
            operadora: {
                registroANS: files[0].Valor,
                cnpjOperadora: files[1].Valor,
                solicitacao: {
                    nossoNumero: files[2].Valor,
                    isencaoOnus: files[3].Valor,
                    alteracaoPrestador: {
                        identificacao: {
                            cnpjCpf: files[4].Valor,
                            cnes: files[5].Valor,
                            codigoMunicipioIBGE: files[6].Valor
                        },
                        alterarDados: {
                            classificacao: files[7].Valor,
                            cnpjCpf: files[4].Valor,
                            cnes: files[5].Valor,
                            uf: files[8].Valor,
                            codigoMunicipioIBGE: files[6].Valor,
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
            }
        };

        const xml2 = json2xml(input, { compact: true, spaces: 4 });
        xml += xml2;
    }

    if (id === 2) {
        const input = {
            operadora: {
                registroANS: files[0].Valor,
                cnpjOperadora: files[1].Valor,
                solicitacao: {
                    exclusaoPrestador: {
                        identificacao: {
                            cnpjCpf: files[2].Valor,
                            cnes: files[3].Valor,
                            codigoMunicipioIBGE: files[4].Valor
                        }
                    }
                }
            }
        };

        const xml2 = json2xml(input, { compact: true, spaces: 4 });
        xml += xml2;
    }

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
        xml += xml2;
    }

    if (id === 4) {
        const input = {
            operadora: {
                registroAns: files[0].Valor,
                cnpjOperadora: files[1].Valor,
                solicitacao: {
                    nossoNumero: files[2].Valor,
                    isencaoOnus: files[3].Valor,
                    vinculacaoPrestadorRede: {
                        prestador: {
                            cnpjCpf: files[4].Valor,
                            cnes: files[5].Valor,
                            codigoMunicipioIBGE: files[6].Valor
                        },
                        vinculacao: {
                            numeroRegistroPlanoVinculacao: files[7].Valor,
                            codigoPlanoOperadoraVinculacao: files[8].Valor
                        }
                    }
                }
            }
        };

        const xml2 = json2xml(input, { compact: true, spaces: 4 });
        xml += xml2;
    }

    return xml;
};
