import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
import AnimatedModal from "./Modal";
const App = () => {
  const [dataInfos] = useState(data);
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
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {getData(data).map((val, index) => (
              <td key={index}>{val}</td>
            ))}
            <td>Length</td>
            <td>Button</td>
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
                            // console.log(typeof v);
                            // console.log(v);

                            if (typeof v === "object") {
                              Object.values(v).map((valori, i) => {
                                return (
                                  <div key={i}>
                                    {" "}
                                    {`${valori}`}
                                    {console.log(valori)};
                                  </div>
                                );
                              });
                            } else {
                              return <div> {`${v}`}</div>;
                            }
                          })
                        : val}
                    </td>
                  );
                })}
                <td>
                  {Object.values(dataInfo).map((v) => {
                    if (typeof v === "object") {
                      let length0fObject = 0;
                      for (let key in v) {
                        length0fObject++;
                      }
                      return `${length0fObject}`;
                    }
                  })}
                </td>
                <td>
                  <button>{AnimatedModal()}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
