const fs=require("fs")

// const quote="kaisoku oni ore wa naru"
// const quote2="tatake"
// const quote3="nandamo nandamo nandamo"
// // fs.writeFile("ahtml.html",quote,()=>{
// //     console.log("written completed")
// // })
// const [,,n]=process.argv

// for(i=0;i<=n;i++){
//     fs.writeFile(`./backup/file-${i}.html`,quote3,()=>{
//         console.log(`backup html nandamo file-${i} is created`)
//     })
// }

// // fs.readFile("./ahtml.html","utf-8",(err,data)=>{
// //     if (err) console.log("ERROR",err)
// //     console.log(data)
// // })

// const currentDate=new Date()
// const formattedDate=`${currentDate.getFullYear()}-${(currentDate.getMonth()+1).toString().padStart(2,"0")}-${currentDate.getDate().toString().padStart(2,"0")}`
                    
// const formattedTime=currentDate.getHours()
// console.log(formattedDate)

// const fileName=`${formattedDate}_${formattedTime}.txt`
// console.log(fileName)

// const TimeStamp=currentDate.toISOString()
// const content=`timestamp: ${TimeStamp}`
// console.log(content)

// fs.writeFile(`./backup/${fileName}`,content,(err)=>{
//     if (err) console.log("error",err)
//     console.log(`file is create ${fileName}`)
// })
// const newFile="\nim a  new file"
// fs.writeFile("./mySample.txt",newFile, (err)=>{
//     console.log("file is  created")
// })

// fs.unlink("./mySample.txt",()=>{
//     console.log("deleted successfully")
// })

fs.readdir("./backup",(err,data)=>{
    console.log(data)
    data.forEach(element => {
        console.log(element)
        fs.unlink(`./backup/${element}`,(err)=>{
            console.log(err,"something is wrong")
        })
    });
})
