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

            span[i].onmousemove=function(){
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