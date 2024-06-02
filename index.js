let Popup = document.getElementById('popup')

//it is to get popup after 5 sec
// setTimeout(()=>{
//     Popup.classList.remove('popup-none') 
// },5000)

function OpenPopup(){
       Popup.classList.remove('popup-none') 
}

function ClosePopup(){

    Popup.classList.add('popup-none')
}