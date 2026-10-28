# Website Depatori · Toko Kue & Roti Kendari

Website satu halaman bertema cokelat-emas, tanpa framework. Cukup unggah 3 file (`index.html`, `style.css`, `app.js`) ke hosting statis mana pun (Netlify, Vercel, GitHub Pages, cPanel).

## Isi halaman
1. **Beranda**: status buka/tutup otomatis (zona WITA), jadwal roti keluar oven, kue animasi (lilin menyala, sprinkle jatuh).
2. **Pita berjalan** berisi nama-nama kue.
3. **Etalase menu**: filter kategori, tombol + untuk masuk kotak pesanan.
4. **Rakit kue ulang tahun**: pilih ukuran, rasa, warna krim, hiasan dan tulisan. Pratinjau & harga berubah langsung.
5. **Tentang & cara pesan** (3 langkah).
6. **Ulasan pelanggan** (geser otomatis).
7. **Lokasi & jam buka** (hari ini disorot).
8. **Kotak pesanan**: semua pesanan tersusun otomatis jadi pesan WhatsApp.

## Data yang WAJIB diganti (semua ada di bagian atas `app.js`)
| Data | Sekarang (contoh) | Lokasi |
|---|---|---|
| Nama toko | `Depatori` (tebakan dari permintaan klien) | `DATA.nama` + teks di `index.html` (cari "Depatori") |
| Nomor WhatsApp | `6281234929603` (0812-3492-9603, sudah asli) | `DATA.wa` |
| Alamat | Jl. Contoh Raya No. 12, Kendari | `DATA.alamat` |
| Link Google Maps | pencarian "Kendari" | `DATA.maps` |
| Instagram & TikTok | halaman utama | `DATA.instagram`, `DATA.tiktok` |
| Jam buka | Sen–Sab 07.00–21.00, Min 08.00–20.00 | `DATA.jam` |
| Jam roti keluar oven | 06.00, 10.00, 14.00 | `DATA.oven` |
| Menu, deskripsi & harga | 16 produk contoh | `MENU` |
| Harga kue custom | 16/20/24 cm, tambahan hiasan | `RAKIT` |
| Ulasan | 4 ulasan **contoh** | `ULASAN`, lalu set `DATA.ulasanContoh = false` |
| Teks "Tentang" | cerita dapur keluarga (karangan) | bagian `#tentang` di `index.html` |

## Catatan
- Gambar kue saat ini berupa ilustrasi. Jika klien punya foto produk, ilustrasi di kartu menu bisa diganti `<img>`.
- Belum ada logo resmi; ikon cupcake bisa diganti logo klien (simbol `i-mark` di `index.html`).
- Pesanan tidak tersimpan di server: pembeli diarahkan ke WhatsApp dengan pesan yang sudah terisi.

## Cara memasang di GitHub Pages
1. Buat repository baru di github.com (misalnya `depatori-website`), pilih **Public**.
2. Klik **Add file → Upload files**, lalu seret semua isi folder ini (`index.html`, `style.css`, `app.js`, `favicon.svg`, `README.md`, `.nojekyll`). Klik **Commit changes**.
3. Buka **Settings → Pages**. Pada *Source* pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
4. Tunggu 1–2 menit. Website tampil di `https://<username>.github.io/depatori-website/`.
5. Untuk domain sendiri (misalnya `depatori.com`), isi kolom **Custom domain** di halaman yang sama.
