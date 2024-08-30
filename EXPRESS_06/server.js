//APRIMORAR A APRESENTAÇÃO DOS RESULTADOS

const express = require('express');
const mysql = require9('mysql2');
const mysql_config = require('./mysql_config');
const functions = require ('./functions');
const app = express();
const cors = require ('cors');
app.listen(3000,()=>{
    console.log("Servidor no ar")
})

//mysql connection

const connection =mysql.createConnection()

//criar uma função que irá parametrizar as respostas da api
//para utilizar todos os endpoints vamos uma função para isso

//criando o roteamento 
app.use(cors());

app.get('/', (req,res)=>{
    //estabelecer a conexão para executar a query 
    //vamos consumir a function criada
    connection.query("SELECT * FROM tasks",(err,results)=>{
        if(err){
            res.json(functions.response('error','Error: '+err.message))
        }else{
            res.json(functions.response('sucess', 'tasks listadas com sucesso', results))
        }
    })
})