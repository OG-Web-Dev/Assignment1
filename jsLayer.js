organization=null;
collaboration = null;
management=null;
problemSolving= null;
recommendations=null;

window.onload=initElementReferences;

function initElementReferences()
{
    script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    organization  = document.getElementById("OrganizationBar");
    organization.style.width=0+"%";
    organization.addEventListener("mouseover",advanceProgressBar);

    collaboration = document.getElementById("CollaborationBar");
    collaboration.style.width=0+"%";
    collaboration.onmouseover=advanceProgressBar;

    management = document.getElementById("ManagementBar");
    management.style.width=0+"%";
    management.onmouseover=advanceProgressBar;

    problemSolving = document.getElementById("ProblemSolvingBar");
    problemSolving.style.width=0+"%";
    problemSolving.onmouseover=advanceProgressBar;



    recommendations=document.getElementById("recommendations");
    generateForm();
}

function advanceProgressBar()
{
  let width=0;
  let element=document.getElementById(this.id);
  element.style.width=0+"%";
  advance();
    function advance()
    {
        width++;
        let currentWidth=parseInt(element.style.width.replace("%",""));

        let max =parseInt(element.innerHTML.replace("%",""));
        if (currentWidth<max)
        {

            element.style.width=width+"%";
            setTimeout(advance,5);
        }
    }
}



function generateFormOnBottom()
{
    let form=document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    form.append("body");
    let button = document.createElement("input");
    form.appendChild(button);
}

function generateForm()
{
    //var down = document.getElementById("body");

    // Create a break line element
    var br = document.createElement("br");
    GFG_Fun();
    function GFG_Fun() {

        GFG_Fun();

        function GFG_Fun() {

            br= document.createElement("br");
            br.setAttribute("type","br");

            // Create a form synamically
            var form = document.createElement("form");
            form.setAttribute("method", "post");
            form.setAttribute("action","index.html");

            //Create an input element for the name.
            var name = document.createElement("input");
            name.setAttribute("type","name");
            name.setAttribute("name","name");
            name.setAttribute("placeholder","Full name");
            name.setAttribute("required","");

            // Create an input element for phone
            var phone = document.createElement("input");
            phone.setAttribute("type", "phone");
            phone.setAttribute("name", "phone");
            phone.setAttribute("placeholder", "Phone number");
            phone.setAttribute("required","");

            // Create an input element for emailID
            var email = document.createElement("input");
            email.setAttribute("type", "text");
            email.setAttribute("name", "email");
            email.setAttribute("placeholder", "Email address");
            email.setAttribute("required","");

            var freeText = document.createElement("input");
            freeText.setAttribute("type","text");
            freeText.setAttribute("id","freeText");
            freeText.setAttribute("name","free text");
            freeText.setAttribute("placeholder","Tell me anything!");
            freeText.style.height="100%";

            // Create a submit button
            var s = document.createElement("input");
            s.setAttribute("type", "submit");
            s.setAttribute("value", "Submit");

           form.append(br.cloneNode(true));

            let title = document.createElement("h1");
            title.setAttribute("type","h1");
            title.innerHTML="Contact Me";
            form.append(title);

            form.append(br.cloneNode(true));
            form.append(name);
            form.append(br.cloneNode(true));


             //Append the phone to the form
            form.append(phone);
            form.append(br.cloneNode(true));

             //Append the email_ID input to the form
            form.append(email);
            form.append(br.cloneNode(true));
            form.append(br.cloneNode(true));

            form.append(freeText);

            let textCounter= document.createElement("span");
            textCounter.setAttribute("id","textCounter");
            textCounter.innerHTML="0 characters out of 200";
            freeText.onkeyup=characterCount;
            form.append(textCounter);
            form.append(br.cloneNode(true));
            form.append(br.cloneNode(true));


            // Append the button to the form
            form.append(s);
            form.appendChild(br.cloneNode(true));

            document.getElementsByTagName("body")[0].appendChild(form);
            let boundry= document.getElementById("boundry");

            //
            // let section = document.createElement("h1");
            // section.setAttribute("type","section");



            boundry.parentNode.insertBefore(br,boundry.nextSibling);
            br.parentNode.insertBefore(form,br.nextSibling);
            form.style.textAlign="center";
        }
    }
}

function characterCount()
{
    let text= document.getElementById("freeText");
    let counter= document.getElementById("textCounter");
    counter.innerHTML=text.value.length +" characters out of 200";

    if (this.value.length>=200)
    {
        this.value=this.value.substring(0,200);
        counter.style.color="red";
    }
    else
        counter.style.color="black";
    console.log(this.value.length);
}