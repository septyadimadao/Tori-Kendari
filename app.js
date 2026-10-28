/* =========================================================
   DATA TOKO — ubah bagian ini saja untuk menyesuaikan website
   ========================================================= */
const DATA = {
  nama: "Tori Kendari",
  wa: "6281234929603",              // nomor WhatsApp toko (0812-3492-9603), format 62xxxx tanpa + dan spasi
  alamat: "Jl. Mekar Indah, Bumi Mekar Residence, Kendari, Sulawesi Tenggara",
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Jl. Mekar Indah, Bumi Mekar Residence, Kendari"),
  email: "yulisal53@gmail.com",
  instagram: "https://instagram.com/lisaolshopkendari",
  // jam buka per hari (0 = Minggu). null = tutup
  jam: [["09:00","20:00"],["09:00","20:00"],["09:00","20:00"],["09:00","20:00"],["09:00","20:00"],["09:00","20:00"],["09:00","20:00"]]
};

// Produk. foto: isi dengan nama file di folder foto/, misalnya "foto/tori-1kg.jpg". Kosong = pakai ilustrasi
const MENU = [
  {id:"t500", nama:"Kue Tori Ketan khas Toraja", desc:"Kue tori ketan bertabur wijen. 85 ribu/kg, 45 ribu/500 gram.", harga:45000, unit:"/ 500 g", label:"Kue Tori 500 g", berat:.5, ikon:"tori", foto:"", badge:"Khas Toraja"},
  {id:"t1kg", nama:"Kue Tori uk 1 kg", desc:"Kue tori kemasan 1 kg, kuenya diproduksi setiap hari.", harga:85000, unit:"/ kg", label:"Kue Tori 1 kg", berat:1, ikon:"kotak", foto:"", badge:"Lebih hemat"},
  {id:"p1kg", nama:"Kue Tori kemasan pouch 1 kg", desc:"Kemasan pouch 1 kg, rapat dan praktis untuk oleh-oleh.", harga:85000, unit:"/ pouch 1 kg", label:"Pouch 1 kg", berat:1, ikon:"pouch", foto:"", badge:"Pouch"},
  {id:"p500", nama:"Kue Tori kemasan pouch 500 g", desc:"Kemasan pouch setengah kilo.", harga:45000, unit:"/ pouch 500 g", label:"Pouch 500 g", berat:.5, ikon:"pouch", foto:""},
  {id:"p300", nama:"Kue Tori pouch 300 g", desc:"Pouch kecil 300 gram, pas untuk camilan sendiri.", harga:30000, unit:"/ pouch 300 g", label:"Pouch 300 g", berat:.3, ikon:"pouch", foto:"", badge:"Ukuran kecil"},
  {id:"dt350", nama:"Deppa Tori", desc:"Kue tradisional deppa tori, kemasan 350 gram.", harga:30000, unit:"/ 350 g", label:"Deppa Tori 350 g", berat:.35, ikon:"deppa", foto:"", badge:"Tradisional"}
];

// Ulasan pelanggan asli. Bagian ulasan tampil otomatis jika daftar ini diisi
// contoh isi: {nama:"Ibu Rina", ket:"Oleh-oleh keluarga", isi:"Renyah dan manisnya pas.", n:5}
const ULASAN = [];

/* ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const rp = n => "Rp " + n.toLocaleString("id-ID");
const esc = t => String(t).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const waBase = "https://wa.me/" + DATA.wa;
const HARI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const store = {
  get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};

// waktu Kendari (WITA, UTC+8)
function wita(){
  const now = new Date();
  return new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 8 * 3600000);
}
const toMin = s => { const [h, m] = s.split(":").map(Number); return h * 60 + m; };
const fmtJam = s => s.replace(":", ".");

/* tautan umum */
$$(".wa-link").forEach(a => a.href = waBase + "?text=" + encodeURIComponent("Halo " + DATA.nama + ", saya mau tanya soal kue tori."));
$("#waNum").textContent = "+" + DATA.wa.replace(/^(\d{2})(\d{3})(\d{4})(\d+)$/, "$1 $2-$3-$4");
$("#alamat").textContent = DATA.alamat;
$("#email").textContent = DATA.email;
$("#mapsLink").href = DATA.maps;
$("#igLink").href = DATA.instagram;
$("#year").textContent = new Date().getFullYear();
$("#copyWa").addEventListener("click", e => {
  const b = e.currentTarget, done = () => { b.textContent = "Tersalin"; setTimeout(() => b.textContent = "Salin nomor", 1800); };
  const sel = () => { const r = document.createRange(); r.selectNodeContents($("#waNum")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText("+" + DATA.wa).then(done, sel); } catch(err){ sel(); }
});

/* header: menu ponsel & bayangan saat scroll */
(() => {
  const top = $("#top"), btn = $("#menuBtn");
  btn.addEventListener("click", () => { const o = top.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
  $$("#mnav a").forEach(a => a.addEventListener("click", () => { top.classList.remove("open"); btn.setAttribute("aria-expanded", false); }));
  const onScroll = () => top.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, {passive:true}); onScroll();
  const links = $$(".links a");
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  }), {rootMargin:"-45% 0px -50% 0px"});
  ["menu","hitung","tentang","lokasi"].forEach(id => io.observe(document.getElementById(id)));
})();

