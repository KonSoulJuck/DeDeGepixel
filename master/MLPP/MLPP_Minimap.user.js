// ==UserScript==
// @name         MLP Pixel Minimap
// @version      2.6.6
// @description  My Little Pony Pixel (MLP Pixel) Minimap for PixelZone.io
// @author       Endless Night
// @include      *://pixelzone.io/*
// @homepage     https://github.com/EndlessNightNLR
// @updateURL    https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js
// @downloadURL  https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js
// ==/UserScript==
//
// To the glory of Luna and the New Lunar Republic!
//
var $jscomp=$jscomp||{};$jscomp['scope']={};$jscomp['arrayIteratorImpl']=function(c){var d=0x0;return function(){return d<c['length']?{'done':!0x1,'value':c[d++]}:{'done':!0x0};};};$jscomp['arrayIterator']=function(e){return{'next':$jscomp['arrayIteratorImpl'](e)};};$jscomp['makeIterator']=function(f){var g='undefined'!=typeof Symbol&&Symbol['iterator']&&f[Symbol['iterator']];return g?g['call'](f):$jscomp['arrayIterator'](f);};setTimeout(function(){function h(){aP&&ap('Updating\x20Template\x20List');var i=new XMLHttpRequest();i['onloadend']=function(){if(0xc8==this['status']){b0=JSON['parse'](this['responseText']);b1={};b2={};b7={};for(var i in b0)b0[i]['x']*=0x1,b0[i]['y']*=0x1,b0[i]['width']*=0x1,b0[i]['height']*=0x1,'grid'===b0[i]['type']?b2[i]={'x':b0[i]['x'],'y':b0[i]['y'],'width':b0[i]['width'],'height':b0[i]['height']}:b1[i]={'x':b0[i]['x'],'y':b0[i]['y'],'width':b0[i]['width'],'height':b0[i]['height']};var k=$jscomp['makeIterator'](b8['templates']);for(i=k['next']();!i['done'];i=k['next']())q(i['value'],function(){return aP&&console['log']('Img\x20updated');});k=$jscomp['makeIterator'](b8['grids']);for(i=k['next']();!i['done'];i=k['next']())q(i['value'],function(){return aP&&console['log']('Grid\x20updated');});aP&&console['log']('Update\x20completed',b0,b1,b2);}else console['error']('Error\x20:\x20'+aU[aV]['data']+'\x20'+this['status']);};i['open']('GET',aU[aV]['data'],!0x0);i['send']();}function l(){b5&&!bd&&(be&&(localStorage['sync']=be=!0x1,aO=aN,an('sync')['innerText']=be?'On':'Off',N()),aO*=1.1,0x20<aO?aO=0x20:(bd?bv['override']():be?av(aN):av(),aj(),ac(),bh(),setTimeout(l,0x32)));}function m(){b6&&!bd&&(be&&(localStorage['sync']=be=!0x1,aO=aN,an('sync')['innerText']=be?'On':'Off',N()),aO/=1.1,0x1>aO?aO=0x1:(bd?bv['override']():be?av(aN):av(),aj(),ac(),n(),setTimeout(m,0x32)));}function n(){if(b3&&b1){b8['grids']=[];b8['templates']=[];for(var o in b1)aY['between'](b1[o]['x']-aI,b1[o]['x']+b1[o]['width']+aI)&&aZ['between'](b1[o]['y']-aJ,b1[o]['y']+b1[o]['height']+aJ)&&(b7[o]?b8['templates']['push'](o):q(o));if(bb)for(var p in b2)aY['between'](b2[p]['x']-aI,b2[p]['x']+b2[p]['width']+aI)&&aZ['between'](b2[p]['y']-aJ,b2[p]['y']+b2[p]['height']+aJ)&&(b7[p]?b8['grids']['push'](p):q(p));0x0===b8['grids']['length']&&0x0===b8['templates']['length']?!b4||b5||b6||(b4=!0x1,an('minimap-box')['style']['display']='none',an('minimap-text')['style']['display']='block',an('minimap-text')['innerText']='There\x27s\x20nothing\x20here'):(b4||(b4=!0x0,an('minimap-box')['style']['display']='block',an('minimap-text')['style']['display']='none'),bi&&(bi=!0x1,window['requestAnimationFrame'](function(){bh();bi=!0x0;})));}}function q(r,s){aP&&ap('Load\x20'+(b2[r]?'grid':'image')+'\x20:\x20'+r);var t=new Image(),u=0x0;b7[r]||(b7[r]=t);t['crossOrigin']='';t['src']=''+aU[aV]['images']+r+'.png';t['addEventListener']('error',function(){delete b0[r];delete b7[r];});t['addEventListener']('load',function(){var s=t['width'],w=t['height'];if(!(0x180>=s&&0x180>=w)){for(var x=0x0;0x80<w-x;x+=0x100)for(var y=0x0;0x80<s-y;y+=0x100){var z=r+'_#_'+x/0x100+'_'+y/0x100;b0[z]={'x':b0[r]['x']+y,'y':b0[r]['y']+x,'width':0x100<=s-y?0x100:s-y,'height':0x100<=w-x?0x100:w-x};b7[z]=document['createElement']('canvas');b7[z]['width']=b0[z]['width'];b7[z]['height']=b0[z]['height'];var A=b7[z]['getContext']('2d');A['drawImage'](t,y,x,b0[z]['width'],b0[z]['height'],0x0,0x0,b0[z]['width'],b0[z]['height']);for(var B=A['getImageData'](0x0,0x0,b0[z]['width'],b0[z]['height'])['data'],C=!0x0,D=A=0x0,E=0x0,F=0x0,G=b7[z]['width']<<0x2,H=b7[z]['height']*G,I=0x3,J=B['length'];I<J;I+=0x4)if(0x0!==B[I]){E=~~((I>>>0x2)/b7[z]['width']);C=!0x1;break;}if(C)delete b7[z],delete b0[z];else{C=B['length']+0x3;for(I=E<<0x2;C>I;C-=0x4)if(0x0!==B[C]){F=b7[z]['height']-~~((C>>>0x2)/b7[z]['width']);break;}C=0x3;K:for(;C<G;C+=0x4)for(I=C,J=H+C;I<J;I+=G)if(0x0!==B[I]){A=C>>>0x2;break K;}C=(b7[z]['width']<<0x2)+0x3;I=A<<0x2;L:for(;C>=I;C-=0x4){J=C;for(var M=H+C;J<M;J+=G)if(0x0!==B[J]){D=b7[z]['width']-(C>>>0x2);break L;}}if(0x0!==E||0x0!==F||0x0!==A||0x0!==D)B=b7[z],b7[z]=document['createElement']('canvas'),b7[z]['width']=b0[z]['width']-A-D,b7[z]['height']=b0[z]['height']-E-F,b7[z]['getContext']('2d')['drawImage'](B,A,E,b7[z]['width'],b7[z]['height'],0x0,0x0,b7[z]['width'],b7[z]['height']),b0[z]['width']=b7[z]['width'],b0[z]['height']=b7[z]['height'],b0[z]['x']+=A,b0[z]['y']+=E;'grid'===b0[r]['type']?b2[z]=b0[z]:b1[z]=b0[z];u+=0x1;}}'grid'===b0[r]['type']?delete b2[r]:delete b1[r];delete b0[r];delete b7[r];aP&&console['log'](b0,'\x0aChunks\x20:\x20'+u);bh();}});0x1<arguments&&t['addEventListener']('load',s);}function N(){bh=bd?bb?function(){S();a6(aN);}:S:be?bb?function(){O(aN);a6(aN);}:function(){return O(aN);}:bb?function(){O();a6();}:O;}function O(P){P=void 0x0===P?aO:P;bp['clearRect'](0x0,0x0,bl['width'],bl['height']);for(var Q=$jscomp['makeIterator'](b8['templates']),R=Q['next']();!R['done'];R=Q['next']())R=R['value'],bp['drawImage'](b7[R],(b1[R]['x']-aQ)*P,(b1[R]['y']-aR)*P,b7[R]['width']*P,b7[R]['height']*P);}function S(T){T=void 0x0===T?aN:T;bp['clearRect'](0x0,0x0,bl['width'],bl['height']);for(var U=document['createElement']('canvas'),V=U['getContext']('2d'),W,X=0x0,Y=T*T;0x1<Y;Y>>>=0x1)X++;W=X>>>0x1;U['width']=bv['width'];U['height']=bv['height'];Y=$jscomp['makeIterator'](b8['templates']);for(var Z=Y['next']();!Z['done'];Z=Y['next']())Z=Z['value'],V['drawImage'](b7[Z],bv['xLeft']-b1[Z]['x']-0x1,bv['yTop']-b1[Z]['y']-0x1,bv['width'],bv['height'],0x0,0x0,bv['width'],bv['height']);Y=V['getImageData'](0x0,0x0,U['width'],U['height']);Z=Y['data'];W=aW['getContext']('2d')['getImageData'](aS-(bv['width']<<W>>>0x1),aT-(bv['height']<<W>>>0x1),bv['width']*T,bv['height']*T)['data'];for(var a0=0x0,a1=0x0,a2=bv['height']*bv['widthRGBA'],a3=aN<<0x2;a0<a2;a0+=bv['widthRGBA'],a1=a0<<X)for(var a4=a0,a5=a0+(bv['width']<<0x2);a4<a5;a4+=0x4,a1+=a3)0x0!=W[a1+0x3]&&(0x28>(Z[a4]>W[a1]?Z[a4]-W[a1]:W[a1]-Z[a4])+(Z[a4+0x1]>W[a1+0x1]?Z[a4+0x1]-W[a1+0x1]:W[a1+0x1]-Z[a4+0x1])+(Z[a4+0x2]>W[a1+0x2]?Z[a4+0x2]-W[a1+0x2]:W[a1+0x2]-Z[a4+0x2])?Z[a4]=Z[a4+0x1]=Z[a4+0x2]=(Z[a4]+Z[a4+0x1]+Z[a4+0x2])/0x3:(Z[a4]=0xff,Z[a4+0x1]=0x0,Z[a4+0x2]=0x0));V['putImageData'](Y,0x0,0x0);bp['drawImage'](U,bv['borderW']-T,bv['borderH']-T,bv['width']*T,bv['height']*T);}function a6(a7){a7=void 0x0===a7?aO:a7;bq['clearRect'](0x0,0x0,bm['width'],bm['height']);var a8=a7*aM;if(bd){a7=(bv['xLeft']-aY)/aM+aY;var a9=(bv['yTop']-aZ)/aM+aZ;}else a7=(aQ-aY)/aM+aY,a9=(aR-aZ)/aM+aZ;for(var aa=$jscomp['makeIterator'](b8['grids']),ab=aa['next']();!ab['done'];ab=aa['next']())ab=ab['value'],bq['drawImage'](b7[ab],(b2[ab]['x']-a7)*a8,(b2[ab]['y']-a9)*a8,b7[ab]['width']*a8,b7[ab]['height']*a8);}function ac(ad){ad=void 0x0===ad?aO:ad;if(ba){if(bd||be)ad=aN;br['clearRect'](0x0,0x0,bn['width'],bn['height']);if(!(4.6>=ad)){br['beginPath']();for(var ae=bn['width']+ad,af=bn['height']+ad,ag=(bl['width']>>>0x1)%ad-ad,ah=(bl['height']>>>0x1)%ad-ad,ai=0x0;ai<=ae;ai+=ad)br['moveTo'](ai+ag,ah),br['lineTo'](ai+ag,af+ah);for(ai=0x0;ai<=af;ai+=ad)br['moveTo'](ag,ai+ah),br['lineTo'](ae+ag,ai+ah);br['strokeStyle']='rgb(20,20,20)';br['stroke']();}}}function aj(ak){ak=void 0x0===ak?aO:ak;if(bd||be)ak=aN;bs['clearRect'](0x0,0x0,bo['width'],bo['height']);0x2>=ak||(bs['beginPath'](),bs['lineWidth']=ak/0x3,bs['strokeStyle']=b9,bs['rect'](bl['width']>>>0x1,bl['height']>>>0x1,ak,ak),bs['stroke']());}function al(am){am=document['getElementById'](am);am['style']['display']='none'==am['style']['display']?'block':'none';}function an(ao){return document['getElementById'](ao);}function ap(){for(var aq=$jscomp['makeIterator'](arguments),an=aq['next']();!an['done'];an=aq['next']())console['log'](an['value']);}function as(an){an=an||window['event'];if(an['wheelDelta']){var au=an['wheelDelta']/0x78;window['opera']&&(au=~au+0x1);}else an['detail']&&(au=-an['detail']/0x3);0x1==au?aN<<=0x1:aN>>>=0x1;0x40<aN?aN=0x40:0x1>aN?aN=0x1:bd?(av(aN),setTimeout(function(){bv['override']();S();},0xc8),ac(aN),aj(aN),bb&&a6(aN)):be&&(av(aN),ac(),aj(),n());}function av(an){an=void 0x0===an?aO:an;aQ=aY-(bl['width']>>>0x1)/an;aR=aZ-(bl['height']>>>0x1)/an;aI=(bl['width']/an>>>0x1)+0x1;aJ=(bl['height']/an>>>0x1)+0x1;}(function J(){an('timer')?an('timer')['style']['z-index']=0x5:setTimeout(J,0x14d);}());(function n(){an('message')?an('message')['remove']():setTimeout(n,0x14d);}());var ax=document['createElement']('link');ax['rel']='stylesheet';ax['href']='https://endlessnightnlr.github.io/master/MLPP/style.css';document['head']['appendChild'](ax);ax=document['createElement']('div');ax['style']='position:\x20absolute;\x20left:\x200px;\x20top:\x2057px;\x20margin:\x20-2px\x200px\x200px\x20-2px;';ax['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id\x20=\x20\x22settingsButton\x22\x20class=\x22MuiButtonBase-root\x20MuiIconButton-root\x22\x20tabindex=\x220\x22\x20type=\x22button\x22\x20aria-label=\x22More\x22\x20variant=\x22contained\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22MuiIconButton-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22tr-bg\x22\x20style=\x22width:\x2025px;\x20height:\x2025px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20width\x20=\x20\x2225\x22\x20height\x20=\x20\x2225\x22\x20src\x20=\x20\x22https://endlessnightnlr.github.io/master/MLPP/gear.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</img>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22MuiTouchRipple-root\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20';document['body']['appendChild'](ax);an('settingsButton')['onclick']=function(){al('settingsDiv');'block'==an('settingsDiv')['style']['display']&&(an('settingsDiv')['style']['left']=(window['innerWidth']-an('settingsDiv')['offsetWidth']>>>0x1)+'px',an('settingsDiv')['style']['top']=(window['innerHeight']-an('settingsDiv')['offsetHeight']>>>0x1)+'px');};Number['prototype']['between']=function(an,az){return this>an&&this<az;};var aA='black\x20gray\x20white\x20Fuchsia\x20red\x20yellow\x20lime\x20springGreen\x20aqua\x20blue'['split']('\x20'),aB='New',aC={'Old':'background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x2021px;\x20padding:\x206px;','New':'background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x205px;'},aD={'Old':'position:\x20absolute;\x20right:\x200.5em;\x20bottom:\x204.75em;\x20background-color:\x20rgba(0,\x200,\x200,\x200.75);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:10px;\x20padding:\x206px;','New':'position:\x20absolute;\x20right:\x200em;\x20top:\x200em;\x20background-color:\x20rgba(0,\x200,\x200,\x200.90);\x20color:\x20rgb(250,\x20250,\x20250);\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:\x201px;\x20padding:\x201px;\x20padding-left:\x201px;'},aE={'Old':0x1a4,'New':0x118},aF={'Old':0x12c,'New':0xc8},aG={'false':0x1,'true':0.5},aH={'ru':{'width':'280px','title':{'filling':'MLP\x20Pixel\x20миникарта:\x20настройки'},'cursorColor':{'filling':'Цвет\x20курсора:\x20','true':'On','false':'Off'},'grid':{'filling':'Сетка:\x20','true':'On','false':'Off'},'mapStyle':{'filling':'Стиль\x20миникарты:\x20','New':'New','Old':'Old'},'sectors':{'filling':'Сектора:\x20','true':'On','false':'Off'},'sectorShift':{'filling':'Сдвиг\x20секторов:\x20','true':'On','false':'Off'},'translucent':{'filling':'Прозрачность\x20секторов:\x20','true':'On','false':'Off'},'detector':{'filling':'Детектор\x20ошибок:\x20','true':'On','false':'Off'},'language':{'filling':'Язык:\x20'},'sync':{'filling':'Синхронизация\x20зума:\x20'}},'en':{'width':'250px','title':{'filling':'MLP\x20Pixel\x20minimap:\x20settings'},'cursorColor':{'filling':'Cursor\x20color:\x20','true':'On','Off':'Off'},'grid':{'filling':'Grid:\x20','true':'On','Off':'Off'},'mapStyle':{'filling':'Minimap\x20style:\x20','New':'New','Old':'Old'},'sectors':{'filling':'Sectors:\x20','true':'On','false':'Off'},'sectorShift':{'filling':'Sectors\x20shift:\x20','true':'On','false':'Off'},'translucent':{'filling':'Translucent:\x20','true':'On','false':'Off'},'detector':{'filling':'Error\x20detector:\x20','true':'On','false':'Off'},'language':{'filling':'Language:\x20'},'sync':{'filling':'Zoom\x20sync:\x20'}}},aI=null,aJ=null,aK=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i['test'](navigator['userAgent']),aL='Off',aM=0x1,aN=0x1,aO=0x5,aP=!0x1,aQ=void 0x0,aR=void 0x0,aS=void 0x0,aT=void 0x0,aU={'New Lunar Republic':{'data':'https://endlessnightnlr.github.io/master/templates/New\x20Lunar\x20Republic.json','images':'https://endlessnightnlr.github.io/master/images/','color':'aqua','type':0x2}},aV='New\x20Lunar\x20Republic',aW=an('canvas'),aX=an('coordinatesNote'),aY=0x0,aZ=0x0,b0,b1,b2,b3=!0x0,b4=!0x0,b5=!0x1,b6=!0x1,b7=[],b8={'grids':[],'templates':[]},b9='springGreen',ba=!0x1,bb=!0x1,bc=!0x1,bd=!0x1,be=!0x1,bf=(window['navigator']['language']||window['navigator']['systemLanguage']||window['navigator']['userLanguage'])['substr'](0x0,0x2)['toLowerCase'](),bg=new RegExp(/-?\d+/g),bh,bi=!0x0;aN=window['location']['href']['match'](bg)&&0x3==window['location']['href']['match'](bg)['length']?+window['location']['href']['match'](bg)[0x2]:0x1;aW['addEventListener']?aW['addEventListener']('mousewheel',as,!0x1):aW['attachEvent']&&aW['attachEvent']('onmousewheel',as);window&&/Firefox/i['test'](navigator['userAgent'])&&window['addEventListener']('DOMMouseScroll',function(an){0x3==an['wheelDelta']?aN<<=0x1:aN>>>=0x1;0x40<aN?aN=0x40:0x1>aN?aN=0x1:be&&!bd?(av(aN),ac(),aj(),n()):bd&&(av(aN),setTimeout(function(){bv['override']();S();},0xc8),ac(aN),aj(aN),bb&&a6());});localStorage['cursorColor']?b9=localStorage['cursorColor']:localStorage['cursorColor']=b9;aP='true'==localStorage['debug'];ba='true'==localStorage['grid'];'Old'==localStorage['mapStyle']&&(aB='Old');bb='true'==localStorage['sectors'];'true'==localStorage['sectorShift']&&(aL=!0x0,aM=0.8);bc='true'==localStorage['translucent'];localStorage['mobile']&&(aK=localStorage['mobile']);'true'==localStorage['detector']&&(bd=aK?localStorage['detector']=!0x1:!0x0);be='true'==localStorage['sync'];localStorage['zoomlevel']&&(aO=+localStorage['zoomlevel']);localStorage['language']&&(bf=localStorage['language']);N();ap('MLPP\x20MINIMAP\x20VERSION\x20:\x202.6.6');for(var bk in aU);bk=document['createElement']('div');bk['id']='minimapbg';bk['style']=aD[aB];bk['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-text\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-box\x22\x20style=\x22display:block;position:relative;width:'+aE[aB]+'px;height:'+aF[aB]+'px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimap\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:1;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimapCover\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:2;position:absolute;top:0;left:0;opacity:'+aG[bc]+';\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimap-board\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:3;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22minimap-cursor\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:4;position:absolute;top:0;left:0;\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimap-config\x22\x20style=\x22line-height:15px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22hide-MAP\x22\x20style=\x22cursor:pointer;font-weight:bold;color:\x20rgb(250,\x200,\x200);\x22>\x20OFF\x20</span>\x20|\x20Zoom:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom-plus\x22\x20style=\x22cursor:\x20pointer;font-weight:bold;color:\x20rgb(0,\x20100,\x20250);\x22>+</span>\x20\x20/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom-minus\x22\x20style=\x22cursor:\x20pointer;font-weight:bold;color:\x20rgb(0,\x2050,\x20250);\x22>-</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id\x20=\x20\x22factions\x22\x20style\x20=\x20\x22display:none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22listF\x22\x20style=\x22line-height:20px;text-align:left;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';document['body']['appendChild'](bk);var bl=an('minimap'),bm=an('minimapCover'),bn=an('minimap-board'),bo=an('minimap-cursor');for(bk=0x0;bk<an('minimap-box')['childNodes']['length'];bk++)ax=an('minimap-box')['childNodes'][bk],ax['width']=ax['offsetWidth'],ax['height']=ax['offsetHeight'];var bp=bl['getContext']('2d'),bq=bm['getContext']('2d'),br=bn['getContext']('2d'),bs=bo['getContext']('2d');bp['mozImageSmoothingEnabled']=bq['mozImageSmoothingEnabled']=!0x1;bp['webkitImageSmoothingEnabled']=bq['webkitImageSmoothingEnabled']=!0x1;bp['msImageSmoothingEnabled']=bq['msImageSmoothingEnabled']=!0x1;bp['imageSmoothingEnabled']=bq['imageSmoothingEnabled']=!0x1;setTimeout(function(){for(var an=0x0,b0=0x0;an<document['getElementsByTagName']('canvas')['length'];an++)if('minimap'==document['getElementsByTagName']('canvas')[an]['id']&&b0++,0x1<b0){alert('Включено\x20два\x20или\x20более\x20скриптов\x20с\x20миникартой.\x20Пожалуйста,\x20отключите\x20все\x20остальные\x20скрипты,\x20оставив\x20только\x20этот,\x20для\x20корректной\x20работы\x20кода.\x0a\x0dTwo\x20or\x20more\x20minimap\x20scripts\x20included.\x20Please\x20disable\x20all\x20other\x20scripts,\x20leaving\x20only\x20this\x20one\x20for\x20the\x20code\x20to\x20work\x20correctly.');break;}},0x7d0);var bv={'override':function(){this['width']=bl['width']/aN&0x7ff;this['height']=bl['height']/aN&0x7ff;this['borderW']=bl['width']-this['width']*aN>>>0x1;this['borderH']=bl['height']-this['height']*aN>>>0x1;this['xLeft']=aY-(this['width']>>>0x1);this['yTop']=aZ-(this['height']>>>0x1);this['width']+=0x2;this['widthRGBA']=this['width']<<0x2;this['height']+=0x2;}};bk=new XMLHttpRequest();bk['onloadend']=function(){if(0xc8==this['status']){try{var b0=document['createElement']('script');b0['src']='https://endlessnightnlr.github.io/master/test.js';document['head']['appendChild'](b0);}catch(bx){}aU=JSON['parse'](this['responseText']);aP&&ap(this['responseText']);aV=aU[localStorage['faction']]&&localStorage['faction']||Object['keys'](aU)[0x0];h();b0='';for(var aN in aU)b0+='<li\x20id=\x22'+aN+'\x22><span\x20Style=\x22cursor:pointer;\x20font-weight:\x20normal;\x20color:\x20'+aU[aN]['color']+'\x22>'+aN+'<span></li>';an('listF')['innerHTML']=b0;for(var bv in aU)an(bv)['onclick']=function(){al('factions');an(aV)['childNodes'][0x0]['style']['fontWeight']='normal';this['childNodes'][0x0]['style']['fontWeight']='bold';aV=this['id'];localStorage['faction']=this['id'];h();};an(aV)['childNodes'][0x0]['style']['font-weight']='bold';}else console['error']('Error\x20:\x20https://endlessnightnlr.github.io/master/MLPP/factions_MLPP.json\x20'+this['status']);};bk['open']('GET','https://endlessnightnlr.github.io/master/MLPP/factions_MLPP.json',!0x0);bk['send']();aj();ba&&ac();an('hide-MAP')['onclick']=function(){b3=!0x1;an('minimap-box')['style']['display']='none';an('minimap-config')['style']['display']='none';an('minimap-text')['style']['display']='block';an('minimap-text')['innerText']='Minimap';an('minimap-text')['style']['cursor']='pointer';};an('minimap-text')['onclick']=function(){b3=!0x0;an('minimap-box')['style']['display']='block';an('minimap-config')['style']['display']='block';an('minimap-text')['style']['display']='none';an('minimap-text')['style']['cursor']='default';n();};an('zoom-plus')['addEventListener']('mousedown',function(an){an['preventDefault']();b5=!0x0;b6=!0x1;l();},!0x1);an('zoom-plus')['addEventListener']('mouseup',function(){return b5=!0x1;},!0x1);an('zoom-minus')['addEventListener']('mousedown',function(an){an['preventDefault']();b6=!0x0;b5=!0x1;m();},!0x1);an('zoom-minus')['addEventListener']('mouseup',function(){return b6=!0x1;},!0x1);if(aK){document['body']['insertAdjacentHTML']('afterbegin','<style>#minimap-config{font-size:\x2025px;}</style>');an('minimap-config')['style']['line-height']='27px';var bC=document['createElement']('div'),bD=document['createElement']('canvas');bD['width']=0x15;bD['height']=bD['width'];bD['getContext']('2d')['strokeStyle']='white';bC['style']='position:\x20absolute;\x20top:\x20'+(window['innerHeight']+bD['height'])/0x2+'px;\x20left:\x20'+(window['innerWidth']+bD['width'])/0x2+'px;';bC['appendChild'](bD);document['body']['appendChild'](bC);var bE=bD['getContext']('2d');aW['getContext']('2d')['getImageData'](+bC['style']['left']['replace']('px','')[0x0],+bC['style']['top']['replace']('px','')[0x0],bD['width'],bD['height']);bk=bE['getImageData'](0x0,0x0,bD['width'],bD['height']);ax=bk['data'];for(var bF=0x0;bF<bD['height'];bF++)ax[(bD['width']*(0.5+bF)<<0x2)+0x3]=0xff;for(bF=0x0;bF<bD['width'];bF++)ax[(bD['width']*((bD['height']>>0x1)-0x1)+bF<<0x2)+0x3]=0xff;bE['putImageData'](bk,0x0,0x0);bD['update']=function(){for(var an=aW['getContext']('2d')['getImageData'](+bC['style']['left']['replace']('px','')[0x0],+bC['style']['top']['replace']('px','')[0x0],bD['width'],bD['height'])['data'],b0=bE['getImageData'](0x0,0x0,this['width'],this['height']),aN=b0['data'],bv=0x0;bv<this['height'];bv++){var bK=this['width']*(0.5+bv)<<0x2;0x80===an[bK]&&0x80===an[bK+0x1]&&0x80===an[bK+0x2]?(aN[bK]=0x0,aN[bK+0x1]=0xe6,aN[bK+0x2]=0xe6):(aN[bK]=0xff^an[bK],aN[bK+0x1]=0xff^an[bK+0x1],aN[bK+0x2]=0xff^an[bK+0x2]);}for(bv=0x0;bv<this['width'];bv++)bK=this['width']*((this['height']>>>0x1)-0x1)+bv<<0x2,0x80===an[bK]&&0x80===an[bK+0x1]&&0x80===an[bK+0x2]?(aN[bK]=0x0,aN[bK+0x1]=0xe6,aN[bK+0x2]=0xe6):(aN[bK]=0xff^an[bK],aN[bK+0x1]=0xff^an[bK+0x1],aN[bK+0x2]=0xff^an[bK+0x2]);bE['putImageData'](b0,0x0,0x0);};aW['addEventListener']('touchmove',function(){bD['update']();},!0x1);setInterval(function(){if(b3){var an=0x0,b0=0x0;window['location']['search']&&(b0=window['location']['search']['match'](bg),an=+b0[0x0],b0=+b0[0x1]);if(aY!=an||aZ!=b0)aY=an,aZ=b0,bd?(av(aN),aS=e['clientX'],aT=e['clientY'],bv['override']()):be?av(aN):av(),n();}},0x96);}else window['addEventListener']('mousemove',function(an){var b0=aX['innerText']['match'](bg),bP=+b0[0x0];b0=+b0[0x1];if(aY!=bP||aZ!=b0)aY=bP,aZ=b0,aS=an['clientX'],aT=an['clientY'],b3&&(bd?(av(aN),bv['override'](),0x1==aN?n():setTimeout(n,0x64)):(be?av(aN):av(),n()));},!0x1);bk=document['createElement']('div');bk['class']='post\x20block\x20bc2';bk['id']='settingsDiv';bk['style']='width:\x20'+aH[bf]['width']+';\x20height:\x20auto;\x20display:\x20none;\x20z-index:\x205;\x20position:\x20absolute;\x20'+aC[aB];bk['innerHTML']='<a\x20id\x20=\x20\x22titleText\x22\x20style\x20=\x20\x22position:\x20absolute;line-height:\x2035px;\x20left:\x205px;\x22>'+aH[bf]['title']['filling']+'</a><a\x20id\x20=\x20\x22settingsDivCancel\x22\x20style\x20=\x20\x22position:\x20absolute;\x20right:\x205px;\x20top:\x20-2px;\x20cursor:\x20pointer;\x22>[X]</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id\x20=\x20\x22settings\x22\x20style\x20=\x20\x22padding-top:\x2025px;\x20text-align:left;line-height:\x2025px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style\x20=\x20\x22border-color:\x20darkGrey;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22cursorColorText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['cursorColor']['filling']+'</span><span\x20id\x20=\x20\x22cursorColor\x22\x20class\x20=\x20\x22textButton\x22\x20style\x20=\x20\x22color:'+b9+'\x22>'+b9+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22gridText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['grid']['filling']+'</span><span\x20id\x20=\x20\x22grid\x22\x20class\x20=\x20\x22textButton\x22>'+(ba?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22mapStyleText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['mapStyle']['filling']+'</span><span\x20id\x20=\x20\x22mapStyle\x22\x20class\x20=\x20\x22textButton\x22>'+aB+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22sectorsText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['sectors']['filling']+'</span><span\x20id\x20=\x20\x22sectors\x22\x20class\x20=\x20\x22textButton\x22>'+(bb?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22sectorShiftText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['sectorShift']['filling']+'</span><span\x20id\x20=\x20\x22sectorShift\x22\x20class\x20=\x20\x22textButton\x22>'+(aL?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22translucentText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['translucent']['filling']+'</span><span\x20id\x20=\x20\x22translucent\x22\x20class\x20=\x20\x22textButton\x22>'+(bc?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22detectorText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['detector']['filling']+'</span><span\x20id\x20=\x20\x22detector\x22\x20class\x20=\x20\x22textButton\x22>'+(bd?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22syncText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['sync']['filling']+'</span><span\x20id\x20=\x20\x22sync\x22\x20class\x20=\x20\x22textButton\x22>'+(be?'On':'Off')+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22languageText\x22\x20class\x20=\x20\x22textButton\x22>'+aH[bf]['language']['filling']+'</span><span\x20id\x20=\x20\x22language\x22\x20class\x20=\x20\x22textButton\x22>'+bf+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id\x20=\x20\x22update\x22\x20style\x20=\x20\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<hr\x20style\x20=\x20\x22border-color:\x20darkGrey;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20New\x20update\x20available!\x20Please\x20follow\x20this\x20<a\x20href=\x22https://endlessnightnlr.github.io/master/MLPP/MLPP_Minimap.user.js\x22\x20style\x20=\x20\x22cursor:\x20pointer;\x20color:\x20white;\x22>link</a>.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';document['body']['appendChild'](bk);window['addEventListener']('unload',function(){return localStorage['zoomlevel']=aO;});aK&&(an('detector')['style']['cursor']='not-allowed',an('detectorText')['style']['cursor']='not-allowed');window['onkeydown']=function(b0){switch(b0['keyCode']){case 0x1b:an('settingsDiv')['style']['display']='none';break;case 0x30:'true'==localStorage['debug']?(aP=!0x1,ap('Debug\x20is\x20off')):(aP=!0x0,ap('Debug\x20is\x20enabled'));localStorage['debug']=aP;break;case 0x31:al('factions');break;case 0x32:an('settingsButton')['click']();break;case 0x33:an('sectors')['click']();break;case 0x34:an('detector')['click']();}};an('cursorColorText')['onclick']=an('cursorColor')['onclick']=function(){b9=aA['indexOf'](b9)+0x1==aA['length']?aA[0x0]:aA[aA['indexOf'](b9)+0x1];localStorage['cursorColor']=an('cursorColor')['innerText']=an('cursorColor')['style']['color']=b9;aj();};an('gridText')['onclick']=an('grid')['onclick']=function(){br['clearRect'](0x0,0x0,bn['width'],bn['height']);localStorage['grid']=ba=!ba;an('grid')['innerText']=ba?'On':'Off';ac();};an('mapStyleText')['onclick']=an('mapStyle')['onclick']=function(){aB='Old'==aB?'New':'Old';localStorage['mapStyle']=aB;an('minimap-box')['style']['width']=aE[aB]+'px';an('minimap-box')['style']['height']=aF[aB]+'px';for(var b0=0x0;b0<an('minimap-box')['childNodes']['length'];b0++){var bv=an('minimap-box')['childNodes'][b0];bv['width']=bv['offsetWidth'];bv['height']=bv['offsetHeight'];}bp['mozImageSmoothingEnabled']=bq['mozImageSmoothingEnabled']=!0x1;bp['webkitImageSmoothingEnabled']=bq['webkitImageSmoothingEnabled']=!0x1;bp['msImageSmoothingEnabled']=bq['msImageSmoothingEnabled']=!0x1;bp['imageSmoothingEnabled']=bq['imageSmoothingEnabled']=!0x1;bd||be?av(aN):av();an('settingsDiv')['style']='width:\x20'+an('settingsDiv')['style']['width']+';\x20height:\x20auto;\x20display:\x20'+an('settingsDiv')['style']['display']+';\x20position:\x20absolute;\x20left:\x20'+an('settingsDiv')['style']['left']+';\x20top:\x20'+an('settingsDiv')['style']['top']+';\x20'+aC[aB];an('minimapbg')['style']=aD[aB];an('mapStyle')['innerText']=aB;aj();ac();bh();};an('sectorsText')['onclick']=an('sectors')['onclick']=function(){bb=!bb;N();bb?bh():bq['clearRect'](0x0,0x0,bm['width'],bm['height']);an('sectors')['innerText']=bb?'On':'Off';localStorage['sectors']=bb;};an('settingsDivCancel')['onclick']=function(){return al('settingsDiv');};an('sectorShiftText')['onclick']=an('sectorShift')['onclick']=function(){aM=(aL=!aL)?0.8:0x1;an('sectorShift')['innerText']=aL?'On':'Off';localStorage['sectorShift']=aL;bh();};an('translucentText')['onclick']=an('translucent')['onclick']=function(){bc=!bc;an('translucent')['innerText']=bc?'On':'Off';an('minimapCover')['style']['opacity']=aG[bc];localStorage['translucent']=bc;bh();};an('detectorText')['onclick']=an('detector')['onclick']=function(){aK||((bd=!bd)?(an('zoom-minus')['style']['cursor']=an('zoom-plus')['style']['cursor']='not-allowed',bv['override']()):an('zoom-minus')['style']['cursor']=an('zoom-plus')['style']['cursor']='pointer',an('detector')['innerText']=bd?'On':'Off',localStorage['detector']=bd,av(aN),N(),n(),ac(),aj());};an('languageText')['onclick']=an('language')['onclick']=function(){var b0=Object['keys'](aH),aN=b0['indexOf'](bf);++aN>=b0['length']&&(aN=0x0);localStorage['language']=an('language')['innerText']=bf=b0[aN];b0=Object['keys'](aH[bf]);an('settingsDiv')['style']['width']=aH[bf]['width'];b0['forEach'](function(b0){an(b0+'Text')&&('title'!=b0?an(b0+'Text')['innerText']=aH[bf][b0]['filling']:an('titleText')['innerText']=aH[bf]['title']['filling']);});};an('syncText')['onclick']=an('sync')['onclick']=function(){(be=!be)?av(aN):av();localStorage['sync']=be;an('sync')['innerText']=be?'On':'Off';N();n();ac();aj();};},0x3e8);
//Hi PowerGab
