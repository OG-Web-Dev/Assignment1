window.onload=function () {


    let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
    let img = document.getElementById("info_pic");
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

// Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    //2
    let barProgress = {OrganizationBar: 85, CollaborationBar: 80, ManagementBar: 99, ProblemSolvingBar: 75};
    let barArr = document.getElementsByClassName("progress-bar");
    for (let i = 0; i < barArr.length; i++) {
        barArr[i].addEventListener("mouseover", fillBar);

    }

    function fillBar() {
        for (let j = 0; j <= barProgress[this.id]; j++) {
            this.style.width = j.toString() + "%";
        }
    }

//3

    let textarea = document.getElementById("comment");
    let current = document.getElementById("current");
    textarea.addEventListener("keyup", updateCounter);

    function updateCounter() {

        current.innerHTML = textarea.textLength;

    }

    //6
    let backToTop=document.getElementById("backToTopBtn");
    backToTop.addEventListener("click",topFunc);

    function topFunc(){
        let rootElement=document.documentElement;
       rootElement.scrollTo({
           top:0, behavior:"smooth"
       })
    }
}

window.onscroll = function() {
let mybutton=document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}