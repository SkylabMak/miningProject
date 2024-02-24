// toCSV.js
function arrayToCSV(data) {
    // Convert array of arrays to CSV string
    console.log("data : ",data)
    const csvContent = data.map(row => row.map(item => `"${item}"`).join(",")).join("\n");

    return csvContent;
}

function downloadCSV(csvContent, filename = 'export.csv') {
    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a); // Append anchor to body
    a.click(); // Trigger a click on the element to open the save dialog
    document.body.removeChild(a); // Remove anchor from body

    // Clean up the URL object
    URL.revokeObjectURL(url);
}

export const toCSV = (data, filename) => {
    const csvContent = arrayToCSV(data);
    downloadCSV(csvContent, filename);
};
