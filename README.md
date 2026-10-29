# Website Tori Kendari · Kue Tori Tradisional

Website satu halaman bertema cokelat-emas, tanpa framework. Cukup unggah file ke hosting statis (GitHub Pages, Netlify, cPanel).

## Halaman
Setiap menu punya halaman sendiri dan selalu terbuka dari paling atas.
| File | Isi |
|---|---|
| `index.html` | Beranda: status buka/tutup (WITA), ilustrasi kue tori beranimasi, kartu menuju halaman lain |
| `produk.html` | Semua produk dengan tombol +, plus tabel daftar harga |
| `pesan.html` | Hitung pesanan per kemasan dan cara pesan |
| `tentang.html` | Tentang kue tori dan tips menyimpan |
| `lokasi.html` | Alamat, jam buka, WhatsApp, email |

Kotak pesanan (tombol kanan bawah) ada di semua halaman dan isinya tetap terbawa saat pindah halaman. Header, footer dan kotak pesanan ada di setiap file HTML, jadi kalau mengubahnya, ubah di kelima file.

## Data (bagian atas `app.js`)
| Data | Isi sekarang | Lokasi |
|---|---|---|
| Nama | Tori Kendari | `DATA.nama` + teks di `index.html` |
| WhatsApp | 0812-3492-9603 | `DATA.wa` |
| Alamat | Jl. Mekar Indah, Bumi Mekar Residence, Kendari | `DATA.alamat`, `DATA.maps` |
| Email | yulisal53@gmail.com | `DATA.email` |
| Instagram | @lisaolshopkendari | `DATA.instagram` |
| Jam buka | Setiap hari 08.00–20.00 WITA | `DATA.jam` |
| Produk & harga | Kue Tori 500 g Rp45.000, 1 kg Rp85.000; pouch 1 kg Rp85.000, 500 g Rp47.000, 250 g Rp25.000 | `MENU` |
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
