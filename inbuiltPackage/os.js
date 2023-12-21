const os =require("os")

console.log("free memory",os.freemem()/1024/1024/1024/1024)
console.log("free memory",os.totalmem()/1024/1024/1024/1024)

//get os info
console.log("os release",os.release())
console.log("os type",os.type())
console.log("os platform",os.platform())

//cpu info
console.log("arch",os.arch())
console.log("core",os.cpus().length)
console.log(`core${os.cpus().length}cores`)

//cpu speed
console.log("cpu speed",os.cpus()[0].speed)

console.log("network",os.networkInterfaces())