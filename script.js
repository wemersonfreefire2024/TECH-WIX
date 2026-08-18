// ================================
// CONFIGURAÇÃO DA TECH WIX
// Troque pelo número do WhatsApp da loja.
// Formato: 55 + DDD + número, somente números.
// Exemplo: 5598991395194
// ================================
const WHATSAPP = "5598991395194";

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn?.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});

document.getElementById("quoteForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const device = document.getElementById("device").value.trim();
  const problem = document.getElementById("problem").value.trim();

  const message =
`Olá, TECH WIX! 👋

Gostaria de solicitar um orçamento.

Nome: ${name}
WhatsApp: ${phone}
Aparelho: ${device}

Problema:
${problem}`;

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
