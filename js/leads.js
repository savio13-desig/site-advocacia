/* Solicitações de contato. Na amostra ficam no navegador (localStorage);
   em produção, esta camada envia para um banco seguro, e-mail ou sistema do escritório. */
window.Leads = (function () {
  "use strict";
  var K = "adv-contatos:v1";
  function ler() { try { var v = JSON.parse(localStorage.getItem(K)); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function gravar(l) { try { localStorage.setItem(K, JSON.stringify(l)); } catch (e) {} }
  var STATUS = ["nova", "analise", "reuniao", "contratada", "encerrada"];
  var ROTULO = { nova: "Nova", analise: "Em análise", reuniao: "Reunião marcada", contratada: "Contratação", encerrada: "Encerrada" };
  var api = {
    STATUS: STATUS, ROTULO: ROTULO,
    lista: ler,
    add: function (l) {
      var a = ler(); l.id = a.reduce(function (m, x) { return Math.max(m, x.id); }, 0) + 1;
      l.status = "nova"; l.hora = new Date().toISOString(); a.push(l); gravar(a); return l;
    },
    status: function (id, s) { var a = ler(); a.forEach(function (x) { if (x.id === id) x.status = s; }); gravar(a); },
    remover: function (id) { gravar(ler().filter(function (x) { return x.id !== id; })); },
    limpar: function () { try { localStorage.removeItem(K); } catch (e) {} },
    exemplo: function () {
      [["Fábio Nogueira", "11977770001", "consumidor", true, "triagem", "Triagem: Direito do Consumidor · recebeu citação ou intimação · prefere online", "nova"],
       ["Juliana Prado", "11977770002", "familia", false, "triagem", "Triagem: Família e Sucessões · ainda sem prazo · prefere presencial", "analise"],
       ["Marcelo Antunes", "11977770003", "trabalhista", false, "formulario", "Dúvida sobre verbas rescisórias.", "reuniao"],
       ["Patrícia Souza", "11977770004", "imobiliario", false, "triagem", "Triagem: Imobiliário · ainda sem prazo · tanto faz", "contratada"],
       ["Lucas Ferraz", "11977770005", "contratos", false, "whatsapp", "", "encerrada"]].forEach(function (n) {
        var l = api.add({ nome: n[0], tel: n[1], area: n[2], urgente: n[3], origem: n[4], obs: n[5] }); api.status(l.id, n[6]);
      });
    },
    aoMudar: function (fn) { window.addEventListener("storage", function (e) { if (!e.key || e.key === K) fn(); }); }
  };
  return api;
})();
