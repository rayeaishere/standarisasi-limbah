function analyzeLimbah() {
  const limbah = document.getElementById('limbah').value;
  const limbahImage = document.getElementById('limbahImage');
  const kategori = document.getElementById('kategori');
  const jenis = document.getElementById('jenis');
  const pengelolaan = document.getElementById('pengelolaan');

  // Reset hasil
  limbahImage.style.display = 'none';
  kategori.textContent = '';
  jenis.textContent = '';
  pengelolaan.textContent = '';

  if (limbah === 'oli') {
      limbahImage.src = 'limbah-oli-bekas.jpg'; // Tambahkan URL gambar oli
      limbahImage.style.display = 'block';
      kategori.textContent = 'Kategorisasi Limbah: Limbah B3';
      jenis.textContent = 'Jenis Limbah: Cair';
      pengelolaan.textContent = 'Pengelolaan: Limbah B3 memerlukan pengangkutan, penyimpanan, dan pengolahan sesuai regulasi.';
  } else if (limbah === 'plastik') {
      limbahImage.src = 'limbah-plastik.webp'; // Tambahkan URL gambar plastik
      limbahImage.style.display = 'block';
      kategori.textContent = 'Kategorisasi Limbah: Limbah Non-B3';
      jenis.textContent = 'Jenis Limbah: Padat';
      pengelolaan.textContent = 'Pengelolaan: Limbah Non-B3 dapat didaur ulang atau dikomposkan.';
  } else if (limbah === 'medis') {
      limbahImage.src = 'limbah-medis.jpg'; // Tambahkan URL gambar medis
      limbahImage.style.display = 'block';
      kategori.textContent = 'Kategorisasi Limbah: Limbah B3';
      jenis.textContent = 'Jenis Limbah: Padat dan Cair';
      pengelolaan.textContent = 'Pengelolaan: Limbah B3 memerlukan pengelolaan khusus sesuai Kementerian Lingkungan Hidup.';
  } else if (limbah === 'organik') {
      limbahImage.src = 'limbah-organik.jpg'; // Tambahkan URL gambar organik
      limbahImage.style.display = 'block';
      kategori.textContent = 'Kategorisasi Limbah: Limbah Non-B3';
      jenis.textContent = 'Jenis Limbah: Padat';
      pengelolaan.textContent = 'Pengelolaan: Limbah Non-B3 dapat didaur ulang atau dijadikan kompos.';
  }
}
