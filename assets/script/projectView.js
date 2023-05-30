console.log("hello");
// label list -->
let heading = document.getElementById('labelHeading');
let labelList = document.getElementById('labelList');
heading.addEventListener('click', () => {
     labelList.classList.toggle('active');
})




//filtering elements-->
let issueLink = document.querySelectorAll('.issueLink');
let issuesContent = document.getElementsByClassName('issuesContent');
let issuetitle = document.getElementById('issuetitle');

//store the issue title-->
let arr = [];
issueLink.forEach(ele => {
     arr.push(ele);
});



issuetitle.addEventListener('keyup', () => {
     issuesContent[0].innerHTML = "";
     filterByTitleContent(issuetitle.value);
});



//filter content-->
function filterByTitleContent(value) {

     let ans = arr.map(function (x) {
          let text = x.childNodes[1].childNodes[1].childNodes[1].innerText;
           text=text.trim();
          if (text.startsWith(value)) {
               return x;
          }

     });
     for (let i of ans) {
          if (i) issuesContent[0].appendChild(i);
     }
}







// filter by author-->
let searchByAuthor = document.getElementById('searchByAuthor');

searchByAuthor.addEventListener('keyup', () => {
     issuesContent[0].innerHTML = "";
     filterByAuthorContent(searchByAuthor.value);
})

function filterByAuthorContent(value) {
     let ans = arr.map(function (x) {
          let text = x.childNodes[1].childNodes[1].childNodes[3].innerText;
           text=text.trim();
          if (text.startsWith(value)) {
               return x;
          }
     });

     for (let i of ans) {
          if (i) issuesContent[0].appendChild(i);
     }
}



//filter by  labels-->
//checkbox for labels-->
//show content labels-->
//filter content by labels-->
let Li = document.querySelectorAll('li');
Li.forEach(Element => {
     Element.addEventListener('click', () => {
          if (Element.childNodes[1].checked == true) {
               Element.childNodes[1].checked = false;
          } else {
               Element.childNodes[1].checked = true;
          }

          if (checkAnyChecked()) {
               for (let i of arr) {
                    issuesContent[0].appendChild(i);
               }
               return;
          }


          issuesContent[0].innerHTML = "";

          showContent();
     })
});


function checkAnyChecked() {
     for (let i of checkbox) {
          if (i.checked) return false;
     }
     return true;
}
let checkbox = document.querySelectorAll('.checkbox');
let labels = new Set();
function showContent() {
     for (let i of checkbox) {
          if (i.checked) {
               labels.add(i.getAttribute('id'));
          } else {
               labels.delete(i.getAttribute('id'));
          }
     }
     const arr = Array.from(labels);

     filterByLabelsContent(arr);
}

function filterByLabelsContent(labelsArray) {
     ;
     let filterArray = [];
     for (let i = 0; i < arr.length; i++) {

          const list = arr[i].childNodes[1].childNodes[3].children;
          let v = false;
          for (let j of labelsArray) {
               t = false;
               for (let k of list) {

                    if (k.innerText.includes(j)) {
                         t = true;
                         break;
                    }
               }
               if (!t)break;
                    }
          if (t) filterArray.push(arr[i]);
     }

     for (let i of filterArray) {
          if (i) issuesContent[0].appendChild(i);
     }
}
