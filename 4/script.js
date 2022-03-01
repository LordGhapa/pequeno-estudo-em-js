 var msg=document.getElementById('msg')
var img=document.getElementById('imagem')   
var data=new Date()
var hora=data.getHours()
//var hora=3


var btndia=document.getElementById("btndia")
var btntarde=document.getElementById("btntarde")
var btnnoite=document.getElementById("btnnoite")
var btnreset=document.getElementById("btnreset")
var txtnovahora=document.getElementById('txtn')




var btnnovahora=document.getElementById("mudahora")

btndia.addEventListener('click',dia)
btntarde.addEventListener('click',tarde)
btnnoite.addEventListener('click',noite)
btnreset.addEventListener('click',reset)
btnnovahora.addEventListener('click',novahora)

txtnovahora.addEventListener("keyup",function(event){
    if (event.keyCode === 13){
        novahora()
    }
})

function dia(){
     hora= 6
   carregar()
}
function tarde(){
    hora= 13
  carregar()
}
function noite(){
    hora= 22
  carregar()
  
}

function reset(){
    hora= data.getHours()
  carregar()
}
function novahora(){
    var horario=Number(txtnovahora.value)
    
   hora= horario
  carregar()
  //document.getElementById('txtn').value=""
  txtnovahora.value=""

}


function carregar(){

msg.innerHTML=`Agora são ${hora} horas`
if(hora >=0 && hora <12){
    img.src = 'imagens/manha.jpeg'
    //#9794b1
    document.body.style.backgroundColor="#6780a2"
}
else if (hora>=12 && hora<18){
    img.src = 'imagens/tarde.jpeg'
    //#b37548
    document.body.style.backgroundColor="#b37548"
} else{
    img.src = 'imagens/noite.jpeg'
   // #132f32
   document.body.style.backgroundColor="#132f32"
}
}

