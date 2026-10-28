/* =========================================================
   DATA TOKO — ubah bagian ini saja untuk menyesuaikan website
   ========================================================= */
const DATA = {
  nama: "Depatori",
  wa: "6281234567890",              // CONTOH: nomor WhatsApp format 62xxxx tanpa + dan spasi
  alamat: "Jl. Contoh Raya No. 12, Kel. Contoh, Kec. Kadia, Kota Kendari, Sulawesi Tenggara",
  maps: "https://www.google.com/maps/search/?api=1&query=Kendari",   // ganti dengan link Google Maps toko
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
  // jam buka per hari (0 = Minggu). null = tutup
  jam: [["08:00","20:00"],["07:00","21:00"],["07:00","21:00"],["07:00","21:00"],["07:00","21:00"],["07:00","21:00"],["07:00","21:00"]],
  // jam roti keluar oven (WITA)
  oven: ["06:00","10:00","14:00"],
  ulasanContoh: true                // ubah ke false setelah ulasan diganti ulasan asli
};

// Kategori & menu. ikon: bday, slice, lapis, roti, croissant, donat, cupcake, gulung, toples, klepon, daun
const KATEGORI = ["Semua","Kue Ulang Tahun","Kue Tradisional","Roti","Pastry","Kue Kering"];
const MENU = [
  {id:"bf",  kat:"Kue Ulang Tahun", nama:"Black Forest", desc:"Bolu cokelat lembap, krim segar dan ceri. Diameter 20 cm.", harga:185000, unit:"/ loyang", ikon:"bday", tint:"#F6D9D3", badge:"Terlaris"},
  {id:"rv",  kat:"Kue Ulang Tahun", nama:"Red Velvet Cream Cheese", desc:"Lapisan red velvet dengan krim keju yang tidak terlalu manis.", harga:210000, unit:"/ loyang", ikon:"bday", tint:"#FBD3DC", c:{c1:"#B3243F",c2:"#FFF8EE",c3:"#FFFFFF"}},
  {id:"bp",  kat:"Kue Tradisional", nama:"Bolu Pandan", desc:"Harum daun pandan asli, empuk dan ringan.", harga:55000, unit:"/ loyang", ikon:"slice", tint:"#E1F0D6", c:{c1:"#9BCB73",c2:"#FFF8EE",c3:"#5E9C3F"}},
  {id:"ll",  kat:"Kue Tradisional", nama:"Lapis Legit", desc:"18 lapis, mentega Wijsman dan rempah spekuk.", harga:95000, unit:"/ ¼ loyang", ikon:"lapis", tint:"#FBE7C6", badge:"Premium"},
  {id:"kl",  kat:"Kue Tradisional", nama:"Klepon", desc:"Isi gula merah cair, baluran kelapa parut.", harga:20000, unit:"/ isi 10", ikon:"klepon", tint:"#E1F0D6"},
  {id:"br",  kat:"Kue Tradisional", nama:"Barongko", desc:"Pisang kepok, santan dan telur, dikukus dalam daun pisang.", harga:30000, unit:"/ isi 5", ikon:"daun", tint:"#E9F3DF", badge:"Khas Sulawesi"},
  {id:"bk",  kat:"Kue Tradisional", nama:"Brownies Kukus", desc:"Cokelat pekat, lembut, dengan lapisan keju.", harga:45000, unit:"/ loyang", ikon:"slice", tint:"#EBD9CF", c:{c1:"#5A2E1E",c2:"#F3C77F",c3:"#3A1B10"}},
  {id:"rs",  kat:"Roti", nama:"Roti Sobek Cokelat Keju", desc:"Delapan sobekan, isi cokelat dan keju parut.", harga:28000, unit:"/ pak", ikon:"roti", tint:"#FBE3C4", badge:"Hangat"},
  {id:"ra",  kat:"Roti", nama:"Roti Abon Pedas", desc:"Roti lembut, mayones dan abon sapi pedas.", harga:12000, unit:"/ buah", ikon:"roti", tint:"#F8DCC9", c:{c1:"#C9792E",c3:"#8A2C14"}},
  {id:"dk",  kat:"Roti", nama:"Donat Kentang", desc:"Empuk karena kentang, taburan gula halus atau meses.", harga:30000, unit:"/ isi 6", ikon:"donat", tint:"#FDE1E7", c:{c1:"#FFC2D1"}},
  {id:"cr",  kat:"Pastry", nama:"Croissant Mentega", desc:"Berlapis-lapis, renyah di luar dan lembut di dalam.", harga:18000, unit:"/ buah", ikon:"croissant", tint:"#FBE7C6"},
  {id:"bg",  kat:"Pastry", nama:"Bolu Gulung Keju", desc:"Bolu tipis, selai mentega dan keju cheddar.", harga:50000, unit:"/ batang", ikon:"gulung", tint:"#FFF0C9"},
  {id:"cc",  kat:"Pastry", nama:"Cupcake Aneka Rasa", desc:"Cokelat, vanila dan stroberi dengan krim hias.", harga:60000, unit:"/ isi 6", ikon:"cupcake", tint:"#FBD3DC"},
  {id:"ns",  kat:"Kue Kering", nama:"Nastar Wisman", desc:"Selai nanas buatan sendiri, lumer di mulut.", harga:120000, unit:"/ toples 500 g", ikon:"toples", tint:"#FFF0C9", badge:"Hampers"},
  {id:"ks",  kat:"Kue Kering", nama:"Kastengel", desc:"Keju edam dan cheddar, gurih dan renyah.", harga:125000, unit:"/ toples 500 g", ikon:"toples", tint:"#FBE7C6", c:{c1:"#F6D27A",c2:"#E8A93A",c3:"#5BA3E0"}},
  {id:"bs",  kat:"Kue Kering", nama:"Baruasa", desc:"Kue kering beras dan kelapa sangrai khas Bugis.", harga:65000, unit:"/ toples", ikon:"toples", tint:"#F3E6D3", c:{c1:"#E8D3A8",c2:"#C8A66A",c3:"#8CC46B"}}
];

