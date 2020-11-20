
showExcel=()=>{
    try{
        xlsxj({
        input: "./sampleData.xlsx", 
        output: "output.json",
        lowerCaseHeaders:true //converts excel header rows into lowercase as json keys
    }, function(err, result) {
        if(err) {
            console.error(err);
        }else {
            console.log(result);
        }
    });
    } catch(e){
        res.json({error_code:1,err_desc:"Corupted excel file"});
    }

}

  app.get("/", (req,res)=>{
    showExcel();
    res.send("You are here!!!");
})
