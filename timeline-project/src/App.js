import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./data.json";
import ReadData from "./components/ReadData";
// import Timeline from "./components/Timeline";
// de facut modal + o functie care nr cate event-uri sunt
const App = () => {
  const [dataInfos] = useState(data);
  const [dataEvents] = useState(data);
  const getData = (data) => {
    let array = [];
    for (let i in data) {
      let val = data[i];
      for (let j in val) {
        let sub_key = j;
        array.push(sub_key);
      }
    }
    const unique = array.filter((v, i) => array.indexOf(v) === i);
    return unique;
  };

  // const countEvents = (dataEvents) => {
  //   dataEvents.map((event) => {
  //     Object.values(event).map((value) => {
  //       if (typeof value === "object") {
  //         console.log(value);
  //         return value;
  //       }
  //     });
  //   });
  // };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {getData(data).map((val, index) => (
              <td key={index}>{val}</td>
            ))}
            <td>Length</td>
          </tr>
        </thead>
        <tbody>
          {dataInfos.map((dataInfo) => {
            return (
              <tr>
                {Object.values(dataInfo).map((val) => {
                  return (
                    <td>
                      {typeof val === "object"
                        ? Object.values(val).map((v) => {
                            return <div>{`${v}`}</div>;
                          })
                        : val}
                    </td>
                    // <td></td>
                  );
                })}
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
