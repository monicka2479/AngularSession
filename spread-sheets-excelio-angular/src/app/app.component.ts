import { Component } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';
import '@grapecity/spread-sheets-charts';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spreadBackColor = 'aliceblue';
  hostStyle = {
    width: '95vw',
    height: '80vh'
  };
  private spread: GC.Spread.Sheets.Workbook;
  private excelIO;
  constructor() {
    this.excelIO = new Excel.IO();
  }
  workbookInit(args) {
    const self = this;
    self.spread = args.spread;
    const sheet = self.spread.getActiveSheet();
    sheet.getCell(0, 0).text('Test Excel').foreColor('blue');
    sheet.getCell(1, 0).text('Test Excel').foreColor('blue');
    sheet.getCell(2, 0).text('Test Excel').foreColor('blue');
    sheet.getCell(3, 0).text('Test Excel').foreColor('blue');
    sheet.getCell(0, 1).text('Test Excel').foreColor('blue');
    sheet.getCell(1, 1).text('Test Excel').foreColor('blue');
    sheet.getCell(2, 1).text('Test Excel').foreColor('blue');
    sheet.getCell(3, 1).text('Test Excel').foreColor('blue');
    sheet.getCell(0, 2).text('Test Excel').foreColor('blue');
    sheet.getCell(1, 2).text('Test Excel').foreColor('blue');
    sheet.getCell(2, 2).text('Test Excel').foreColor('blue');
    sheet.getCell(3, 2).text('Test Excel').foreColor('blue');
    sheet.getCell(0, 3).text('Test Excel').foreColor('blue');
    sheet.getCell(1, 3).text('Test Excel').foreColor('blue');
    sheet.getCell(2, 3).text('Test Excel').foreColor('blue');
    sheet.getCell(3, 3).text('Test Excel').foreColor('blue');
  }

  onFileChange(args) {
    const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
    if (self.spread && file) {
      self.excelIO.open(file, (json) => {
        self.spread.fromJSON(json, {});
        setTimeout(() => {
          alert('load successfully');
        }, 0);
      }, (error) => {
        alert('load fail');
      });
    }
  }
  onClickMe(args) {
    const self = this;
    const filename = 'exportExcel.xlsx';
    const json = JSON.stringify(self.spread.toJSON());
    self.excelIO.save(json, function (blob) {
      saveAs(blob, filename);
  }, function (e) {
      console.log(e);
  });
  }
}
