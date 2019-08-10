const reader = new FileReader();
reader.onload = function (e) {
    const { result } = e.target;
    const tableData = result.split("\n").map(function(each) { return each.split(',') });
    const rowByTen = Math.floor(tableData.length / 10);
    console.log('Posting message back to main script');
    postMessage({ tableData, rowByTen });
}
onmessage = function(e) {
    console.log('Message received from main script');
    reader.readAsText(e.data);
}