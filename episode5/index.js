// Index tidak perlu dapa dibuka dengan hanya mengetikan "node ."
// const nama = "Dimas Aryasatya";
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// require, dan metode pemanggilannya

const cetakNama = require('./coba'); //Folder yang sama
//require('../coba'); //Diluar folder episode5
//require('../../coba'); //Diluar folder latihan-nodejs


// Bukti kita sudah bukan lagi didalam lingkungan browser
console.log(cetakNama("Dimas Aryasatya"));
// cetakNama("Dimas Aryasatya");