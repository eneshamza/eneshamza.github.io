var anamenu=document.getElementById('anamenu')
var hakkinda=document.getElementById('hakkinda')
var iletisim=document.getElementById('iletisim')
var gelistirdiklerim=document.getElementById('gelistirdiklerim')
var takaslik=document.getElementById('takaslik')

var anamenubuton = document.getElementById('anamenubuton')
var hakkindabuton = document.getElementById('hakkindabuton')
var iletisimbuton = document.getElementById('iletisimbuton')
var gelistirdiklerimbuton = document.getElementById('gelistirdiklerimbuton')
var takaslikbuton = document.getElementById('takaslikbuton')

anamenubuton.onclick = function () { 
  anamenu.style.display = 'block'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'none'
  gelistirdiklerim.style.display = 'none'
  takaslik.style.display = 'none'
  document.getElementById("hakkindabuton").classList.remove('active');
  document.getElementById("iletisimbuton").classList.remove('active');
  document.getElementById("gelistirdiklerimbuton").classList.remove('active');
  document.getElementById("anamenubuton").classList.add('active');
  document.getElementById("takaslikbuton").classList.remove('active');
}

hakkindabuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'block'
  iletisim.style.display = 'none'
  gelistirdiklerim.style.display = 'none'
  takaslik.style.display = 'none'
  document.getElementById("hakkindabuton").classList.add('active');
  document.getElementById("iletisimbuton").classList.remove('active');
  document.getElementById("gelistirdiklerimbuton").classList.remove('active');
  document.getElementById("anamenubuton").classList.remove('active');
  document.getElementById("takaslikbuton").classList.remove('active');
}

iletisimbuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'block'
  gelistirdiklerim.style.display = 'none'
  takaslik.style.display = 'none'
  document.getElementById("hakkindabuton").classList.remove('active');
  document.getElementById("iletisimbuton").classList.add('active');
  document.getElementById("gelistirdiklerimbuton").classList.remove('active');
  document.getElementById("anamenubuton").classList.remove('active');
  document.getElementById("takaslikbuton").classList.remove('active');
}

gelistirdiklerimbuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'none'
  gelistirdiklerim.style.display = 'block'
  takaslik.style.display = 'none'
  document.getElementById("hakkindabuton").classList.remove('active');
  document.getElementById("iletisimbuton").classList.remove('active');
  document.getElementById("gelistirdiklerimbuton").classList.add('active');
  document.getElementById("anamenubuton").classList.remove('active');
  document.getElementById("takaslikbuton").classList.remove('active');
}

takaslikbuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'none'
  gelistirdiklerim.style.display = 'none'
  takaslik.style.display = 'block'
  document.getElementById("hakkindabuton").classList.remove('active');
  document.getElementById("iletisimbuton").classList.remove('active');
  document.getElementById("gelistirdiklerimbuton").classList.remove('active');
  document.getElementById("anamenubuton").classList.remove('active');
  document.getElementById("takaslikbuton").classList.add('active');
}
