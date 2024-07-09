var t=document.querySelectorAll(".tab");
for (var i=0;i<t.length;i++){
    tabs(t[i]);
}
      function tabs(tab){
            
        var tt=tab.getElementsByClassName("tt")[0];
        var span=tt.querySelectorAll("span");
        var tc=tab.querySelectorAll(".tc");
        console.log(tab,tt,span,tc);

        for(var i=0;i<span.length;i++){

            span[i].index=i;

            span[i].onclick=function(){
                //把所有的span去掉cur类，把所有的tc隐藏
                for(var j=0;j<span.length;j++){
                    span[j].classList.remove("cur");
                    tc[j].style.display="none";
                }
                //事件内部不使用i，使用this
                this.classList.add("cur");
                tc[this.index].style.display="block";
            }
        }


      }
      //首页jason
      var json = [{
        link: "#",
        img: "./yangshi/imag/index图片/博人传_gaitubao_640x400.png",
        type: "独播",
        info: "217集",
        title: "《博人传》",
        bf: "7671万",
        content: "经历漫长的战争之后便是极速成长的新时代。为准备中忍考试，佐助的女儿宇智波佐良娜，优秀下忍巳月，以及漩涡博人三人，在村子里的练习场进行修行。第一次考试是考验智力，二次考试团则是队合作…"
      },
      {
        link: "#",
        img: "./yangshi/imag/index图片/灌篮高手_gaitubao_640x400.jpeg",
        type: "独播",
        info: "31卷集",
        title: "《灌篮高手》",
        bf: "6021万",
        content: "《灌篮高手》是日本漫画家井上雄彦以高中篮球为题材的少年漫画，在《周刊少年JUMP》1990年42号至1996年27号上连载，单行本在17个国家和地区发行。与《足球小将》和《棒球英豪》合称为日本运动漫画三大巅峰之作。1995年，《灌篮高手》获日本第40届小学馆漫画奖"
      },
      {
        link: "#",
        img: "./yangshi/imag/index图片/进击的巨人.jpeg",
        type: "独播",
        info: "60集",
        title: "《进击的巨人》",
        bf: "6211万",
        content: "107年前（743年），世界上突然出现了人类的天敌“巨人”。面临着生存危机而残存下来的人类逃到了一个地方，盖起了三重巨大的城墙。人们在这隔绝的环境里享受了一百多年的和平，直到艾伦·耶格尔十岁那年，60米高的“超大型巨人”突然出现，以压倒性的力量破坏城门，其后瞬间消失，凶残的巨人们成群的冲进墙内捕食人类。"
      },
      {
        link: "#",
        img: "./yangshi/imag/index图片/网球王子_gaitubao_640x400.jpeg",
        type: "独播",
        info: "全42卷",
        bf: "4211万",
        title: "《网球王子》",
        content: "进入网球名校——青春学园初中部学习的越前龙马，在美国青少年网球大赛上连续四次获胜，被誉为网球天才少年。越前龙马在青春学园网球部中遇到了实力强劲的前辈们，但他以惊人的实力，最终赢得了前辈们的认可正式加入了校队，开始了通往全国大赛的奋斗之路"
      },


    ]

    var jlist = document.querySelector(".jlist");
    json.forEach(function (v, i) {
      var nli = document.createElement("li");

      nli.innerHTML = `<div>
                            <a href="${v.link}"><img src="${v.img}"></a>
                            <span class="type">${v.type}</span>
                            <span class="info">${v.info}</span>
                            <span class="bf"><svg class="icon" aria-hidden="true">
                                  <use xlink:href="#icon-guankanliang"></use>
                                      </svg>
                                   <p1>${v.bf}</p1>
                             </span>
                        </div>
                        <h3>${v.title}</h3>
                        <p>${v.content}。</p>  `;

      jlist.appendChild(nli);

    })
// //       //电影js
//       var json=[{
//         link:"#",
//         img:"./yangshi/imag/film—Img2/2_gaitubao_186x285.png",
//         vip:"VIP",
//         fbl:"1080p",

