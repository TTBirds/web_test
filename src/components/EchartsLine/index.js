import React, { Component } from 'react';
import echarts from "echarts";
import * as style from "./index.less";

const echartsLineData = {
  title: ""
}

export default class EchartsLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      echartsLineData: {

      }
    }
    this.echartsLine = null;
  }

  componentDidMount() {
    const echartsDOM = document.querySelector("#chart-line");
    this.echartsLine = echarts.init(echartsDOM);
    this.drawEchartsLine()
  }

  componentWillUnmount() {
    this.echartsLine = null;
  }

  drawEchartsLine(){
    this.echartsLine.setOption({
      tooltip: {
          trigger: 'axis'
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '5%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              name:'邮件营销',
              type:'line',
              smooth: true,
              data:[120, 132, 101, 134, 90, 230, 1210]
          },
          {
              name:'联盟广告',
              type:'line',
              smooth: true,
              data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
              name:'视频广告',
              type:'line',
              smooth: true,
              data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
              name:'直接访问',
              type:'line',
              smooth: true,
              data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
              name:'搜索引擎',
              type:'line',
              smooth: true,
              data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
      ]
  });
  }

  render() {
    return (
      <div className={style.echartsLine}>
        <div className={style.chartHead}>

        </div>
        <div className={style.chartContent} id="chart-line"></div>
      </div>
    )
  }
}