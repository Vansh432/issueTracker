//show the dropdown list of issues-->
let heading = document.getElementById('labelHeading');
let labelList = document.getElementById('labelList');


//when user click on label heading line no 37 in project_view.ejs files toggle class -->
heading.addEventListener('click', () => {
  labelList.classList.toggle('active');
})



//we add checked in the checkboxe when click on labels
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
