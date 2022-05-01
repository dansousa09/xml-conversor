import useDownloader from 'react-use-downloader'
import { useLoading } from '../../context/loading';
import * as C from './styles'

const DownloadArea = () => {
    const { download, error, isInProgress } = useDownloader();
    const loading = useLoading();

    const fileUrl = "/vercel.svg";
    const fileName = "vercel.svg";

    const downloadFile = (fileUrl: string, fileName: string) => {
        isInProgress && loading.setLoading(true);
        download(fileUrl, fileName);
    };

    return (
        <C.Container >
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