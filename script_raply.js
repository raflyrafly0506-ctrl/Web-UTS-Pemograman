// --- Soal No 4: Validasi JavaScript ---
const form = document.getElementById('formPendaftaran');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let statusValid = true;

    // Bersihkan pesan error sebelumnya
    document.querySelectorAll('.error').forEach(el => el.innerText = '');

    // 1. Validasi Field Kosong (Nama)
    const nama = document.getElementById('nama').value;
    if (nama.trim() === "") {
        document.getElementById('namaError').innerText = "Nama lengkap tidak boleh kosong!";
        statusValid = false;
    }

    // 2. Validasi Format Email
    const email = document.getElementById('email').value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!polaEmail.test(email)) {
        document.getElementById('emailError').innerText = "Format email tidak valid!";
        statusValid = false;
    }

    // 3. Validasi Angka Positif (Jumlah Tiket)
    const tiket = document.getElementById('tiket').value;
    if (tiket === "" || parseInt(tiket) <= 0) {
        document.getElementById('tiketError').innerText = "Jumlah tiket harus berupa angka positif!";
        statusValid = false;
    }

    if (statusValid) {
        alert("Terima kasih! Pendaftaran Anda berhasil dikirim.");
        form.reset();
    }
});

// --- Soal No 5: Manipulasi DOM Dinamis ---
let dataArtis = [
    { id: 1, nama: "Sheila on 7" },
    { id: 2, nama: "Tulus" },
    { id: 3, nama: "Hindia" },
    { id: 4, nama: "Nadin Amizah" }
];

const elemenList = document.getElementById('listArtis');

function tampilkanArtis() {
    elemenList.innerHTML = "";
    dataArtis.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${item.nama}</strong></span>
            <button class="btn-hapus" onclick="hapusArtis(${item.id})">Hapus</button>
        `;
        elemenList.appendChild(li);
    });
}

function tambahArtis() {
    const input = document.getElementById('inputArtisBaru');
    if (input.value.trim() !== "") {
        const artisBaru = {
            id: Date.now(), // Menggunakan timestamp sebagai ID unik
            nama: input.value
        };
        dataArtis.push(artisBaru);
        input.value = ""; // Kosongkan input setelah tambah
        tampilkanArtis();
    } else {
        alert("Masukkan nama artis terlebih dahulu!");
    }
}

function hapusArtis(id) {
    dataArtis = dataArtis.filter(item => item.id !== id);
    tampilkanArtis();
}

// Jalankan fungsi saat halaman pertama kali dimuat
tampilkanArtis();