//function openClass(evt, className) {
//  var i, x, tablinks;
//  x = document.getElementsByClassName("class");
//  for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//  }
//  tablinks = document.getElementsByClassName("tablink");
//  for (i = 0; i < x.length; i++) {
//     tablinks[i].classList.remove("red");
//  }
//  document.getElementById(className).style.display = "block";
//  evt.currentTarget.classList.add("red");
//}
//
//var mybtn = document.getElementsByClassName("testbtn")[0];
//mybtn.click();
function getTime(){
    today = new Date();
    var s = today.getFullYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日 星期"+today.getDay();
    today=document.getElementById("today");
    today.innerHTML=s;
    today.style.fontFamily="Microsoft JhengHei";
}

function homePage(){
    title = document.getElementById("title");
    title.innerHTML="歡迎來到我的部落格~";
    content = document.getElementById("content");
    content.innerHTML="這邊會不定時更新狀態和作品，有興趣可以看看。";
    content.style.fontFamily="Microsoft JhengHei";
    quote=document.getElementById("quote");
    quote.style.display="block";
    img1 = document.getElementById("img1");
    img1.style.display="none";
    img2 = document.getElementById("img2");
    img2.style.display="none";
}

function komeiPage(){
    title = document.getElementById("title");
    title.innerHTML="高美濕地";
    content = document.getElementById("content");
    content.innerHTML="&emsp;&emsp;在2019年3月時，我和同學一起逛逛高美濕地，那邊有很多招潮蟹。很幸運的看到了彈塗魚，但跑太快沒拍到照QQ<br>夕陽很美麗，木棧道那邊實在太多人，所以我挑個沒人的點XD";
    content.style.fontFamily="Microsoft JhengHei";
    background = document.getElementById("posts");
    background.style.backgroundColor="black";
    background.style.opacity=0.9;
    quote=document.getElementById("quote");
    quote.style.display="none";
    img1 = document.getElementById("img1");
    img1.src="../komei/crab1.jpg";
    img1.style.display="block";
    img2 = document.getElementById("img2");
    img2.src="../komei/sundown2.jpg";
    img2.style.display="block";
}

