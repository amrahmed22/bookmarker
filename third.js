var WebName = document.getElementById("name");
var webUrl = document.getElementById("url");
var websiteContainer;
if(localStorage.getItem("websites")!=null)
{
    websiteContainer = JSON.parse(localStorage.getItem("websites"))
    displayData(websiteContainer);
}
else
{
    websiteContainer = [];
}

function addWebsite() {

  if (nameValidation()==true&&urlValidation()==true) {
    var website = {
        name:WebName.value,
        url:webUrl.value
    }
    websiteContainer.push(website);
    clearData();
    localStorage.setItem("websites",JSON.stringify(websiteContainer));
    displayData(websiteContainer);
  }
  else
  {
   if (nameValidation()==false&&urlValidation()==false) {
     document.getElementById("n").classList.replace('opacity-0','opacity-100');
     document.getElementById("u").classList.replace('opacity-0','opacity-100');
   }
   else if (nameValidation()==true&&urlValidation()==false) {
    
    document.getElementById("n").classList.replace('opacity-100','opacity-0');
    document.getElementById("u").classList.replace('opacity-0','opacity-100');
   }
   else if (nameValidation()==false&&urlValidation()==true) {
    
    document.getElementById("n").classList.replace('opacity-0','opacity-100');
    document.getElementById("u").classList.replace('opacity-100','opacity-0');
   }
  }

  }
 


function displayData(list) {
    var temp ='';
    for (let i = 0; i < list.length; i++) {
        temp += `
        <div class="row bg-light p-4 mt-3">
        <div class="col-md-6">
        <p class="fw-bold fs-1">${list[i].name}</p>
        </div>
        <div class="col-md-6 d-flex align-items-center">
        <a class="text-decoration-none" href="${list[i].url}"target='_blank'><button class="btn btn-info px-5 mx-2 text-white">Visit</button></a>
        <button class="btn btn-danger px-5 mx-2" onclick = "deleteWebsite(${i})">Delete</button>
        </div>
        </div>
        
        `
        
    }
    document.getElementById("arr").innerHTML = temp;
}

function deleteWebsite(i) {
    websiteContainer.splice(i,1);
    localStorage.setItem("websites",JSON.stringify(websiteContainer));
    displayData(websiteContainer);
}

function clearData() {
  
    WebName.value='';
    webUrl.value='';
    document.getElementById("n").classList.replace('opacity-100','opacity-0');
    document.getElementById("u").classList.replace('opacity-100','opacity-0');
}

function nameRepeat() {
    var x = true;
    for (let i = 0; i < websiteContainer.length; i++) {
        if (websiteContainer[i].name== WebName.value) {
          x=false;
          break;
          
        }
        else
        {
            x=true;
        }
    }
    if (x==true) {

        document.getElementById('n').innerHTML = "Name is required"
        document.getElementById('n').classList.replace('opacity-100','opacity-0')


        return true;
    }
    else
    {
        document.getElementById('n').innerHTML = "This name is already exist"
        
        return false;
    }
}
function urlRepeat() {
    var x = true;
    for (let i = 0; i < websiteContainer.length; i++) {
        if (websiteContainer[i].url== webUrl.value) {
          x=false;
          break;
          
        }
        else
        {
            x=true;
        }
    }
    if (x==true) {
        document.getElementById('u').innerHTML = "Url Field is required"
        document.getElementById('u').classList.replace('opacity-100','opacity-0')

        return true;
    }
    else
    {
        document.getElementById('u').innerHTML = "This URL is already exist"
        
        return false;
    }
}

function nameValidation() {
    var regex = /\w/;
    if (regex.test( WebName.value)==true&&nameRepeat()==true) {
        
        return true;
    }
    else
    {
        return false;
    }
}
function urlValidation() {
    var regex = /\w/;
    if (regex.test( webUrl.value)==true&&urlRepeat()==true) {
        console.log(true);
        return true;
    }
    else
    {
        console.log(false);
        return false;
    }
}