// Pilihan kue ulang tahun custom
const RAKIT = {
  ukuran: [{v:"16 cm", h:150000, s:.82},{v:"20 cm", h:185000, s:.92},{v:"24 cm", h:250000, s:1}],
  rasa:   [{v:"Cokelat", w:"#5A2E1E"},{v:"Vanila", w:"#F3C77F"},{v:"Pandan", w:"#8CC46B"},{v:"Red Velvet", w:"#B3243F"}],
  krim:   [{v:"Putih", w:"#FFF8EE"},{v:"Pink", w:"#FFB3C6"},{v:"Cokelat", w:"#8A5233"},{v:"Mint", w:"#B6E3CF"}],
  hias:   [{v:"Buah segar", h:25000, g:"tBuah"},{v:"Cokelat leleh", h:20000, g:"tCoklat"},{v:"Sprinkles warna", h:10000, g:"tSprinkle"}]
};

// CONTOH ulasan — ganti dengan ulasan asli dari pelanggan
const ULASAN = [
  {nama:"Contoh: Rina", ket:"Kue ulang tahun anak", isi:"Black forest-nya lembut dan krimnya tidak eneg. Tulisan di kue rapi sesuai permintaan.", n:5},
  {nama:"Contoh: Pak Andi", ket:"Snack box kantor", isi:"Pesan 50 kotak untuk rapat, datang tepat waktu dan rotinya masih hangat.", n:5},
  {nama:"Contoh: Wulan", ket:"Hampers lebaran", isi:"Nastarnya lumer, selai nanasnya terasa asli. Toplesnya cantik untuk dibagikan.", n:5},
  {nama:"Contoh: Dewi", ket:"Pelanggan roti", isi:"Roti sobek cokelat keju jadi sarapan wajib di rumah. Datang jam 10 pas baru keluar oven.", n:4}
];

/* ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const rp = n => "Rp " + n.toLocaleString("id-ID");
const esc = t => String(t).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const waBase = "https://wa.me/" + DATA.wa;
const store = {
  get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};

// waktu Kendari (WITA, UTC+8)
function wita(){
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 8 * 3600000);
}
const HARI = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const toMin = s => { const [h, m] = s.split(":").map(Number); return h * 60 + m; };
const fmtJam = s => s.replace(":", ".");

/* tautan umum */
$$(".wa-link").forEach(a => a.href = waBase + "?text=" + encodeURIComponent("Halo " + DATA.nama + ", saya mau tanya soal pesanan kue."));
$("#waNum").textContent = "+" + DATA.wa.replace(/^(\d{2})(\d{3})(\d{4})(\d+)$/, "$1 $2-$3-$4");
$("#alamat").textContent = DATA.alamat;
$("#mapsLink").href = DATA.maps;
$("#igLink").href = DATA.instagram;
$("#ttLink").href = DATA.tiktok;
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
  // tandai tautan menu sesuai bagian yang terlihat
  const links = $$(".links a");
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  }), {rootMargin:"-45% 0px -50% 0px"});
  ["menu","rakit","tentang","ulasan","lokasi"].forEach(id => io.observe(document.getElementById(id)));
})();

