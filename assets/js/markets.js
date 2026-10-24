/* Cifras de la sección de mercados: formato según el idioma de la página (botón EN/ES de la web). */
(function(){
  var root=document.documentElement;
  function fmt(){
    var l=root.lang==='es'?'es-ES':'en-US';
    document.querySelectorAll('.n[data-v]').forEach(function(el){
      var v=+el.dataset.v, d=+el.dataset.d;
      var s=new Intl.NumberFormat(l,{minimumFractionDigits:d,maximumFractionDigits:d,useGrouping:true}).format(Math.abs(v));
      el.textContent=(el.dataset.s&&v>0?'+':'')+(v<0?'-':'')+s;
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fmt);else fmt();
  new MutationObserver(fmt).observe(root,{attributes:true,attributeFilter:['lang']});
})();
