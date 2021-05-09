let organization  = document.getElementById("OrganizationBar");
organization.style.width=0+"%";
organization.onclick=advanceProgressBar;

//organization.style.width=i+"%";
function advanceProgressBar()
{
  let width=0;
  let element=document.getElementById(this.id);
  element.style.width=1+"%";
  advance();
    function advance()
    {
        //let id= document.getElementById(this.id);
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
