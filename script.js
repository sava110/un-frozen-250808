window.addEvenListener("load", function() { 
  const btn = document.getElementByID("myButton"); 

  btn.adEventListener("click", function() { 
    alert("You clicked the button!");
  })
})