/* status buka */
(() => {
  const t = wita(), d = t.getDay(), m = t.getHours() * 60 + t.getMinutes();
  const j = DATA.jam[d], st = $("#status"), tx = $("#statusText");
  if (j && m >= toMin(j[0]) && m < toMin(j[1])) { st.classList.add("buka"); tx.textContent = "Buka sekarang · tutup " + fmtJam(j[1]) + " WITA"; return; }
  let nm = j && m < toMin(j[0]) ? j[0] : null, label = "hari ini";
  if (!nm) { for (let i = 1; i <= 7; i++) { const k = (d + i) % 7; if (DATA.jam[k]) { nm = DATA.jam[k][0]; label = i === 1 ? "besok" : HARI[k]; break; } } }
  tx.textContent = "Sedang tutup · buka " + label + " " + fmtJam(nm) + " WITA";
})();

/* jam buka: hari dengan jam sama digabung */
(() => {
  const today = wita().getDay(), order = [1,2,3,4,5,6,0];
  const sama = order.every(i => String(DATA.jam[i]) === String(DATA.jam[1]));
  if (sama && DATA.jam[1]) {
    $("#hours").innerHTML = '<tr class="today"><td>Setiap hari</td><td>' + fmtJam(DATA.jam[1][0]) + " – " + fmtJam(DATA.jam[1][1]) + " WITA</td></tr>";
    return;
  }
  $("#hours").innerHTML = order.map(i => {
    const j = DATA.jam[i];
    return '<tr class="' + (i === today ? "today" : "") + '"><td>' + HARI[i] + (i === today ? " (hari ini)" : "") + "</td><td>" + (j ? fmtJam(j[0]) + " – " + fmtJam(j[1]) : "Tutup") + "</td></tr>";
  }).join("");
})();

/* pita berjalan */
(() => {
  const kata = ["Kue Tori Ketan","Deppa Tori","Khas Toraja","Bertabur Wijen","Diproduksi Setiap Hari","Pouch 300 g · Rp 30.000","500 g · Rp 45.000","1 kg · Rp 85.000","Oleh-oleh dari Kendari"];
  const html = kata.map(k => "<span>" + esc(k) + "</span>").join("");
  $("#ribbon").innerHTML = html + html;
})();

