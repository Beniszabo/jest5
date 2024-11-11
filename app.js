const express=require('express')

const app=express()

app.get(express.json())

app.listen(3000,()=>{
    console.log('A szerver fut...')
})