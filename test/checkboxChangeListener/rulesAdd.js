/**
 * 不知道为什么下面的代码在IE中可用，但是在Chrome中有bug
 */
/*$("#leftBtn").click(function() {
    if ($(this).attr('aria-expanded') == 'false') {
        $(this).html("▲ 选择<strong>前件</strong>");
    } else {
        $(this).html("▼ 选择<strong>前件</strong>");
    }
});
$("#rules-preview-btn").click(function() {
    if ($(this).attr('aria-expanded') == 'false') {
        $(this).html("▲ 规则预览");
    } else {
        $(this).html("▼ 规则预览");
    }
});
$("#rightBtn").click(function() {
    if ($(this).attr('aria-expanded') == 'false') {
        $(this).html("▲ 选择<strong>后件</strong>");
    } else {
        $(this).html("▼ 选择<strong>后件</strong>");
    }
});
*/

$(document).ready(function() {

    /**
     * 监听checkbox改变的方法
     */
    $("[type=checkbox]").change(function() {
        $('[exampletr]').remove();
        checkboxShowValue(this);
    });

    /**
     * 每一个checkbox改变后的动作
     * @param  {element} element 传入的DOM元素
     */
    function checkboxShowValue(element) {
        console.log(element);
        if (element.checked === true) {
            // console.log("true--->" + element.value + element.getAttribute("meta-id"));
            addCheckedNameAndIdToTable(element.getAttribute("meta-id"), element.value);
        }
        if (element.checked === false) {
            // console.log("false--->" + element.value + element.getAttribute("meta-id"));
            removeTrInTable(element.getAttribute("meta-id"));
        }
    }

    /**
     * 将checked中的name和id添加到表格中
     * @param {String} name 元数据名
     * @param {String} id   元数据id
     */
    function addCheckedNameAndIdToTable(id, name) {
        $('tbody').append('<tr metaid-intable="' + id + '"><td>' + name + '</td><td><input type="number" class="form-control" value="100" min="1" max="100" required="required"></td></tr>');
    }

    function removeTrInTable(id) {
        $('[metaid-intable=' + id + ']').remove();
    }

    /**
     * 监听radio改变
     */
    $('[type=radio]').change(function() {
        console.log("radio");
        radioShowValue(this);
    });

    /**
     * 得到当前radio的值和id
     * @param  {element} element 传入的节点元素
     */
    function radioShowValue(element) {
        console.log(element);
        if (element.checked === true) {
            console.log("radio ture--->" + element.getAttribute("meta-id-right") + element.value);
            changeRightAreaContent(element.getAttribute("meta-id-right"), element.value);
        }
    }

    function changeRightAreaContent(id, name) {
        $('.right-name').html(name).attr('metaid-inrightdiv', id);
    }
});