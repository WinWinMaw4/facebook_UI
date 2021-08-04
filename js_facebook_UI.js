
let left_part_first_ul_Tag = document.getElementsByClassName("left_part_first_ul");


function seemore(){
    let x = document.getElementById("left_part_first_ul");

    let y = x.getElementsByClassName("hide_part");
    let see_moreTag = document.getElementById("see_more");
    var i = 0;

    for(i=0;i<y.length;i++){
      console.log("contain function")
      if (y[i].style.display === "none") {
        y[i].style.display = "block";
        console.log("block");
        see_moreTag.style.display = "none";

       
      } else {
        y[i].style.display = "none";
        console.log("none");
        see_moreTag.style.display = "inline-flex";
      }
    }
}

//seemore2()
function seemore2(){
  let x = document.getElementById("left_part_second_ul");
  
  let z = x.getElementsByClassName("hide_part");
  let see_moreTag = document.getElementById("see_more2");
  var i = 0;

  for(i=0;i<z.length;i++){
    console.log("contain function")
    if (z[i].style.display === "none") {
      z[i].style.display = "block";
      console.log("block");
      see_moreTag.style.display = "none";
    } else {
      z[i].style.display = "none";
      console.log("none");
      see_moreTag.style.display = "inline-flex";
    }
  }
}


//darkMode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }