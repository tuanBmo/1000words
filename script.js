// Sử dụng SheetJS để đọc file
async function loadExcel(file) {
    const data = await (file.arrayBuffer());
    const workbook = XLSX.read(data, {type: 'array'});
    const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    console.log(json); // Dữ liệu 1000 từ đã được nạp
}

function flipCard() {
    // Logic ẩn từ, hiện nghĩa khi click
}
 
