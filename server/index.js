const express = require('express');
const app = express();
//const xlsxj = require("xlsx-to-json-lc");
const PORT = 8080;
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());
'use strict';
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
	sourceFile: './sampleData.xlsx'
});
  app.get("/", (req,res)=>{
    console.log(result);
    //res.send("You are here!!!");
    res.status(200).json(result);
})

app.listen(PORT, () => {
    console.log(`Express server listening on ${PORT}`);
});