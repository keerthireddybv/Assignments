
var countryIndia = document.getElementById("indiaCountry");
var countryAustralia = document.getElementById("australiaCountry");
var countryGermany= document.getElementById("germanyCountry");
var countryEngland = document.getElementById("englandCountry");
var countryUSA = document.getElementById("USACountry");
var countryCanada = document.getElementById("canadaCountry");
var countryFrance = document.getElementById("franceCountry");

document.getElementById("myCountryName").addEventListener("click",function(){
    let countryName = document.querySelector("#myCountryName").value;
    

    if(countryName == "India"){
        countryIndia.style.display = "block";
        countryEngland.style.display = "none";
        countryUSA.style.display = "none";
        countryGermany.style.display = "none";
        countryCanada.style.display = "none";
        countryFrance.style.display = "none";
        countryAustralia.style.display = "none";
    }


else if(countryName == "USA"){
        countryUSA.style.display = "block";
        countryIndia.style.display = "none";
        countryEngland.style.display = "none";
        countryGermany.style.display = "none";
        countryCanada.style.display = "none";
        countryFrance.style.display = "none";
        countryAustralia.style.display = "none";
    }
    else if(countryName == "Germany"){
        countryGermany.style.display = "block";
        countryIndia.style.display = "none";
        countryUSA.style.display = "none";
        countryEngland.style.display = "none";
        countryCanada.style.display = "none";
        countryFrance.style.display = "none";
        countryAustralia.style.display = "none";
    }    


else if(countryName == "England"){
        
        countryEngland.style.display = "block";
        countryIndia.style.display = "none";
        countryUSA.style.display = "none";
        countryGermany.style.display = "none";
        countryCanada.style.display = "none";
        countryFrance.style.display = "none";
        countryAustralia.style.display = "none";

     }
     else if(countryName == "Canada"){
        
        countryCanada.style.display = "block";
        countryIndia.style.display = "none";
        countryUSA.style.display = "none";
        countryGermany.style.display = "none";
        countryEngland.style.display = "none";
        countryFrance.style.display = "none";
        countryAustralia.style.display = "none";

     }

     else if(countryName == "France"){
        
        countryFrance.style.display = "block";
        countryIndia.style.display = "none";
        countryUSA.style.display = "none";
        countryGermany.style.display = "none";
        countryEngland.style.display = "none";
        countryCanada.style.display = "none";
        countryAustralia.style.display = "none";
        

     }

     else if(countryName == "Australia"){
        
        countryAustralia.style.display = "block";
        countryIndia.style.display = "none";
        countryUSA.style.display = "none";
        countryGermany.style.display = "none";
        countryEngland.style.display = "none";
        countryCanada.style.display = "none";
        countryFrance.style.display = "none";

     }
    
   
})



    else if(countryName == "Germany"){

        countryGermany.style.display = "block";

        countryIndia.style.display = "none";

        countryUSA.style.display = "none";

        countryEngland.style.display = "none";

        countryCanada.style.display = "none";

        countryFrance.style.display = "none";

        countryAustralia.style.display = "none";

    }   

has context menu