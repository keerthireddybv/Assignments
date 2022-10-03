function seterror(id,error) {
    element=document.getElementById(id);
    element.getElementsByClassName('forerror')[0].innerHTML=error;    
}

function validateForm() {
    var returnval=true;
    let x=document.forms["Form"]["fname"].value;
    let y=document.forms["Form"]["fpass"].value;

    if(x=='citiustech' && y=='citiustech')
    {
        window.location.href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1GCEB_enIN1022IN1022&oq=fgo&aqs=chrome.2.0i271j46i512j46i10i131i199i433i465j0i512j0i10i131i433l5j0i271.3237j0j15&sourceid=chrome&ie=UTF-8";
    }
    if(x=='') {
        seterror("name","Name is not given");
        returnval=false;
    }
    if(y=='') {
        seterror("pass","Password is not given");
        returnval=false;

}
return returnval;
}
