//show the dropdown list of issues-->
let heading = document.getElementById('labelHeading');
let labelList = document.getElementById('labelList');
heading.addEventListener('click', () => {
  labelList.classList.toggle('active');
})

let Li = document.querySelectorAll('li');
Li.forEach(Element => {
  Element.addEventListener('click', () => {
    if (Element.childNodes[1].checked == true) {
      Element.childNodes[1].checked = false;
    } else {
      Element.childNodes[1].checked = true;
    }
  })
})