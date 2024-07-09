
//jason

var json = [{
    zlink: "#",
    img: "./yangshi/imag/头像sq/1015545387812563_avatar.png",
    p: "L",
    p1: "最近访问过",
    button: "+加入"
},
{
    zlink: "#",
    img: "./yangshi/imag/头像sq/102373365019_avatar.png",
    p: "L",
    p1: "最近访问过",
    button: "+加入"
},
{
    zlink: "#",
    img: "./yangshi/imag/头像sq/1437796601970315_avatar.png",
    p: "L",
    p1: "最近访问过",
    button: "+加入"
},
{
    zlink: "#",
    img: "./yangshi/imag/头像sq/23fb8c189544fb6b3225cfaae4455c84.png",
    p: "L",
    p1: "最近访问过",
    button: "+加入"
}, {
    zlink: "#",
    img: "./yangshi/imag/头像/20210621_13330031_avatar.png.jpg",
    p: "L",
    p1: "最近访问过",
    button: "+加入"
},

]

var jlist = document.querySelector(".list");
json.forEach(function (v, i) {
var nli = document.createElement("li");
//创建一个HTMl元素li
nli.innerHTML = `        <div>
    <a href="${v.link}"><img src="${v.img}"></a>
</div>

<p>${v.p}</p>
<p1>${v.p1}</p1>
<div class=" jr">
    <button >${v.button }</button >
</div>`;

jlist.appendChild(nli);


})

//按钮

var btn=document.getElementsByTagName("button");
console.log(btn);
for(var i=0;i<btn.length;i++){ 
    btn[i].onclick=function(){
        
        this.innerHTML="已加入"
       
      
      } 
 
}

//热门酷全jason
var json = [{

    img: "./yangshi/imag/头像sq/1015545387812563_avatar.png",
    p: "L",
    p1: "最近访问过",
   
},
{

    img: "./yangshi/imag/头像sq/786905796445292_avatar.png",
    p: "L",
    p1: "最近访问过",
   
},
{

    img: "./yangshi/imag/头像sq/76401978768_avatar.png",
    p: "L",
    p1: "最近访问过",
   
},

{

    img: "./yangshi/imag/头像sq/74312250558_avatar.png",
    p: "L",
    p1: "最近访问过",
   
},
{

    img: "./yangshi/imag/头像sq/69734021398_avatar.png",
    p: "L",
    p1: "最近访问过",
   
},{

    img: "./yangshi/imag/头像sq/69422644116_avatar.png",
    p: "L",
    p1: "最近访问过",
   
},


]

var tx = document.querySelector(".rmkq");
json.forEach(function (v, i) {
var nli = document.createElement("li");
//创建一个HTMl元素li
nli.innerHTML = `    <a href="#"><img src="${v.img}"></a>
<p>${v.p}</p>
<p1>${v.p1}</p1>
    `;

tx.appendChild(nli);


})
//圈友说jason
var json = [{

    img: "./yangshi/imag/头像sq/1015545387812563_avatar.png",
    p: "2.7万人",
    p1: "这是一段文案",
    button:"+关注",
    h1:"百事可元"
   
},
{

    img: "./yangshi/imag/头像sq/1015545387812563_avatar.png",
    p: "2.7万人",
    p1: "这是一段文案",
    button:"+关注",
    h1:"百事可元"
   
},
{

    img: "./yangshi/imag/头像sq/1015545387812563_avatar.png",
    p: "2.7万人",
    p1: "这是一段文案",
    button:"+关注",
    h1:"百事可元"
   
},
{

    img: "./yangshi/imag/头像sq/1015545387812563_avatar.png",
    p: "2.7万人",
    p1: "这是一段文案",
    button:"+关注",
    h1:"百事可元"
   
},



]

var tx = document.querySelector(".qys");
json.forEach(function (v, i) {
var nli = document.createElement("span");

nli.innerHTML = `    <li>
<div class="tx">
    <a href="#"><img src="${v.img}"></a>
</div>
<div class="wz">
    <h1>
    ${v.h1}
        <span class="time">
            <div class=" jr">
                <button>${v.button}</button>
            </div>
        </span>

    </h1>
    <p>${v.p}</p>

</div>
</li>
<div class="quanzi ">
<p1>${v.p1}</p1>

</div>
<div class="pt"><img src="./yangshi/imag/圈子配图/黑色.jpg"><img src="./yangshi/imag/圈子配图/黑色.jpg"><img src="./yangshi/imag/圈子配图/黑色.jpg"></div>

    `;

tx.appendChild(nli);


})