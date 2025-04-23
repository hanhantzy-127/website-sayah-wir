// Bagian animasi ketik ulang terus
const kalimatArray = [
    "Halo, gue Maulana!",
    "Salam kenal!",
    "Selamat datang di website gua!",
    "Jangan lupa senyum hari ini ☝️😁"
];

const judul = document.getElementById("judul-berubah");
let kalimatIndex = 0;
let hurufIndex = 0;
let isMenghapus = false;

function ketikLoop() {
    const kalimatSekarang = kalimatArray[kalimatIndex];
    if (!isMenghapus) {
        judul.innerHTML = kalimatSekarang.substring(0, hurufIndex + 1);
        hurufIndex++;
        if (hurufIndex === kalimatSekarang.length) {
            isMenghapus = true;
            setTimeout(ketikLoop, 1500); // jeda sebelum menghapus
            return;
        }
    } else {
        judul.innerHTML = kalimatSekarang.substring(0, hurufIndex - 1);
        hurufIndex--;
        if (hurufIndex === 0) {
            isMenghapus = false;
            kalimatIndex = (kalimatIndex + 1) % kalimatArray.length;
        }
    }
    setTimeout(ketikLoop, 100); // kecepatan ketik dan hapus
}

window.onload = ketikLoop;

// Bagian untuk menangani form kirim
function kirimForm(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    const pendidikan = document.getElementById("pendidikan").value;

    const output = `
        <h3>Data yang kamu kirim, bang:</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
        <p><strong>Pendidikan:</strong> ${pendidikan}</p>
    `;

    document.getElementById("output-form").innerHTML = output;

    // Reset form setelah dikirim
    document.getElementById("form-kesan").reset();
    return false;
}
