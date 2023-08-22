let img = document.getElementById("img");
let QR = document.getElementById("QR");
let text = document.getElementById("text");

function generateQR(){
  if(text.value.length>0){//no empty string
    QR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;

    img.classList.add("show-img");

  }else{
    text.classList.add('error');
    setTimeout(()=>{
      text.classList.remove('error');
    },1000)
  }
  
}