(function(){
  var b=document.getElementById('burger'),d=document.getElementById('drawer'),o=document.getElementById('overlay'),c=document.getElementById('dClose');
  function open(){d.classList.add('open');o.classList.add('show');b.classList.add('x')}
  function close(){d.classList.remove('open');o.classList.remove('show');b.classList.remove('x')}
  if(b){b.onclick=function(){d.classList.contains('open')?close():open()};o.onclick=close;c.onclick=close;}
  document.querySelectorAll('.drawer a').forEach(function(a){a.addEventListener('click',close)});
  document.querySelectorAll('.dl-acc').forEach(function(btn){btn.addEventListener('click',function(){btn.parentElement.classList.toggle('open')})});
  if(b){b.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();d.classList.contains('open')?close():open()}})}
  document.querySelectorAll('.acc-h').forEach(function(h){h.addEventListener('click',function(){h.parentElement.classList.toggle('open')})});
  document.querySelectorAll('.qty').forEach(function(q){var s=q.querySelector('span');q.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){var v=parseInt(s.textContent)||1;v+=(bt.getAttribute('data-d')==='-'?-1:1);if(v<1)v=1;s.textContent=v})})});
  var chips=document.querySelectorAll('.shopbar .chip');
  if(chips.length && chips[0].getAttribute('data-f')){chips.forEach(function(c){c.addEventListener('click',function(){chips.forEach(function(x){x.classList.remove('on')});c.classList.add('on');var f=c.getAttribute('data-f'),n=0;document.querySelectorAll('.pgrid .prod').forEach(function(p){var show=(f==='all'||p.getAttribute('data-cat')===f);p.style.display=show?'':'none';if(show)n++});var rc=document.querySelector('.result-count');if(rc)rc.textContent=n+' products'})});var hh=location.hash.slice(1),tgt=null;chips.forEach(function(x){if(x.getAttribute('data-f')===hh)tgt=x});if(tgt)tgt.click();}
  var y=document.getElementById('yr'); if(y)y.textContent=new Date().getFullYear();
  // reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  // promo rotate
  var pt=document.getElementById('promoTrack');
  if(pt){var sp=pt.querySelectorAll('span'),i=0;setInterval(function(){sp[i].classList.remove('on');i=(i+1)%sp.length;sp[i].classList.add('on')},4200);}
  // count-up stats
  var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target,t=parseFloat(el.getAttribute('data-count')),suf=el.getAttribute('data-suf')||'',dur=1100,st=null;function step(ts){if(!st)st=ts;var p=Math.min((ts-st)/dur,1);el.textContent=(Math.round(t*p*10)/10).toString().replace(/\.0$/,'')+suf;if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step);cio.unobserve(el)}})},{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(function(el){cio.observe(el)});
  // hero rotate
  var hs=document.querySelectorAll('[data-hero-slide]'),hd=document.querySelectorAll('.hero-dots i');
  if(hs.length>1){var h=0;setInterval(function(){hs[h].style.opacity=0;hd[h]&&hd[h].classList.remove('on');h=(h+1)%hs.length;hs[h].style.opacity=1;hd[h]&&hd[h].classList.add('on')},5000);}
})();