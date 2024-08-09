import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const FileUpload = () => {
  return (
    <FilePond allowMultiple={true} maxFiles={3} server="/api" />
  )
}

export default FileUpload;
