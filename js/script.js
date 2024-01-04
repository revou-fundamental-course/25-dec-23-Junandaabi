// Membuat perhitungan Luas Segitiga
function HitungLuas() {
    // Mengambil elemen di dalam HTML dengan id dan dimasukkan ke dalam variabel let
    let inputAlas = document.getElementById("alas");
    let inputTinggi = document.getElementById("tinggi");
    let outputLuas = document.getElementById("output-luas");

    // Memberikan value pada variabel yang memiliki nilai
    let alas = parseFloat(inputAlas.value);
    let tinggi = parseFloat(inputTinggi.value);

    // Masuk ke dalam proses jika alas dan tingginya kosong maka true
    if (isNaN(alas) || isNaN(tinggi)) {
        // Cetak konten "*Mohon untuk isi nilai Alas dan Tingginya terlebih dahulu"
        outputLuas.textContent = "*Dimohon untuk isi nilai Alas dan Tingginya terlebih dahulu";
    }
    // Jika tidak masuk ke dalam proses perhitungan menggunakan rumus
    else {
        // luas adalah hasil perhitungan dari (alas * tinggi) / 2
        let luas = (alas * tinggi) / 2;

        // fungsi ini untuk menghilangkan konten "*Mohon untuk isi nilai Alas dan Tingginya terlebih dahulu"
        outputLuas.textContent = "" 
        // Cetak hasil di dalam HTML
        outputLuas.innerHTML = 
        `<p>Hasil :</p>
        <p>L = (${alas} x ${tinggi}) / 2</p>
        <p>L = ${luas}</p>`;
    }
}

// Fungsi untuk membuat Reset
function ResetLuas() {
    // Mengambil elemen di dalam HTML dengan id dan dimasukkan ke dalam variabel let
    let inputAlas = document.getElementById("alas");
    let inputTinggi = document.getElementById("tinggi");
    let outputLuas = document.getElementById("output-luas");
    // Fungsi ini untuk menghilangkan nilai Alas, Tinggi, dan Hasil nilai akhir
    inputAlas.value = "";
    inputTinggi.value = "";
    outputLuas.textContent = "";
}

// function HitungKeliling() = fungsinya sama dengan function HitungLuas() hanya berbeda di letnya saja
function HitungKeliling() {
    let inputSisiSatu = document.getElementById("sisi-satu");
    let inputSisiDua = document.getElementById("sisi-dua");
    let inputSisiTiga = document.getElementById("sisi-tiga");
    let outputKeliling = document.getElementById("output-keliling");

    let sisiSatu = parseFloat(inputSisiSatu.value);
    let sisiDua = parseFloat(inputSisiDua.value);
    let sisiTiga = parseFloat(inputSisiTiga.value);

    if (isNaN(sisiSatu) || isNaN(sisiDua) || isNaN(sisiTiga)) {
        outputKeliling.textContent = "*Dimohon untuk isi nilai Sisinya terlebih dahulu";
    }
    else {
        let keliling = sisiSatu + sisiDua + sisiTiga;

        outputKeliling.innerHTML = 
        `<p>Hasil :</p>
        <p>K = ${sisiSatu} + ${sisiDua} + ${sisiTiga}</p>
        <p>K = ${keliling}</p>`;
    }
}

// function ResetKeliling() = fungsinya sama dengan function ResetLuas()
function ResetKeliling() {
    let inputSisiSatu = document.getElementById("sisi-satu");
    let inputSisiDua = document.getElementById("sisi-dua");
    let inputSisiTiga = document.getElementById("sisi-tiga");
    let outputKeliling = document.getElementById("output-keliling");
    inputSisiSatu.value = "";
    inputSisiDua.value = "";
    inputSisiTiga.value = "";
    outputKeliling.textContent = "";
}