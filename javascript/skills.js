var html_plus = document.getElementById("html_plus");

html_plus.onclick = function(){
    if(Number(html_skill.innerHTML.replace("%","")) < 100){
        element = document.getElementById("html_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current + 1;
        element.style.width = updated.toString() +  "%";
        console.log("plus"); 
        console.log(current);
        html_skill.innerHTML = (Number(html_skill.innerHTML.replace("%","")) + 1).toString() + "%";
    }
    
};

var html_minus = document.getElementById("html_minus");
html_minus.onclick = function(){
    if(Number(html_skill.innerHTML.replace("%","")) > 0){
        element = document.getElementById("html_skill");
        current = element.style.width;
        current = current.replace("%","");
        current = Number(current)
        updated = current - 1;
        element.style.width = updated.toString() +  "%";
        console.log("minus"); 
        console.log(current);
        html_skill.innerHTML = (Number(html_skill.innerHTML.replace("%","")) - 1).toString() + "%";
    }
    
};

$("#css_plus").click(function(){
    // console.log($("#css_skill").text());
    if(Number($("#css_skill").text().replace("%","")) < 100){
        var $element = $("#css_skill");
        // current = $element.width();
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        // current = current.replace("%","");
        current = Number(current)
        updated = current + 1;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); //= updated.toString() +  "%";
        console.log("plus"); 
        console.log(current);
        $element.html((Number($("#css_skill").text().replace("%","")) + 1).toString() + "%"); //= (Number(css_skill.innerHTML.replace("%","")) + 1).toString() + "%";
        console.log("plus");
    }
});

$("#css_minus").click(function(){
    // console.log($("#css_skill").text());
    if(Number($("#css_skill").text().replace("%","")) > 0){
        var $element = $("#css_skill");
        // current = $element.width();
        var current = parseInt($element.width() / $element.parent().width() * 100);
        console.log(current);
        // current = current.replace("%","");
        current = Number(current)
        updated = current - 1;
        updated = updated * $element.parent().width()/ 100
        $element.width(updated); //= updated.toString() +  "%";
        console.log("minus"); 
        console.log(current);
        $element.html((Number($("#css_skill").text().replace("%","")) - 1).toString() + "%"); //= (Number(css_skill.innerHTML.replace("%","")) + 1).toString() + "%";
        console.log("minus");
    }
});