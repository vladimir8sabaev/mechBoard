"use strict";
import Chart from "chart.js/auto";
import ky from "ky";
async function chart() {
  const data = {
    labels: ["Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Weekly Sales",
        data: [9, 12, 3],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // config
  const config = {
    type: "bar",
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // render init block
  const myChart = new Chart(document.getElementById("myChart"), config);
  //!Fetch block
  let dataType = true;
  stockData();
  const btn = document.querySelectorAll(".fetch-btn");
  function setupBtn() {
    btn.forEach((elem) => {
      elem.style.backgroundColor = "transparent";
      elem.style.borderColor = elem.dataset.color;
      elem.style.color = "black";
    });
  }
  setupBtn();
  const startBtn = document.querySelector("#startBtn");
  startBtn.style.backgroundColor = "black";
  startBtn.style.color = "white";
  btn.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      dataType = e.target.dataset.number;
      setupBtn();
      stockData();
      e.target.style.backgroundColor = e.target.dataset.color;
      e.target.style.color = "white";
    });
  });
  async function stockData() {
    const data = await ky.get("http://localhost:3000/switches").json();
    console.log("data:", data);
    const switchName = data.map(function (item) {
      return item.name;
    });
    const switchNoise = data.map(function (item) {
      return item.noise;
    });
    const switchFeeling = data.map(function (item) {
      return item.feeling;
    });
    console.log(switchName);
    console.log(switchNoise);
    console.log(switchFeeling);
    myChart.config.data.labels = switchName;
    if (dataType) {
      myChart.config.data.datasets[0].data = switchFeeling;
      myChart.config.data.datasets[0].label = "Feeling";
    } else {
      myChart.config.data.datasets[0].data = switchNoise;
      myChart.config.data.datasets[0].label = "Noise";
    }
    myChart.update();
  }
}

export default chart;
