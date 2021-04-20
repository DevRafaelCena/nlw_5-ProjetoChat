import express from 'express';

let port = 2222


const app = express();

app.get("/",(request, response)=>{
    return response.json({msg: "OLA MUNDO NLW"})
})


app.post("/",(request, response)=>{

    //const {nome} = request.body
    return response.json({msg: `Usuario  cadastrado com sucesso!`})
})


app.listen(port,()=>{console.log("Server is running on port " + port )})