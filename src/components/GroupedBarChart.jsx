import React from "react";
import * as d3 from "d3";
import MultiLineChart from "./MultiLineChart";


const data = [
  { year: 2000, money: 2006, number: 8 },
  { year: 2001, money: 2001, number: 1 },
  { year: 2002, money: 2002, number: 2 },
  { year: 2003, money: 2003, number: 3 },
  { year: 2004, money: 2003, number: 4 },
  { year: 2005, money: 2004, number: 5 },
  { year: 2006, money: 2005, number: 6 },
  { year: 2007, money: 2006, number: 7 },
  { year: 2008, money: 2006, number: 8 },
  { year: 2009, money: 2009, number: 8 },
];

const margin = { top: 50, right: 50, bottom: 30, left: 50 };
const height = 300 - margin.top - margin.bottom;
const width = 800 - margin.left - margin.right;


class GroupedBarChart extends React.Component {
  state = {
    showDetail: false,
    top: 0,
    left: 0
  };

  componentDidMount() {
    this.renderChart();
  }

  renderChart() {
    // scale
    const x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .3)
      .domain(data.map(d => d.year));
    const y0 = d3.scale.linear()
      .range([height, 0])
      .domain([d3.min(data, d => d.money) - 1, d3.max(data, d => d.money) + 1]);
    const y1 = d3.scale.linear()
      .domain([0, 5])
      .range([height, 0])
      .domain([0, d3.max(data, d => d.number) + 1]);

    // axis
    const xAxis = d3.svg.axis().scale(x).orient("bottom");
    const yAxisLeft = d3.svg.axis().scale(y0).orient("left");
    const yAxisRight = d3.svg.axis().scale(y1).ticks(5).orient("right");

    // create graph
    const svg = d3.select("#chart-comparison")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("class", "graph")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis axisLeft")
      .attr("transform", "translate(0,0)")
      .call(yAxisLeft)
      .append("text")
      .attr("y", 6)
      .attr("dy", "-2em")
      .style("text-anchor", "end")
      .style("text-anchor", "end")
      .text("Dollars");

    svg.append("g")
      .attr("class", "y axis axisRight")
      .attr("transform", "translate(" + (width) + ",0)")
      .call(yAxisRight)
      .append("text")
      .attr("y", 6)
      .attr("dy", "-2em")
      .attr("dx", "2em")
      .style("text-anchor", "end")
      .text("#");


    const bars = svg.selectAll(".bar").data(data).enter();

    const _this = this;

    bars.append("rect")
      .attr("class", "bar1")
      .attr("x", d => x(d.year))
      .attr("width", x.rangeBand() / 2)
      .attr("y", d => y0(d.money))
      .attr("height", (d, i, j) => height - y0(d.money))
      .on("mouseover", () => {
        _this.setState({ showDetail: true });
      })
      .on("mouseout", () => _this.setState({ showDetail: false }));

    bars.append("rect")
      .attr("class", "bar2")
      .attr("x", d => x(d.year) + x.rangeBand() / 2)
      .attr("width", x.rangeBand() / 2)
      .attr("y", d => y1(d.number))
      .attr("height", (d, i, j) => height - y1(d.number));
  }


  setMousePos(e) {
    this.setState({
      top: e.clientY + 10,
      left: e.clientX + 10
    });
  }

  render() {
    const { top, left, showDetail } = this.state;
    const visibility = showDetail ? "visible" : "hidden";

    return (
      <div onMouseMove={this.setMousePos.bind(this)}>
        <div id="chart-comparison" className="text-center d3-chart" />
        <div className="chart-tooltip" style={{ top, left, visibility }} >
          <MultiLineChart />
        </div>
      </ div >
    );
  }
}

export default GroupedBarChart;