//         h3:"《黑豹》",
//       p: "漫威以暴制暴"
//     },
//     {
//         link:"#",
//         img:"./yangshi/imag/film—Img2/3_gaitubao_186x285.png",
//         vip:"VIP",
//         fbl:"1080p",

//         h3:"《惊奇队长》",
//       p: "漫威女英雄成长之路"
//     },
//     {
//         link:"#",
//         img:"./yangshi/imag/film—Img2/4_gaitubao_186x285.png",
//         vip:"VIP",
//         fbl:"1080p",

//         h3:"《多力特的奇幻毛线》",
//       p: "铁人唐尼奇幻毛线"
//     },
//     {
//         link:"#",
//         img:"./yangshi/imag/film—Img2/5_gaitubao_186x285.png",
//         vip:"VIP",
//         fbl:"1080p",

//         h3:"《爱情公寓》",
//       p: "老友重聚开启冒险"
//     },
//     {
//         link:"#",
//         img:"./yangshi/imag/film—Img2/7.png",
//         vip:"VIP",
//         fbl:"1080p",

//         h3:"《再见，少年》",
//       p: "青葱少年守护友谊"
//     },
//     {
//         link:"#",
//         img:"./yangshi/imag/film—Img2/8.png",
//         vip:"VIP",
//         fbl:"1080p",

//         h3:"《盛夏未来》",
//       p: "吴磊诠释个性少年"
//     },
//     {
//         link:"#",
//         img:"./yangshi/imag/film—Img2/6.png",
//         vip:"VIP",
//         fbl:"1080p",

//         h3:"《复仇者联盟4：终局之战》",
//       p: "超英之战载入史册"
//     },

//     {
//         link:"#",
//         img:"./yangshi/imag/film—Img2/9.png",
//         vip:"VIP",
//         fbl:"1080p",

//         h3:"《名侦探柯南：绯色的子弹》",
//       p: "柯南携手秀一对抗黑色组织"
//     },

//   ]

// var jlist=document.querySelector(".film");
// json.forEach(function(v,i){
//     var nli=document.createElement("li");
//     //创建一个HTMl元素li
//     nli.innerHTML=`<li>
//      <div>
    
//     <a href=<${v.link}><img src=${v.img}></a>
//     <span class="vip">${v.vip}</span>
//     <span class="fbl">${v.fbl}</span> 
//   </div>
//   <h3>${v.h3}</h3>
//   <p>${v.p}</p>

// </li>`;
//     //反引号，es6,内部可包括引号和变量${}
//     jlist.appendChild(nli);
//     //jlist的内部的最后增加元素
// })
	
//热点jason
var json=[{
    zlink:"#",
    img:"./yangshi/imag/index2图片/斗罗大陆新闻.jpg",
    ztype:"独播",
    zinfo:"05:30:45",
    p1: "4211万",
    h1:"五一长假，全国各地迎来外出旅游高峰期，《斗罗大陆》动画也迎来粉丝高涨的追番热情。随着动画剧情的高能推进，#斗罗大陆动画#、#唐三小舞亲吻#、#千仞雪真面目#三登微博热搜，腾讯视频站内也为热情爆表的动画",
    h2:"动漫社",
    zx:"最新",
    zx1:"#快看精彩电影院"

},
{
    zlink:"http//:huanqiu.com",
    img:"./yangshi/imag/index2图片/龙猫新闻.jpg",
    ztype:"独播",
    zinfo:"03:30",
    p1: "4451万",
    h1:"2018年日本电影内地票房排行 《龙猫》重映票房1.7亿,新的一年一起来看看刚刚过去的2018年国内大陆地区引进的日本电影的票房状况吧。在引入的十几部日本电影中，依旧是动画电影表现良好，几乎每年一部的《哆啦A梦》和《名侦探柯南》电影，分别以2.09亿与1.27亿占据第一第三位。",
    h2:"日本新闻",
    zx:"最新",
    zx1:"#快看精彩电影院"

},
{
    zlink:"http//:huanqiu.com",
    img:"./yangshi/imag/index2图片/蜡笔小新新闻.jfif",
    ztype:"独播",
    zinfo:"5:30:",
    p1: "5611万",
    h1:"如果你关注蜡笔小新，那么你可能听说关于蜡笔小新的一则传言：野原新之助的原型人物在5岁的时候为了救下0岁的妹妹，不幸被车祸而亡。他的妈妈看到自己小孩倒在血泊里，接受不了自己孩子夭折的事实，精神崩溃了。整日用蜡笔画自己小孩的故事。某天漫画家臼井仪人正在寻找新的作品灵感，听到这则感人的故事，于是《蜡笔小新》诞生了。",
    h2:"企鹅动漫",
    zx:"最新",
    zx1:"#快看精彩电影院"

},
]

