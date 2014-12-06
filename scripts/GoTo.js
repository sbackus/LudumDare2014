$( document ).ready(function() {
  function goTo(tag_id) {
    alert("this got clicked!")
    var e = document.getElementById(tag_id)
    alert(e.innerHTML)
    e.click()
  }
});

