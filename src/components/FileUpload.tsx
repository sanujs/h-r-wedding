import { useEffect, useState, useCallback, SetStateAction } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<'initial' | 'uploading' | 'success' | 'fail'>('initial')
  useEffect(() => {
    setStatus('initial');
  }, [files])
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      setFiles(e.target.files)
    }
  }
  const handleUpload = async () => {
    if (files) {
      setStatus('uploading');
      [...files].forEach(async (file) => {
        fetch("https://xn7w6qku2k.execute-api.us-east-2.amazonaws.com/url/" + file.name)
          .then((response) => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .then((response) => {
            console.log("response", response)
            const postData = new FormData()
            for (const key in response.fields) {
              postData.append(key, response.fields[key]);
            }
            postData.append('file', file);

            return fetch(response.url, {
              method: 'POST',
              body: postData,
            });
          })
          .then((response) => {
            console.log(response)
            setStatus('success');
          })
          .catch(() => {
            setStatus('fail');
          })
      });
    } else {
      console.log("no files");
    }
  }
  const uploadText = () => {
    if (status == 'initial' && !files) {
      return "Browse your files";
    } else if (status == 'initial' && files) {
      return files.length == 1 ? files.length + " file selected" : files.length + " files selected";
    } else if (status == 'uploading') {
      return "Uploading...";
    } else if (status == 'success') {
      return "Successfully uploaded!"
    }
    return "Failed to upload"
  }
  const onDrop = useCallback((acceptedFiles) => {setFiles(acceptedFiles)}, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: {"image/*": [], 'video/*': []}})

  return (
    <div className="fileupload">
      <form>
        <div className="custom-file-upload" {...getRootProps()}>
          <input {...getInputProps()} />
            {uploadText()}
        </div>
        <br />
        <br />
        <button
          onClick={handleUpload}
          type="button"
          disabled={status != 'initial' || files == null}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
