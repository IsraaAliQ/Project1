var scrolltoop=document.querySelector(".scrolltoop");let screenWidth;window.addEventListener("resize",function(){screenWidth=window.innerWidth}),document.addEventListener("mousemove",function(e){document.querySelector(".cursor-trail").style.transform="translate("+e.clientX+"px, "+e.clientY+"px)"});var nav=document.getElementById("main-menu"),changnav=document.getElementById("carouselExampleCaptions"),httpRequest=(nav.style.transition="1s",window.addEventListener("scroll",function(){window.scrollY>changnav.offsetTop&&1e3<screenWidth&&(console.log(screenWidth),nav.style.transition="1s",nav.style.position="fixed",nav.style.top="0",nav.style.width="100%"),window.scrollY<=changnav.offsetTop&&(nav.style.position="relative",nav.style.transition="1s")}),scrolltoop.addEventListener("click",function(){window.scroll({top:0,behavior:"smooth"})}),new XMLHttpRequest),loading=(httpRequest.open("GET","https://jsonplaceholder.typicode.com/users"),httpRequest.send(),console.log(httpRequest),httpRequest.onreadystatechange=function(){if(4==httpRequest.readyState){users=JSON.parse(httpRequest.response);var e=" ";for(i=0;i<users.length;i++)e+=`
    <tr>
    <th scope="row"> ${users[i].id}</th>
    <td>${users[i].name} </td>
    <td>${users[i].phone} </td>
    <td>${users[i].email}</td>
    <td>${users[i].address.city} </td>

  </tr>
 
    `}document.getElementById("data-api").innerHTML=e},document.body.style.overflow="hidden",document.querySelector(".loading"));window.addEventListener("load",function(){setTimeout(function(){loading.style.opacity="0",loading.style.transition="1s",loading.style.visibility="hidden",document.body.style.overflow="auto"},2e3)});