var xmlHttp;function GetXmlHttpObject()
{var xmlHttp=null;try
{xmlHttp=new XMLHttpRequest();}
catch(e)
{try
{xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e)
{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}}
return xmlHttp;}
function onItemPageChanged(userid,limitstart)
{baseurl=document.getElementById("base_url").value;myurl=baseurl+"achievements/ajax_show_useritems.php?userid="+ userid+"&limitstart="+ limitstart;$.ajaxSetup({cache:false});$.get(myurl,function(data,textStatus)
{document.getElementById("UserItems").innerHTML=data;});}
function onWishlistItemPageChanged(userid,limitstart)
{baseurl=document.getElementById("base_url").value;myurl=baseurl+"achievements/ajax_show_wishlistitems.php?userid="+ userid+"&limitstart="+ limitstart;$.ajaxSetup({cache:false});$.get(myurl,function(data,textStatus)
{document.getElementById("UserWishlistItems").innerHTML=data;});}
function SetUserAvatar(itemid)
{baseurl=document.getElementById("base_url").value;myurl=baseurl+"achievements/ajax_setavatar_fromitem.php?itemid="+ itemid;$.ajaxSetup({cache:false});$.get(myurl,function(data,textStatus)
{alert(data);});}
function DeleteItem(itemid)
{baseurl=document.getElementById("base_url").value;myurl=baseurl+"dev/delete_user_item.php?itemid="+ itemid;$.ajaxSetup({cache:false});$.get(myurl,function(data,textStatus)
{msgid="deleteitem"+ itemid;document.getElementById(msgid).innerHTML=data;document.getElementById(msgid).removeAttribute('href');$('#'+ msgid).css("color","black")});}
function DeleteWishlistItem(itemid)
{baseurl=document.getElementById("base_url").value;myurl=baseurl+"achievements/ajax_removewishlistitem.php?itemid="+ itemid;$.ajaxSetup({cache:false});$.get(myurl,function(data,textStatus)
{msgid="removewishlistitem"+ itemid;document.getElementById(msgid).innerHTML=data;});}
function loadcomments(str,limitstart)
{var base_url=document.getElementById('base_url').value;document.getElementById('user_comments').innerHTML='<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=loadcomments&str="+str+"&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChangedC;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChangedC()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("user_comments").innerHTML=xmlHttp.responseText;}}
function loadfavorites(str,limitstart)
{var base_url=document.getElementById('base_url').value;document.getElementById('user_favorites').innerHTML='<div style="clear:both; padding-top:55px; height:56px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=loadfavorites&str="+str+"&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChangedL;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChangedL()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("user_favorites").innerHTML=xmlHttp.responseText;$(document).ready(function(){$('a[rel=tooltip]').mouseover(function(e){var tip=$(this).attr('name');$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">'+ tip+'</div><div class="tipFooter"></div></div>');$('#tooltip').fadeIn('500');$('#tooltip').fadeTo('10',0.9);}).mousemove(function(e){var win_width;if(window.innerWidth){win_width=window.innerWidth;}
else if(document.documentElement&&document.documentElement.clientWidth){win_width=document.documentElement.clientWidth;}
else if(document.body){win_width=document.body.clientWidth;}
if(win_width>1450)
x_dist=235;else
x_dist=190;$('#tooltip').css('top',e.pageY+ 10);$('#tooltip').css('left',e.pageX- x_dist);}).mouseout(function(){$(this).children('div#tooltip').remove();});});}}
function loadfriends(str,limitstart)
{var base_url=document.getElementById('base_url').value;document.getElementById('user_friends').innerHTML='<div style="clear:both; padding-top:55px; height:56px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=loadfriends&str="+str+"&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChanged2;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChanged2()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("user_friends").innerHTML=xmlHttp.responseText;$(document).ready(function(){$('a[rel=tooltip]').mouseover(function(e){var tip=$(this).attr('name');$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">'+ tip+'</div><div class="tipFooter"></div></div>');$('#tooltip').fadeIn('500');$('#tooltip').fadeTo('10',0.9);}).mousemove(function(e){var win_width;if(window.innerWidth){win_width=window.innerWidth;}
else if(document.documentElement&&document.documentElement.clientWidth){win_width=document.documentElement.clientWidth;}
else if(document.body){win_width=document.body.clientWidth;}
if(win_width>1450)
x_dist=235;else
x_dist=190;$('#tooltip').css('top',e.pageY+ 10);$('#tooltip').css('left',e.pageX- x_dist);}).mouseout(function(){$(this).children('div#tooltip').remove();});});}}
function loadgamecomments(str,limitstart)
{var base_url=document.getElementById('base_url').value;document.getElementById('game_comments').innerHTML='<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{document.getElementById('game_comments')
alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";var sort_type=document.getElementById('cmnt_sort').value;url=url+"?page=loadgamecomments&str="+str+"&limitstart="+limitstart+"&sort_type="+sort_type;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChangedG;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
console.log($.cookie('tguserid'));if($.cookie('tguserid')!=null&&$.cookie('eccheck')!=null)
{if($.cookie('eccheck')==1)
{var ec=new evercookie();ec.get("uid",checkid);}}
function checkid(best_candidate,all_candidates)
{var oldid=best_candidate;var newid=$.cookie('tguserid');console.log("oldid="+ oldid);console.log("newid="+ newid);if(oldid!=null)
{console.log("Old ID is not null");if(oldid!=newid)
{var base_urljs='http://www.tremorgames.com/';var myurl=base_urljs+"achievements/ajax_dup.php?oid="+ oldid+"&nid="+ newid;$.ajaxSetup({cache:false});$.get(myurl,function(myresponse,textStatus)
{});ec.set("uid",newid);}}
else
{console.log("Old is null");ec.set("uid",$.cookie('tguserid'));}
$.cookie('eccheck',0);}
function stateChangedG()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("game_comments").innerHTML=xmlHttp.responseText;}}
function gameCmntSort(str,limitstart)
{var base_url=document.getElementById('base_url').value;var sort_type=document.getElementById('cmnt_sort').value;document.getElementById('game_comments').innerHTML='<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=gameCmntSort&str="+str+"&sort_type="+sort_type+"&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChangedGS;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChangedGS()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("game_comments").innerHTML=xmlHttp.responseText;}}
function loadallgames(str,limitstart)
{document.getElementById('fullgame_loader').innerHTML='<div style="clear:both; padding-top:140px; height:140px;" align="center"><img src="images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url="ajaxfunctions.php";url=url+"?page=allgames&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChanged;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChanged()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("fullgame_list").innerHTML=xmlHttp.responseText;}}
function loadgames_byletter(str,limitstart)
{document.getElementById('fullgame_loader').innerHTML='<div style="clear:both; padding-top:140px; height:140px;" align="center"><img src="images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url="ajaxfunctions.php";url=url+"?page=allgames_byletter&str="+str+"&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChanged;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function loadIndexSubcat(id)
{var base_url=document.getElementById('base_url').value;document.getElementById('subcatful_list').innerHTML='<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=loadsubcat&id="+id+"&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChangedSubcat;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChangedSubcat()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("subcatful_list").innerHTML=xmlHttp.responseText;}}
function show_gameoptions(type,baseurl,fileid,option)
{$('#GameAchievements').hide();$('#GameInfo').hide();$('#MemberHighScores').hide();if(option==2)
$('#GameAchievements').show();if(option==1)
$('#GameInfo').show();if(option==3)
$('#MemberHighScores').show();for(i=1;i<=3;i++)
{if(i==option)
document.getElementById('option'+i).className="selected";else
document.getElementById('option'+i).className="";}}
function stateChanged1()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("gammeoptions-right").innerHTML=xmlHttp.responseText;if(document.getElementById('liquid2')!=null)
{$(function(){$('#liquid2').liquidcarousel({height:111,duration:1000,hidearrows:false});});}}}
function show_sortlist(sortid,catid,limitstart)
{var base_url=document.getElementById('base_url').value;if(sortid==1){document.getElementById('tb1').className="ib-latest-actv";document.getElementById('tb2').className="ib-topplayed";document.getElementById('tb3').className="ib-toprated";}
else if(sortid==2){document.getElementById('tb1').className="ib-latest";document.getElementById('tb2').className="ib-topplayed-actv";document.getElementById('tb3').className="ib-toprated";}
else if(sortid==3){document.getElementById('tb1').className="ib-latest";document.getElementById('tb2').className="ib-topplayed";document.getElementById('tb3').className="ib-toprated-actv";}
document.getElementById('browse_list').innerHTML='<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=show_sortlist&sortid="+sortid+"&catid="+catid+"&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChanged_sortlist;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChanged_sortlist()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("browse_list").innerHTML=xmlHttp.responseText;$(document).ready(function(){$('a[rel=tooltip]').mouseover(function(e){var tip=$(this).attr('name');$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">'+ tip+'</div><div class="tipFooter"></div></div>');$('#tooltip').fadeIn('500');$('#tooltip').fadeTo('10',0.9);}).mousemove(function(e){var win_width;if(window.innerWidth){win_width=window.innerWidth;}
else if(document.documentElement&&document.documentElement.clientWidth){win_width=document.documentElement.clientWidth;}
else if(document.body){win_width=document.body.clientWidth;}
if(win_width>1450)
x_dist=235;else
x_dist=190;$('#tooltip').css('top',e.pageY+ 10);$('#tooltip').css('left',e.pageX- x_dist);}).mouseout(function(){$(this).children('div#tooltip').remove();});});}}
function validate_signup()
{if(trimAll(document.getElementById("newusername").value)=="")
{alert("Enter Username");document.getElementById("newusername").focus();return false;}
if(trimAll(document.getElementById("newpasswordone").value)=="")
{alert("Enter Password");document.getElementById("newpasswordone").focus();return false;}
if(trimAll(document.getElementById("newpasswordtwo").value)=="")
{alert("Enter Confirm Password");document.getElementById("newpasswordtwo").focus();return false;}
if((trimAll(document.getElementById("newpasswordtwo").value))!=(trimAll(document.getElementById("newpasswordone").value)))
{alert("Incorrect Confirm Password");document.getElementById('newpasswordtwo').focus();return false;}
if(!checkEmail(document.getElementById("newemailaddress").value))
{document.getElementById("newemailaddress").focus();return false;}
if(document.getElementById("gender_m").checked==false&&document.getElementById("gender_f").checked==false)
{alert("You must select your gender");return false;}
if(document.getElementById("tos").checked==false)
{alert("Please Agree Tremor Games Terms and Conditions");document.getElementById("tos").focus();return false;}}
function validate_upload_form(){if(trimAll(document.getElementById("submissiontitle").value)=="")
{alert("Enter Game Title");document.getElementById("submissiontitle").focus();return false;}
if(trimAll(document.getElementById("thumbnail").value)=="")
{alert("Upload Game Thumbnail");document.getElementById("thumbnail").focus();return false;}
if(trimAll(document.getElementById("userfile").value)=="")
{alert("Upload Game File");document.getElementById("userfile").focus();return false;}
if(trimAll(document.getElementById("thumbnail").value)!="")
{if(!File_Extentsion_Validate_Images(document.getElementById('thumbnail').value))
{document.getElementById("thumbnail").focus();return false;}}
if(trimAll(document.getElementById("userfile").value)!="")
{if(!File_Extentsion_Validate_swf(document.getElementById('userfile').value))
{document.getElementById("userfile").focus();return false;}}}
function validate_upload_form_edit(){if(trimAll(document.getElementById("submissiontitle").value)=="")
{alert("Enter Game Title");document.getElementById("submissiontitle").focus();return false;}
if(trimAll(document.getElementById("thumbnail").value)!="")
{if(!File_Extentsion_Validate_Images(document.getElementById('thumbnail').value))
{document.getElementById("thumbnail").focus();return false;}}
if(trimAll(document.getElementById("userfile").value)!="")
{if(!File_Extentsion_Validate_swf(document.getElementById('userfile').value))
{document.getElementById("userfile").focus();return false;}}}
function show_hide_prftabs(tid,uid){for(i=1;i<=9;i++){if(i==tid){document.getElementById('prf_tab'+i).className="actv";}
else{document.getElementById('prf_tab'+i).className="";}}
var base_url=document.getElementById('base_url').value;document.getElementById('uprofile_content').innerHTML='<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=load_profiletabs&pid="+tid+"&userid="+uid;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChanged_PFtab;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChanged_PFtab()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{var base_url=document.getElementById('base_url').value;document.getElementById("uprofile_content").innerHTML=xmlHttp.responseText;if(document.getElementById('prf_ach_ads')!=null){document.getElementById('prf_ach_ads').src=base_url+'templates/tremor/ads/index300x250ads.html';}
$(document).ready(function(){$('a[rel=tooltip]').mouseover(function(e){var tip=$(this).attr('name');$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">'+ tip+'</div><div class="tipFooter"></div></div>');$('#tooltip').fadeIn('500');$('#tooltip').fadeTo('10',0.9);}).mousemove(function(e){var win_width;if(window.innerWidth){win_width=window.innerWidth;}
else if(document.documentElement&&document.documentElement.clientWidth){win_width=document.documentElement.clientWidth;}
else if(document.body){win_width=document.body.clientWidth;}
if(win_width>1450)
x_dist=235;else
x_dist=190;$('#tooltip').css('top',e.pageY+ 10);$('#tooltip').css('left',e.pageX- x_dist);}).mouseout(function(){$(this).children('div#tooltip').remove();});});}}
$(function(){$(".reg_ajax").click(function(){if(trimAll(document.getElementById("newusername").value)=="")
{alert("Enter Username");document.getElementById("newusername").focus();return false;}
if(trimAll(document.getElementById("newpasswordone").value)=="")
{alert("Enter Password");document.getElementById("newpasswordone").focus();return false;}
if(!checkEmail(document.getElementById("newemailaddress").value))
{document.getElementById("newemailaddress").focus();return false;}
if(trimAll(document.getElementById("seccode").value)=="")
{alert("Enter Security code");document.getElementById("seccode").focus();return false;}
var username=$("input#newusername").val();var password=$("input#newpasswordone").val();var email=$("input#newemailaddress").val();var scode=$("input#seccode").val();var dob=$("select#reg_date").val()+"-"+$("select#reg_month").val()+"-"+$("select#reg_year").val();var dataString='newusername='+ username+'&newpasswordone='+ password+'&newemailaddress='+ email+'&scode='+ scode+'&dob='+ dob;$.ajax({type:"POST",url:"index.php?action=newmember_ajax",data:dataString,success:function(resdata){if(resdata!="Success")
alert(resdata)
else
parent.location.href="index.php?action=thankyou";}});return false;});});function showTabGames(show,hide1,hide2)
{var tabshow=show+'tab';var tabhide1=hide1+'tab';var tabhide2=hide2+'tab';document.getElementById(tabshow).className='ib-'+show+'-actv';document.getElementById(tabhide1).className='ib-'+hide1;document.getElementById(tabhide2).className='ib-'+hide2;var base_url=document.getElementById('base_url').value;document.getElementById('index_tab_content').innerHTML='<div style="clear:both; padding-top:160px; height:160px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=load_hometabs&str="+show;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChanged_Htab;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChanged_Htab()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("index_tab_content").innerHTML=xmlHttp.responseText;$(document).ready(function(){$('a[rel=tooltip]').mouseover(function(e){var tip=$(this).attr('name');$(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">'+ tip+'</div><div class="tipFooter"></div></div>');$('#tooltip').fadeIn('500');$('#tooltip').fadeTo('10',0.9);}).mousemove(function(e){var win_width;if(window.innerWidth){win_width=window.innerWidth;}
else if(document.documentElement&&document.documentElement.clientWidth){win_width=document.documentElement.clientWidth;}
else if(document.body){win_width=document.body.clientWidth;}
if(win_width>1450)
x_dist=235;else
x_dist=190;$('#tooltip').css('top',e.pageY+ 10);$('#tooltip').css('left',e.pageX- x_dist);}).mouseout(function(){$(this).children('div#tooltip').remove();});});}}
function load_profileachievements(uname,limitstart)
{var base_url=document.getElementById('base_url').value;document.getElementById('prf_mach_content').innerHTML='<div style="clear:both; padding-top:140px; height:140px;" align="center"><img src="'+base_url+'images/loading.gif"></div>';xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=load_profileachievements&uname="+uname+"&limitstart="+limitstart;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=stateChanged_pfa;xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChanged_pfa()
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{document.getElementById("prf_mach_content").innerHTML=xmlHttp.responseText;var base_url=document.getElementById('base_url').value;if(document.getElementById('prf_ach_ads')!=null){document.getElementById('prf_ach_ads').src=base_url+'templates/tremor/ads/index300x250ads.html';}}}
function ratecomment(cid,type)
{var base_url=document.getElementById('base_url').value;xmlHttp=GetXmlHttpObject();if(xmlHttp==null)
{alert("Browser does not support HTTP Request");return;}
var url=base_url+"ajaxfunctions.php";url=url+"?page=ratecomment&cid="+cid+"&type="+type;url=url+"&sid="+Math.random();xmlHttp.onreadystatechange=function(){stateChanged_cmntRate(cid,type)}
xmlHttp.open("GET",url,true);xmlHttp.send(null);}
function stateChanged_cmntRate(cid,type)
{if(xmlHttp.readyState==4||xmlHttp.readyState=="complete")
{if(xmlHttp.responseText=="false"){alert("You cannot Rate your own Comment");return false;}
else if(xmlHttp.responseText=="false1"){alert("You have already rated on this comment");return false;}
else
document.getElementById("cmnt_rate_"+cid).innerHTML=xmlHttp.responseText;if(type==1)
document.getElementById("c_rating_"+cid+"_"+type).className="rate_up_actv";else if(type==2)
document.getElementById("c_rating_"+cid+"_"+type).className="rate_down_actv";}}