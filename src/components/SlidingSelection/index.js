import React, { PureComponent } from "react"

import * as style from "./index.less";

const data = [100, 200, 300, 400, 500]

export default class SlidingSelection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
    this.rulerCanvas = null;
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.rulerCanvas = document.getElementById("rulerCanvas");
    this.drawRulerCanvas(this.rulerCanvas)
  }

  drawRulerCanvas(rulerCanvas) {
    const { data } = this.state;
    let rulerCTX = rulerCanvas.getContext("2d");
    for (let i = 0; i < data.length; i++) {
      rulerCTX.beginPath()
      rulerCTX.moveTo(10 * i, 0);
      rulerCTX.lineTo(10 * i, rulerCanvas.height / 2);
      rulerCTX.strokeStyle = '#000000'
      rulerCTX.stroke();
      rulerCTX.closePath();
      rulerCTX.font="16px Arial";
      rulerCTX.fillText(data[i], 10 * i, rulerCanvas.height / 2 +50);
    }
    // x轴
    rulerCTX.beginPath();
    rulerCTX.moveTo(0, rulerCanvas.height / 2);
    rulerCTX.lineTo(rulerCanvas.width, rulerCanvas.height / 2);
    rulerCTX.strokeStyle = "green";
    rulerCTX.stroke();
    rulerCTX.closePath();
  }

  render() {
    return (
      <div className={style.sliding_selection} style={{ width: this.props.width, height: this.props.height, background: this.props.background }}>
        <div></div>
        <img />
        <canvas id="rulerCanvas" style={{ width: "100%", height: "50%", background: "yellow" }}>对不起，你的浏览器不支持canvas</canvas>
      </div>
    )
  }
}