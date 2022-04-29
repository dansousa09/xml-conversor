import * as C from './styles'

import DownloadArea from '../DownloadArea'
import UploadArea from '../UploadArea'

const Main = () => {
  return (
    <C.Container>
      <DownloadArea />
      <UploadArea />
    </C.Container>
  )
}

export default Main