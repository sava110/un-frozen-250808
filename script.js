window.addEventListener("load", function() { // 修正: `addEvenListener` → `addEventListener`
  const btn = document.getElementById("myButton"); // 修正: `getElementByID` → `getElementById`

  btn.addEventListener("click", function() { // 修正: `adEventListener` → `addEventListener`
    alert("You clicked the button!"); // 修正: セミコロン漏れ
  });
});
