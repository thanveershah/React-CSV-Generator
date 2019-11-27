import React from "react";
import Csv from "./Component/Csv";

const App = () => {
  const exportCSV = () => {
    const newArray = [
      {
        Booking: "Abc",
        "Receiver name": "Abc",
        "Receiver phone": "Abc",
        "Order time": "Abc",
        "Pickup address": "Abc",
        "Drop address": "Abc",
        "Driver name": "Abc",
        Status: "Abc",
        "Pickup zone": "Abc",
        "Drop zone": "Abc",
        "Product quantity": "Abc",
        "Pick up time": "Abc",
        "Drop time": "Abc",
        "Creation date": "Abc",
        Fare: "Abc"
      }
    ];
    return newArray;
  };

  return <Csv csvData={exportCSV()} fileName={"Task"} />;
};

export default App;
