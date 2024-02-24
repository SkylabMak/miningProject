import { toList } from './toList'; // Adjust the path as necessary
import { toCSV } from './toCSV';
// Example function to make API call
// Replace 'YOUR_API_ENDPOINT' with your actual endpoint
const postData = async (listData) => {
  try {
    console.log(listData)
    const response = await fetch('http://127.0.0.1:8080/api/predict/jsonList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"list": listData}),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const dataList = data.pred
    toCSV(dataList,"testCSV.csv")
    return data;
    // return [0,1,0,]
  } catch (error) {
    console.error("Could not fetch predictions:", error);
  }
};

// Function to handle file, convert to list, and make fetch call
export const fetchPredictions_List = async (file) => {
  try {
    const listData = await toList(file);
    const predictions = await postData(listData);
    console.log(predictions); // Do something with the predictions
    return predictions;
  } catch (error) {
    console.error("Error processing file for predictions:", error);
  }
};
