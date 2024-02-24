import { useState } from 'react'
import DragDrop from './components/dragDrop'
import { fetchPredictions_List } from './Utils/predictions.js';


function DragDropPage() {
  const [count, setCount] = useState(0)
  const [files, setFiles] = useState([]);

  const predictionsFile = async () => {
    if(files.length > 0){
      const predictions = await fetchPredictions_List(files[0]);

    }
    
    // Now you have the predictions, you can set them in state or display them
  };

  return (
    <>
    <h1 className="text-7xl font-bold underline">
      Hello world02202020!
    </h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
            <DragDrop files={files} setFiles={setFiles} />
      </div>
      {files.length > 0 && (
        <div className="mt-4 overflow-y-auto max-h-32 w-full">
          <h2 className="text-center">Selected Files:</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index} className="truncate">{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={predictionsFile}>Click Me</button>
    </>
  )
}

export default DragDropPage
