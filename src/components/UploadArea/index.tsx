import Papa from "papaparse";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { useLoading } from "../../context/loading";


import * as C from './styles'
import { useInput } from "../../context/input";
import filesize from "../../utils/filesize";

const UploadArea = () => {
    const [fileConverted, setFileConverted] = useState();
    const [blobConverted, setBlobConverted] = useState<Blob>();
    const { setLoading } = useLoading();
    const { inputSelected } = useInput();


    const handleFileUpload = (files: any) => {
        if (files) {
            Papa.parse(files[0], {
                complete: function (results) {
                    sendFileToConvert(results.data, inputSelected.id);
                },
                error: function (err) {
                    console.log("Error", err);
                },
                header: true,
                skipEmptyLines: true,
            }
            )
        } else {
            console.log("No file selected");
        }
    }

    const sendFileToConvert = async (data: unknown[], inputSelected: number) => {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/convert?id=${inputSelected}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const { file } = await response.json();
        setFileConverted(file); 
        const blob = new Blob([fileConverted], { type: 'text/plain' });
        setBlobConverted(blob);

        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    const handleDownloadConvertedFile = () => {
        let filename = "";
        switch (inputSelected.id) {
            case 1:
                filename = "alteracao.txt";
                break;
            case 2:
                filename = "exclusao.txt";
                break;
            case 3:
                filename = "inclusao.txt";
                break;
            case 4:
                filename = "vinculacao.txt";
                break;
            default:
                filename = "alteracao.txt";
                break;
        }
        const element = document.createElement('a');
        const blob = new Blob([fileConverted], { type: 'text/plain' });

        element.href = URL.createObjectURL(blob);
        element.setAttribute('download', filename);

        element.dataset.downloadurl = ['text/plain', element.download, element.href].join(':');
        element.draggable = true;
        element.classList.add('dragout');

        element.click();
    }

    const handleDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
        if (isDragActive) {
            return <C.UploadMessage type="success" >Solte o arquivo aqui</C.UploadMessage>;
        }
        if (isDragReject) {
            return <C.UploadMessage type="error">Arquivo não suportado</C.UploadMessage>;
        }
        return <C.UploadMessage>Solte o arquivo aqui, ou click para selecionar</C.UploadMessage>;

    }

    return (
        <C.Container>
            <Dropzone
                multiple={false}
                onDropAccepted={(files) => handleFileUpload(files)}
            >
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <C.DropzoneContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}  >
                        <input {...getInputProps()} />
                        {handleDragMessage(isDragActive, isDragReject)}
                    </C.DropzoneContainer>
                )}
            </Dropzone>
            {fileConverted && (
                <C.DownloadConvertedFileArea>
                    <C.IconButton>
                        <C.FileIcon />
                    </C.IconButton>
                    <C.FileInfo>
                        <p>{inputSelected.value}</p>
                        <p>{filesize(blobConverted?.size)}</p>
                    </C.FileInfo>
                    <C.IconButton onClick={handleDownloadConvertedFile} >
                        <C.DownloadFileIcon />
                    </C.IconButton>
                </C.DownloadConvertedFileArea>
            )}

            {/* {fileConverted && <C.DownloadConvertedFileButton onClick={handleDownloadConvertedFile} >Baixar Arquivo Convertido</C.DownloadConvertedFileButton>} */}
        </C.Container >
    )
}

export default UploadArea