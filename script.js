
window.addEventListener('scroll',()=>{
 const winScroll=document.documentElement.scrollTop;
 const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
 document.getElementById('progress-bar').style.width=(winScroll/height)*100+'%';
});

document.getElementById('topBtn').onclick=()=>{
 window.scrollTo({top:0,behavior:'smooth'});
};
