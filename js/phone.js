function updatePhoneNumber(isIncrease){
    const phoneNumberField=document.getElementById('phone-number-field');//step-2
    const phoneNumberString =phoneNumberField.value ; 
    const previousPhoneNumber=parseInt(phoneNumberString);//step-3

    // const newPhoneNumber=previousPhoneNumber + 1;//step-4
    let newPhoneNumber;
    if(isIncrease=== true){
       newPhoneNumber=previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber=previousPhoneNumber - 1;
    }

    phoneNumberField.value=newPhoneNumber;//step-5 

    return newPhoneNumber;//price take dorer jonno
}

function updatePhoneTotalPrice(newPhoneNumber){

    const phoneTotalPrice=newPhoneNumber * 1219;
    const phoneTotalElement=document.getElementById('phone-total');
    phoneTotalElement.innerText=phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click',function(){
  const newPhoneNumber= updatePhoneNumber(true);

updatePhoneTotalPrice(newPhoneNumber );
calculateSubTotal();
   
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
 const newPhoneNumber=  updatePhoneNumber(false);

 updatePhoneTotalPrice(newPhoneNumber );
 calculateSubTotal();
    
})