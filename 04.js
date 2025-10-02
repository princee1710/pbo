class Mahasiswa {
  constructor(nama, nim, nilai, jurusan, kelas, noTelpon) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.nilai = nilai;
    this.noTelpon = noTelpon;
    let _kelas = kelas;

    this.getKelas = function() {
      return _kelas;
    };

    this.setKelas = function(kelasBaru) {
      _kelas = kelasBaru;
    };
  }

  // Method untuk menampilkan info mahasiswa
  tampilkanInfo() {
    return `Nama: ${this.nama}\nNIM: ${this.nim}\nJurusan: ${this.jurusan}\nKelas: ${this.getKelas()}\nNilai: ${this.nilai}\nNo Telpon: ${this.noTelpon}`;
  }
}

// Contoh penggunaan
const mahasiswa1 = new Mahasiswa('Budi Santoso', '12345678', 85, 'Teknik Informatika', 'IP251', '081234567890');
console.log(mahasiswa1.tampilkanInfo());
// Test setter kelas
mahasiswa1.setKelas('IP251');
console.log('\nSetelah kelas diubah:');
console.log(mahasiswa1.tampilkanInfo());

const mahasiswa2 = new Mahasiswa('Ani Wijaya', '87654321', 75, 'Sistem Informasi', 'IP241', '081298765432');
console.log('\n' + mahasiswa2.tampilkanInfo());
