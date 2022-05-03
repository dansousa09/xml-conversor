import { ChangeEvent, useState } from 'react';
import useDownloader from 'react-use-downloader'
import * as C from './styles'

import inputs from '../../utils/inputs'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useLoading } from '../../context/loading';
import { useMediaQuery } from '../../context/mobile';
import { useInput } from '../../context/input';

const DownloadArea = () => {
    const { setLoading } = useLoading();
    const { inputSelected, handleInputChange } = useInput(); 
    const { isMobile } = useMediaQuery();

    const { download, error, isInProgress } = useDownloader();

    let fileUrl = "/vercel.svg";
    let fileName = "vercel.svg";

    const downloadFile = (fileUrl: string, fileName: string) => {
        switch (inputSelected) {
            case 1:
                fileUrl = "/vercel.svg";
                fileName = "vercel.svg";
                break;
            case 2:
                fileUrl = "/vercel-copy.svg";
                fileName = "vercel-copy.svg";
                break;
            case 3:
                fileUrl = "/vercel-copy-2.svg";
                fileName = "vercel-copy-2.svg";
                break;
            case 4:
                fileUrl = "/vercel-copy-3.svg";
                fileName = "vercel-copy-3.svg";
                break;
            default:
                fileUrl = "/vercel.svg";
                fileName = "vercel.svg";
                break;
        }

        isInProgress && setLoading(true);
        download(fileUrl, fileName);
    };

    return (
        <C.Container >
            <C.FormControl>
                <FormLabel id="radio-buttons-group-label">Tipo de Arquivo:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="alteracao"
                    name="radio-buttons-group"
                    onChange={(e) => handleInputChange(e)}
                >
                    {inputs.map(input => {
                        return <FormControlLabel key={input.id} value={input.value} control={<Radio />} label={input.label} />
                    })}
                </RadioGroup>
            </C.FormControl>
            <C.DownloadIcon
                onClick={() => downloadFile(fileUrl, fileName)}
            />
            <C.DownloadText>Faça o download da planilha exemplo</C.DownloadText>
            <C.DownloadSubText>(Preencha os dados de acordo com a marcação indicada)</C.DownloadSubText>
            {error && alert(`possível erro: ${JSON.stringify(error)}`)}



        </C.Container>
    )
}

export default DownloadArea