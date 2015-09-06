var drawing = document.getElementById('draw');
if (drawing.getContext) { // 确定浏览器支持 canvas 元素
    var context = drawing.getContext("2d"); // 取得绘图上下文对象的引用

    context.beginPath();
    context.translate(100, 100);
    context.arc(0, 0, 99, 0, 2 * Math.PI, false);
    context.moveTo(94, 0);
    context.arc(0, 0, 94, 0, 2 * Math.PI, false);

    context.rotate(1);
    context.moveTo(0, 0);
    context.lineTo(0, -85);
    context.moveTo(0, 0);
    context.lineTo(-65, 0);
    context.stroke();
}