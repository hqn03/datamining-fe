import * as d3 from "d3";
import { useState } from "react";
import { useEffect } from "react";
import Plot from "react-plotly.js";

var layout = {
  title: "Custom Range",
  xaxis: {},
};

export default function Chart() {
  const [df, setDf] = useState(null);

  const callApi = async () =>
    await d3.csv("./src/assets/test.csv", []).then((data) => {
      setDf(data.sort((a, b) => a.unixtime - b.unixtime));
    });

  useEffect(() => {
    callApi();
    // 1p call api 1 lần
    // const interval = setInterval(callApi, 60000);
    // return () => clearInterval(interval);
  }, []);
  //   return <div>test</div>;
  return (
    <>
      {df && (
        <Plot
          data={[
            {
              x: df.map((item) => item.date_time_local),
              y: df.map((item) => item.temperature),
              type: "scatter",
              mode: "lines",
            },
          ]}
          layout={layout}
        />
      )}
    </>
  );
}
