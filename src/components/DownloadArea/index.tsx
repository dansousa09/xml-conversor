import useDownloader from 'react-use-downloader'
import * as C from './styles'

const DownloadArea = () => {
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();

    const fileUrl = "/vercel.svg";
    const fileName = "vercel.svg";

    return (
        <C.Container >
            <C.DownloadIcon
                onClick={() => download(fileUrl, fileName)}
            />
            <C.DownloadText>Faça o download da planilha exemplo</C.DownloadText>
            <C.DownloadSubText>(Preencha os dados de acordo com a marcação indicada)</C.DownloadSubText>
        </C.Container>
    )
}

export default DownloadArea