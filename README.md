# Website Tori Kendari · Kue Tori Ketan khas Toraja

Website satu halaman bertema cokelat-emas, tanpa framework. Cukup unggah file ke hosting statis (GitHub Pages, Netlify, cPanel).

## Isi halaman
1. **Beranda**: status buka/tutup otomatis (WITA), ilustrasi kue tori beranimasi.
2. **Produk**: 7 produk (Kue Tori, pouch, Deppa Tori, Baby Cumi), plus kartu pesanan banyak / oleh-oleh.
3. **Hitung pesanan**: pilih kemasan dan jumlah, total langsung terhitung.
4. **Tentang kue tori** & cara pesan.
5. **Lokasi & jam buka**, nomor WA, email.
6. **Kotak pesanan**: semua pesanan tersusun otomatis jadi pesan WhatsApp.

## Data (bagian atas `app.js`)
| Data | Isi sekarang | Lokasi |
|---|---|---|
| Nama | Tori Kendari | `DATA.nama` + teks di `index.html` |
| WhatsApp | 0812-3492-9603 | `DATA.wa` |
| Alamat | Jl. Mekar Indah, Bumi Mekar Residence, Kendari | `DATA.alamat`, `DATA.maps` |
| Email | yulisal53@gmail.com | `DATA.email` |
| Instagram | @lisaolshopkendari | `DATA.instagram` |
| Jam buka | Setiap hari 09.00–20.00 WITA | `DATA.jam` |
| Produk & harga | Kue Tori 500 g/1 kg, pouch 300 g/500 g/1 kg, Deppa Tori 350 g, Baby Cumi | `MENU` |
| Ulasan | kosong (bagian ulasan tersembunyi) | `ULASAN` |

## Memasang foto produk
1. Buat folder `foto/` di repo, unggah foto (misalnya `tori-500g.jpg`, `tori-1kg.jpg`). Ukuran ideal 1200×900 px.
2. Di `app.js`, isi `foto:"foto/tori-500g.jpg"` pada produk yang sesuai. Ilustrasi otomatis diganti foto.

## Cara memasang di GitHub Pages
1. Buat repository baru di github.com (misalnya `tori-kendari`), pilih **Public**.
2. Klik **Add file → Upload files**, lalu seret semua isi folder ini (`index.html`, `style.css`, `app.js`, `favicon.svg`, `README.md`, `.nojekyll`). Klik **Commit changes**.
3. Buka **Settings → Pages**. Pada *Source* pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
4. Tunggu 1–2 menit. Website tampil di `https://<username>.github.io/tori-kendari/`.
5. Untuk domain sendiri (misalnya `depatori.com`), isi kolom **Custom domain** di halaman yang sama.
