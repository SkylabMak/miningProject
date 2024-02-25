export function toJsonList(listData) {
    // The first array contains the headers (keys for the JSON objects)
    const headers = listData[0];
    
    // The rest of the arrays are the data rows; map each row to a JSON object
    const jsonData = listData.slice(1).map(row => {
        let obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index];
        });
        return obj;
    });

    console.log(jsonData)
    
    return jsonData;
}
