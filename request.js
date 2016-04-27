function request() {
  var el = document.getElementById("test")
  if (sessionStorage.getItem('key') == null) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var y = xhttp.responseText;
        var x = document.createTextNode(y);
        el.appendChild(x);
        sessionStorage.setItem('key', y);
      }
    };
    xhttp.open("POST", "getData.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("file=file1.txt");
  }
  else {
    if (el.hasChildNodes()) {
      toggle_visibility();
    }
    else {
      var z = sessionStorage.getItem('key');
      el.textContent = z;
    }
  }
}
function toggle_visibility() {
  var e = document.getElementById("test");
  if (e.textContent == null)
    e.textContent = sessionStorage.getItem('key');
  else
    e.textContent = null;
}