import Papa from "papaparse";
import { ChangeEvent } from "react";

import * as C from './styles'

const UploadArea = () => {

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        console.log(files);

        if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
                complete: function (results) {
                    console.log("Finished:", results.data);
                },
                error: function (err) {
                    console.log("Error", err);
                },
                skipEmptyLines: true,
            }
            )
        } else {
            console.log("No file selected");
        }
    }

    return (
        <C.Container>
            <input id="upload" type="file"
                onChange={(e) => handleFileUpload(e)}
            />
        </C.Container>
    )
}

export default UploadArea