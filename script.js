let buttons = document.querySelectorAll(".button")
let output = document.querySelector(".output")
const delBtn = document.querySelector(".del")

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
    let data = output.textContent
    const find = data.includes(add)

    let result = 0
    let value = data.split(add)
    console.log(typeof(value) , "value" , value)

    value.map((e,i)=>{
        
        console.log(typeof(e),e)

        // console.log("SUBTRACT WALA")

        // if(e.includes(sub)){
        //     let subtract = 0
        //     // console.log(e)
        //     let subt = e.split(sub)
        //     // result = e[i]
        //     console.log(typeof(subt), subt)
        //     subt.map((elem , i)=>{
        //         // console.log(elem[i],i,elem)
        //         subtract = elem[i]
        //         result = result + Number(elem) 
        //     })

        // }

        console.log("MULTIPLY WALA")
        
        if(e.includes(multi)){

            let multiply = 1

            // console.log(e)
            let multip = e.split(multi)
            // result = e[i]
            console.log(typeof(multip), multip)
            multip.map((elem , i)=>{

                multiply = multiply*Number(elem)
                console.log(typeof(multiply) , "multiply is =" , multiply)

                // console.log(elem[i],i,elem)
            })
            result += multiply
            
        }

        console.log("DIVIDE WALA")
        
        if(e.includes(divide)){

            let div = 1
            // console.log(e)
            let divides = e.split(divide)
            // result = e[i]
            console.log(typeof(divides), divides)
            divides.map((elem , i)=>{

                div = div/Number(elem)
                console.log(div)
                
                
                console.log(elem[i],i,elem)
            })
            result += div

        }

    })

    // data = result
    // console.log(`data ${data}`)
    // value = data.split(sub)

    // console.log(value)


    console.log("result is = ", result)
    output.innerHTML = result


    // let a = ""
    // let result = 0
    // for(const i in data){
    //     // console.log(i)
    //     let eachData = data[i]
    //     // console.log(eachData)


    //     if(eachData === "1" || eachData === "2" || eachData == "3" ){
    //         a =a+ eachData
    //         console.log("a",a)
    //         // console.log("shi h")
    //         // result = a
            
    //     }
    //     else if (eachData === add) {
    //         let num1 = Number(a)
    //         console.log("num1",num1)
    //         result = Number(result)
    //         result += num1
    //         console.log("result",result)
    //         console.log(typeof(result))

    //         console.log("add",eachData)
    //     }
    //     else if (eachData === sub) {
    //         console.log("sub",eachData)
            
    //     }
    //     else if (eachData === multi) {
    //         console.log("multiply",eachData)
            
    //     }
    //     else if (eachData === divide) {
    //         console.log("divide",eachData)
            
    //     }
    //     else if (eachData === percentage) {
    //         console.log("percentage",eachData)
            
    //     }
    //     else{
    //         const sign = eachData
    //         // const output 
    //         // console.log(typeof())
    //         // console.log("glt h")
    //     }
    //     output.innerHTML = result
    // }

  
})



Ac.addEventListener("click",()=>{
    output.innerHTML = ""
})


delBtn.addEventListener("click",()=>{
    // console.log(typeof(output.innerHTML))
    const newoutput = output.innerHTML.slice(0,-1)
    // console.log(newoutput)
    output.innerHTML = newoutput
})