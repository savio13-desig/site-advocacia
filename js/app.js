/* Site de escritório de advocacia: monta as seções a partir de js/dados.js, com triagem e formulários. */
(function () {
  "use strict";
  var E = window.ESCRITORIO;
  var $ = function (s) { return document.querySelector(s); };
  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var zap = function (msg) { return "https://wa.me/" + E.whatsapp + "?text=" + encodeURIComponent(msg); };
  function area(id) { return E.areas.filter(function (a) { return a.id === id; })[0]; }
  function iniciais(n) { return n.replace(/^(Dra?\.)\s*/, "").split(" ").map(function (x) { return x.charAt(0); }).slice(0, 2).join(""); }
  function dataBr(s) { return s.split("-").reverse().join("/"); }
  function evento(nome, dados) { window.dataLayer = window.dataLayer || []; window.dataLayer.push(Object.assign({ event: nome }, dados)); } // pronto para Tag Manager / Pixel

  /* ---------- seções fixas ---------- */
  function montar() {
    document.title = E.marca + " · São Paulo";
    $("#n-marca").textContent = E.marca;
    $("#h-et").textContent = "Advocacia · São Paulo e online";
    $("#h-titulo").textContent = E.headline;
    $("#h-sub").textContent = E.sub;
    $("#h-reg").textContent = E.registro;
    $("#h-zap").href = zap("Olá! Gostaria de falar com o escritório " + E.curto + ".");
    $("#b-zap").href = $("#h-zap").href;
    $("#areas-lista").innerHTML = E.areas.map(function (a) {
      return "<details><summary>" + esc(a.nome) + '</summary><div class="det-corpo"><p>' + esc(a.resumo) + '</p><div class="duas-col"><div><h3>Temas</h3><ul>' + a.topicos.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
        '</ul></div><div><h3>Sugestão de documentos</h3><ul>' + a.reuna.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div></div></div></details>";
    }).join("");
    $("#e-txt").textContent = E.registro + ". " + E.atendimento + ".";
    $("#adv-lista").innerHTML = E.advogados.map(function (a) {
      return '<div class="cartao adv"><span class="avatar" aria-hidden="true">' + esc(iniciais(a.nome)) + "</span><div><h3>" + esc(a.nome) + '</h3><p class="oab">' + esc(a.oab) + " · " + esc(a.foco) + "</p><p>" + esc(a.bio) + "</p></div></div>";
    }).join("");
    $("#passos").innerHTML = E.passos.map(function (p, i) { return '<div class="cartao passo"><div class="n" aria-hidden="true">' + (i + 1) + "</div><h3>" + esc(p.t) + "</h3><p>" + esc(p.d) + "</p></div>"; }).join("");
    $("#art-lista").innerHTML = E.artigos.map(function (a) {
      return "<details><summary>" + esc(a.t) + '</summary><div class="det-corpo"><p class="meta">' + esc(a.area) + " · " + dataBr(a.data) + "</p>" + a.p.map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("") + '<p class="meta">Conteúdo informativo. Não substitui consulta jurídica individual.</p></div></details>';
    }).join("");
    $("#faq").innerHTML = E.faq.map(function (f) { return "<details><summary>" + esc(f.q) + '</summary><div class="det-corpo"><p>' + esc(f.a) + "</p></div></details>"; }).join("");
    $("#c-info").innerHTML = "<b>" + esc(E.endereco) + "</b><br>" + esc(E.telefone) + " · " + esc(E.email) + "<br>" + esc(E.horario);
    $("#f-nome").textContent = E.marca + " · " + E.registro + " · " + E.endereco;
    $("#f-aviso").textContent = E.aviso;
  }

  /* ---------- formulário (topo, triagem e fim) ---------- */
  var seq = 0;
  function formHtml(rotulo, completo) {
    var n = ++seq;
    return '<form class="f" novalidate data-n="' + n + '"><label for="fn' + n + '" style="margin-top:0">Seu nome</label><input type="text" id="fn' + n + '" autocomplete="name" maxlength="60">' +
      '<label for="ft' + n + '">WhatsApp</label><input type="tel" id="ft' + n + '" autocomplete="tel" inputmode="tel" placeholder="(11) 99999-9999" maxlength="16">' +
      (completo ? '<label for="fa' + n + '">Área do assunto</label><select id="fa' + n + '"><option value="">Ainda não sei</option>' + E.areas.map(function (a) { return '<option value="' + a.id + '">' + esc(a.nome) + "</option>"; }).join("") + "</select>" +
        '<label for="fm' + n + '">Assunto, em poucas palavras (opcional)</label><textarea id="fm' + n + '" rows="3" maxlength="300" placeholder="Sem dados sigilosos ou documentos"></textarea>' : "") +
      '<label class="opc"><input type="checkbox" id="fo' + n + '"><span>Concordo com o tratamento dos meus dados para que o escritório retorne o contato (LGPD). Entendo que este formulário não deve receber informações sigilosas.</span></label>' +
      '<p class="erro" id="fe' + n + '" role="alert" hidden></p><p style="margin:var(--e3) 0 0"><button class="btn btn-prim" type="submit" style="width:100%">' + esc(rotulo) + "</button></p></form>";
  }
  function ligarForm(caixa, ctx) {
    var f = caixa.querySelector("form"), n = f.dataset.n;
    function g(id) { return $("#" + id + n); }
    g("ft").addEventListener("input", function () {
      var d = this.value.replace(/\D/g, "").slice(0, 11), c = d.length > 10 ? 7 : 6, r = d;
      if (d.length > 2) r = "(" + d.slice(0, 2) + ") " + d.slice(2, c) + (d.length > c ? "-" + d.slice(c) : "");
      this.value = r;
    });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = g("fn").value.trim(), tel = g("ft").value.replace(/\D/g, ""), er = g("fe");
      function falha(t, el) { er.textContent = t; er.hidden = false; el.focus(); }
      if (nome.length < 2) return falha("Informe seu nome.", g("fn"));
      if (tel.length < 10) return falha("Informe um WhatsApp com DDD.", g("ft"));
      if (!g("fo").checked) return falha("Precisamos da sua autorização para retornar o contato.", g("fo"));
      var c = typeof ctx === "function" ? ctx() : ctx || {}, sel = g("fa"), msg = g("fm");
      var obs = c.obs || (msg ? msg.value.trim() : "");
      var l = Leads.add({ nome: nome, tel: tel, area: c.area || (sel ? sel.value : ""), urgente: !!c.urgente, origem: c.origem || "formulario", obs: obs });
      evento("generate_lead", { origem: l.origem, area: l.area });
      var texto = "Olá! Sou " + nome + " e preenchi o formulário do site do escritório " + E.curto + "." + (l.area ? " Assunto: " + area(l.area).nome + "." : "");
      caixa.innerHTML = '<div class="sucesso" role="status"><h3>Solicitação recebida</h3><p>Obrigado, ' + esc(nome.split(" ")[0]) + ". O escritório entrará em contato" + (c.urgente ? " com prioridade" : " em breve") + " para agendar a reunião. Se preferir, fale agora pelo WhatsApp:</p>" +
        '<p><a class="btn btn-ouro" target="_blank" rel="noopener" href="' + zap(texto) + '">Falar pelo WhatsApp</a></p></div>';
    });
  }
  function formularios() {
    document.querySelectorAll("[data-form]").forEach(function (c) {
      c.innerHTML = formHtml(c.dataset.rotulo, !!c.dataset.completo);
      ligarForm(c, { origem: c.dataset.origem });
    });
  }

  /* ---------- triagem ---------- */
  var perguntas = [
    { t: "Sobre o que é o seu assunto?", o: E.areas.map(function (a) { return [a.id, a.nome]; }).concat([["nao", "Ainda não sei"]]) },
    { t: "Existe algum prazo ou documento judicial?", o: [["urg", "Recebi citação, intimação ou notificação"], ["aud", "Há uma audiência ou prazo marcado"], ["nao", "Não, quero me informar"]] },
    { t: "Como prefere ser atendido?", o: [["presencial", "Presencial"], ["online", "Online, por videochamada"], ["tanto", "Tanto faz"]] }
  ];
  var ROT_PRAZO = { urg: "recebeu citação, intimação ou notificação", aud: "há audiência ou prazo marcado", nao: "sem prazo no momento" };
  var ROT_CANAL = { presencial: "prefere presencial", online: "prefere online", tanto: "tanto faz" };
  var quiz = { passo: 0, resp: [] };
  function desenharQuiz() {
    var box = $("#quiz");
    if (quiz.passo < perguntas.length) {
      var q = perguntas[quiz.passo];
      box.innerHTML = '<div class="quiz-prog" aria-hidden="true">' + perguntas.map(function (x, i) { return '<i class="' + (i <= quiz.passo ? "ok" : "") + '"></i>'; }).join("") + "</div><h3>" + esc(q.t) + '</h3><div class="opcoes">' +
        q.o.map(function (o) { return '<button class="opcao" data-v="' + o[0] + '" type="button">' + esc(o[1]) + "</button>"; }).join("") + "</div>" +
        (quiz.passo ? '<p style="margin:var(--e2) 0 0"><button class="btn btn-contorno btn-pequeno" data-voltar type="button">Voltar</button></p>' : "");
      return;
    }
    var a = area(quiz.resp[0]), urgente = quiz.resp[1] !== "nao";
    var resumo = "Triagem: " + (a ? a.nome : "área não definida") + " · " + ROT_PRAZO[quiz.resp[1]] + " · " + ROT_CANAL[quiz.resp[2]] + ".";
    box.innerHTML = (urgente ? '<div class="alerta" role="alert"><b>Atenção aos prazos.</b> Citações, intimações e audiências têm prazos legais. Procure atendimento o quanto antes, sem esperar.</div>' : "") +
      '<div class="resultado"><p class="sobretitulo" style="color:var(--ouro)">Encaminhamento sugerido</p><h3>' + (a ? esc(a.nome) : "Análise do caso pela equipe") + "</h3><p>" +
      (a ? esc(a.resumo) + "</p><p><b>Documentos que costumam ajudar:</b></p><ul style=\"padding-left:20px\">" + a.reuna.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "Sem problema. A equipe analisa o seu pedido e indica a área mais adequada.</p>") +
      '<p class="meta" style="color:#e6dccb">Orientação inicial, sem caráter de parecer jurídico.</p></div><div class="cartao-lead" style="margin-top:var(--e3);box-shadow:none;border:1px solid var(--borda-suave)"><h2>Solicitar contato</h2><p>O escritório retorna para agendar uma reunião.</p><div id="quiz-form"></div></div>' +
      '<p style="margin:var(--e2) 0 0"><button class="btn btn-contorno btn-pequeno" data-refazer type="button">Refazer</button></p>';
    var c = $("#quiz-form"); c.innerHTML = formHtml("Solicitar contato", false);
    ligarForm(c, { origem: "triagem", area: a ? a.id : "", urgente: urgente, obs: resumo });
    evento("triagem_complete", { area: a ? a.id : "nao", urgente: urgente });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b.classList.contains("opcao")) { quiz.resp[quiz.passo] = b.dataset.v; quiz.passo++; desenharQuiz(); }
    else if ("voltar" in b.dataset) { quiz.passo = Math.max(0, quiz.passo - 1); desenharQuiz(); }
    else if ("refazer" in b.dataset) { quiz = { passo: 0, resp: [] }; desenharQuiz(); }
  });

  montar(); formularios(); desenharQuiz();
})();
