/* 
fetch = ferramenta para se comunicar com algo fora do código.
function async é usado para quando vamos buscar dados externos, passando um tempo de espera
 dentro do fetch
*/

let webhook =
  "https://n8ncatarina.catarinaleal.site/webhook-test/90fceddf-3780-464a-b9aa-d44135944948";
/* 
url de teste = https://n8ncatarina.catarinaleal.site/webhook-test/90fceddf-3780-464a-b9aa-d44135944948
url de prod = "https://n8nwebhook.catarinaleal.site/webhook/90fceddf-3780-464a-b9aa-d44135944948";
*/

async function createCss() {
  let textoInput = document.querySelector(".input-animacao").value;
  let code = document.querySelector(".area-codigo");
  let spaceResult = document.querySelector(".area-resultado");

  let response = await fetch(webhook, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pergunta: textoInput }),
  });

  let result = await response.json();

  let info = JSON.parse(result.resposta);

  code.innerHTML = info.code;
  spaceResult.innerHTML = info.preview;

  document.head.insertAdjacentHTML(
    "beforeend",
    `<style> ${info.style}</style>`
  );
}
