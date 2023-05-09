var scrolltoop=document.querySelector(".scrolltoop")
/* curser trailer */
let screenWidth 
window.addEventListener('resize', function() {
  
    screenWidth = window.innerWidth;
  });
document.addEventListener('mousemove', function(event) {
    
    var cursorTrail = document.querySelector('.cursor-trail');
    cursorTrail.style.transform = 'translate(' + event.clientX + 'px, ' + event.clientY + 'px)';
  });

  /* main menu */
  var nav=document.getElementById("main-menu");
  var changnav=document.getElementById("carouselExampleCaptions");

  nav.style.transition='1s';
  window.addEventListener("scroll",function (){
    if(window.scrollY > changnav.offsetTop && screenWidth >1000){
       console.log(screenWidth)
        nav.style.transition='1s';
        nav.style.position='fixed';
        nav.style.top='0';
        nav.style.width='100%';    
    }
    if(window.scrollY <= changnav.offsetTop){
     
        nav.style.position='relative';
        nav.style.transition='1s';
        
    
    }

  })

/* scroll up/////////////////////////////////////////////////////// */
scrolltoop.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})


var httpRequest= new XMLHttpRequest
httpRequest.open("GET","https://jsonplaceholder.typicode.com/users") 
httpRequest.send()
console.log(httpRequest)

httpRequest.onreadystatechange=function(){
    if(httpRequest.readyState==4){
    users=JSON.parse(httpRequest.response)
    
   var data=" "
for(i=0;i<users.length;i++){
    data+=`
    <tr>
    <th scope="row"> ${users[i].id}</th>
    <td>${users[i].name} </td>
    <td>${users[i].phone} </td>
    <td>${users[i].email}</td>
    <td>${users[i].address.city} </td>

  </tr>
 
    `
}
    } 
document.getElementById("data-api").innerHTML=data;
}

/* looding screen*/
document.body.style.overflow='hidden';
var loading=document.querySelector('.loading');
window.addEventListener('load',function(){
    setTimeout(function(){
        loading.style.opacity='0'
    loading.style.transition='1s'
    loading.style.visibility='hidden'
    document.body.style.overflow='auto'
    },2000)

})
