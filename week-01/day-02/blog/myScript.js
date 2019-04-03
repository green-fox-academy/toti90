var number = 1;
function doOnClick() {
  if (number < 4) {
    var title = document.getElementById("title").value;
    var text = document.getElementById("textarea").value;
    if (title==""){
      document.getElementById("h3_" + String(number)).textContent="NO TITLE";
    } else {
      document.getElementById("h3_" + String(number)).textContent=title;
    }
    document.getElementById("p_" + String(number)).textContent=text;

    number ++;
    document.getElementById("title").value="";
    document.getElementById("textarea").value="";
  } else {
    alert("no more post for today")
    document.getElementById("title").value="";
    document.getElementById("textarea").value="";
  }
}

function doOnDelete() {
  document.getElementById("title").value="";
  document.getElementById("textarea").value="";
}