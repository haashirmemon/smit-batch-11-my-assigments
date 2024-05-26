var assignmentsArray = [
    {
      title: "todo list application ",
      link: "https://github.com/haashirmemon/assigments-ja/tree/main/todo%20app",
      code : "https://664da234357e95b40af1064b--sage-faloodeh-590512.netlify.app/",
      date: "May-2024",
      description: "i make tode ist app check and review.",
    },
    {
        title: "attendence chekker application",
        code: "https://dulcet-capybara-879bdc.netlify.app/",
        link: "https://github.com/haashirmemon/assigments-ja/tree/main/assigment%20attendence%20chekker",
        date: "May-2024",
        description: "i make attendence chekker app check and review.",
      },
    
      {
        title: "image gallery application",
        code: "https://chipper-raindrop-eafbeb.netlify.app/",
        link: "https://github.com/haashirmemon/assigments-ja/tree/main/assigment%20image%20gallery",
        date: "May-2024",
        description: "i make image gallery app check and review.",
      },

      {
        title: " year count  down application",
        code: "https://66534584d0767ba63af962d4--bucolic-genie-127902.netlify.app/",
        link: "https://github.com/haashirmemon/assigments-ja/tree/main/bakra%20eid%20count%20down",
        date: "May-2024",
        description: "i make year countdown app check and review.",
      },
      {
        title: "finance tracking  application",
        code: "https://chimerical-monstera-eb549c.netlify.app/",
        link: "https://github.com/haashirmemon/assigments-ja/tree/main/fiinance%20app",
        date: "May-2024",
        description: "i make finance tracking   app check and review.",
      },
      {
        title: "simple calculator application",
        code: "https://monumental-kelpie-b65b12.netlify.app/",
        link: "https://github.com/haashirmemon/assigments-ja/tree/main/simplecalculator",
        date: "May-2024",
        description: "i make simple calculator    app check and review.",
      },
      {
        title: "stop digital watch application",
        code: "https://6653488dfaf751b3971b3e2f--zingy-gumption-06e0e0.netlify.app/",
        link: "https://github.com/haashirmemon/assigments-ja/tree/main/stop%20watch",
        date: "May-2024",
        description: "i make stop digital watch   app check and review.",
      },
        {title: "text editor application",
        code: "https://radiant-gnome-f46f04.netlify.app/",
        link: "https://github.com/haashirmemon/assigments-ja/tree/main/text%20editor",
        date: "May-2024",
        description: "i make text editor   app check and review.",}
,  
{title: "salt and pepper web",
code: "https://665349f8165fa18747e850e9--friendly-blancmange-9b6ea3.netlify.app/",
link: "https://github.com/haashirmemon/salt-n-pepper-assigment/tree/main/assets",
date: "january-2024",
description: "i make salt and peper website using html css  check and review.",}
,  
{title: "noon  website",
code: "https://haashirmemon.github.io/noon.com/",
link: "https://github.com/haashirmemon/noon.com",
date: "feb-2024",
description: "i make noon website using html css  check and review.",}
, 
{title: "tribute website",
code: "https://haashirmemon.github.io/project1/",
link: "https://github.com/haashirmemon/project1",
date: "feb-2024",
description: "i make tribute website using html css  check and review.",}
, 
{title: "landing page website",
code: "https://660415993a7527008c0329f7--capable-tarsier-383328.netlify.app/",
link: "https://github.com/haashirmemon/html02/tree/main/project4",
date: "feb-2024",
description: "i make tribute website using html css  check and review.",}
     
, 
{title: " parallax website",
code: "https://haashirmemon.github.io/html/",
link: "https://github.com/haashirmemon/html",
date: "feb-2024",
description: "i make parallax website using html css  check and review.",}
,
{title: " job application website",
code: "https://haashirmemon.github.io/haashirmemon/",
link: "https://github.com/haashirmemon/haashirmemon",
date: "feb-2024",
description: "i make parallax website using html css  check and review.",}
      
  ];
  
  var assignList = document.getElementById("all-assignments");
  
  for (var i = 0; i < assignmentsArray.length; i++) {
    var div = ` <div class="p-4 md:w-1/3">
    <div
      class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
    >
      <div class="p-6">
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
         ${assignmentsArray[i].title} 
        </h1>
        <p class="leading-relaxed mb-3">${assignmentsArray[i].description}</p>
        <div class="flex items-center flex-wrap">
          <a
            href="${assignmentsArray[i].link}"
            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >view code 
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span
            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
          >
            <a
              href="${assignmentsArray[i].code}"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                ></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </a>
            link
          </span>
        </div>
      </div>
    </div>
  </div>`;
  
    assignList.innerHTML += div;
  }
  
//   var projectInfo = {
//     title: "Finance Tracking Application",
//     code: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
//     link: "https://rumi-bin-fahad.github.io/JavaScript-Exercise/expenses%20app/version%202/index.html",
//     date: "24-May-2024",
//     description: "Manage Income , Expense and see history using our app.",
//   };
  
//   console.log(projectInfo.title);
//   console.log(assignmentsArray[0].title);