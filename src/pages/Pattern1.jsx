import { useEffect, useLayoutEffect, useState } from "react";
import * as d3 from "d3";
import Plot from "react-plotly.js";
import moment from "moment";
import Chart from "../components/Chart/Chart";

const keysPie = ["rating_1", "rating_2", "rating_3", "rating_4", "rating_5"];

function Pattern1() {
  const [df1, setDf1] = useState([]);
  const [df3, setDf3] = useState([]);
  const [selectValue, setSelectValue] = useState({});

  const [dataSelect, setDataSelect] = useState([]);
  const [dataPie, setDataPie] = useState([]);

  const callApi = async () => {
    await d3.csv("./src/assets/update-groups.csv").then((data) => {
      const data_test = data.filter((item) =>
        moment(item.date_hour).isAfter("2024-10-09")
      );
      setDf3(data_test);
    });

    await d3.csv("./src/assets/update-apps.csv").then((data) => {
      const aaaaa = data.map((row) => {
        const updated = moment(row.updated * 1000).format("DD/MM/YYYY");
        return { ...row, updated };
      });
      console.log(aaaaa);
      setDf1(aaaaa);
      //   const datesUpdate = data.map((row) =>
      //     moment(row.updated * 1000).format("DD/MM/YYYY")
      //   );
      //   const dateCounts = datesUpdate.reduce((acc, date) => {
      //     if (acc[date]) {
      //       acc[date] += 1;
      //     } else {
      //       // Otherwise, initialize the count for this date
      //       acc[date] = 1;
      //     }
      //     return acc; // Return the accumulator for the next iteration
      //   }, {});
      //   setDf1(
      //     Object.entries(dateCounts).map(([date, count]) => ({
      //       date, // Keep the date as is
      //       count, // Keep the count
      //     }))
      //   );
    });
  };

  useLayoutEffect(() => {
    callApi();
    // 1p call api 1 lần
    // const interval = setInterval(callApi, 60000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-6">
      <div className="">
        <select
          value={selectValue.id}
          onChange={(e) => {
            const find = df1.find((i) => i.id === e.target.value);
            setDataPie(keysPie.map((i) => find[i]));
            setSelectValue(find);
          }}
        >
          {df1
            .filter((i) => i.ratings !== "0")
            .map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
        </select>
      </div>
      <Chart
        value={dataPie}
        labels={keysPie}
        type={"pie"}
        title={`Ti le danh gia cua app ${selectValue.title}`}
      />
      {/* Hinh 2 */}
      <Chart
        data_y={df1.map((item) => item.score)}
        type={"histogram"}
        mode={"lines+markers+text"}
        showValue
        title={"Tan suat danh gia"}
      />

      {/* Hinh3 */}
      <Chart
        data_x={df3.map((item) => item.date_hour)}
        data_y={df3.map((item) => item.updated)}
        type={"scatter"}
        title={"Số lượng app update theo ngày"}
        xaxis={{ tickmode: "linear" }}
      />
      {/* {df3 && (
        <Plot
          data={[
            {
              x: df3.map((item) => item.date_hour),
              y: df3.map((item) => item.updated),
              type: "scatter",
              mode: "lines+markers+text",
              text: df3.map((item) => item.updated),
              textposition: "top center",
            },
          ]}
          layout={{
            title: "Số lượng app update theo ngày(Hinh2)",
            xaxis: {
              //   automargin: true,
              //   showgrid: true,
              //   tickformat: "%Y-%m-%d",
              //   tickangle: -45,
              tickmode: "linear",
            },
            dragmode: "pan",
          }}
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
      )} */}
    </div>
  );
}

export default Pattern1;
