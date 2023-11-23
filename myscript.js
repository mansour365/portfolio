//When user scrolls down 80px from top -> resize navbar padding and logo font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "6px 0px"; //padding when scroll
        document.getElementById("logo").style.fontSize = "25px"; //logo size when scroll
        document.getElementById("navbar").style.boxShadow = "0 0 6px 3px rgba(0, 0, 0, 0.3)";
        //Add shadow

    } 
    else {
        document.getElementById("navbar").style.padding = "6px 0px"; //padding when didn't scroll
        document.getElementById("logo").style.fontSize = "25px"; //logo size when didn't scroll
        document.getElementById("navbar").style.boxShadow = "none";
        //Remove shadow


    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleVerticalMenu() {

    var x = document.getElementById("navbar-right");

    if (x.className === "anchor-links") {
        x.className += " responsive";
    } 
    else {
        x.className = "anchor-links";
    }

}

/*Maybe use this when you exit small screen and go back to large screen idk*/
function hideVerticalMenu() {
    var x = document.getElementById("navbar-right");
    x.className = "anchor-links";
}





/*For stagered icons*/

/*Create intersection observer*/
const observer = new IntersectionObserver((entries)=>{     //class that takes callback function in constructor
    entries.forEach((entry) => {                            // function runs everytime visibility of observed elements changes
        console.log(entry)
        if (entry.isIntersecting){              //check if that element is interscting the view port
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));  //loop over all hidden elements, tell observer to observe each one of them







/*Different method used for quote animations*/
 function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 75; /*how many pixels under the element under it appears*/

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
      else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

reveal(); // To check the scroll position on page load