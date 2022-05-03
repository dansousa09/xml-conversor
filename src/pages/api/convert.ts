import { Blob } from "buffer";
import { NextApiRequest, NextApiResponse } from "next";
import { convertFile } from "../../services/convert-file";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { body } = req;
        const { id } = req.query;

        if (body.type === "error") {
            res.status(500).json({
                message: body.message
            });
        }

        const fileConverted = await convertFile(body); 
        const blob = new Blob([fileConverted], { type: "text/plain" }); 

        res.status(200).send({ blob, file: fileConverted });
    } else {
        res.status(400).json({
            message: "Invalid request"
        });
    }
}
