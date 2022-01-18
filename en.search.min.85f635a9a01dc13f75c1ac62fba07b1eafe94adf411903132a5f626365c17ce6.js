'use strict';(function(){const input=document.querySelector('#navbar-search-input');const results=document.querySelector('#navbar-search-results');if(!input){return}
input.addEventListener('focus',init);input.addEventListener('focus',search);input.addEventListener('keyup',search);document.addEventListener('keypress',focusSearchFieldOnKeyPress);function focusSearchFieldOnKeyPress(event){if(input===document.activeElement){return;}
const characterPressed=String.fromCharCode(event.charCode);if(!isHotkey(characterPressed)){return;}
input.focus();event.preventDefault();}
function isHotkey(character){const dataHotkeys=input.getAttribute('data-hotkeys')||'';return dataHotkeys.indexOf(character)>=0;}
function init(){input.removeEventListener('focus',init);input.required=true;loadScript('/flexsearch.min.js');loadScript('/en.search-data.min.60f5aa8c68b04f92056f23b74815e2f66d7ffb2de8efedd1e595d9aea7c745b4.js',function(){input.required=false;search();});}
function search(){while(results.firstChild){results.removeChild(results.firstChild);}
if(!input.value){return;}
const searchHits=window.newdocsSearchIndex.search(input.value,10);searchHits.forEach(function(page){const li=element('<li><a href><h4></h4><small></small></a></li>');const a=li.querySelector('a'),title=li.querySelector('h4'),small=li.querySelector('small');a.href=page.href;title.textContent=page.title;small.textContent=page.section;results.appendChild(li);});}
function loadScript(src,callback){const script=document.createElement('script');script.defer=true;script.async=false;script.src=src;script.onload=callback;document.head.appendChild(script);}
function element(content){const div=document.createElement('div');div.innerHTML=content;return div.firstChild;}})();