/* kotak pesanan */
const cart = store.get("tori-cart") || {};
const cartItems = () => Object.entries(cart).filter(([, q]) => q > 0).map(([id, q]) => {
  const m = MENU.find(x => x.id === id);
  return m ? {id, q, nama:m.nama, label:m.label, harga:m.harga, unit:m.unit, berat:m.berat} : null;
}).filter(Boolean);
function setQty(id, q){
  cart[id] = Math.max(0, Math.min(500, q));
  if (!cart[id]) delete cart[id];
  store.set("tori-cart", cart);
  renderCart(); renderMenuQty();
}
function renderCart(){
  const items = cartItems(), n = items.reduce((a, b) => a + b.q, 0);
  $("#cartCount").textContent = n;
  $("#lines").innerHTML = items.length ? items.map(i =>
    '<div class="line"><span class="nm">' + esc(i.nama) + '</span><span class="sub">' + rp(i.harga) + " " + esc(i.unit) + '</span>' +
    '<span class="qtyctl"><button type="button" data-q="' + i.id + '" data-d="-1" aria-label="Kurangi ' + esc(i.nama) + '">−</button><b>' + i.q + '</b><button type="button" data-q="' + i.id + '" data-d="1" aria-label="Tambah ' + esc(i.nama) + '">+</button></span></div>'
  ).join("") : '<div class="empty"><svg width="90" height="90" viewBox="0 0 120 120" aria-hidden="true"><use href="#i-tori"/></svg><b>Kotak pesanan masih kosong</b><span>Tambahkan kue tori dengan tombol +.</span></div>';
  const kg = items.reduce((a, b) => a + b.q * b.berat, 0);
  $("#total").textContent = rp(items.reduce((a, b) => a + b.q * b.harga, 0)) + (kg ? " · " + kg.toLocaleString("id-ID") + " kg" : "");
  refreshWa();
}
function refreshWa(){
  const v = id => $("#" + id).value.trim(), items = cartItems();
  const lines = ["Halo " + DATA.nama + ", saya mau pesan:", ""];
  items.forEach(i => lines.push("• " + i.q + "x " + i.label + " = " + rp(i.q * i.harga)));
  if (!items.length) lines.push("(belum memilih produk)");
  lines.push("", "Perkiraan total: " + rp(items.reduce((a, b) => a + b.q * b.harga, 0)), "",
    "Nama: " + (v("oNama") || "-"),
    "Tanggal: " + (v("oTgl") ? new Date(v("oTgl") + "T00:00").toLocaleDateString("id-ID", {weekday:"long", day:"numeric", month:"long", year:"numeric"}) : "-") + " pukul " + (v("oJam") || "-"),
    "Pengambilan: " + v("oCara") + (v("oCara") === "Diantar" ? " ke " + (v("oAlamat") || "-") : ""));
  if (v("oCatatan")) lines.push("Catatan: " + v("oCatatan"));
  $("#sendWa").href = waBase + "?text=" + encodeURIComponent(lines.join("\n"));
}
const shake = () => { const f = $("#cartFab"); f.classList.remove("shake"); void f.offsetWidth; f.classList.add("shake"); };
(() => {
  const iso = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const t = wita();
  $("#oTgl").min = iso(t);
  $("#oTgl").value = iso(new Date(t.getTime() + 86400000));
  $("#orderForm").addEventListener("input", refreshWa);
  $("#oCara").addEventListener("change", () => { $("#alamatWrap").hidden = $("#oCara").value !== "Diantar"; refreshWa(); });
  $("#orderForm").addEventListener("submit", e => e.preventDefault());
  const open = o => { document.body.classList.toggle("cart-open", o); $("#drawer").setAttribute("aria-hidden", !o); if (o) $("#closeCart").focus(); };
  $("#cartFab").addEventListener("click", () => open(true));
  $("#closeCart").addEventListener("click", () => open(false));
  $("#scrim").addEventListener("click", () => open(false));
  addEventListener("keydown", e => { if (e.key === "Escape") open(false); });
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-q]"); if (!b) return;
    setQty(b.dataset.q, (cart[b.dataset.q] || 0) + Number(b.dataset.d));
    if (Number(b.dataset.d) > 0) shake();
  });
  renderCart();
})();

