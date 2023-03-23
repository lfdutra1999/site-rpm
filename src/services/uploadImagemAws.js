import { uploadFile } from 'react-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = 'rpmesports';
const REGION = 'sa-east-1';
const ACCESS_KEY = 'AKIA2Y5UTHP4D3ATNIOB';
const SECRET_ACCESS_KEY = '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';


const UploadImageToS3WithReactS3 = async (setFile, file, dir) => {
    const config = {
        bucketName: S3_BUCKET,
        region: REGION,
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
        dirName: dir
    }
    

    uploadFile(file, config)
        .then(data => setFile(data.location))
        .catch(err => console.error(err))
}


export default UploadImageToS3WithReactS3;