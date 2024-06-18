let messageEle = document.getElementById("message");
let onEventListenerBtnEle = document.getElementById("onEventListenerBtn");
let addEventListenerBtnEle = document.getElementById("addEventListenerBtn");

function inlineEventListener(){
    messageEle.textContent ="Inline event listener";
}
onEventListenerBtnEle.onclick=function(){
  messageEle.textContent ="onevent listener";
};
addEventListenerBtnEle.addEventListener("click",function(){
  messageEle.textContent ="addEventListener";
});