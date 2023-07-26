import axios from "axios";

export const getTableDataFetch = ()=>{
  const options = {
    method: 'GET',
    url: 'https://www.nseindia.com/api/equity-stockIndices',
    params: {index: 'NIFTY 50'},
    headers: {
      authority: 'www.nseindia.com',
      accept: '*/*',
      'accept-language': 'en-GB,en;q=0.7',
      referer: 'https://www.nseindia.com/market-data/live-equity-market?symbol=NIFTY%2050',
      'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
      'sec-fetch-mode': 'cors'
    }
  };
      
      return(axios.request(options))
}