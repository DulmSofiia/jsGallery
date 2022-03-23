'use strict';
//gallery>ul>li에 가ㄱ a0.jpg~a4.jpg 배경이미지
//배열, .push(), for문이용해서 설정

const gallery = document.querySelector('.gallery');
// const galleryUlLI=document.querySelectorAll('.gallery>ul>li');
const galleryUl = gallery.querySelector('.gallery>ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const liSize=galleryUlLi.length;

const arrBg = [];
for(let i = 0; i < galleryUlLi.length; i++){
  arrBg.push(`url(img/img${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];
}

let i = -1;
// function autoGallery(){}
const autoGallery=()=>{
  i++;
  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
  const goto = (-i*gap)+'px';
  console.log(`i -> ${i}`);
  gallery.style.left = goto;
  gallery.style.transition = 'all 1s';
  if(i >= liSize-1) i = -1;
}

let setIn=setInterval(autoGallery, 3000);

const arrow=document.querySelectorAll('span.arrow');

// span.arrow를 마우스 오버시 setInterval 중지
arrow.forEach(el=>el.addEventListener('mouseover', ()=>{
  console.log(event.type, event.target);
  clearInterval(setIn);
}));

/* arrow[0].addEventListener('mouseover', fnOver);
arrow[1].addEventListener('mouseover', fnOver);
 */


// span.arrow를 마우스 아웃시 setInterval 다시 시작
arrow.forEach(el=>el.addEventListener('mouseout', ()=>{
  console.log(event.type, event.target);
  setIn=setInterval(autoGallery, 3000);
}));

/* arrow[0].addEventListener('mouseout', fnOut);
arrow[1].addEventListener('mouseout', fnOut); */

const itemsUlLi=document.querySelectorAll('.items>ul>li');
/*
  //.items>ul>li를 mouseover 마우스 오버시 setInterval 중지
  itemsUlLi[0].addEventListener('mouseover', fnOver);
  itemsUlLi[1].addEventListener('mouseover', fnOver);
  itemsUlLi[2].addEventListener('mouseover', fnOver);
  itemsUlLi[3].addEventListener('mouseover', fnOver);
  itemsUlLi[4].addEventListener('mouseover', fnOver);
  function itemsUlLiOver(){
    console.log(event.type);
    clearInterval(setIn);
  }
*/

//forEach를 이용해서 mouseover 마우스 오버시 setInterval 중지
//itemsUlLi.forEach(el => el.addEventListener('mouseover', fnOver));


/*
  //.items>ul>li를 mouseout 마우스 아웃시 setInterval 다시 시작
  itemsUlLi[0].addEventListener('mouseout', fnOut);
  itemsUlLi[1].addEventListener('mouseout', fnOut);
  itemsUlLi[2].addEventListener('mouseout', fnOut);
  itemsUlLi[3].addEventListener('mouseout', fnOut);
  itemsUlLi[4].addEventListener('mouseout', fnOut);
  function itemsUlLiOut(){
    console.log(event.type);
    setIn=setInterval(autoGallery, 3000);
  }
*/

//forEach를 이용해서 mouseout 마우스 아웃시 setInterval 다시 시작
//itemsUlLi.forEach(el => el.addEventListener('mouseout', fnOut));

//마우스 오버시 setInterval 중지
/* function fnOver(){
  console.log(event.type);
  clearInterval(setIn);
} */
//마우스 아웃시 setInterval 다시 시작
  /* function fnOut(){
    console.log(event.type, event.target);
    setIn=setInterval(autoGallery, 3000);
  } */

itemsUlLi.forEach(el=>el.addEventListener('mouseover', ()=>{
  console.log(event.type, event.target);
  clearInterval(setIn);
}));
itemsUlLi.forEach(el=>el.addEventListener('mouseout', ()=>{
  console.log(event.type, event.target);
  setIn=setInterval(autoGallery, 3000);
}));

//즉시 실행
(()=>autoGallery())();
