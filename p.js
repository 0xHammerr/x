(function(){
  var d = document.createElement('div');
  d.id = 'xss379-proof-A';
  d.textContent = 'XSS 실행 증명 XSS-379A-20261018 origin=' + location.origin;
  d.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:999999;background:#ffffff;color:#c00000;border:3px solid #c00000;padding:14px;font:bold 20px/1.4 sans-serif;text-align:center';
  document.body.appendChild(d);
})();
