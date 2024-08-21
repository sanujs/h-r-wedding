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
            for(const key in response.fields) {
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
          })
      });
    } else {
      console.log("no files");
    }
  }

  return (
    <div className="fileupload">
      <form>
        <label className="custom-file-upload">
          <input
              type="file"
              accept="image/png, image/jpeg, video/*"
              multiple
              onChange={handleFileChange}
            />
          {files ? files.length + " files selected" : 'Browse your files'}
        </label>
        <button
          onClick={handleUpload}
          type="button"
        >
          Upload
          {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
