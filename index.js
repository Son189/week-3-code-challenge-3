document.addEventListener("DOMContentLoaded", () => {
    
      fetch("http://localhost:3000")
     .then(response => response.json())
     .then(data => { film(data) })
    })
    var form=  document.getElementById("movieform").submit(
    function film(e){
        e.preventDefault()
var movie = document.querySelector("#movie").val()
/* var result =""
method:'GET'
result =`
img src=${data.poster}
`
document.querySelector("#result").innerHTML(result)*/
const movieform = (films) =>{
var poster= document.getElementById("poster")
poster.src = film.poster 
var title= document.getElementById("title")
title.innerText=film.title
var showtime= document.getElementById("showtime")
showtime.innerText=film.showtime
var runtime= document.getElementById("runtime")
runtime.innerText =`${film.runtime}minutes`
var description= document.getElementById ("description")
description.innerText=film.description
const ticketSpan = document.getElementById("ticket-num")
// tickets available would be film.capacity string minus film.tickets_sold
const convertedCapacity = parseInt(film.capacity, 10)
ticketSpan.innerText = convertedCapacity - film.tickets_sold
}})
const button = document.querySelector("form-control")
button.addEventListener("click", (e) => {
  if (ticketSpan.innerText <= 0){
     let buttonDiv = document.querySelector('.extra.content');    
     buttonDiv.innerHTML = "<button>Sold Out</button>"
  }
  else {
     const tickets_sold = film.tickets_sold + 1
     let obj = {tickets_sold} //this has to be key:value pair
     updateTicketNum(obj)
  }
} )

