import Papa from 'papaparse';

// export const toList = async (file) => {
//   return new Promise((resolve, reject) => {
//     Papa.parse(file, {
//       complete: (result) => {
//         // Directly resolve with the parsed data as it's already an array of arrays
//         resolve(result.data);
//       },
//       error: (error) => {
//         reject(error);
//       },
//       skipEmptyLines: true,
//       // Removed the header option since the file doesn't contain headers
//     });
//   });
// };

export const toList = async (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (result) => {
        // Filter out rows with missing or empty columns
        const filteredData = result.data.filter(row => {
          // Check if any column in the row is empty or missing
          return row.every(cell => cell !== undefined && cell !== null && cell !== "");
        });
        resolve(filteredData);
      },
      error: (error) => {
        reject(error);
      },
      skipEmptyLines: true,
      // Removed the header option since the file doesn't contain headers
    });
  });
};
