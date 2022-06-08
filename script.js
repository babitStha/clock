const hourHandle = document.querySelector(".hour")
const minuteHandle = document.querySelector(".minute")
const secondHandle = document.querySelector(".second")
const digitalHour = document.querySelector(".digitalHour")
const digitalMinute = document.querySelector(".digitalMinute")
const digitalSecond = document.querySelector(".digitalSecond")
const suffix = document.querySelector(".suffix")
const setRotation = (element, ratio)=>{
  element.style.setProperty('--rotate', ratio*360)
}
const setClock = ()=>{
  const date = new Date()
  const secondRatio =date.getSeconds()/60
  const minuteRatio =(secondRatio + date.getMinutes())/60
  const hourRatio =(minuteRatio + date.getHours())/12
  setRotation(secondHandle, secondRatio)
  setRotation(minuteHandle, minuteRatio)
  setRotation(hourHandle, hourRatio)
  digitalHour.innerHTML =(date.getHours()% 12).toString().padStart(2, "0")
  digitalMinute.innerHTML = date.getMinutes().toString().padStart(2, "0")
  digitalSecond.innerHTML = date.getSeconds().toString().padStart(2, "0")
  suffix.innerHTML = (date.getHours() >= 12) ? "PM":"AM";
}
setInterval(setClock,1000)
setClock()
