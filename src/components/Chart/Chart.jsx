import React from "react";
import Plot from "react-plotly.js";

function Chart({
  value,
  labels,
  data_x,
  data_y,
  type,
  mode,
  showValue,
  textposition = "top center",
  title,
}) {
  return (
    <Plot
      data={[
        {
          values: value,
          labels: labels,
          x: data_x,
          y: data_y,
          type: type,
          mode: mode,
          text: showValue && data_y,
          textposition: textposition,
        },
      ]}
      layout={{ title: title, dragmode: "pan" }}
      config={{
        displayModeBar: true,
        displaylogo: false,
        scrollZoom: true,
        staticPlot: false,
        modeBarButtonsToRemove: [
          "pan2d",
          "select2d",
          "lasso2d",
          "resetScale2d",
          "zoomIn2d",
          "zoomOut2d",
          "autoScale2d",
          "toImage",
        ],
      }}
    />
  );
}

export default Chart;
