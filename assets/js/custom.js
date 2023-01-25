var el = document.getElementsByClassName('timestamp');

for (let index = 0; index < el.length; index++) {
  el[index].innerText = el[index].innerText.substring(1,el.length-4)
}