/* status buka & jadwal oven */
(() => {
  const t = wita(), d = t.getDay(), m = t.getHours() * 60 + t.getMinutes();
  const j = DATA.jam[d], st = $("#status"), tx = $("#statusText");
  if (j && m >= toMin(j[0]) && m < toMin(j[1])) { st.classList.add("buka"); tx.textContent = "Buka sekarang · tutup " + fmtJam(j[1]) + " WITA"; }
  else {
    let nd = d, nm = j && m < toMin(j[0]) ? j[0] : null, label = "hari ini";
    if (!nm) { for (let i = 1; i <= 7; i++) { const k = (d + i) % 7; if (DATA.jam[k]) { nm = DATA.jam[k][0]; nd = k; label = i === 1 ? "besok" : HARI[k]; break; } } }
    tx.textContent = "Sedang tutup · buka " + label + " " + fmtJam(nm) + " WITA";
  }
  const next = DATA.oven.find(o => toMin(o) > m);
  if (next) {
    const sisa = toMin(next) - m, s = sisa >= 60 ? Math.floor(sisa / 60) + " jam " + (sisa % 60 ? sisa % 60 + " menit" : "") : sisa + " menit";
    $("#ovenText").textContent = "Roti hangat berikutnya keluar oven pukul " + fmtJam(next) + " WITA";
    $("#ovenSub").textContent = "Sekitar " + s.trim() + " lagi. Datang tepat waktu, rotinya masih mengepul.";
  } else {
    $("#ovenText").textContent = "Batch roti hari ini sudah keluar semua";
    $("#ovenSub").textContent = "Besok oven pertama menyala pukul " + fmtJam(DATA.oven[0]) + " WITA.";
  }
})();

/* jam buka */
(() => {
  const today = wita().getDay();
  $("#hours").innerHTML = [1,2,3,4,5,6,0].map(i => {
    const j = DATA.jam[i];
    return '<tr class="' + (i === today ? "today" : "") + '"><td>' + HARI[i] + (i === today ? " (hari ini)" : "") + "</td><td>" + (j ? fmtJam(j[0]) + " – " + fmtJam(j[1]) : "Tutup") + "</td></tr>";
  }).join("");
})();

/* pita berjalan */
(() => {
  const names = MENU.map(m => "<span>" + esc(m.nama) + "</span>").join("");
  $("#ribbon").innerHTML = names + names;
})();

