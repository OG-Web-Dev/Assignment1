organization=null;
collaboration = null;
management=null;
problemSolving= null;

window.onload=initElementReferences;

function initElementReferences()
{
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


// function advanceProgressBar()
// {
//     if (i == 0)
//     {
//         i = 1;
//
//         var width = 1;
//         var id = setInterval(frame, 10);
//
//         function frame()
//         {
//             if (width >= 100)
//             {
//                 clearInterval(id);
//                 i = 0;
//             }
//
//             else
//             {
//                 width++;
//                 organization.style.width = width + "%";
//             }
//         }
//     }
// }



// function autoFill()
// {
//     let width=1;
//     organization.style.width="1%"
//     while (organization.style.width<"100%")
//     {
//         console.log("filling");
//         width++;
//         organization.style.width=width +"%";
//     }
// }
