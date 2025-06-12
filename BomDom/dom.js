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

document
.getElementById("ChangeOrder")
.addEventListener("click",function(){
    let coffeeType=document.getElementById("coffeeType");
    coffeeType.textContent = "expresso";
  });

  document
  .getElementById("AddNewitems")
  .addEventListener("click",function(){
    let Newlist= document.createElement("li")
    Newlist.textContent="Egg"
    document.getElementById("ShoppingList").appendChild(Newlist)
    
   

  })
  document
  .getElementById("RemoveItems")
  .addEventListener("click",function(){
    let tasklist= document.getElementById("TaskList") 
    tasklist.lastElementChild.remove()
  })

  document
  .getElementById("clickmebutton")
  .addEventListener("mouseover",function(){
    alert("I am roli")
  })

  // exercise 7
  document
  .getElementById("tealist")
  .addEventListener("click",function(event){
  if (event.target && event.target.matches(".teaitem")) {
    alert("you have selected :"+ event.target.textContent)
    
  }
  })
  // exercise 8
  document 
  .getElementById("feedbackform").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback= document.getElementById("feedbackinput").value;
    console.log(feedback)
    document.getElementById("feedbackdisplay").textContent=`feedback is: ${feedback}`
  })

  // exersise 9
  document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("loading").textContent="Dom content fully loaded"
  })

  // exercise 10
  document
  .getElementById("togglehighlight")
  .addEventListener("click",function(){
    let descriptionText= document.getElementById("textdescription")
    descriptionText.classList.toggle("highlight")
  })