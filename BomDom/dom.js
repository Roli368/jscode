document
  .getElementById("change_text")
  .addEventListener("click",function(){
    let paragraph=document.getElementById("my_paragraph");
   paragraph.textContent = "the paraghaph content changed"
  });

document
        .getElementById("highlightFirstChild")
        .addEventListener('click',function(){
            let citieslist=document.getElementById("citylist")
            citieslist.firstElementChild.classList.add("highlight")
        })

document.getElementById("ChangeOrder").addEventListener
("click",function(){
    let coffeeType=document.getElementById("coffeeType");
    coffeeType.textContent = "expresso";
  });