/**
 * schedule.js
 * 
 *  ------- Website Kelas ------
 * 
 * Name: website-iis-satu
 * Author: Felix-Ginting (@felixginting_manik)
 * Source Code: https://github.com/N0obCodingers/website-iis-satu
 * 
 * ------------------------------
**/


const schedule = {
  "Senin": [
    "Upacara",
    "Sejarah Perminatan",
    "Sejarah Perminatan",
    "Geografi",
    "Istirahat 1",
    "Prakarya",
    "Prakarya",
    "Geografi",
    "Istirahat 2",
    "Bahasa Indonesia"
    ],
"Selasa": [
  "Sosiologi",
  "Bahasa Indonesia",
  "Bahasa Indonesia",
  "Bahasa Indonesia",
  "Istirahat 1",
  "Geografi",
  "Geografi", 
  "Matematika",
  "Istirahat 2",
  "Matematika",
  ],
"Rabu": [
  "Bahasa Inggris (LM)",
  "Bahasa Inggris (LM)",
  "Bahasa Inggris (LM)",
  "Sosiologi",
  "Istirahat 1",
  "Sosiologi",
  "Sosiologi",
  "PKN",
  "Istirahat 2",
  "PKN"
],
"Kamis": [
  "PJOK",
  "PJOK",
  "PJOK",
  "Bahasa Inggris (LM)",
  "Istirahat 1",
  "Seni Budaya",
  "Seni Budaya",
  "Sejarah Perminatan",
  "Istirahat 2",
  "Sejarah Perminatan"
],
"Jumat": [
  "Bahasa Inggris (W)",
  "Bahasa Inggris (W)",
  "Matematika",
  "Matematika",
  "Istirahat",
  "Ekonomi",
  "Ekonomi"
],
"Sabtu": [
  "Sejarah Indonesia",
  "Agama",
  "Agama",
  "Istirahat 1",
  "Agama",
  "Ekonomi",
  "Ekonomi",
  "Istirahat 2",
  "Sejarah Indonesia"

}

let jadwalInner = document.getElementById('jadwal').innerHTML;
document.getElementById('jadwal').innerHTML = null


let str = ""



for (let day in schedule) {
  str = ""
  
  for (let hrs = 0; hrs < schedule[day].length; hrs++ ) {
    str += `${schedule[day][hrs]} <br>`
    
    if (hrs == schedule[day].length - 1) {
      document.getElementById('jadwal').innerHTML += jadwalInner.replace('harii', day).replace('jdwll', str)
    }
  }
}

/**
for (let h = 0; h < schedule.senin.length; h++) {
  str += `${schedule.senin[h]} <br>`
  if (h == schedule.senin.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Senin')
  document.getElementById('jadwal').innerHTML = tmp
}

str = ""
for (let h = 0; h < schedule.selasa.length; h++) {
  str += `${schedule.selasa[h]} <br>`
  if (h == schedule.selasa.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Selasa')
  document.getElementById('jadwal').innerHTML = tmp
}


**/
