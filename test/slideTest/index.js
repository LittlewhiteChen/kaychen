console.log("start");
addClickEvent($("#base"), function() {
    console.log("click");
    
    removeClass($("#next"), "page-next");
    addClass($("#next"), "page-active");

    removeClass($("#base"), "page-active");
    addClass($("#base"), "page-prev");
});