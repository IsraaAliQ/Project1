var EmployeeName=document.getElementById("EmployeeName")
var Job=document.getElementById("Job")
var Price=document.getElementById("Price")
var Description=document.getElementById("Description")
var Imag=document.getElementById("Imag")
var addbtn=document.getElementById("click")
var Employees
var data=document.getElementById("data")
var search=document.getElementById("search")
var update=document.getElementById("update")
var currentIndex=0
var validName=false
var validPrice=false
var validjob=false
var validDesc=false
//var validPic=false

// Refresh Values
function refreshvalues(){
   validName=false;
 validPrice=false;
 validjob=false;
  validDesc=false;
  Job.classList.remove('is-invalid','is-valid')
  EmployeeName.classList.remove('is-invalid','is-valid')
  Price.classList.remove('is-invalid','is-valid')
  Description.classList.remove('is-invalid','is-valid')
  addbtn.setAttribute('disabled','disabled')
 
}


if(JSON.parse(localStorage.getItem('Employees'))==null){
    Employees=[]
    }
    else{
      Employees=JSON.parse(localStorage.getItem('Employees'))
    }
    display_data()  
    checkValidation()
    update.style.display = "none";

function checkValidation(){
  if(validName==true && validPrice==true && validDesc==true && validjob==true )
  {
    addbtn.removeAttribute('disabled')
      update.removeAttribute('disabled');
  } else{
    addbtn.setAttribute('disabled','disabled')
    update.setAttribute('disabled','disabled')
  }
}
//Validation

/*name
*regex ^[A-Z][a-z/s]{2,20}$
 */
//var nameAlert=document.getElementById("nameAlert")
//nameAlert.style.display='none';
/*Imag.onkeyup=function(){
  var pattern=/^[A-Z][A-Za-z\s\.\-]{2,20}$/;
  if (pattern.test(Imag.value)){
   // nameAlert.style.display='none';
    validPic=true;
    //nameAlert.innerHTML = '';
    if(Imag.classList.contains('is-invalid')){   
     Imag.classList.replace('is-invalid','is-valid')}
     else{
     Imag.classList.add('is-valid')
     }
  }
  else{
    //nameAlert.style.display='block';
    //nameAlert.innerHTML = 'Please start with capital letter and name must be between 3 and 10 chars';
    validPic=false
    if(Imag.classList.contains('is-valid')){   
      Imag.classList.replace('is-valid','is-invalid')}
      else{
      Imag.classList.add('is-invalid')
      }
  }
  checkValidation()
}*/
/*name
*regex ^[A-Z][a-z/s]{2,20}$
 */
var nameAlert=document.getElementById("nameAlert")
//nameAlert.style.display='none';
EmployeeName.onkeyup=function(){
  var pattern=/^[A-Z][A-Za-z\s\.\-]{2,20}$/;
  if (pattern.test(EmployeeName.value)){
   // nameAlert.style.display='none';
    validName=true;
    nameAlert.innerHTML = '';
    if(EmployeeName.classList.contains('is-invalid')){   
     EmployeeName.classList.replace('is-invalid','is-valid');}
     else{
     EmployeeName.classList.add('is-valid');
     }
  }
  else{
    //nameAlert.style.display='block';
    nameAlert.innerHTML = ' Name should start with Capital';
    validName=false;
    if(EmployeeName.classList.contains('is-valid')){   
      EmployeeName.classList.replace('is-valid','is-invalid');}
      else{
      EmployeeName.classList.add('is-invalid');
      }
  }
  checkValidation()
}
/*Job
*regex ^[A-Z][a-z/s]{2,20}$
 */
var jobAlert=document.getElementById("jobAlert");
jobAlert.style.display='none';
Job.onkeyup=function(){
  var pattern=/^[A-Z][A-Za-z\s\.\-]{2,20}$/
  if (pattern.test(Job.value)){
    jobAlert.style.display='none';
    validjob=true;
    if(Job.classList.contains('is-invalid')){   
     Job.classList.replace('is-invalid','is-valid');}
     else{
     Job.classList.add('is-valid');
     }
  }
  else{
    jobAlert.style.display='block'
    validjob=false;
    if(Job.classList.contains('is-valid')){   
      Job.classList.replace('is-valid','is-invalid');}
      else{
      Job.classList.add('is-invalid');
      }
  }
  checkValidation()
}
/*price
*regex ^[0-9]{2,3}$
 */
var priceAlert=document.getElementById("priceAlert")
priceAlert.style.display='none';
Price.onkeyup=function(){
  var pattern=/^[0-9]{2,3}$/
  if (pattern.test(Price.value) && Price.value >0){
    priceAlert.style.display='none';
    validPrice=true;
    if(Price.classList.contains('is-invalid')){   
     Price.classList.replace('is-invalid','is-valid');}
     else{
     Price.classList.add('is-valid');
     }
  }
  else{
    priceAlert.style.display='block';
    validPrice=false;
    if(Price.classList.contains('is-valid')){   
      Price.classList.replace('is-valid','is-invalid');}
      else{
      Price.classList.add('is-invalid');
      }
  }
  checkValidation()
}

