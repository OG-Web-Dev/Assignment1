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
    var down = document.getElementById("body");

    // Create a break line element
    var br = document.createElement("br");
    GFG_Fun();
    function GFG_Fun() {

        var down = document.getElementById("GFG_DOWN");
        GFG_Fun();

        function GFG_Fun() {

            // Create a form synamically
            var form = document.createElement("form");
            form.setAttribute("method", "post");
            form.setAttribute("action","index.html");

            //Create an input element for the name.
            var name = document.createElement("input");
            name.setAttribute("type","name");
            name.setAttribute("name","name");
            name.setAttribute("placeholder","Full name");


            // Create an input element for emailID
            var ID = document.createElement("input");
            ID.setAttribute("type", "text");
            ID.setAttribute("name", "emailID");
            ID.setAttribute("placeholder", "E-Mail ID");

            // Create an input element for password
            var PWD = document.createElement("input");
            PWD.setAttribute("type", "password");
            PWD.setAttribute("name", "password");
            PWD.setAttribute("placeholder", "Password");

            // Create a submit button
            var s = document.createElement("input");
            s.setAttribute("type", "submit");
            s.setAttribute("value", "Submit");


            form.append(name);
            // Append the email_ID input to the form
            form.append(ID);

            // Append the password to the form
            form.append(PWD);

            // Append the button to the form
            form.append(s);

            document.getElementsByTagName("body")[0].appendChild(form);
            let boundry= document.getElementById("boundry");
            br= document.createElement("br");
            br.setAttribute("type","br");
            boundry.parentNode.insertBefore(br,boundry.nextSibling);

            br.parentNode.insertBefore(form,br.nextSibling);
            form.style.textAlign="center";
        }
    }
}