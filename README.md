# Site para escritório de advocacia (amostra novapicks)

Demonstração para vender a advogados e sociedades de advogados. HTML, CSS e JavaScript puros, sem build e sem servidor. Escritório, advogados, registros e textos são fictícios ("Andrade Ribeiro Advocacia").

## Publicidade da advocacia
O site foi montado para seguir a linha do Código de Ética e Disciplina e do Provimento 205/2021 do Conselho Federal da OAB: conteúdo informativo, sem preços, sem gratuidade ou promoção, sem promessa de resultado, sem depoimentos de clientes e com aviso de caráter informativo no rodapé. **Isto não é parecer jurídico.** As regras podem ter detalhes na seccional de cada estado, e o texto final deve ser revisado com o advogado responsável antes de publicar.

## Páginas
- `index.html` — site do escritório: áreas de atuação (com temas e documentos úteis), equipe com número da OAB, como funciona o atendimento, **triagem de 3 perguntas** que direciona o contato à área certa e destaca quem tem prazo correndo, artigos informativos, perguntas frequentes, contato e formulário com autorização LGPD. Barra fixa de WhatsApp no celular.
- `leads.html` — painel do escritório: solicitações com área, origem e situação (nova, em análise, reunião, contratação, encerrada), destaque para prazos correndo, WhatsApp com mensagem pronta e exportação CSV.
- `cartao.html` — cartão digital: WhatsApp, e-mail, site, **salvar contato no celular (.vcf)** e QR do site, com impressão.
- `apresentacao.html` — proposta comercial para o advogado (valores de exemplo), com o que o site faz e evita.

## Medição de anúncios
O formulário e a triagem disparam eventos em `window.dataLayer` (`generate_lead` e `triagem_complete`, com origem e área). Basta instalar o Google Tag Manager ou o Pixel da Meta para medir contatos. Nenhum rastreador é carregado na amostra. Anúncios pagos de advogados também seguem as regras da OAB.

## Adaptar para outro escritório
Edite `js/dados.js` (marca, registro, advogados e OAB, contato, áreas, passos, artigos, perguntas e aviso) e as cores em `css/estilo.css` (`:root`). As perguntas da triagem ficam em `js/app.js` (`perguntas`). Artigos de exemplo são genéricos e informativos: em cliente real, o advogado deve revisar e assinar o conteúdo.

## Rodar local
```
python -m http.server 8769
```
Abra http://localhost:8769/apresentacao.html

## Limitações desta amostra
- As solicitações ficam no navegador (localStorage, em `js/leads.js`). O site e o painel só se enxergam no mesmo aparelho e navegador. A versão final grava num banco seguro, avisa o escritório por e-mail ou WhatsApp e coloca login no painel, com cuidado de LGPD e sigilo profissional.
- `vendor/qrcode.js`: qrcode-generator 1.4.4 (Kazuhiko Arase, licença MIT).
