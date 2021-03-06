/**
 * Created by Bowa on 2014/8/28.
 */
var focuslist = [];
var focusobj = null;
var focustype = 1;


var pimg = {};
pimg.tpl = '<li onclick="toDetail(%s);">'+
    '<img src="'+fileurl+'%s" >'+
    '<h2>%s</h2>'+
    '<p>%s</p>'+
    '</li>';
pimg.colums = ["id","img","title","note"];


var ptitle = {};
ptitle.tpl = '<li onclick="toDetail(%s);">'+
    '<h2>%s</h2>'+
    '</li>';
ptitle.colums = ["id","title"];

var ptitlenote = {};
ptitlenote.tpl = '<li onclick="toDetail(%s);">'+
    '<h2>%s</h2>'+
    '<p>%s</p>'+
    '</li>';
ptitlenote.colums = ["id","title","note"];

var plianxi = {};
plianxi.tpl = '<li onclick="toDetail(%s);">'+
    '<h2>姓名:%s</h2>'+
    '<p>电话:%s</p>'+
    '<p>院系:%s</p>'+
    '</li>';
plianxi.colums = ["id","title","tel","yuanxi"];

var pchengji = {};
pchengji.tpl = '<li onclick="toDetail(%s);">'+
    '<h2>姓名:%s</h2>'+
    '<p>课程:%s</p>'+
    '<p>分数:%s</p>'+
    '</li>';
pchengji.colums = ["id","title","course","score"];


$(function(){
//设置类别列表

    var p5 = {};
    p5.tpl = '<li><a href="#" onclick="postDetail(%s);">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '</a></li>';
    p5.colums = ["id","title","ndate"];
    $("#posts").data("property",JSON.stringify(p5));

    var p6 = {};
    p6.tpl = '<li><a href="#" onclick="">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p>%s</p>'+
        '</a></li>';
    p6.colums = ["ndate","note","username"];
    $("#replays").data("property",JSON.stringify(p6));

});


function toDaohang(){
    changePage('daohangpage');
    ajaxCallback("listObj",{type:13},function(data){
        focuslist = data;
        focusobj = focuslist[0];
        $("#daohangimg").attr("src",fileurl+focusobj.img);
    });
}


function toXinwen(){
    changePage('xinwenpage');
}

function toGeren(){
    changePage('gerenpage');
}

function toMain(){
    changePage('mainpage');
}

function toLuntan(id){
    changePage("luntanpage");
    listPosts(id);
}

function listPosts(id){
    ajaxCallback("listPosts",{uid:id},function(data){
        focuslist = data;
        $("#posts").refreshShowListView(data);
    });
}

function toAddForm(){
    changePage("addformpage");
}
function addForm(){
    var note = $("#fnote").val();
    var title = $("#ftitle").val();
    ajaxCallback("addPosts",{uid:userinfo.id,title:title,note:note,username:userinfo.username},function(){
        toLuntan();
    });
}
function postDetail(id){
    var obj = getPostsById(id);
    focusobj = obj;
    changePage("postdetail");
    $("#vptitle").text("标题:"+obj.title);
    $("#vpnote").text("内容:"+obj.note);
    $("#vpusername").text("发布者:"+obj.username);
    $("#vpdate").text("时间:"+obj.ndate);
    if(obj.uid == userinfo.id){
        $("#mypost").show();
    }else{
        $("#mypost").hide();
    }
    listReplay();
}
function listReplay(){
    ajaxCallback("listReplay",{pid:focusobj.id},function(data){
        $("#replays").refreshShowListView(data);
    });
}
function addReplay(){
    var note = $("#rnote").val();
    ajaxCallback("addReplay",{pid:focusobj.id,uid:userinfo.id,username:userinfo.username,note:note},function(data){
        listReplay();
    });
}
function getPostsById(id){
    for(var i=0;i<focuslist.length;i++){
        if(focuslist[i].id == id){
            return focuslist[i];
        }
    }
}

function delPosts(){
    ajaxCallback("deletePosts",{id:focusobj.id},function(data){
        toLuntan();
    });
}

function toList(type){
    focustype = type;
    changePage('listpage');
    if(type==1||type==3||type==4||type==5||type==8||type==11||type==12){
        $("#list").data("property",JSON.stringify(ptitlenote));
    }else if(type==2||type==7||type==9){
        $("#list").data("property",JSON.stringify(pimg));
    }else if(type==6){
        $("#list").data("property",JSON.stringify(plianxi));
    }else if(type==10){
        $("#list").data("property",JSON.stringify(pchengji));
    }
    ajaxCallback("listObj",{type:type},function(data){
        focuslist = data;
        $("#list").refreshShowListView(data);
    });
}

function toDetail(id){
    var obj = getObjectById(id,focuslist);
    changePage('detailpage');
    $("#detailshow div").hide();
    var type = focustype;
    if(type==1||type==3||type==4||type==5||type==8||type==11||type==12){
        $("#detailshow div").eq(0).show();
        $("#detailshow div").eq(8).show();
        $("#vtitle").text("标题:"+obj.title);
        $("#vnote").text("内容:"+obj.note);
    }else if(type==2||type==7||type==9){
        $("#detailshow div").eq(0).show();
        $("#detailshow div").eq(1).show();
        $("#detailshow div").eq(8).show();
        $("#gimg2").attr("src",fileurl+obj.img);
        $("#vtitle").text("标题:"+obj.title);
        $("#vnote").text("内容:"+obj.note);
    }else if(type==6){
        $("#detailshow div").eq(0).show();
        $("#detailshow div").eq(3).show();
        $("#detailshow div").eq(4).show();
        $("#detailshow div").eq(5).show();
        $("#detailshow div").eq(8).show();
        $("#vtitle").text("教师姓名:"+obj.title);
        $("#vclert").text("职位:"+obj.clert);
        $("#vtel2").text("电话:"+obj.tel);
        $("#vnote").text("介绍:"+obj.note);
        $("#vyuanxi").text("院系:"+obj.yuanxi);
    }else if(type==10){
        $("#detailshow div").eq(0).show();
        $("#detailshow div").eq(6).show();
        $("#detailshow div").eq(7).show();
        $("#vtitle").text("姓名:"+obj.title);
        $("#vcourse").text("课程:"+obj.course);
        $("#vscore").text("分数:"+obj.score);
    }
}

function tolocation(url){
    window.location.href=url;
}
