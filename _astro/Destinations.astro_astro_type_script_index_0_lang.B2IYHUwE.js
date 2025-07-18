document.addEventListener("DOMContentLoaded",function(){const c=document.querySelectorAll(".pax-dropdown"),r="6285936645589",l="6289653750433";function u(t,n){const e=encodeURIComponent(n);return`https://wa.me/${t}?text=${e}`}function p(t,n,e){return`Halo Admin! 👋

Saya tertarik untuk booking paket wisata:
🏖️ *${t}*
👥 Jumlah Peserta: *${n}*
💰 Harga: *${e}*

Mohon informasi lebih lanjut untuk proses booking. Terima kasih! 🙏`}c.forEach(t=>{t.addEventListener("change",function(){const n=this.dataset.destinationId,e=this.options[this.selectedIndex],o=document.querySelector(`.selected-price[data-destination-id="${n}"]`),i=document.querySelectorAll(`button[data-destination-id="${n}"]`);if(e.value==="")o.textContent="Pilih jumlah pax",o.classList.add("empty"),i.forEach(a=>{a.disabled=!0,a.onclick=null});else{const a=e.dataset.pax,d=e.dataset.price;o.textContent=`${a} - ${d}`,o.classList.remove("empty");const m=t.closest(".destination-card").querySelector("h3").textContent,h=p(m,a,d);i.forEach(s=>{s.disabled=!1;const f=s.dataset.admin==="1"?r:l,k=u(f,h);s.onclick=function(){window.open(k,"_blank","noopener,noreferrer")}})}})})});
