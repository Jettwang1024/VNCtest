import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  title = '專案進度';
  type: ChartType = ChartType.Gantt;
  data = [
    ['Research', '尋找資料', new Date(2024, 0, 1), new Date(2024, 0, 5), null, 100, null],
    ['Write', '撰寫報告', new Date(2024, 0, 5), new Date(2024, 0, 9), null, 25, null],
    ['Cite', '製作參考文獻', new Date(2024, 0, 1), new Date(2024, 0, 7), null, 20, null],
    ['Complete', '提交報告', new Date(2024, 0, 10), new Date(2024, 0, 10), null, 0, null],
    ['Outline', '大綱制定', new Date(2024, 0, 1), new Date(2024, 0, 6), null, 100, null]
  ];
  columns = [
    { type: 'string', label: '任務編號' },
    { type: 'string', label: '任務名稱' },
    { type: 'date', label: '開始日期' },
    { type: 'date', label: '結束日期' },
    { type: 'number', label: '持續時間' },
    { type: 'number', label: '完成百分比' },
    { type: 'string', label: '依賴關係' }
  ];

  options = {
    gantt: {
      trackHeight: 30,
      labelStyle: {
        fontName: 'Helvetica',
        fontSize: 14,
        color: '#333'
      },
      criticalPathEnabled: true, // 顯示關鍵路徑
      criticalPathStyle: {
        stroke: '#e64a19',
        strokeWidth: 5
      },
      calendar: 'Gregorian', // 使用公曆
      barHeight: null, // 可以設置 bar 的高度
    },
    hAxis: {
      format: 'yyyy/MM/dd', // 設置水平軸的日期格式
    },
  };

  ngOnInit(): void {
  }
}
