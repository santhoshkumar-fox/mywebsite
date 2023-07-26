import React, { useEffect, useState } from "react";
import "../App.css";
import Table from "../components/table/Table";
import Search from "../components/search/Search";
import Tabs from "../components/tabs/tabs";
import Appbar from "../components/appbar/appbar";
import { csvToObj } from "csv-to-js-parser";
import { auth } from "../configs/firebase";
import { useNavigate } from "react-router-dom";

function Home_page() {

  const navigation = useNavigate();

  const [searchStr, setSearchStr] = useState("");
  const [filterDataList, setFilterDataList] = useState([]);
  const [selectedDataData, setSelectedData] = useState(null);
  const [JSONData, setJSONData] = useState(null);

  // {
  //   "priority": 0,
  //   "symbol": "LT",
  //   "identifier": "LTEQN",
  //   "series": "EQ",
  //   "open": 2522,
  //   "dayHigh": 2595,
  //   "dayLow": 2521.1,
  //   "lastPrice": 2587,
  //   "previousClose": 2489.7,
  //   "change": 97.3,
  //   "pChange": 3.91,
  //   "totalTradedVolume": 4610417,
  //   "totalTradedValue": 11832911855.52,
  //   "lastUpdateTime": "21-Jul-2023 16:00:00",
  //   "yearHigh": 2595,
  //   "ffmc": 3126239777903.78,
  //   "yearLow": 1715.1,
  //   "nearWKH": 0.30828516377649323,
  //   "nearWKL": -50.83668590752727,
  //   "perChange365d": 46.52,
  //   "date365dAgo": "21-Jul-2022",
  //   "chart365dPath": "https://static.nseindia.com/sparklines/365d/LT-EQ.jpg",
  //   "date30dAgo": "21-Jun-2023",
  //   "perChange30d": 8.01,
  //   "chart30dPath": "https://static.nseindia.com/sparklines/30d/LT-EQ.jpg",
  //   "chartTodayPath": "https://static.nseindia.com/sparklines/today/LTEQN.jpg",
  //   "meta": {
  //     "symbol": "LT",
  //     "companyName": "Larsen & Toubro Limited",
  //     "industry": "ENGINEERING",
  //     "activeSeries": [
  //       "EQ"
  //     ],
  //     "debtSeries": [],
  //     "tempSuspendedSeries": [],
  //     "isFNOSec": true,
  //     "isCASec": false,
  //     "isSLBSec": true,
  //     "isDebtSec": false,
  //     "isSuspended": false,
  //     "isETFSec": false,
  //     "isDelisted": false,
  //     "isin": "INE018A01030"
  //   }
  // },

  const columns = [
    {
      header: "SYMBOL",
      accessorKey: "symbol",
    },
    {
      header: "OPEN",
      accessorKey: "open",
      // accessorFn: (row) => { return (`${row.first_name} ${row.last_name}`) },
    },

    {
      header: "HIGH",
      accessorKey: "dayHigh",
    },
    {
      header: "LOW",
      accessorKey: "dayLow",
    },
    {
      header: "PREV. CLOSE",
      accessorKey: "previousClose",
    },
    {
      header: "LTP",
      accessorKey: "lastPrice",
    },
    {
      header: "CHNG",
      accessorKey: "change",
    },
    {
      header: "% CHNG",
      accessorKey: "pChange",
    },
    {
      header: "VOLUMS (Shares)",
      accessorKey: "totalTradedVolume",
    },
    {
      header: "Value Rs.",
      accessorKey: "totalTradedValue",
    },
    {
      header: "52WH",
      accessorKey: "yearHigh",
    },
    {
      header: "52WL",
      accessorKey: "yearLow",
    },
    // {
    //   header: "DOB",
    //   accessorKey: "dob",
    //   footer: "DOB",
    //   cell: (item) => DOB_convertor(item.getValue()),
    // },

  ];

  // -------------------- FUNCTIONS --------------------

  const handleCSVInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const jsonData = CSVToJSON(csvData);
      console.log("✅✅✅",csvToObj(jsonData))
      
      

      // setJSONData(jsonData);
    };

    reader.readAsText(file);
  };

  const add_filter_to_tabs = (title) => {
    setSelectedData(title);
    if (filterDataList.indexOf(title) >= 0) {
      // alert("Filter Already Entered");
    } else {
      setFilterDataList((e) => {
        return [...e, title];
      });
    }
  };

  function CSVToJSON(csvData) {
    var data = CSVToArray(csvData);
    var objData = [];
    for (var i = 1; i < data.length; i++) {
        objData[i - 1] = {};
        for (var k = 0; k < data[0].length && k < data[i].length; k++) {
            var key = data[0][k];
            objData[i - 1][key] = data[i][k]
        }
    }
    var jsonData = JSON.stringify(objData);
    jsonData = jsonData.replace(/},/g, "},\r\n");
    return jsonData;
}

function CSVToArray(csvData, delimiter) {
  delimiter = (delimiter || ",");
   var pattern = new RegExp((
  "(\\" + delimiter + "|\\r?\\n|\\r|^)" +
  "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
  "([^\"\\" + delimiter + "\\r\\n]*))"), "gi");
  var data = [[]];
  var matches = null;
  while (matches = pattern.exec(csvData)) {
      var matchedDelimiter = matches[1];
      if (matchedDelimiter.length && (matchedDelimiter != delimiter)) {
          data.push([]);
      }
      if (matches[2]) {
          var matchedDelimiter = matches[2].replace(
          new RegExp("\"\"", "g"), "\"");
      } else {
          var matchedDelimiter = matches[3];
      }
      data[data.length - 1].push(matchedDelimiter);
  }
  return (data);
}

  const getFetch = () => {
    const options = {
      method: "GET",
      headers: JSON.stringify({
        authority: "www.nseindia.com",
        ["user-agent"]:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      }),
    };

    fetch(
      "https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response, "✅✅✅✅✅");
      })
      .catch((err) => {
        console.log("❌", err.message);
      });
  };
// manual routing preventor
  useEffect(() => {
    // if(!!auth.currentUser){

    // }else{
    //   navigation("/")
    // }
  }, []);

  return (
    <div className="mainContainer">
      <Appbar />
      
      <Search
        value={searchStr}
        setValue={setSearchStr}
        addCalback={add_filter_to_tabs}
      />
      <Tabs
        filterDataList={filterDataList}
        setFilterDataList={setFilterDataList}
        selectedDataData={selectedDataData}
        setSelectedData={setSelectedData}
      />
      <Table
        filtering={searchStr}
        steFiltering={setSearchStr}
        columns={columns}
      />
    </div>
  );
}

export default Home_page;