/* produk */
function renderMenu(){
  $("#grid").innerHTML = MENU.map((m, i) =>
    '<article class="item" style="animation-delay:' + i * 60 + 'ms">' +
      '<div class="item-art">' + (m.badge ? '<span class="badge">' + esc(m.badge) + "</span>" : "") +
      (m.foto ? '<img src="' + esc(m.foto) + '" alt="' + esc(m.nama) + '" loading="lazy">' : '<svg viewBox="0 0 120 120" aria-hidden="true"><use href="#i-' + m.ikon + '"/></svg>') + "</div>" +
      '<div class="item-body"><h3>' + esc(m.nama) + "</h3><p>" + esc(m.desc) + "</p>" +
      '<div class="item-foot"><span class="price">' + rp(m.harga) + " <small>" + esc(m.unit) + '</small></span><span data-ctl="' + m.id + '"></span></div></div></article>'
  ).join("") +
    '<article class="item item-alt"><div class="item-art"><svg viewBox="0 0 120 120" aria-hidden="true"><use href="#i-hadiah"/></svg></div>' +
    '<div class="item-body"><h3>Pesanan banyak &amp; oleh-oleh</h3><p>Untuk arisan, syukuran, kantor atau buah tangan. Tanyakan jumlah dan jadwalnya lewat WhatsApp.</p>' +
    '<div class="item-foot"><a class="btn btn-ghost btn-sm wa-link" target="_blank" rel="noopener" href="' + waBase + "?text=" + encodeURIComponent("Halo " + DATA.nama + ", saya mau pesan kue tori dalam jumlah banyak.") + '">Tanya via WhatsApp</a></div></div></article>';
  renderMenuQty();
}
function renderMenuQty(){
  $$("[data-ctl]").forEach(el => {
    const id = el.dataset.ctl, q = cart[id] || 0, nm = MENU.find(m => m.id === id).nama;
    el.innerHTML = q ? '<span class="qtyctl"><button type="button" data-q="' + id + '" data-d="-1" aria-label="Kurangi ' + esc(nm) + '">−</button><b>' + q + '</b><button type="button" data-q="' + id + '" data-d="1" aria-label="Tambah ' + esc(nm) + '">+</button></span>'
      : '<button type="button" class="add" data-q="' + id + '" data-d="1" aria-label="Tambah ' + esc(nm) + ' ke kotak pesanan"><svg class="lc" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></button>';
  });
}
renderMenu();

/* hitung pesanan */
(() => {
  $("#optKemasan").innerHTML = MENU.map((m, i) =>
    '<label class="opt"><input type="radio" name="kemasan" value="' + i + '"' + (m.id === "t1kg" ? " checked" : "") + "><span>" + esc(m.label) + " · " + rp(m.harga) + "</span></label>").join("");
  const f = $("#builder"), jml = $("#bJumlah");
  const state = () => {
    const m = MENU[Number(f.querySelector('input[name="kemasan"]:checked').value)];
    const q = Math.max(1, Math.min(200, parseInt(jml.value, 10) || 1));
    return {m, q};
  };
  function draw(){
    const {m, q} = state(), kg = m.berat * q;
    $("#bPrice").textContent = rp(m.harga * q);
    $("#bWeight").textContent = q + " × " + m.label + (kg ? " = " + kg.toLocaleString("id-ID") + " kg" : "");
    $("#bArt").innerHTML = '<use href="#i-' + m.ikon + '"/>';
    const art = $("#bArt"); art.classList.remove("pulse"); void art.offsetWidth; art.classList.add("pulse");
  }
  $("#bMin").addEventListener("click", () => { jml.value = Math.max(1, (parseInt(jml.value, 10) || 1) - 1); draw(); });
  $("#bPlus").addEventListener("click", () => { jml.value = Math.min(200, (parseInt(jml.value, 10) || 0) + 1); draw(); });
  f.addEventListener("input", draw);
  f.addEventListener("submit", e => {
    e.preventDefault();
    const {m, q} = state();
    setQty(m.id, (cart[m.id] || 0) + q);
    const b = $("#bAdd"), old = b.innerHTML;
    b.textContent = "Masuk ke kotak pesanan ✓"; setTimeout(() => b.innerHTML = old, 1800);
    shake();
  });
  draw();
})();

/* ulasan: tampil hanya jika ada ulasan asli */
(() => {
  if (!ULASAN.length) return;
  $("#ulasan").hidden = false;
  const C = ["#E9C46A","#A8C686","#E7B86C","#D9AE5B"];
  $("#rvTrack").innerHTML = ULASAN.map((u, i) =>
    '<figure class="rv" style="margin:0"><span class="stars" aria-label="' + u.n + ' dari 5 bintang">' + "★".repeat(u.n) + "☆".repeat(5 - u.n) + "</span><q>" + esc(u.isi) + "</q>" +
    '<figcaption class="rv-who"><span class="av" style="background:' + C[i % C.length] + '">' + esc(u.nama[0]) + "</span><span>" + esc(u.nama) + "<small>" + esc(u.ket) + "</small></span></figcaption></figure>"
  ).join("");
})();

/* muncul saat di-scroll: hanya untuk elemen di bawah layar pertama */
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const vh = innerHeight;
  const els = $$(".reveal").filter(el => el.getBoundingClientRect().top > vh * .9);
  els.forEach(el => el.classList.add("pre"));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.remove("pre"); io.unobserve(e.target); }
  }), {rootMargin:"0px 0px -8% 0px"});
  els.forEach(el => io.observe(el));
})();
