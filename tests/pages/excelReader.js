const EXCELJS = require('exceljs')
class excelread{
  constructor(page){
    this.page=page;
  }
async excelreaddata(filePath) {
    const workbook = new EXCELJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1); // first sheet
  
    const data = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
  
      const username = row.getCell(1).value;
      const password = row.getCell(2).value;
  
      console.log(`Row ${rowNumber} -> username: ${username}, password: ${password}`); // DEBUG
  
      data.push({ username, password });
    });
  
    return data;
  }
}
module.exports = { excelread }