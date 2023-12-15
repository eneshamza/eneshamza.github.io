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
}

hakkindabuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'block'
  iletisim.style.display = 'none'
  duvarkagidi.style.display = 'none'
}

iletisimbuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'block'
  duvarkagidi.style.display = 'none'
}

duvarkagidibuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'none'
  duvarkagidi.style.display = 'block'
}
