let buttons = document.querySelectorAll(".button")
let output = document.querySelector(".output")

const Ac = document.querySelector(".ac") 

const add = document.querySelector(".add").textContent
const sub = document.querySelector(".sub").textContent
const multi = document.querySelector(".multi").textContent
const divide = document.querySelector(".divide").textContent
const percentage = document.querySelector(".percentage").textContent
const equal = document.querySelector(".equal")
// console.log(typeof(add))

// console.log(buttons)
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        // console.log()
        const data = button.textContent
        let data1 = output.textContent
        output.innerHTML = data1 + data
        // console.log(data1)
        
    })
    
})

equal.addEventListener("click",()=>{
    const data = output.textContent
    const find = data.includes(add)

    let a = ""
    let result = 0
    for(const i in data){
        // console.log(i)
        let eachData = data[i]
        // console.log(eachData)


        if(eachData === "1" || eachData === "2" || eachData == "3" ){
            a =a+ eachData
            console.log("a",a)
            // console.log("shi h")
            // result = a
            
        }
        else if (eachData === add) {
            let num1 = Number(a)
            console.log("num1",num1)
            result = Number(result)
            result += num1
            console.log("result",result)
            console.log(typeof(result))

            console.log("add",eachData)
        }
        else if (eachData === sub) {
            console.log("sub",eachData)
            
        }
        else if (eachData === multi) {
            console.log("multiply",eachData)
            
        }
        else if (eachData === divide) {
            console.log("divide",eachData)
            
        }
        else if (eachData === percentage) {
            console.log("percentage",eachData)
            
        }
        else{
            const sign = eachData
            // const output 
            // console.log(typeof())
            // console.log("glt h")
        }
        output.innerHTML = result
    }

  
})



Ac.addEventListener("click",()=>{
    output.innerHTML = ""
})
