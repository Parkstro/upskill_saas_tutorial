/* global $, Stripe */
//Document ready
$(document).com('turbolinks:load',function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn')
  
  //Set Stripe public key
  Stripe.setPublishableKey( $('meta[name:"stripe-key]').attr('content'))
  
  //When user clicks form submit btn
  submitBtn.click(function(event){
      //prevent default sbmission behaivior
    event.preventDefault();
      //Collect the cc fields
      var ccNum = $('#card_number').val,
        cvcNum = $('#card_code').val,
        expMonth = $('#card_month').val,
        expYear = $('card_year').val;
      //send cc info to stripe
        Stripe.createToken({
          number: ccNum,
          cvc: cvcNum,
          exp_month: expMonth,
          exp_year: expYear
        }, stripeResponseHandler);
    
  });
  //prevent default sbmission behaivior
  
  //Collect the cc fields
  //send cc info to stripe
  //stripe will return cc token
  //inject cc token as hidden field into form
  //submit form to rails app

});