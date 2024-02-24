import Papa from 'papaparse';

export const toList = async (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: (result) => {
        // Directly resolve with the parsed data as it's already an array of arrays
        resolve(result.data);
      },
      error: (error) => {
        reject(error);
      },
      skipEmptyLines: true,
      // Removed the header option since the file doesn't contain headers
    });
  });
};
