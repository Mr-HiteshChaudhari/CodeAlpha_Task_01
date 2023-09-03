const formEl=document.forms.surveyForm;

formEl.addEventListener("click",(event)=>{
    const {Name,emailid,age,collegeName,contactNo}=formEl.elements;
    console.log("Form Submited");
})