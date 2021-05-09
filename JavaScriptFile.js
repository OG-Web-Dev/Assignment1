window.onload=function () {


    let modal = document.getElementById("myModal");
    let img = document.getElementById("info_pic");
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }


    let span = document.getElementsByClassName("close")[0];


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

    $("[id='comment']").attr("required", true);
    $("[id='first-name']").attr("required", true);
    $("[id='last-name']").attr("required", true);
    $("[id='email']").attr("required", true);
    $("[id='phone']").attr("required", true);



    let textarea = document.getElementById("comment");
    let current = document.getElementById("current");
    textarea.setAttribute("maxlength","200");
    if(/^[0-9]+$/.test(textarea.getAttribute("maxlength"))) {
        let func = function() {
            let len = parseInt(this.getAttribute("maxlength"), 10);

            if(this.value.length == len) {
                alert('Maximum length exceeded: ' + len);
                this.value = this.value.substr(0, len);
                return false;
            }
        }
        textarea.onkeyup = func;
    }



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