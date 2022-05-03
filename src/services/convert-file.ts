interface ICSVFile {
    Chave: string;
    Valor: string;
}

export const convertFile = (files: ICSVFile[]) => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<operadora>\n\t'

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        xml += `<${file.Chave}>${file.Valor}</${file.Chave}>\n\t`; 
        
        if (i === files.length - 1) {
            xml += `<${file.Chave}>${file.Valor}</${file.Chave}>\n`;
        }
    } 

    xml += "</operadora>" 

    console.log(xml)
    
    return xml;
};
