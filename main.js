let n=prompt("Halo!!! Siapakah kamu?")

let c=confirm("Hai "+n+"! Apakah Saya Tampan?(jika tidak tekan cancel)")

if (c==true){
    alert('Wah makasih banget ya')
}else{
    alert('Makasih')
}

var d=new Date()

var weekday= new
Array("Senin ","Selasa ","Rabu ","Kamis ","Jum'at ","Sabtu ",
"Minggu ")
var monthname= new
Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November",
"Desember")
document.write(weekday[d.getDay()]+' ')
document.write(d.getDate()+' ')
document.write(monthname[d.getMonth()]+' ')
document.write(d.getFullYear())