/*description
*regex ^[A-Z][A-Za-z0-9\s]{2,120}$
 */
var descAlert=document.getElementById("descAlert")
descAlert.style.display='none';
Description.onkeyup=function(){
  var pattern=/^[A-Z][A-Za-z0-9\s\.\-]{2,120}$/;
  if (pattern.test(Description.value)){
    descAlert.style.display='none';
    validDesc=true;
    if(Description.classList.contains('is-invalid')){   
     Description.classList.replace('is-invalid','is-valid');}
     else{
     Description.classList.add('is-valid');
     }
  }
  else{
    descAlert.style.display='block';

    validDesc=false;
    if(Description.classList.contains('is-valid')){   
      Description.classList.replace('is-valid','is-invalid');}
      else{
      Description.classList.add('is-invalid');
      }
  }
  checkValidation()
}
/*add course*/
addbtn.onclick=function(e){
    e.preventDefault()
    addEmployee()
    clear_inputs()
    display_data()
    refreshvalues()
    Swal.fire('Done! Employee Added')
  
} 
/* Creat employee*/
function addEmployee(){
 refreshvalues()
    var employee={
        EmployeeName:EmployeeName.value ,
         Job:Job.value ,
        Price:Price.value, 
        Description:Description.value,
        Imag:Imag.value,
    }
    Employees.push(employee)
    localStorage.setItem('Employees',JSON.stringify(Employees))
    
}
//embty
function clear_inputs(){
    Imag.value='' ;
    Description.value='';
    Price.value='';
    Job.value='';
    EmployeeName.value='';

}
//display
function display_data(){
    result=``
    for(var i=0; i<Employees.length; i++){
    result+=`
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
                <p>${Employees[i].Description}.</p> 
                <p class="border"> Price is ${Employees[i].Price}  $ per hour</p>           

                 <button class="btn " onclick="getEmployee(${i})" > update </button> 
                 <button class="btn " onclick="deletEmployee(${i})"> delete </button>                                                       
        </div>
    </div>
</div>
    `}
    data.innerHTML=result
}
//dealete all button
document.getElementById('deleteBtn').onclick=function(){
  Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            Employees=[]
            data.innerHTML=''
            localStorage.setItem('Employees',JSON.stringify(Employees))

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

// delete one emloyee
function deletEmployee(index){
   Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            Employees.splice(index,1)
            localStorage.setItem('Employees',JSON.stringify(Employees))
            display_data()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

//search
search.onkeyup = function(){

    var result=``
    for(var i=0; i<Employees.length;i++){
        
        if(Employees[i].EmployeeName.toLowerCase().includes(search.value.toLowerCase())){
            result+=
            result=``
    for(var i=0; i<Employees.length; i++){
    result+=`
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
    `
    }
  }
}
    
    data.innerHTML=result;
    
    }

    //update
function getEmployee(index){
 
  currentIndex=index;
        var employee=Employees[index];
        
        EmployeeName.value=employee.EmployeeName;
        Price.value=employee.Price;
        Imag.value=employee.Imag;
        Job.value=employee.Job;
        Description.value=employee.Description;
        update.style.display='inline';
        addbtn.style.display='none';
   
      }  

  update.onclick=function(e){
        e.preventDefault();
        update_employee();
        
      display_data();
      refreshvalues()
      update.style.display='none';
      addbtn.style.display='inline';
      
      clear_inputs();
      
   }
      function update_employee(){
        var previousName=Employees[currentIndex].EmployeeName;
        /*   var employee={
        EmployeeName:EmployeeName.value ,
         Job:Job.value ,
        Price:Price.value, 
        Description:Description.value,
        Imag:Imag.value,
    }
      var previousName=Employees[currentIndex].EmployeeName
      Employees[currentIndex].EmployeeName=employee.EmployeeName
      Employees[currentIndex].Imag=employee.Imag
      Employees[currentIndex].Job=employee.Job
      Employees[currentIndex].Description=employee.Description
      Employees[currentIndex].Price=employee.Price */
      Employees[currentIndex].EmployeeName=EmployeeName.value
      Employees[currentIndex].Imag=Imag.value
      Employees[currentIndex].Job=Job.value
      Employees[currentIndex].Description=Description.value
      Employees[currentIndex].Price=Price.value

      localStorage.setItem('Employees',JSON.stringify(Employees))
     
      
      Swal.fire(`Done! ${previousName}  information Updated `)
      }
      

