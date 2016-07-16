$(document).ready(function(){$('a[rel=tooltip]').mouseover(function(e){var tip=$(this).attr('name');$(this).append('<div  id="tooltip"><div class="tipHeader"></div><div class="tipBody box_round">'+ tip+'</div><div class="tipFooter"></div></div>');$('#tooltip').fadeIn('500');$('#tooltip').fadeTo('10',0.9);}).mousemove(function(e){var win_width;if(window.innerWidth){win_width=window.innerWidth;}
else if(document.documentElement&&document.documentElement.clientWidth){win_width=document.documentElement.clientWidth;}
else if(document.body){win_width=document.body.clientWidth;}
if(win_width>1900)
x_dist=435;else if(win_width>1400)
x_dist=290;else if(win_width>1350)
x_dist=160;else if(win_width>1200)
x_dist=130;else if(win_width>1000)
x_dist=-20;else
x_dist=-40;$('#tooltip').css('top',e.pageY+ 10);$('#tooltip').css('left',e.pageX- x_dist);}).mouseout(function(){$(this).children('div#tooltip').remove();});});