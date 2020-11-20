const express = require('express');
const app = express();
//const xlsxj = require("xlsx-to-json-lc");
const PORT = 8080;
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, 'finalData.xlsx')
  }
})

const fileUpload = multer({ 
  storage: storage
 });

app.use(express.static("files"));
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

app.post("/upload", fileUpload.single('file'),(req,res)=>{
    console.log(req.file);
    //write fn to convert file to json
    const result = excelToJson({
      sourceFile: 'uploads/'+req.file.filename
    });
    // let data = fs.createReadStream(req.file,'utf8');
    // console.log(data);
    res.status(200).json(result);
})

app.listen(PORT, () => {
    console.log(`Express server listening on ${PORT}`);
});