const open = document.querySelector("#open")
const close = document.querySelector("#close")
const container = document.querySelector('.container')


open.addEventListener("click",()=>{
    myFun()
})

close.addEventListener("click",()=>{
    myFun2()
})
const myFun=()=>{
    container.classList.add('show-nav')
    console.log("click")
}

const myFun2=()=>{
    container.classList.remove('show-nav')
    console.log("click2")
}

// done