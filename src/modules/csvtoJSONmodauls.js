export const convertCSVToJson = (csvData) => {
    const lines = csvData.split("\n");
    const headers = lines[0].split(",");
    const result = [];
  
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(",");
  
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j].trim()] = currentLine[j];
      }
  
      result.push(obj);
    }
  
    return result;
  };

