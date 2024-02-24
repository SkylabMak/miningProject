import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { toList } from '../Utils/toList.js'; // Adjust the path according to where you save toList.js


function DragDrop({ setFiles, files }) {
  // const [files, setFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleChange = (file) => {
    // setFiles([file]);
    // // Assuming only one file is handled for simplicity
    // toList(file).then(dataList => {
    //   console.log(dataList); // Here, you have your CSV file converted to a list
    //   // Do something with dataList, like updating a state or processing data
    // }).catch(error => {
    //   console.error('Error processing the CSV file:', error);
    // });

    setFiles([file]); // Keep this if you still need to track the file itself
  };

  const handleDraggingStateChange = (isDragging) => {
    setIsDragOver(isDragging);
  };

  return (
    <div
      id="DropArea"
      className={`w-auto h-auto flex flex-col items-center justify-center`}
    >
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={["CSV"]}
        // className={`w-auto h-auto flex flex-col items-center justify-center  ${isDragOver ? 'bg-orange-400' : 'bg-rose-400'}`}
        onDraggingStateChange={handleDraggingStateChange} // Use this to track drag state
        dropMessageStyle={{
          backgroundColor: 'red',
        }}
      >
        <div className={`flex flex-col items-center justify-center min-h-24 w-auto `}
          style={{ textAlign: 'center', cursor: 'pointer' }}>
          <div className={`p-4 rounded w-auto ${isDragOver ? 'bg-orange-400' : 'bg-rose-400'}`}>
            <p>Drag and drop files here, or click to select files</p>
            <p>Type: .csv</p>
          </div>

        </div>
      </FileUploader>
      {/* {files.length > 0 && (
        <div className="mt-4 overflow-y-auto max-h-32 w-full">
          <h2 className="text-center">Selected Files:</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index} className="truncate">{file.name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default DragDrop;
