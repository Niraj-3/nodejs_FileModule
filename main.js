#!/usr/bin/env node
const fs = require('fs')
const inputArr = process.argv.slice(2)

let optionArr = []
let fileArr = []

//seperating the command into options and files
for(let i=0;i<inputArr.length;i++){
    let firstChar = inputArr[i].charAt(0)
    if(firstChar=='-'){
        optionArr.push(inputArr[i])
    }else{
        fileArr.push(inputArr[i])
    }
}

//1. -n and -b are 2 options available together then command should give you an error

let bothOption = optionArr.includes('-n') && optionArr.includes('-b')
if(bothOption){
    console.log("Cannot use -n and -b together")
    return;
}

//2. If file entered is not found then it gives file does not exist error. 
for(let i=0;i<fileArr.length;i++){
    let isExist = fs.existsSync(fileArr[i]);
    if(isExist == false){
        console.log(`File ${fileArr[i]} does not exist`)
        return 
    }
}

let content = ""
for(let i=0;i<fileArr.length;i++){
    let bufferOutput = fs.readFileSync(fileArr[i])
    content+=bufferOutput + '\r\n'
}

let contetnArr = content.split("\r\n")



let sPresent = optionArr.includes('-s')
if(sPresent){
    content=""
    for(let i=1;i<contetnArr.length-1;i++){
        if(contetnArr[i]=='' && contetnArr[i-1]==''){
            contetnArr[i]=null
        }else if(contetnArr[i]=='' && contetnArr[i-1]==null){
            contetnArr[i]=null;
        }
    }
    for(let i=0;i<contetnArr.length-1;i++){
        if(contetnArr[i]!=null)
            content+=contetnArr[i]+"\r\n"
    }
    contetnArr = content.split('\r\n')
    
}



let nPresent = optionArr.includes('-n')
if(nPresent){
    content=''
    for(let i=0;i<contetnArr.length-1;i++){
        if(contetnArr[i]!=null){
            contetnArr[i]=`${i+1} ` + contetnArr[i]
        }
    }
    for(let i=0;i<contetnArr.length-1;i++){
        if(contetnArr[i]!=null)
            content+=contetnArr[i]+"\r\n"
    }
}



let bPresent = optionArr.includes('-b')
if(bPresent){
    content=''
    let count=1;
    for(let i=0;i<contetnArr.length-1;i++){
        if(contetnArr[i]==null || contetnArr[i]==''){
            continue
        }else{
            contetnArr[i]=`${count} ` + contetnArr[i]
            count++
        }
    }

    for(let i=0;i<contetnArr.length-1;i++){
        if(contetnArr[i]!=null)
            content+=contetnArr[i]+"\r\n"
    }
}

console.log(content)