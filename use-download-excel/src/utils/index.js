// 文档：https://github.com/exceljs/exceljs/blob/master/README_zh.md
import Excel from 'exceljs'
import saveAs from 'file-saver'

export class ExcelExport {
  constructor (tableData, tableHeader) {
    this.workBook = new Excel.Workbook()
    this.sheet = this.workBook.addWorksheet('Sheet1')
    this.sheet.columns = tableHeader
    this.sheet.addRows(tableData)
    this.sheet.properties.defaultColWidth = 10
  }

  async download (fileName) {
    const buffer = await this.workBook.xlsx.writeBuffer()
    const blob = new Blob([buffer])
    saveAs(blob, `${fileName}.xlsx`)
  }
}