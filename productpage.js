
// const searchBar=document.getElementById("search_bar");
// // .queryselector("input");
// searchBar.addEventListener('keyup',function(e){
// const term=e.target.value.toLowerCase();
// const cars=document.getElementsByClassName("car-information");
// Array.from(cars).forEach(function(){
//     const car_make= cars.firstChild("ul");
//     if(car_make.toLowerCase().indexOf(term)!=-1){
//         cars.style.display="block";
//     }else{
//         cars.style.display="none";
//     }
// })

// })
// function  inputHandler(term) {
//     const cars=document.getElementsByClassName("car-information");
//     const foundCars = document.getElementsByClassName("found-cars")
//     Array.from(cars).forEach(function(car){
//     const car_make= car.argument[0];
//     if(car_make.toLowerCase().indexOf(term)!=-1){
//       foundCars.innerHTML = car;
//     }else{
//         cars.style.display="none";
//     }

// })
function myfunction(myul) {
    var input, filter,content,car_information,ul, li, a, i, txtValue;
    input = document.getElementById("search_bar");
    filter = input.value.toUpperCase();
    content =document.getElementsByClassName("content");
    ul = document.getElementById("myul");
    li =ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[0]
        txtValue = a.textContent  || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "list";
        } else {
            li[i].style.display = "none";
        }
    }
}

