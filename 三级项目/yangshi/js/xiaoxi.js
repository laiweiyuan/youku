
var t=document.querySelectorAll(".atab");
for (var i=0;i<t.length;i++){
    atabs(t[i]);
}
      function atabs(atab){
            
        var att=atab.getElementsByClassName("att")[0];
        var span=att.querySelectorAll("span");
        var atc=atab.querySelectorAll(".atc");
        console.log(atab,att,span,atc);

        for(var i=0;i<span.length;i++){

            span[i].index=i;

            span[i].onclick=function(){
                //把所有的span去掉cur类，把所有的atc隐藏
                for(var j=0;j<span.length;j++){
                    span[j].classList.remove("cur");
                    atc[j].style.display="none";
                }
                //事件内部不使用i，使用this
                this.classList.add("cur");
                atc[this.index].style.display="block";
            }
        }


      }
     