export default (timeOutInMilliSeconds=3000) =>{
let elem = document.getElementsByClassName("toast")[0]
  elem.classList.add("show")
  elem.style.animation = `fadein 0.5s`
  setTimeout(()=>{
    elem.classList.remove("show")
  },timeOutInMilliSeconds)
  // setTimeout(()=>{
  //     elem.style.animation = `fadout 0.5s  0.2s`
  // },timeOutInMilliSeconds-500)
}