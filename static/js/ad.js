$(function(){
    ifShow();
    //var dowp = document.querySelector("#ifshowViAd");
    //console.log(dowp);
    //dowp.style.display = "inline-block";

    function ifShow(){
        var lang= $("#lang").val();
        var data = {
            lang:lang
        };

        $.getJSON( BaseUrl  + '/downs/ifshowAd?lang='+lang+'&callback=?', function (r) {
            if (r && r.status == 'success') {
                data = r.data;
            }

            if(data.area[0] == '越南' || lang=='vi'){
                var dowp = document.querySelector("#ifshowViAd");
                dowp.style.display = "inline-block";
                var dowp = document.querySelector("#showVi2");
                dowp.style.display = "inline-block";


            }else{
               if(data.area[0] != '越南' && lang=='id'){
                   var dowp = document.querySelector("#showId");
                   dowp.style.display = "inline-block";
                   var dowp = document.querySelector("#showId2");
                   dowp.style.display = "inline-block";
               }
            }
        });
        return false
    }


})