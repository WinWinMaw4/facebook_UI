
let left_part_first_ul_Tag = document.getElementsByClassName("left_part_first_ul");

//see more 1
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


//DARK MODE
let darkMode = ()=>{
    let element = document.body;
    let addPost = document.querySelector('.add_post');
    let createRoomBox = document.querySelector(".create-room-box");
    let fbMainPartContainer = document.querySelector(".fb_main_part_container")
    let postList = document.querySelectorAll(".post_list");
    
    //add dark-mode class
   element.classList.toggle("dark-mode");

    //dm-nav
    let dmNav = document.querySelector("nav");
    dmNav.classList.toggle("dm-nav");
    //dm-searchBox,dm-searchText
    let searchBox = document.querySelector(" .search-box ");
    let searchText = document.querySelector(" .search-text ");
    searchBox.classList.toggle("dm-searchBox") ;
    searchText.classList.toggle("dm-searchText");
    //add dark-mode-mainpart
    addPost.classList.toggle("dark-mode-mainpart");
    createRoomBox.classList.toggle("dark-mode-mainpart");
      for (var i = 0; i < postList.length; i++) {
          postList[i].classList.toggle("dark-mode-mainpart");
      };
    //add hover style in class
    let hoverClass = document.querySelectorAll(".add_file>div,.give-react>div,.sponsored-item,.fr-second-part,.birthdays-list,.contacts-list-item,.left_part_first>ul>li,.your-shortcut>li,.center_link,.center_link.active,.right_part");
    for (var i = 0; i < hoverClass.length; i++) {
      hoverClass[i].classList.toggle("hover-class");
    }
    // .dm-rightPart:hover
    let RightPartHover= document.querySelectorAll(".right_part");
    for (var i = 0; i < RightPartHover.length; i++) {
      RightPartHover[i].classList.toggle("dm-rightPart");
    }

    //my-day-text,dm-myDayText,dm-OwnerPf
    let dmMyDayText = document.querySelector(".my-day-text");
    let dmOwnerPf = document.querySelector(".owner-pf");
    dmMyDayText.classList.toggle("dm-myDayText");
    dmOwnerPf.classList.toggle("dm-ownerPf");


    //add input  style .add-text-box
    let addTextBox = document.querySelector(".add-text-box");
    let postText = document.querySelector(".post-text");
    addTextBox.classList.toggle("dm-addTextBox") ;
    postText.classList.toggle("dm-postText");

    //small icons ,dm-icon
    let dmIcon=document.querySelectorAll(".see_less_icon,.see_more_icon,.scroll-my-day,.scroll-create-room,.right_part,.new_message");
    // dmIcon.classList.toggle("dm-icon");
    for (var i = 0; i < dmIcon.length; i++) {
      dmIcon[i].classList.toggle("dm-icon");
    }
    //dm-divider
    let dmDivider = document.querySelectorAll(".divider");
    for (var i = 0; i < dmDivider.length; i++) {
      dmDivider[i].classList.toggle("dm-divider");
    }
 }

 




