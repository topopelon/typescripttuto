import Dragger from "antd/lib/upload/Dragger";
import {UploadOutlined} from '@ant-design/icons';
import { message } from "antd";

interface testProps {
    pepe: string,
    concha?: number 
}

export const UploadFile = ({concha = 3}: testProps, props: any) => {
    return (
    <Dragger 
    {...props} 
    height={300}
    onDrop={(e) => console.log('Dropped files', e.dataTransfer.files)}
    onChange={(info) => {
        const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
    }}>
        <p className="ant-upload-drag-icon">
            <UploadOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
        </p>
  </Dragger>);
}