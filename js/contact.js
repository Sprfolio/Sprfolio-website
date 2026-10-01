const form=document.querySelector('#project-form');
const status=document.querySelector('#form-status');
if(form&&status){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      status.textContent='Please complete the required fields.';
      return;
    }
    status.textContent='Inquiry validated locally. No information was sent. Connect an email or backend service before launch.';
    form.reset();
  });
}
