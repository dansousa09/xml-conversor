import useDownloader from 'react-use-downloader';
import { useLoading } from '../../context/loading'
import * as C from './styles'

const Header = () => {
  const { setLoading } = useLoading();
  const { download, isInProgress } = useDownloader()

  const handleDownloadGuide = () => {
    isInProgress && setLoading(true);

    download("/Manual_orientacoes_RPS_WEB_XML.pdf", "Manual_orientacoes_RPS_WEB_XML.pdf");

    !isInProgress && setLoading(false);
  }

  return (
    <C.Container>
      <C.Title variant='h1' >XML-Conversor</C.Title>
      <C.DownloadGuide onClick={handleDownloadGuide} >
        <label htmlFor="download-guide-btn" >Download Manual - ANS</label>
        <C.IconButton name="download-guide-btn" id="download-guide-btn" >
          <C.DownloadIcon />
        </C.IconButton>
      </C.DownloadGuide>
    </C.Container>
  )
}

export default Header


