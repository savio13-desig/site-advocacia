/* Dados do escritório. Para vender a outro advogado, troque só este arquivo. Tudo aqui é fictício.
   Publicidade da advocacia: conteúdo informativo, sem preços, sem gratuidade, sem promessa de
   resultado e sem depoimentos de clientes (Código de Ética e Provimento 205/2021 do CFOAB).
   Confirmar as regras da seccional da OAB do cliente antes de publicar. */
window.ESCRITORIO = {
  marca: "Andrade Ribeiro Advocacia",
  curto: "Andrade Ribeiro",
  registro: "Sociedade de Advogados · registro OAB/SP nº 00.000",
  whatsapp: "5511999999999",   // WhatsApp que recebe os contatos (DDI+DDD+número)
  telefone: "(11) 3000-0000",
  email: "contato@andraderibeiro.exemplo",
  endereco: "Av. Exemplo, 1000, conj. 52 · Vila Mariana, São Paulo/SP",
  horario: "Segunda a sexta, das 9h às 18h",
  atendimento: "Presencial com hora marcada e online",
  headline: "Advocacia com escuta atenta e linguagem clara.",
  sub: "Atuação em Direito de Família, Consumidor, Trabalhista, Imobiliário e Contratos, com atendimento em São Paulo e online.",
  advogados: [
    { nome: "Dra. Helena Andrade", oab: "OAB/SP 000.000", foco: "Família e Sucessões · Contratos", bio: "Advogada há 14 anos, pós-graduada em Direito de Família e Sucessões. Atua em divórcios, inventários e planejamento sucessório." },
    { nome: "Dr. Rodrigo Ribeiro", oab: "OAB/SP 000.001", foco: "Consumidor · Trabalhista · Imobiliário", bio: "Advogado há 11 anos, com atuação em relações de consumo, direito do trabalho e contratos imobiliários." }
  ],
  areas: [
    { id: "familia", nome: "Direito de Família e Sucessões", resumo: "Orientação em momentos delicados, com sigilo e cuidado.", topicos: ["Divórcio e dissolução de união estável", "Guarda, convivência e pensão alimentícia", "Inventário e partilha de bens", "Testamento e planejamento sucessório"],
      reuna: ["Documentos pessoais", "Certidão de casamento ou nascimento", "Documentos dos bens envolvidos", "Comprovantes de renda, se houver pensão em discussão"] },
    { id: "consumidor", nome: "Direito do Consumidor", resumo: "Relações de consumo com bancos, lojas, operadoras e prestadores.", topicos: ["Cobranças indevidas e negativação", "Produto ou serviço com defeito", "Cancelamento e rescisão de contratos", "Planos de saúde e telefonia"],
      reuna: ["Contrato ou comprovante da compra", "Protocolos de atendimento", "Prints, e-mails e mensagens", "Notas fiscais e faturas"] },
    { id: "trabalhista", nome: "Direito do Trabalho", resumo: "Orientação a trabalhadores e empresas sobre direitos e obrigações.", topicos: ["Verbas rescisórias", "Jornada e horas extras", "Reconhecimento de vínculo", "Acordos e rescisões"],
      reuna: ["Carteira de trabalho", "Contracheques e termo de rescisão", "Contrato de trabalho", "Comprovantes e mensagens relacionadas ao caso"] },
    { id: "imobiliario", nome: "Direito Imobiliário", resumo: "Segurança jurídica em compra, venda, locação e regularização.", topicos: ["Compra e venda de imóveis", "Locação residencial e comercial", "Usucapião e regularização", "Análise de contratos e documentação"],
      reuna: ["Matrícula do imóvel", "Contrato ou proposta", "Documentos das partes", "Comprovantes de pagamento"] },
    { id: "contratos", nome: "Contratos e Pequenas Empresas", resumo: "Contratos claros para prevenir conflitos no dia a dia do negócio.", topicos: ["Elaboração e revisão de contratos", "Constituição e alterações societárias", "Cobrança e recuperação de crédito", "Assessoria jurídica preventiva"],
      reuna: ["Contrato social, se houver", "Minuta ou contrato em discussão", "Documentos das partes", "Histórico de conversas e cobranças"] }
  ],
  passos: [
    { t: "Contato inicial", d: "Você escolhe o canal: WhatsApp, telefone ou formulário. Informe apenas o necessário, sem documentos sigilosos." },
    { t: "Análise preliminar", d: "Um advogado do escritório lê o seu pedido e retorna para agendar a reunião." },
    { t: "Reunião e orientação", d: "Na reunião, presencial ou online, o caso é analisado em detalhes e os caminhos possíveis são explicados." },
    { t: "Contratação formal", d: "Se houver a contratação, as condições são formalizadas em contrato escrito, com transparência sobre o trabalho e os honorários." }
  ],
  artigos: [
    { t: "Inventário extrajudicial: quando é possível?", area: "Família e Sucessões", data: "2026-09-12",
      p: ["O inventário pode ser feito em cartório, por escritura pública, quando todos os herdeiros são maiores de idade e capazes e estão de acordo quanto à partilha. Em regra, o ato exige a presença de advogado, que assessora as partes.",
          "Quando há herdeiro menor ou incapaz, ou quando existe discordância entre os herdeiros, o caminho costuma ser o judicial. Cada caso tem particularidades, como a existência de testamento e a situação dos bens, por isso a análise individual é importante."] },
    { t: "Compras pela internet: o direito de arrependimento", area: "Consumidor", data: "2026-08-27",
      p: ["O Código de Defesa do Consumidor (art. 49) prevê que o consumidor pode desistir de compras feitas fora do estabelecimento comercial, como pela internet ou por telefone, no prazo de 7 dias, contados da assinatura do contrato ou do recebimento do produto. Nesse caso, os valores pagos devem ser devolvidos.",
          "Essa regra trata da desistência. Produtos com defeito seguem prazos próprios do CDC. Vale guardar comprovantes, e-mails e capturas de tela da compra."] },
    { t: "Prazos para reclamar na Justiça do Trabalho", area: "Trabalhista", data: "2026-08-10",
      p: ["Depois do término do contrato de trabalho, o empregado tem até 2 anos para ingressar com a ação. Dentro desse prazo, pode discutir direitos dos últimos 5 anos, contados do ajuizamento, conforme o art. 7º, XXIX, da Constituição Federal.",
          "Os prazos são contados com rigor. Por isso, quem tem dúvida sobre um direito deve buscar orientação jurídica sem demora."] }
  ],
  faq: [
    { q: "Como funciona o primeiro contato?", a: "Você pode falar pelo WhatsApp, telefone ou formulário do site. Um advogado do escritório analisa o pedido e retorna para agendar uma reunião, presencial ou online." },
    { q: "O que levar para a reunião?", a: "Documentos pessoais e todos os papéis ligados ao caso: contratos, comprovantes, notificações, mensagens e protocolos. Cada área tem uma lista de sugestões na seção de atuação." },
    { q: "Os honorários são combinados como?", a: "Os honorários são definidos em contrato escrito, de acordo com a complexidade do caso e com a tabela de referência da OAB, e informados na reunião, antes de qualquer contratação." },
    { q: "O que eu conto é sigiloso?", a: "Sim. O sigilo profissional é dever do advogado, previsto no Estatuto da Advocacia e no Código de Ética. Mesmo assim, evite enviar documentos ou detalhes sensíveis pelo formulário do site." },
    { q: "Atendem de fora de São Paulo?", a: "Sim, por videochamada, com documentos enviados por meios digitais. Algumas atuações podem exigir presença em audiências." },
    { q: "Posso saber quanto tempo vai levar o meu caso?", a: "Cada caso é diferente e depende de fatores que fogem ao controle do escritório, como a atuação do Judiciário. Na reunião, o advogado explica as etapas e as estimativas possíveis, sem prometer resultados." }
  ],
  aviso: "Este site tem caráter exclusivamente informativo e não constitui oferta de serviços, promessa de resultado ou captação de clientela, em conformidade com o Código de Ética e Disciplina e o Provimento 205/2021 do Conselho Federal da OAB. O conteúdo não substitui consulta jurídica individual."
};
