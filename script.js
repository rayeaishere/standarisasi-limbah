window.onscroll = function() {stickyHeader()};

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// inisialisasi datatabels
$(document).ready(function() {
    $('#example').DataTable({
        scrollX: true,
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    });
});

// gambaran chart
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('chartLimbah').getContext('2d');
    const chartLimbah = new Chart(ctx, {
        type: 'pie', // atau 'line', 'pie', dsb.
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            datasets: [{
                label: 'Jumlah Limbah B3 yang Dikelola',
                data: [90.4, 65.1, 55.0, 32.3, 39.7, 33.5, 27.3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});


// analisa limbah b3
const dataLimbah = {
    "A101d": {
        nama: "Limbah yang mengandung senyawa POPs dan UPOPs",
        nfpa: "Health Hazard",
        penanggulangan: "Gunakan APD lengkap, hindari kontak langsung, dan simpan di wadah kedap udara.",
        identifikasi: "Limbah yang mengandung senyawa POPs dan UPOPs."
    },
    "A102d": {
        nama: "Limbah aki atau baterai bekas",
        nfpa: "Specific Hazard",
        penanggulangan: "Gunakan sarung tangan, simpan di tempat kering, dan hindari sumber panas.",
        identifikasi: "Limbah dari aki bekas atau baterai yang tidak digunakan."
    },
    "A103d": {
        nama: "Debu dan fiber asbes",
        nfpa: "Health Hazard",
        penanggulangan: "Gunakan masker respirator, simpan dalam kantong plastik berlabel asbes, hindari penyebaran debu.",
        identifikasi: "Debu atau fiber asbes yang berasal dari proses industri."
    },
    "A104d": {
        nama: "Air lindi dari landfill",
        nfpa: "Specific Hazard",
        penanggulangan: "Tampung dalam tangki tahan korosi, lakukan pengolahan dengan sistem filtrasi dan bioremediasi, buang setelah memenuhi baku mutu lingkungan.",
        identifikasi: "Cairan yang keluar dari tempat penimbunan limbah."
    },
    "A105d": {
        nama: "Limbah mengandung merkuri",
        nfpa: "Health Hazard",
        penanggulangan: "Simpan di wadah kaca/plastik anti bocor, hindari suhu tinggi yang menyebabkan penguapan.",
        identifikasi: "Sumber dari alat ukur, lampu fluoresen, produk kimia."
    },
    "A106d": {
        nama: "Limbah laboratorium",
        nfpa: "Health Hazard",
        penanggulangan: "gunakan wadah khusus tahan kimia, simpan limbah berdasarkan kategori bahaya",
        identifikasi: "klasifikasi limbah berdasarkan sifat fisik dan kimia"
    },
    "A107d": {
        nama: "Pelarut bekas",
        nfpa: "Flammability Hazard",
        penanggulangan: "Simpan dalam drum logam, hindari percikan api dan tempatkan di area ventilasi baik",
        identifikasi: "Pelarut dari proses industri"
    },
    "A108d": {
        nama: "Limbah atau sampah yang terkontaminasi",
        nfpa: "Specific Hazard",
        penanggulangan: "Simpan dalam kantong plastik berlapis tebal dengan label B3",
        identifikasi: "Limbah yang kontak langsung dengan B3"
    },
    "A109d": {
        nama: "Limbah asam lainnya",
        nfpa: "Reactivity Hazard",
        penanggulangan: "Simpan dalam wadah plastik tahan asam, hindari pencampuran dengan bahan alkali atau air dalam jumlah besar",
        identifikasi: "Limbah dari proses kimia industri"
    },
    "A331-2": {
        nama: "Sludge dari perawatan minyak",
        nfpa: "Flammability Hazard",
        penanggulangan: "Simpan di wadah tahan minyak, pastikan tidak ada kebocoran",
        identifikasi: "Limbah berupa lumpur berminyak"
    },
    "A337-1": {
        nama: "Limbah Medis Infeksius",
        nfpa: "Health Hazard",
        penanggulangan: "Pisahkan dari limbah lain menggunakan kantong merah, sterilisasi sebelum dibuang ke insinerator",
        identifikasi: "Limbah dari jarum, perban, atau cairan tubuh"
    },
    "A337-2": {
        nama: "Produk Farmasi Kadaluwarsa",
        nfpa: "Health Hazard",
        penanggulangan: "Simpan dalam wadah tertutup dan kirim ke fasilitas farmasi untuk insinerasi",
        identifikasi: "Obat-obatan yang tidak terpakai atau kadaluwarsa"
    },
    "A337-3":{
        nama: "Bahan Kimia Kadaluwarsa",
        nfpa: "Health Hazard",
        penanggulangan: "Simpan dalam wadah tahan kimia, pastikan wadah tidak rusak dan jauhkan dari panas",
        identifikasi: "Bahan kimia yang sudah melebihi masa aman penggunaannya"
    },
    "B102d": {
        nama: "Aki Bekas Mobil dan Genset",
        nfpa: "Specific Hazard",
        penanggulangan: "Simpan dalam tempat kering dan jauh dari sumber panas",
        identifikasi: "Limbah dari kendaraan atau perangkat elektronik"
    },
    "B104d": {
        nama: "Limbah Kemasan Bekas",
        nfpa: "Health Hazard",
        penanggulangan: "Bersihkan residu bahan kimia, simpan di tempat yang aman dari kontaminasi air atau tanah",
        identifikasi: "Bekas jerigen atau kaleng cat"
    }
};

function analisisLimbah(kodeLimbah) {
    let hasil = "";

    console.log("Kode Limbah yang Dipilih: ", kodeLimbah);
    
    if (!kodeLimbah || !dataLimbah[kodeLimbah]) {
        hasil = "<p>Kode limbah tidak ditemukan.</p>";
    } else {
        hasil = `
            <h3>Hasil Analisis</h3>
            <p><strong>Jenis Limbah:</strong> ${dataLimbah[kodeLimbah].nama}</p>
            <p><strong>Identifikasi:</strong> ${dataLimbah[kodeLimbah].identifikasi || "Tidak ada informasi identifikasi."}</p>
            <p><strong>Simbol NFPA 704:</strong> ${dataLimbah[kodeLimbah].nfpa}</p>
            <p><strong>Cara Penanggulangan:</strong> ${dataLimbah[kodeLimbah].penanggulangan}</p>
        `;
    }

    console.log("Hasil Analisis: ", hasil);

    document.getElementById("hasilAnalisis").innerHTML = hasil;
}

    const form = document.getElementById('form-kalkulator');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const kodeLimbah = document.getElementById('kode-limbah').value;
        console.log("Nilai kode limbah yang diambil: ", kodeLimbah);
        analisisLimbah(kodeLimbah);

    const link = document.createElement('a');
    link.href = 'https://example.com';
    link.target = '_blank';
    link.textContent = 'Klik di sini untuk informasi lebih lanjut';
    link.style.display = 'block';
    link.style.marginTop = '10px';

    hasil.appendChild(link);
});
