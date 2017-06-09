const c = console.log
$(document).ready(function(){
	c('page loaded');

	$('#mailer').submit(function(e){
		e.preventDefault();
		$.post("/mail/new",
  		 {
        name: e.target.name.value,
        email: e.target.email.value
   		 }
  		 );
	})
	$('#contact-me').submit(function(e){
		e.preventDefault();
		$.post("/contact/new",
  		 {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        mycontent: e.target.mycontent.value
   		 }
  		 );
	})
})





}