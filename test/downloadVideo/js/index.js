var str = "http://c.brightcove.com/services/viewer/federated_f9?&amp;width=100%25&amp;height=100%25&amp;flashID=bc-video-4226134179001-1&amp;bgcolor=%23FFFFFF&amp;playerID=3160175193001&amp;playerKey=AQ~~%2CAAAB668kGak~%2CLMlvL4u4ShOTHD9z00VquajMOcH97tcW&amp;isVid=true&amp;isUI=true&amp;videoSmoothing=true&amp;seamlessTabbing=false&amp;swliveconnect=true&amp;dynamicStreaming=true&amp;autoStart=true&amp;%40videoPlayer=4226134179001&amp;linkBaseURL=http%3A%2F%2Ffor.tn%2F1GTWZ6N&amp;includeAPI=true&amp;templateLoadHandler=Fortune_onTemplateLoad&amp;templateReadyHandler=brightcove%5B%22templateReadyHandlerbc-video-4226134179001-1%22%5D&amp;wmode=opaque&amp;adServerURL=http%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Fads%3Fenv%3Dvp%26gdfp_req%3D1%26impl%3Ds%26output%3Dxml_vast2%26iu%3D%2F8484%2Ffort%2Fvideo_bc%2Ftech_bc%26sz%3D1000x1%26cust_params%3Dtags%253Dalibaba200million%252Calibabachina%252Calibabadanielzhang%252Calibabaearnings%252Calibabaearningsreport%252Calibabagroup%252Calibabagroupholdingsltd%252Calibabagroupinc%252Calibabaipo%252Calibabajackma%252Cbrianokeefe%252Cdanielzhang%252Cfortunelive%252Cjenniferreingold%252Cleighgallagher%252Cphilwhaba%2526ch%253Dtech%2526topic%253Dleighgallagher%26unviewed_position_start%3D1%26correlator%3Dtimestamp&amp;debuggerID=&amp;originalTemplateReadyHandler=Fortune_onTemplateReady&amp;startTime=1432950856682";

var str2 = "http://b.scorecardresearch.com/p?c1=19&c2=6035728&ns_ap_an=brightcove%3B%20Chromeless%20-%202014%20Fortune.com&ns_ap_pn=as3&ns_ap_pv=17%2C0%2C0%2C188&c12=11a7fc7fc39676fdd59450b792f6e1c0-cs72&ns_ap_ec=4&ns_ap_ev=hidden&ns_ap_device=Google%20Pepper&ns_ap_id=-1&ns_ap_bi=&ns_ap_pfm=PlugIn&ns_ap_pfv=17%2C0%2C0%2C188&ns_ap_ver=unknown&ns_ap_sv=2.1411.18&ns_type=hidden&ns_st_sv=4.1412.08&ns_st_pv=4.2.1&ns_st_it=c&ns_st_id=1432972055912_1&ns_st_ec=4&ns_st_sp=1&ns_st_cn=1&ns_st_ev=hb&ns_st_po=7904&ns_st_cl=149073&ns_st_el=149073&ns_st_hc=1&ns_st_mp=brightcove&ns_st_mv=undefined&ns_st_pn=1&ns_st_tp=1&ns_st_pt=10030&ns_st_pa=10030&ns_st_ci=4226134179001&ns_ap_res=0x0&ns_ap_cs=0&ns_ap_lang=zh-CN&ns_ts=1432972093701&ns_st_pe=1&ns_st_bc=1&ns_st_bt=15082&ns_st_bp=15082&ns_st_pc=1&ns_st_pp=1&ns_st_br=0&ns_st_ub=0&ns_st_vo=100&ns_st_ws=norm&ns_st_pl=Will%20younger%20executives%20take%20Alibaba%20into%20its%20digital%20future%3F&ns_st_pr=Will%20younger%20executives%20take%20Alibaba%20into%20its%20digital%20future%3F&ns_st_ep=Will%20younger%20executives%20take%20Alibaba%20into%20its%20digital%20future%3F&ns_st_ty=video&ns_st_ct=vc11&ns_st_pu=Fortune.com&ns_st_cu=rtmp%3A%2F%2Fcp140739.edgefcs.net%2Fondemand%2F%26mp4%3Avideos%2F2111767321001%2F201505%2F3810%2F2111767321001_4226178926001_4226134179001.mp4&c3=Fortune.com&c4=Will%20younger%20executives%20take%20Alibaba%20into%20its%20digital%20future%3F&c6=*null&c7=http%3A%2F%2Ffortune.com%2Fvideo%2F2015%2F05%2F08%2Fwill-younger-executives-take-alibaba-into-its-digital-future%2F&c8=Will%20younger%20executives%20take%20Alibaba%20into%20its%20digital%20future%3F%20-%20Fortune&c9=";

// str = changeCode(str);

str2 = changeCode(str2);
str2 = splitAnd(str2);
showArr(str2);

function splitamp(str) {
    return str.split("&amp;");
}

function splitAnd(str) {
    return str.split("&");
}

function showArr(strArr) {
    for (var i = 0; i < strArr.length; i++) {
        console.log(strArr[i]);
    }
}

// 转化字符
// 字符表来源 http://www.w3school.com.cn/tags/html_ref_urlencode.html
function changeCode(str) {
    str = str.replace(/%25/g, "%");
    str = str.replace(/%23/g, "#");
    str = str.replace(/%2c/ig, ",");
    str = str.replace(/%40/g, "@");
    str = str.replace(/%3a/ig, ":");
    str = str.replace(/%2f/ig, "/");
    str = str.replace(/%3f/ig, "?");
    str = str.replace(/%3d/ig, "=");
    str = str.replace(/%26/ig, "&");
    str = str.replace(/%5b/ig, "[");
    str = str.replace(/%5d/ig, "]");
    str = str.replace(/%22/ig, '"');

    return str;
}