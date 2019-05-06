import React from "react";
import * as d3 from "d3";


const data = [
  { date: "01", A: 63.4, B: 62.7, C: 72.2 },
  { date: "02", A: 63.4, B: 62.7, C: 72.2 },
  { date: "03", A: 63.4, B: 62.7, C: 72.2 },
  { date: "04", A: 63.4, B: 62.7, C: 72.2 },
  { date: "05", A: 63.4, B: 62.7, C: 72.2 },
  { date: "06", A: 63.4, B: 62.7, C: 72.2 },
  { date: "07", A: 58.0, B: 59.9, C: 67.7 },
  { date: "08", A: 53.3, B: 59.1, C: 69.4 },
  { date: "09", A: 55.7, B: 58.8, C: 68.0 },
  { date: "10", A: 64.2, B: 58.7, C: 72.4 },
  { date: "11", A: 58.8, B: 57.0, C: 77.0 },
  { date: "12", A: 57.9, B: 56.7, C: 82.3 },
];

const margin = { top: 50, right: 50, bottom: 30, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;


class MultiLineChart extends React.Component {

  componentDidMount() {
    this.renderChart();
  }

  renderChart() {
    const x = d3.time.scale()
      .range([0, width]);

    const y = d3.scale.linear()
      .range([height, 0]);

    const color = d3.scale.category20();

    const xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    const yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    const line = d3.svg.line()
      .x(function (d) { return x(d.date); })
      .y(function (d) { return y(d.temperature); });

    const svg = d3.select("#chart-multi-line").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    color.domain(d3.keys(data[0]).filter(function (key) { return key !== "date"; }));

    const cities = color.domain().map(function (name) {
      return {
        name: name,
        values: data.map(function (d) {
          return { date: d.date, temperature: +d[name] };
        })
      };
    });

    x.domain(d3.extent(data, function (d) { return d.date; }));

    y.domain([
      d3.min(cities, function (c) { return d3.min(c.values, function (v) { return v.temperature; }); }),
      d3.max(cities, function (c) { return d3.max(c.values, function (v) { return v.temperature; }); })
    ]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "translate(60,-25)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Temperature (ºF)");

    const city = svg.selectAll(".city")
      .data(cities)
      .enter()
      .append("g")
      .attr("class", "city");

    city.append("path")
      .attr("class", "line")
      .attr("d", function (d) { return line(d.values); })
      .style("stroke", function (d) { return color(d.name); });

    // city.append("text")
    //   .datum(function (d) { return { name: d.name, value: d.values[d.values.length - 1] }; })
    //   .attr("transform", function (d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
    //   .attr("x", 3)
    //   .attr("dy", ".35em")
    //   .text(function (d) { return d.name; });

    city.selectAll("circle")
      .data(function (d) { return d.values })
      .enter()
      .append("circle")
      .attr("r", 3)
      .attr("cx", function (d) { return x(d.date); })
      .attr("cy", function (d) { return y(d.temperature); })
      .style("fill", function (d, i, j) { return color(cities[j].name); });


    // legend
    const legendSize = 16;
    const legendSpacing = 4;

    const legend = svg.selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function (d, i) {
        const horz = i * (legendSize + legendSpacing + 6 * 14);
        const vert = - 2 * (legendSize + legendSpacing);

        return 'translate(' + horz + ',' + vert + ')';
      });

    legend.append('line')
      .attr('x1', 0)
      .attr('y1', legendSize / 2)
      .attr('x2', legendSize)
      .attr('y2', legendSize / 2)
      .style('fill', color)
      .style("stroke", color);

    legend.append('circle')
      .attr('r', 3)
      .style('fill', color)
      .style("stroke", color)
      .attr('transform', 'translate(' + legendSize / 2 + ',' + legendSize / 2 + ')');

    legend.append('text')
      .attr('x', legendSize + legendSpacing)
      .attr('y', legendSize - legendSpacing)
      .text(function (d) { return d; });
  }


  render() {
    return (
      <div id="chart-multi-line" className="d3-chart" />
    );
  }
}

export default MultiLineChart;