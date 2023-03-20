import CanvasJSReact from "../../Components/Chart/canvasjs.react";
import React, { Component } from "react";

class Chart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Students Placed - 2023",
      },
      axisX: {
        valueFormatString: "YYYY",
      },
      axisY: {
        title: "Students",
        prefix: "",
      },
      data: [
        {
          yValueFormatString: "",
          xValueFormatString: "YYYY",
          type: "spline",
          dataPoints: [
            { x: new Date(2015, 1), y: 25 },
            { x: new Date(2016, 2), y: 27 },
            { x: new Date(2017, 3), y: 42 },
            { x: new Date(2018, 4), y: 32 },
            { x: new Date(2019, 5), y: 35 },
            { x: new Date(2020, 6), y: 33 },
            { x: new Date(2021, 7), y: 40 },
            { x: new Date(2022, 8), y: 52 },
            { x: new Date(2023, 9), y: 32 },
            { x: new Date(2024, 10), y: 42 },
            { x: new Date(2025, 11), y: 37 },
            { x: new Date(2026, 12), y: 38 },
          ],
        },
      ],
    };

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default Chart;
