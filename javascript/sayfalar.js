var anamenu=document.getElementById('anamenu')
var hakkinda=document.getElementById('hakkinda')
var iletisim=document.getElementById('iletisim')
var video=document.getElementById('video')

var anamenubuton = document.getElementById('anamenubuton')
var hakkindabuton = document.getElementById('hakkindabuton')
var iletisimbuton = document.getElementById('iletisimbuton')
var videobuton = document.getElementById('videobuton')

anamenubuton.onclick = function () { 
  anamenu.style.display = 'block'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'none'
  video.style.display = 'none'
  document.getElementById("hakkindabuton").classList.remove('active');
  document.getElementById("iletisimbuton").classList.remove('active');
  document.getElementById("videobuton").classList.remove('active');
  document.getElementById("anamenubuton").classList.add('active');
}

hakkindabuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'block'
  iletisim.style.display = 'none'
  video.style.display = 'none'
  document.getElementById("hakkindabuton").classList.add('active');
  document.getElementById("iletisimbuton").classList.remove('active');
  document.getElementById("videobuton").classList.remove('active');
  document.getElementById("anamenubuton").classList.remove('active');
}

iletisimbuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'block'
  video.style.display = 'none'
  document.getElementById("hakkindabuton").classList.remove('active');
  document.getElementById("iletisimbuton").classList.add('active');
  document.getElementById("videobuton").classList.remove('active');
  document.getElementById("anamenubuton").classList.remove('active');
}

videobuton.onclick = function () { 
  anamenu.style.display = 'none'
  hakkinda.style.display = 'none'
  iletisim.style.display = 'none'
  video.style.display = 'block'
  document.getElementById("hakkindabuton").classList.remove('active');
  document.getElementById("iletisimbuton").classList.remove('active');
  document.getElementById("videobuton").classList.add('active');
  document.getElementById("anamenubuton").classList.remove('active');
}