/* kotak pesanan */
const cart = store.get("depatori-cart") || {};
const custom = store.get("depatori-custom") || {};
function cartItems(){
  return Object.entries(cart).filter(([, q]) => q > 0).map(([id, q]) => {
    const m = MENU.find(x => x.id === id) || custom[id];
    return m ? {id, q, nama:m.nama, harga:m.harga, unit:m.unit || "", sub:m.sub || ""} : null;
  }).filter(Boolean);
}
function setQty(id, q){
  cart[id] = Math.max(0, q);
  if (!cart[id]) { delete cart[id]; delete custom[id]; }
  store.set("depatori-cart", cart); store.set("depatori-custom", custom);
  renderCart(); renderMenuQty();
}
function renderCart(){
  const items = cartItems(), n = items.reduce((a, b) => a + b.q, 0);
  $("#cartCount").textContent = n;
  $("#lines").innerHTML = items.length ? items.map(i =>
    '<div class="line"><span class="nm">' + esc(i.nama) + '</span><span class="sub">' + rp(i.harga) + " " + esc(i.unit) + (i.sub ? " · " + esc(i.sub) : "") + '</span>' +
    '<span class="qtyctl"><button type="button" data-q="' + i.id + '" data-d="-1" aria-label="Kurangi ' + esc(i.nama) + '">−</button><b>' + i.q + '</b><button type="button" data-q="' + i.id + '" data-d="1" aria-label="Tambah ' + esc(i.nama) + '">+</button></span></div>'
  ).join("") : '<div class="empty"><svg width="80" height="80" viewBox="0 0 120 120" aria-hidden="true"><use href="#i-cupcake"/></svg><b>Kotak pesanan masih kosong</b><span>Tambahkan kue dari etalase dengan tombol +.</span></div>';
  $("#total").textContent = rp(items.reduce((a, b) => a + b.q * b.harga, 0));
  refreshWa();
}
function refreshWa(){
  const v = id => $("#" + id).value.trim(), items = cartItems();
  const lines = ["Halo " + DATA.nama + ", saya mau pesan:", ""];
  items.forEach(i => lines.push("• " + i.q + "x " + i.nama + (i.sub ? " (" + i.sub + ")" : "") + " = " + rp(i.q * i.harga)));
  if (!items.length) lines.push("(belum memilih kue)");
  lines.push("", "Perkiraan total: " + rp(items.reduce((a, b) => a + b.q * b.harga, 0)), "",
    "Nama: " + (v("oNama") || "-"),
    "Tanggal: " + (v("oTgl") ? new Date(v("oTgl") + "T00:00").toLocaleDateString("id-ID", {weekday:"long", day:"numeric", month:"long", year:"numeric"}) : "-") + " pukul " + (v("oJam") || "-"),
    "Pengambilan: " + v("oCara") + (v("oCara") === "Diantar" ? " ke " + (v("oAlamat") || "-") : ""));
  if (v("oCatatan")) lines.push("Catatan: " + v("oCatatan"));
  $("#sendWa").href = waBase + "?text=" + encodeURIComponent(lines.join("\n"));
}
(() => {
  const t = wita(), iso = t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  $("#oTgl").min = iso;
  const tm = new Date(t.getTime() + 86400000);
  $("#oTgl").value = tm.getFullYear() + "-" + String(tm.getMonth() + 1).padStart(2, "0") + "-" + String(tm.getDate()).padStart(2, "0");
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
    if (Number(b.dataset.d) > 0) { const f = $("#cartFab"); f.classList.remove("shake"); void f.offsetWidth; f.classList.add("shake"); }
  });
  renderCart();
})();

/* etalase menu */
let kat = store.get("depatori-kat") || "Semua";
function renderChips(){
  $("#chips").innerHTML = KATEGORI.map(k => '<button type="button" role="tab" class="chip' + (k === kat ? " on" : "") + '" aria-selected="' + (k === kat) + '" data-k="' + k + '">' + k + "</button>").join("");
}
function renderMenu(){
  const list = MENU.filter(m => kat === "Semua" || m.kat === kat);
  $("#grid").innerHTML = list.map((m, i) => {
    const vars = m.c ? Object.entries(m.c).map(([k, v]) => "--" + k + ":" + v).join(";") : "";
    return '<article class="item" style="animation-delay:' + i * 40 + 'ms">' +
      '<div class="item-art" style="--tint:' + m.tint + '">' + (m.badge ? '<span class="badge">' + esc(m.badge) + "</span>" : "") +
      '<svg viewBox="0 0 120 120" style="' + vars + '" aria-hidden="true"><use href="#i-' + m.ikon + '"/></svg></div>' +
      '<div class="item-body"><h3>' + esc(m.nama) + "</h3><p>" + esc(m.desc) + "</p>" +
      '<div class="item-foot"><span class="price">' + rp(m.harga) + " <small>" + esc(m.unit) + '</small></span><span class="ctl" data-ctl="' + m.id + '"></span></div></div></article>';
  }).join("");
  renderMenuQty();
}
function renderMenuQty(){
  $$("[data-ctl]").forEach(el => {
    const id = el.dataset.ctl, q = cart[id] || 0, nm = MENU.find(m => m.id === id).nama;
    el.innerHTML = q ? '<span class="qtyctl"><button type="button" data-q="' + id + '" data-d="-1" aria-label="Kurangi ' + esc(nm) + '">−</button><b>' + q + '</b><button type="button" data-q="' + id + '" data-d="1" aria-label="Tambah ' + esc(nm) + '">+</button></span>'
      : '<button type="button" class="add" data-q="' + id + '" data-d="1" aria-label="Tambah ' + esc(nm) + ' ke kotak pesanan"><svg class="lc" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></button>';
  });
}
$("#chips").addEventListener("click", e => {
  const b = e.target.closest("[data-k]"); if (!b) return;
  kat = b.dataset.k; store.set("depatori-kat", kat); renderChips(); renderMenu();
});
renderChips(); renderMenu();

