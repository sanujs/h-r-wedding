import { useState } from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      setFiles(e.target.files)
    }
  }
  const handleUpload = async () => {
    if (files) {
      [...files].forEach(async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        fetch("https://xn7w6qku2k.execute-api.us-east-2.amazonaws.com/url/" + file.name)
          .then((response) => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .then((url) => {
            console.log(url)
            return fetch(url, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'multipart/form-data'
              },
              body: formData
            });
          })
          .then((response) => {
            console.log(response)
          })
      });
    } else {
      console.log("no files");
    }
  }

  return (
    <div className="fileupload">
      <form>
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          onChange={handleFileChange}
        />
        <button
          onClick={handleUpload}
          type="button"
        >
          Upload files
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
