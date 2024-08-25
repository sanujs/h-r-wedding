import pRetry from 'p-retry';
import { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [status, setStatus] = useState<'initial' | 'uploading' | 'success' | 'fail'>('initial')
  const [successCount, setSuccessCount] = useState<number>(0);
  useEffect(() => {
    setStatus('initial');
  }, [files])
  const handleUpload = async () => {
    if (files) {
      setSuccessCount(0);
      setStatus('uploading');
      [...files].forEach(async (file) => {
        const uploadFile = fetch("https://xn7w6qku2k.execute-api.us-east-2.amazonaws.com/url/" + file.name)
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
            if (response.ok) {
              setSuccessCount(count=>count+1);
              setStatus('success');
            }
            console.log(response)
            return response;
          })
          .catch((e) => {
            setStatus('fail');
            console.log(e);
            return e;
          });
        const result = await pRetry(await uploadFile, {
          onFailedAttempt: error => {
            console.log(`Attempt ${error.attemptNumber} failed.`)
          },
          retries: 5
        })
        console.log(result);
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
      if (files && successCount > 0 && successCount != files.length) {
        return `Uploaded ${successCount}/${files.length} files!`
      } else {
        return "Success ✔️"
      }
    }
    return "Failed ❌"
  }
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
  }, []);
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