/* rakit kue ulang tahun */
(() => {
  const groups = {optUkuran:["ukuran","radio"], optRasa:["rasa","radio"], optKrim:["krim","radio"], optHias:["hias","checkbox"]};
  Object.entries(groups).forEach(([el, [key, type]]) => {
    $("#" + el).innerHTML = RAKIT[key].map((o, i) =>
      '<label class="opt"><input type="' + type + '" name="' + key + '" value="' + i + '"' + ((type === "radio" && i === (key === "ukuran" ? 1 : 0)) || (key === "hias" && i === 0) ? " checked" : "") + ">" +
      "<span>" + (o.w ? '<i class="sw" style="background:' + o.w + '"></i>' : "") + esc(o.v) + (o.h && key === "hias" ? " +" + (o.h / 1000) + "rb" : o.h ? " · " + rp(o.h) : "") + "</span></label>").join("");
  });
  const f = $("#builder");
  function state(){
    const pick = n => RAKIT[n][Number((f.querySelector('input[name="' + n + '"]:checked') || {}).value || 0)];
    const hias = $$('input[name="hias"]:checked', f).map(i => RAKIT.hias[i.value]);
    const tulis = $("#bTulisan").value.trim();
    return {u:pick("ukuran"), r:pick("rasa"), k:pick("krim"), hias, tulis, harga:pick("ukuran").h + hias.reduce((a, b) => a + b.h, 0)};
  }
  function draw(){
    const s = state();
    $("#bSponge").setAttribute("fill", s.r.w);
    $("#bTop").setAttribute("fill", s.k.w);
    $$(".bCream").forEach(c => c.setAttribute("fill", s.k.w));
    $("#bScale").style.transform = "scale(" + s.u.s + ")";
    RAKIT.hias.forEach(h => $("#" + h.g).setAttribute("opacity", s.hias.includes(h) ? 1 : 0));
    const t = $("#bText");
    t.textContent = s.tulis || " ";
    t.setAttribute("fill", s.r.v === "Vanila" || s.r.v === "Pandan" ? "#5A2E1E" : "#FFF8EE");
    t.setAttribute("font-size", s.tulis.length > 18 ? 28 : 34);
    $("#bPrice").textContent = rp(s.harga);
  }
  f.addEventListener("input", draw);
  f.addEventListener("submit", e => {
    e.preventDefault();
    const s = state(), id = "custom-" + Date.now().toString(36);
    custom[id] = {nama:"Kue Ulang Tahun Custom " + s.u.v, harga:s.harga, unit:"",
      sub:[s.r.v, "krim " + s.k.v.toLowerCase(), s.hias.map(h => h.v.toLowerCase()).join(" + ") || "tanpa hiasan", s.tulis ? 'tulisan "' + s.tulis + '"' : ""].filter(Boolean).join(", ")};
    setQty(id, 1);
    const b = $("#bAdd"), old = b.innerHTML;
    b.textContent = "Masuk ke kotak pesanan ✓"; setTimeout(() => b.innerHTML = old, 1800);
    const fab = $("#cartFab"); fab.classList.remove("shake"); void fab.offsetWidth; fab.classList.add("shake");
  });
  draw();
})();

/* ulasan */
(() => {
  const C = ["#FFD979","#A9D394","#FFB3C6","#B6E3CF"];
  $("#rvTrack").innerHTML = ULASAN.map((u, i) =>
    '<figure class="rv" style="margin:0"><span class="stars" aria-label="' + u.n + ' dari 5 bintang">' + "★".repeat(u.n) + "☆".repeat(5 - u.n) + "</span><q>" + esc(u.isi) + "</q>" +
    '<figcaption class="rv-who"><span class="av" style="background:' + C[i % C.length] + '">' + esc(u.nama.replace("Contoh: ", "")[0]) + "</span><span>" + esc(u.nama) + "<small>" + esc(u.ket) + "</small></span></figcaption></figure>"
  ).join("");
  $("#sampleFlag").hidden = !DATA.ulasanContoh;
  // geser otomatis pelan, berhenti saat disentuh
  const tr = $("#rvTrack");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let paused = false;
  ["pointerenter","focusin","touchstart"].forEach(ev => tr.addEventListener(ev, () => paused = true, {passive:true}));
  ["pointerleave","focusout"].forEach(ev => tr.addEventListener(ev, () => paused = false));
  setInterval(() => {
    if (paused) return;
    const card = tr.firstElementChild; if (!card) return;
    const step = card.offsetWidth + 18;
    tr.scrollTo({left: tr.scrollLeft + step >= tr.scrollWidth - tr.clientWidth + 4 ? 0 : tr.scrollLeft + step, behavior:"smooth"});
  }, 4500);
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
