function show_ach_tab(tab){var total_tabs=document.getElementById('total_ach_tabs').value;for(i=1;i<=total_tabs;i++){if(document.getElementById('ach_tab'+i)!=null){if(i==tab)
document.getElementById('ach_tab'+i).className="ach_box_actv";else
document.getElementById('ach_tab'+i).className="none";}
if(document.getElementById('ach_tab_content'+i)!=null){if(i==tab){document.getElementById('ach_details').style.display="block";document.getElementById('ach_tab_content'+i).style.display="block";}
else
document.getElementById('ach_tab_content'+i).style.display="none";}}}
function showhidepanel()
{if(document.getElementById('allcat_list').style.display=='inline')
{document.getElementById('allcat_list').style.display='none';document.getElementById('option_name').innerHTML="Show";}
else
{document.getElementById('allcat_list').style.display='inline';document.getElementById('option_name').innerHTML="Hide";}}
function showhidepanelcat()
{if(document.getElementById('fullcat_list').style.display=='inline')
{document.getElementById('fullcat_list').style.display='none';document.getElementById('cat_option_name').innerHTML="Show";}
else
{document.getElementById('fullcat_list').style.display='inline';document.getElementById('cat_option_name').innerHTML="Hide";}}
function show_hide_hstab(tid){for(i=1;i<=5;i++){if(tid==i){document.getElementById('hs_tab'+i).className='hs_tab'+i+' actv';document.getElementById('hs_tab_content'+i).style.display="block";}
else{document.getElementById('hs_tab'+i).className='hs_tab'+i;document.getElementById('hs_tab_content'+i).style.display="none";}}}
function show_gplay_ach(tid){var total_tabs=document.getElementById('total_ach_tabs').value;for(i=1;i<=total_tabs;i++){if(document.getElementById('gplay_ach_conten'+i)!=null){if(i==tid){document.getElementById('gplay_ach_conten'+i).style.display="block";document.getElementById('gplay_ach_tab'+i).className="actv";}
else{document.getElementById('gplay_ach_conten'+i).style.display="none";document.getElementById('gplay_ach_tab'+i).className="";}}}}
function show_gplay_tabs(tid){var total_tabs=document.getElementById('total_ach_tabs').value;for(i=1;i<=total_tabs;i++){if(document.getElementById('gplay_tabs_conten'+i)!=null){if(i==tid){document.getElementById('gplay_tabs_conten'+i).style.display="block";document.getElementById('gplay_tab'+i).className="actv";}
else{document.getElementById('gplay_tabs_conten'+i).style.display="none";document.getElementById('gplay_tab'+i).className="";}}}}
function show_latestach_content(tid){for(i=1;i<=15;i++){if(document.getElementById('lach_content'+i)!=null){if(i==tid)
document.getElementById('lach_content'+i).style.display="block";else
document.getElementById('lach_content'+i).style.display="none";}}}