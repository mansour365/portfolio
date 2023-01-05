//When user scrolls down 80px from top -> resize navbar padding and logo font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "1px 0px"; //padding when scroll
        document.getElementById("logo").style.fontSize = "25px"; //logo size when scroll
    } 
    else {
        document.getElementById("navbar").style.padding = "54px 0px"; //padding when didn't scroll
        document.getElementById("logo").style.fontSize = "35px"; //logo size when didn't scroll
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
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });

});


 const hiddenElements = document.querySelectorAll('.hidden');

 hiddenElements.forEach((el) => observer.observe(el));