var jlist=document.querySelector(".zlist");
json.forEach(function(v,i){
var nli=document.createElement("li");
//创建一个HTMl元素li
nli.innerHTML=` <div>
<a href="${v.zklink}"><img src="${v.img}"></a>
<span class="ztype">${v.ztype}</span>
<span class="zinfo">${v.zinfo}</span> <span class="bf"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-guankanliang"></use>
  </svg>
  <p1>${v.p1}</p1>
</span>
</div> 
<div class="wz">
<h1> 
${v.h1}
</h1>
<h2>${v.h2}</h2>
<div class="fense">
<div class="zx"><p>${v.zx}</p></div>
<div class="zx1"><p>${v.zx1}</p></div></div>
</div>`;
//反引号，es6,内部可包括引号和变量${}
jlist.appendChild(nli);
//jlist的内部的最后增加元素
})








//综艺jason
var json=[{
    link:"#",
    img:"./yangshi/imag/index图片/综艺2.jpg",
    vip:"VIP",
    fbl:"1080p",
    h3:"《朋友请听好》",
},
{
    link:"#",
    img:"./yangshi/imag/index图片/综艺3.jpg",
    vip:"VIP",
    fbl:"1080p",
    h3:"《明星大侦探》",
},
{
    link:"#",
    img:"./yangshi/imag/index图片/综艺4.jpg",
    vip:"VIP",
    fbl:"1080p",
    h3:"《向往的生活》",
},
{
    link:"#",
    img:"./yangshi/imag/index图片/综艺5.jpg",
    vip:"VIP",
    fbl:"1080p",
    h3:"《偶滴歌神啊》",
},
{
    link:"#",
    img:"./yangshi/imag/index图片/综艺6.jpg",
    vip:"VIP",
    fbl:"1080p",
    h3:"《快乐大本营》",
},
{
    link:"#",
    img:"./yangshi/imag/index图片/综艺7.jpg",
    vip:"VIP",
    fbl:"1080p",
    h3:"《真心英雄》",
},
{
    link:"#",
    img:"./yangshi/imag/index图片/综艺8.jpg",
    vip:"VIP",
    fbl:"1080p",
    h3:"《再见爱人》",
},

]

var jlist=document.querySelector(".zy");
json.forEach(function(v,i){
var nli=document.createElement("li");
//创建一个HTMl元素li
nli.innerHTML=` <div>

<a href=<${v.link}><img src=${v.img}></a>
<span class="vip">${v.vip}</span>
<span class="fbl">${v.fbl}</span> 
</div>
<h3>${v.h3}</h3>

</li>`;
//反引号，es6,内部可包括引号和变量${}
jlist.appendChild(nli);
//jlist的内部的最后增加元素
})

  var mySwiper = new Swiper('.tc');
  $('#btn').click(function(){
    mySwiper.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
  })



  //滑动搜索
  var head=document.querySelector("#head");
   
  
  console.log(head);
  window.onscroll=function(){
      var st=document.documentElement.scrollTop||document.body.scrollTop;
     
      console.log(st);
  
      if(st>50)
      {
        
          head.style.position="fixed";
          head.style.backgroundColor="#ddd"
      }
      else{
     
          head.style.position="static";
      }
  }


//ajax