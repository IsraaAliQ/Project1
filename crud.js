var Employees,EmployeeName=document.getElementById("EmployeeName"),Job=document.getElementById("Job"),Price=document.getElementById("Price"),Description=document.getElementById("Description"),Imag=document.getElementById("Imag"),addbtn=document.getElementById("click"),data=document.getElementById("data"),search=document.getElementById("search"),update=document.getElementById("update"),currentIndex=0,validName=!1,validPrice=!1,validjob=!1,validDesc=!1;function refreshvalues(){validDesc=validjob=validPrice=validName=!1,Job.classList.remove("is-invalid","is-valid"),EmployeeName.classList.remove("is-invalid","is-valid"),Price.classList.remove("is-invalid","is-valid"),Description.classList.remove("is-invalid","is-valid"),addbtn.setAttribute("disabled","disabled")}function checkValidation(){1==validName&&1==validPrice&&1==validDesc&&1==validjob?(addbtn.removeAttribute("disabled"),update.removeAttribute("disabled")):(addbtn.setAttribute("disabled","disabled"),update.setAttribute("disabled","disabled"))}Employees=null==JSON.parse(localStorage.getItem("Employees"))?[]:JSON.parse(localStorage.getItem("Employees")),display_data(),checkValidation(),update.style.display="none";var nameAlert=document.getElementById("nameAlert"),jobAlert=(EmployeeName.onkeyup=function(){/^[A-Z][A-Za-z\s\.\-]{2,20}$/.test(EmployeeName.value)?(validName=!0,nameAlert.innerHTML="",EmployeeName.classList.contains("is-invalid")?EmployeeName.classList.replace("is-invalid","is-valid"):EmployeeName.classList.add("is-valid")):(nameAlert.innerHTML=" Name should start with Capital",validName=!1,EmployeeName.classList.contains("is-valid")?EmployeeName.classList.replace("is-valid","is-invalid"):EmployeeName.classList.add("is-invalid")),checkValidation()},document.getElementById("jobAlert")),priceAlert=(jobAlert.style.display="none",Job.onkeyup=function(){/^[A-Z][A-Za-z\s\.\-]{2,20}$/.test(Job.value)?(jobAlert.style.display="none",validjob=!0,Job.classList.contains("is-invalid")?Job.classList.replace("is-invalid","is-valid"):Job.classList.add("is-valid")):(jobAlert.style.display="block",validjob=!1,Job.classList.contains("is-valid")?Job.classList.replace("is-valid","is-invalid"):Job.classList.add("is-invalid")),checkValidation()},document.getElementById("priceAlert")),descAlert=(priceAlert.style.display="none",Price.onkeyup=function(){/^[0-9]{2,3}$/.test(Price.value)&&0<Price.value?(priceAlert.style.display="none",validPrice=!0,Price.classList.contains("is-invalid")?Price.classList.replace("is-invalid","is-valid"):Price.classList.add("is-valid")):(priceAlert.style.display="block",validPrice=!1,Price.classList.contains("is-valid")?Price.classList.replace("is-valid","is-invalid"):Price.classList.add("is-invalid")),checkValidation()},document.getElementById("descAlert"));function addEmployee(){refreshvalues();var e={EmployeeName:EmployeeName.value,Job:Job.value,Price:Price.value,Description:Description.value,Imag:Imag.value};Employees.push(e),localStorage.setItem("Employees",JSON.stringify(Employees))}function clear_inputs(){Imag.value="",Description.value="",Price.value="",Job.value="",EmployeeName.value=""}function display_data(){result="";for(var e=0;e<Employees.length;e++)result+=`
    <div class="col-md-4 mb-5">
    <div class="card rounded-0 team-single">
        <div class="card-img">
            <img alt="picture of the employee" src="${Employees[e].Imag}"  onerror="this.onerror=null;this.src='https:cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'">

        </div>
        <div class="card-information position-relative">
             <div class="social-links">
                <ul class="list-unstyled ml-0">
                <li> <a href=" "><i class="fa-brands fa-facebook-f"></i></a> </li>
                <li> <a href=" "><i class="fa-brands fa-twitter"></i></a> </li>
                <li> <a href=" "><i class="fa-brands fa-pinterest-p"></i></a> </li>

                </ul>
             </div>   
             <span>${Employees[e].Job}.</span>
             <h2>${Employees[e].EmployeeName}.</h2>       
                <p>${Employees[e].Description}.</p> 
                <p class="border"> Price is ${Employees[e].Price}  $ per hour</p>           

                 <button class="btn " onclick="getEmployee(${e})" > update </button> 
                 <button class="btn " onclick="deletEmployee(${e})"> delete </button>                                                       
        </div>
    </div>
</div>
    `;data.innerHTML=result}function deletEmployee(i){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(e=>{e.isConfirmed&&(Employees.splice(i,1),localStorage.setItem("Employees",JSON.stringify(Employees)),display_data(),Swal.fire("Deleted!","Your file has been deleted.","success"))})}function getEmployee(e){e=Employees[currentIndex=e],EmployeeName.value=e.EmployeeName,Price.value=e.Price,Imag.value=e.Imag,Job.value=e.Job,Description.value=e.Description,update.style.display="inline",addbtn.style.display="none"}function update_employee(){var e=Employees[currentIndex].EmployeeName;Employees[currentIndex].EmployeeName=EmployeeName.value,Employees[currentIndex].Imag=Imag.value,Employees[currentIndex].Job=Job.value,Employees[currentIndex].Description=Description.value,Employees[currentIndex].Price=Price.value,localStorage.setItem("Employees",JSON.stringify(Employees)),Swal.fire(`Done! ${e}  information Updated `)}descAlert.style.display="none",Description.onkeyup=function(){/^[A-Z][A-Za-z0-9\s\.\-]{2,120}$/.test(Description.value)?(descAlert.style.display="none",validDesc=!0,Description.classList.contains("is-invalid")?Description.classList.replace("is-invalid","is-valid"):Description.classList.add("is-valid")):(descAlert.style.display="block",validDesc=!1,Description.classList.contains("is-valid")?Description.classList.replace("is-valid","is-invalid"):Description.classList.add("is-invalid")),checkValidation()},addbtn.onclick=function(e){e.preventDefault(),addEmployee(),clear_inputs(),display_data(),refreshvalues(),Swal.fire("Done! Employee Added")},document.getElementById("deleteBtn").onclick=function(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(e=>{e.isConfirmed&&(Employees=[],data.innerHTML="",localStorage.setItem("Employees",JSON.stringify(Employees)),Swal.fire("Deleted!","Your file has been deleted.","success"))})},search.onkeyup=function(){for(var e="",i=0;i<Employees.length;i++)if(Employees[i].EmployeeName.toLowerCase().includes(search.value.toLowerCase()))for(e+="",i=0;i<Employees.length;i++)e+=`
    <div class="col-md-4 mb-5">
    <div class="card rounded-0 team-single">
        <div class="card-img">
            <img alt="picture of the employee" src="${Employees[i].Imag}"  onerror="this.onerror=null;this.src='https:cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'">

        </div>
        <div class="card-information position-relative">
             <div class="social-links">
                <ul class="list-unstyled ml-0">
                <li> <a href=" "><i class="fa-brands fa-facebook-f"></i></a> </li>
                <li> <a href=" "><i class="fa-brands fa-twitter"></i></a> </li>
                <li> <a href=" "><i class="fa-brands fa-pinterest-p"></i></a> </li>

                </ul>
             </div>   
             <span>${Employees[i].Job}.</span>
             <h2>${Employees[i].EmployeeName}.</h2>       
                <p>Desc:{Employees[i].Description}.</p> 
                <p class="border"> Price is ${Employees[i].Price}  $ per hour</p>           

                 <button class="btn " onclick="getEmployee(${i})" > update </button> 
                 <button class="btn " onclick="deletEmployee(${i})"> delete </button>                                                       
        </div>
    </div>
</div>
    `;data.innerHTML=e},update.onclick=function(e){e.preventDefault(),update_employee(),display_data(),refreshvalues(),update.style.display="none",addbtn.style.display="inline",clear_inputs()};