window.addEvenListener("load", function() { 
  const btn = document.getElementByID("myButton"); 

  btn.addEventListener("click", function() { 
    alert("You clicked the button!");
  })
})
