var anamenu=document.getElementById('anamenu')
var hakkinda=document.getElementById('hakkinda')
var iletisim=document.getElementById('iletisim')
var duvarkagidi=document.getElementById('duvarkagidi')

var anamenubuton = document.getElementById('anamenubuton')
var hakkindabuton = document.getElementById('hakkindabuton')
var iletisimbuton = document.getElementById('iletisimbuton')
var duvarkagidibuton = document.getElementById('duvarkagidibuton')

anamenubuton.onclick = function () { 
  anamenu.style.display = 'block'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'none'
  duvarkagidi.style.display = 'none'
  if ( document.getElementById("buton").classList.contains('active') )
  document.getElementById("buton").classList.remove('active');
  document.getElementById("anamenubuton").classList.add('active');
}

hakkindabuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'block'
  iletisim.style.display = 'none'
  duvarkagidi.style.display = 'none'
  if ( document.getElementById("buton").classList.contains('active') )
  document.getElementById("buton").classList.remove('active');
  document.getElementById("hakkindabuton").classList.add('active');
}

iletisimbuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'block'
  duvarkagidi.style.display = 'none'
  if ( document.getElementById("buton").classList.contains('active') )
  document.getElementById("buton").classList.remove('active');
  document.getElementById("iletisimbuton").classList.add('active');
}

duvarkagidibuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'none'
  duvarkagidi.style.display = 'block'
  if ( document.getElementById("buton").classList.contains('active') )
  document.getElementById("buton").classList.remove('active');
  document.getElementById("duvarkagidibuton").classList.add('active');
}
