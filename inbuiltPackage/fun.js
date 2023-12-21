console.log("hello")

// console.log(window)
// console.log(document)
// console.log(global)
console.log(process.argv)
console.log(process.argv[3])

const [,,n1,n2]=process.argv

function double(n1,n2){
    console.log("n1 and n2 value",n1*n2)
}

double(n1,n2)
const [,,a,b]=process.argv

function add (no1,no2)
{
    console.log("add command",(+no1)+(+no2))
}
add(a,b)