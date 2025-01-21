function fetchDataWithCallback(simulateError, callback) {
    setTimeout(() => {
        if (simulateError) {
            callback("Error: Failed to fetch data", null);
        } else {
            const data = { id: 1, name: "Sample Data" };
            callback(null, data);
        }
    }, 2000);
}
fetchDataWithCallback(false, (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Data fetched successfully:", data);
    }
});
fetchDataWithCallback(true, (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Data fetched successfully:", data);
    }
});
