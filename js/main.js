var search = $("#botao-buscar");
var save = $("#botao-salvar");
var all = $("#botao-listar")

search.on("click", function(){
    $.get("main-request.php", function(data){
        colors(data);
        $("#texto").html(data);
    });
})

save.on("click", function(){
    $.post("main-request.php", {
        Number : $("#texto").html()
    }, function(){
        alert('Número ' + $("#texto").html() + ' foi salvo');
    })
})

var count = 0
all.on("click", function(){
    if(count == 0){
        $.get("request.php", function(data){
            $("#list").html(data);
            settime = setTimeout(function(){
                $("#list").slideToggle('slow');
            }, 400);  
        });
        count ++;
    }else{
        $("#list").slideToggle('slow');
        settime = setTimeout(function(){
            $("#list").html("");
        }, 400);
        count = 0;
    }
})

function colors(number){
    if(number >= 71){
        $("#texto").removeAttr('class');
        $("#texto").addClass('color1');
    }else if(number <= 50){
        $("#texto").removeAttr('class');
        $("#texto").addClass('color3');
    }else{
        $("#texto").removeAttr('class');
        $("#texto").addClass('color2');
    };
};