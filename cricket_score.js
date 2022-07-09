const elementCreator = (n, d) => {
  const nameElement = document.createElement("p");
  nameElement.innerHTML = `series name : ${n}`;
  const dateElement = document.createElement("p");
  dateElement.innerHTML = `series date : ${d}`;
  const card = document.createElement("div");
  card.classList.add("container2");
  card.appendChild(nameElement);
  card.appendChild(dateElement);
  const body = document.getElementById("card_container");
  body.appendChild(card);
};

const callApi = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f93ff915camsh23dfd2f4de978cfp1f84c2jsn933a0c1f5aec",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  let type = document.getElementById("matchType").value;
  let teamName1 = document.getElementById("teamOneInput").value;
  let teamName2 = document.getElementById("teamTwoInput").value;
  let mth = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  //   console.log(type);
  //   console.log(teamName1);
  //   console.log(teamName2);
  //   console.log(mth);
  //   console.log(year);

  //   console.log(type);
  //   console.log(teamName1);
  //   console.log(teamName2);
  fetch(`https://cricbuzz-cricket.p.rapidapi.com/series/v1/${type}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let data = response.seriesMapProto.filter(
        (item) => item.date == `${mth} ${year}`
      );
      console.log(data);
      data[0].series.map((item) => {
        const seriesId = item.id;
        let seriesName = item.name;
        let startDate = Date(item.startDt);
        // console.log(seriesId);
        // console.log(seriesName);
        // console.log(startDate);
        elementCreator(seriesName, startDate);
      });
    })
    .catch((err) => console.error(err));
};

//   fetch("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent", options)
//     .then((response) => response.json())
//     .then((response) => {
//       //   console.log(response);
//       let data = response.typeMatches.filter((item) => item.matchType == type);
//       console.log(data);
//       let series = data[0].seriesMatches.filter(
//         (item) =>
//           [0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team1
//             .teamName == teamName1 &&
//           [0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.team1
//             .teamName == teamName2
//       );
//       console.log(series);
//     })
//     .catch((err) => console.error(err));
