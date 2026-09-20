/* ══════════════════════════════════════════════════════════════════
   STAR STUDIO'S — MAIN JAVASCRIPT
   Handles: i18n, dark/light theme, navbar, accordion, contact form
   ══════════════════════════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────────────────────────
   TRANSLATIONS
   ──────────────────────────────────────────────────────────────── */
const I18N = {
  es: {
    "nav.home": "Inicio",
    "nav.portfolio": "Productos",
    "nav.testimonials": "Clientes",
    "nav.terms": "Términos",
    "nav.contact": "Contacto",

    "hero.badge": "Estudio Digital",
    "hero.title": "Ingeniería digital\ny diseño sin atajos.",
    "hero.subtitle": "Construimos páginas web a medida, bots de Discord de alto rendimiento y piezas de diseño que comunican con precisión. Sin templates. Sin compromisos.",
    "hero.cta_primary": "Iniciar Proyecto",
    "hero.cta_secondary": "Ver Productos",
    "hero.service1": "Páginas Web",
    "hero.service2": "Bots de Discord",
    "hero.service3": "Diseño Gráfico",

    "portfolio.label": "Nuestros Productos",
    "portfolio.title": "Productos",
    "portfolio.desc": "Productos seleccionados que demuestran nuestra precisión técnica y criterio estético.",
    "portfolio.tag_web": "Página Web",
    "portfolio.tag_bot": "Bot Discord",
    "portfolio.tag_design": "Diseño",
    "portfolio.p1_title": "Proyecto Web Premium",
    "portfolio.p1_desc": "Sitio corporativo con diseño a medida y CMS personalizado.",
    "portfolio.p2_title": "Bot de Moderación",
    "portfolio.p2_desc": "Sistema automatizado con panel de control y logs avanzados.",
    "portfolio.p3_title": "Identidad Visual",
    "portfolio.p3_desc": "Branding completo con guía de estilo y assets digitales.",
    "portfolio.p4_title": "Landing de Producto",
    "portfolio.p4_desc": "Página de conversión optimizada con animaciones fluidas.",
    "portfolio.p5_title": "Bot de Economía",
    "portfolio.p5_desc": "Sistema de moneda virtual con tienda integrada y rankings.",
    "portfolio.p6_title": "Assets para Discord",
    "portfolio.p6_desc": "Pack completo de banners, iconos y elementos visuales.",

    "testimonials.label": "Clientes",
    "testimonials.title": "Lo que dicen",
    "testimonials.desc": "Opiniones reales de quienes han confiado en Star Studio's.",
    "t1.text": '"Entregaron un bot de Discord completamente personalizado en tiempo récord. El nivel de detalle y la calidad superaron mis expectativas. Comunicación impecable durante todo el proceso."',
    "t1.project": "Bot de Moderación Premium",
    "t2.text": '"Mi página web quedó exactamente como la visualicé, y hasta mejor. El diseño es limpio, profesional y rápido. Definitivamente vuelvo para mis próximos proyectos."',
    "t2.project": "Sitio Web Corporativo",
    "t3.text": '"El branding que desarrollaron para mi comunidad de Discord es exactamente lo que buscaba. Serios, creativos y con mucho criterio estético. 100% recomendados."',
    "t3.project": "Identidad Visual & Assets",

    "terms.label": "Legal",
    "terms.title": "Términos y Condiciones",
    "terms.desc": "El uso de nuestros servicios implica la aceptación plena de los siguientes términos.",

    "contact.label": "Contacto",
    "contact.title": "Inicia tu Proyecto",
    "contact.desc": "Completa el formulario y nos pondremos en contacto a la brevedad. Cada solicitud es revisada personalmente por nuestro equipo.",
    "contact.notice_title": "Verificación de Identidad",
    "contact.notice_text": "Es responsabilidad del cliente verificar que se está comunicando con los canales y cuentas oficiales de Star Studio's antes de realizar cualquier pago o transferencia.",
    "contact.security_title": "Seguridad",
    "contact.security_text": "Nunca solicitamos pagos fuera de canales oficiales de ticket. Ante cualquier sospecha de suplantación, no realices ningún pago.",

    "form.name_label": "Nombres y Apellidos",
    "form.name_placeholder": "Tu nombre completo",
    "form.name_error": "Por favor ingresa tu nombre completo.",
    "form.phone_label": "Número de Teléfono",
    "form.phone_placeholder": "+57 300 000 0000 / Tu número",
    "form.phone_error": "Por favor ingresa tu número de teléfono.",
    "form.message_label": "Consulta / Pedido",
    "form.message_placeholder": "Describe tu proyecto o consulta con el mayor detalle posible...",
    "form.message_error": "Por favor describe tu consulta o pedido.",
    "form.submit": "Enviar Solicitud",
    "form.success_title": "Mensaje enviado",
    "form.error_global": "Error",

    "footer.tagline": "Ingeniería digital y diseño sin atajos.",
    "footer.nav_title": "Navegación",
    "footer.services_title": "Servicios",
    "footer.rights": "Todos los derechos reservados.",
  },

  en: {
    "nav.home": "Home",
    "nav.portfolio": "Products",
    "nav.testimonials": "Clients",
    "nav.terms": "Terms",
    "nav.contact": "Contact",

    "hero.badge": "Digital Studio",
    "hero.title": "Digital engineering\nand design, no shortcuts.",
    "hero.subtitle": "We build custom websites, high-performance Discord bots, and design work that communicates with precision. No templates. No compromises.",
    "hero.cta_primary": "Start a Project",
    "hero.cta_secondary": "View Products",
    "hero.service1": "Websites",
    "hero.service2": "Discord Bots",
    "hero.service3": "Graphic Design",

    "portfolio.label": "Our Products",
    "portfolio.title": "Products",
    "portfolio.desc": "Selected products that demonstrate our technical precision and aesthetic judgment.",
    "portfolio.tag_web": "Website",
    "portfolio.tag_bot": "Discord Bot",
    "portfolio.tag_design": "Design",
    "portfolio.p1_title": "Premium Web Project",
    "portfolio.p1_desc": "Corporate site with custom design and personalized CMS.",
    "portfolio.p2_title": "Moderation Bot",
    "portfolio.p2_desc": "Automated system with control panel and advanced logging.",
    "portfolio.p3_title": "Visual Identity",
    "portfolio.p3_desc": "Full branding with style guide and digital assets.",
    "portfolio.p4_title": "Product Landing",
    "portfolio.p4_desc": "Optimized conversion page with smooth animations.",
    "portfolio.p5_title": "Economy Bot",
    "portfolio.p5_desc": "Virtual currency system with integrated shop and rankings.",
    "portfolio.p6_title": "Discord Assets",
    "portfolio.p6_desc": "Full pack of banners, icons and visual elements.",

    "testimonials.label": "Clients",
    "testimonials.title": "What they say",
    "testimonials.desc": "Real opinions from those who have trusted Star Studio's.",
    "t1.text": '"They delivered a fully customized Discord bot in record time. The level of detail and quality exceeded my expectations. Impeccable communication throughout."',
    "t1.project": "Premium Moderation Bot",
    "t2.text": '"My website turned out exactly as I envisioned, and even better. The design is clean, professional and fast. I\'ll definitely return for my future projects."',
    "t2.project": "Corporate Website",
    "t3.text": '"The branding they developed for my Discord community is exactly what I was looking for. Professional, creative and with great aesthetic sense. 100% recommended."',
    "t3.project": "Visual Identity & Assets",

    "terms.label": "Legal",
    "terms.title": "Terms & Conditions",
    "terms.desc": "Use of our services implies full acceptance of the following terms.",

    "contact.label": "Contact",
    "contact.title": "Start Your Project",
    "contact.desc": "Fill out the form and we'll get in touch with you. Every request is personally reviewed by our team.",
    "contact.notice_title": "Identity Verification",
    "contact.notice_text": "It is the client's sole responsibility to verify they are communicating with Star Studio's official channels and accounts before making any transfer or payment.",
    "contact.security_title": "Security",
    "contact.security_text": "We never request payments outside official ticket channels. If you suspect impersonation, do not make any payment.",

    "form.name_label": "Full Name",
    "form.name_placeholder": "Your full name",
    "form.name_error": "Please enter your full name.",
    "form.phone_label": "Phone Number",
    "form.phone_placeholder": "+1 555 000 0000 / Your number",
    "form.phone_error": "Please enter your phone number.",
    "form.message_label": "Inquiry / Request",
    "form.message_placeholder": "Describe your project or inquiry in as much detail as possible...",
    "form.message_error": "Please describe your inquiry or request.",
    "form.submit": "Send Request",
    "form.success_title": "Message sent",
    "form.error_global": "Error",

    "footer.tagline": "Digital engineering and design, no shortcuts.",
    "footer.nav_title": "Navigation",
    "footer.services_title": "Services",
    "footer.rights": "All rights reserved.",
  },

  pt: {
    "nav.home": "Início",
    "nav.portfolio": "Produtos",
    "nav.testimonials": "Clientes",
    "nav.terms": "Termos",
    "nav.contact": "Contato",

    "hero.badge": "Estúdio Digital",
    "hero.title": "Engenharia digital\ne design sem atalhos.",
    "hero.subtitle": "Construímos sites personalizados, bots de Discord de alto desempenho e peças de design que comunicam com precisão. Sem templates. Sem concessões.",
    "hero.cta_primary": "Iniciar Projeto",
    "hero.cta_secondary": "Ver Produtos",
    "hero.service1": "Sites Web",
    "hero.service2": "Bots de Discord",
    "hero.service3": "Design Gráfico",

    "portfolio.label": "Nossos Produtos",
    "portfolio.title": "Produtos",
    "portfolio.desc": "Produtos selecionados que demonstram nossa precisão técnica e critério estético.",
    "portfolio.tag_web": "Site Web",
    "portfolio.tag_bot": "Bot Discord",
    "portfolio.tag_design": "Design",
    "portfolio.p1_title": "Projeto Web Premium",
    "portfolio.p1_desc": "Site corporativo com design personalizado e CMS sob medida.",
    "portfolio.p2_title": "Bot de Moderação",
    "portfolio.p2_desc": "Sistema automatizado com painel de controle e logs avançados.",
    "portfolio.p3_title": "Identidade Visual",
    "portfolio.p3_desc": "Branding completo com guia de estilo e assets digitais.",
    "portfolio.p4_title": "Landing de Produto",
    "portfolio.p4_desc": "Página de conversão otimizada com animações fluidas.",
    "portfolio.p5_title": "Bot de Economia",
    "portfolio.p5_desc": "Sistema de moeda virtual com loja integrada e rankings.",
    "portfolio.p6_title": "Assets para Discord",
    "portfolio.p6_desc": "Pack completo de banners, ícones e elementos visuais.",

    "testimonials.label": "Clientes",
    "testimonials.title": "O que dizem",
    "testimonials.desc": "Opiniões reais de quem confiou na Star Studio's.",
    "t1.text": '"Entregaram um bot de Discord completamente personalizado em tempo recorde. O nível de detalhe e qualidade superou minhas expectativas. Comunicação impecável durante todo o processo."',
    "t1.project": "Bot de Moderação Premium",
    "t2.text": '"Meu site ficou exatamente como eu imaginei, e ainda melhor. O design é limpo, profissional e rápido. Com certeza voltarei para meus próximos projetos."',
    "t2.project": "Site Corporativo",
    "t3.text": '"O branding que desenvolveram para minha comunidade de Discord é exatamente o que eu procurava. Sérios, criativos e com muito critério estético. 100% recomendados."',
    "t3.project": "Identidade Visual & Assets",

    "terms.label": "Legal",
    "terms.title": "Termos e Condições",
    "terms.desc": "O uso de nossos serviços implica a plena aceitação dos seguintes termos.",

    "contact.label": "Contato",
    "contact.title": "Inicie seu Projeto",
    "contact.desc": "Preencha o formulário e entraremos em contato. Cada solicitação é revisada pessoalmente por nossa equipe.",
    "contact.notice_title": "Verificação de Identidade",
    "contact.notice_text": "É responsabilidade exclusiva do cliente verificar que está se comunicando com os canais e contas oficiais da Star Studio's antes de realizar qualquer pagamento ou transferência.",
    "contact.security_title": "Segurança",
    "contact.security_text": "Nunca solicitamos pagamentos fora de canais oficiais de ticket. Diante de qualquer suspeita de personificação, não realize nenhum pagamento.",

    "form.name_label": "Nome Completo",
    "form.name_placeholder": "Seu nome completo",
    "form.name_error": "Por favor, insira seu nome completo.",
    "form.phone_label": "Número de Telefone",
    "form.phone_placeholder": "+55 11 90000-0000 / Seu número",
    "form.phone_error": "Por favor, insira seu número de telefone.",
    "form.message_label": "Consulta / Pedido",
    "form.message_placeholder": "Descreva seu projeto ou consulta com o máximo de detalhes possível...",
    "form.message_error": "Por favor, descreva sua consulta ou pedido.",
    "form.submit": "Enviar Solicitação",
    "form.success_title": "Mensagem enviada",
    "form.error_global": "Erro",

    "footer.tagline": "Engenharia digital e design sem atalhos.",
    "footer.nav_title": "Navegação",
    "footer.services_title": "Serviços",
    "footer.rights": "Todos os direitos reservados.",
  },

  fr: {
    "nav.home": "Accueil",
    "nav.portfolio": "Produits",
    "nav.testimonials": "Clients",
    "nav.terms": "Conditions",
    "nav.contact": "Contact",

    "hero.badge": "Studio Digital",
    "hero.title": "Ingénierie digitale\net design sans raccourcis.",
    "hero.subtitle": "Nous construisons des sites web sur mesure, des bots Discord haute performance et des créations qui communiquent avec précision. Sans templates. Sans compromis.",
    "hero.cta_primary": "Démarrer un Projet",
    "hero.cta_secondary": "Voir les Produits",
    "hero.service1": "Sites Web",
    "hero.service2": "Bots Discord",
    "hero.service3": "Design Graphique",

    "portfolio.label": "Nos Produits",
    "portfolio.title": "Produits",
    "portfolio.desc": "Produits sélectionnés démontrant notre précision technique et notre jugement esthétique.",
    "portfolio.tag_web": "Site Web",
    "portfolio.tag_bot": "Bot Discord",
    "portfolio.tag_design": "Design",
    "portfolio.p1_title": "Projet Web Premium",
    "portfolio.p1_desc": "Site corporate avec design sur mesure et CMS personnalisé.",
    "portfolio.p2_title": "Bot de Modération",
    "portfolio.p2_desc": "Système automatisé avec tableau de bord et logs avancés.",
    "portfolio.p3_title": "Identité Visuelle",
    "portfolio.p3_desc": "Branding complet avec guide de style et assets numériques.",
    "portfolio.p4_title": "Landing de Produit",
    "portfolio.p4_desc": "Page de conversion optimisée avec animations fluides.",
    "portfolio.p5_title": "Bot d'Économie",
    "portfolio.p5_desc": "Système de monnaie virtuelle avec boutique intégrée et classements.",
    "portfolio.p6_title": "Assets Discord",
    "portfolio.p6_desc": "Pack complet de bannières, icônes et éléments visuels.",

    "testimonials.label": "Clients",
    "testimonials.title": "Ce qu'ils disent",
    "testimonials.desc": "Avis réels de ceux qui ont fait confiance à Star Studio's.",
    "t1.text": '"Ils ont livré un bot Discord entièrement personnalisé en un temps record. Le niveau de détail et la qualité ont dépassé mes attentes. Communication impeccable tout au long du processus."',
    "t1.project": "Bot de Modération Premium",
    "t2.text": '"Mon site web est exactement comme je l\'avais imaginé, et encore mieux. Le design est propre, professionnel et rapide. Je reviendrai certainement pour mes prochains projets."',
    "t2.project": "Site Web Corporate",
    "t3.text": '"Le branding qu\'ils ont développé pour ma communauté Discord est exactement ce que je cherchais. Sérieux, créatifs et avec un grand sens esthétique. 100% recommandés."',
    "t3.project": "Identité Visuelle & Assets",

    "terms.label": "Légal",
    "terms.title": "Conditions Générales",
    "terms.desc": "L'utilisation de nos services implique l'acceptation complète des conditions suivantes.",

    "contact.label": "Contact",
    "contact.title": "Démarrez votre Projet",
    "contact.desc": "Remplissez le formulaire et nous vous contacterons. Chaque demande est examinée personnellement par notre équipe.",
    "contact.notice_title": "Vérification d'Identité",
    "contact.notice_text": "Il est de la seule responsabilité du client de vérifier qu'il communique avec les canaux et comptes officiels de Star Studio's avant d'effectuer tout virement ou paiement.",
    "contact.security_title": "Sécurité",
    "contact.security_text": "Nous ne demandons jamais de paiements en dehors des canaux officiels de ticket. En cas de soupçon d'usurpation, n'effectuez aucun paiement.",

    "form.name_label": "Nom et Prénom",
    "form.name_placeholder": "Votre nom complet",
    "form.name_error": "Veuillez entrer votre nom complet.",
    "form.phone_label": "Numéro de Téléphone",
    "form.phone_placeholder": "+33 6 00 00 00 00 / Votre numéro",
    "form.phone_error": "Veuillez entrer votre numéro de téléphone.",
    "form.message_label": "Demande / Commande",
    "form.message_placeholder": "Décrivez votre projet ou demande avec le plus de détails possible...",
    "form.message_error": "Veuillez décrire votre demande.",
    "form.submit": "Envoyer la Demande",
    "form.success_title": "Message envoyé",
    "form.error_global": "Erreur",

    "footer.tagline": "Ingénierie digitale et design sans raccourcis.",
    "footer.nav_title": "Navigation",
    "footer.services_title": "Services",
    "footer.rights": "Tous droits réservés.",
  },
};

/* ────────────────────────────────────────────────────────────────
   TERMS DATA (English – always displayed as provided)
   ──────────────────────────────────────────────────────────────── */
/* ────────────────────────────────────────────────────────────────
   TERMS DATA (Multilingual: ES, EN, PT, FR)
   ──────────────────────────────────────────────────────────────── */
const TERMS = {
  es: [
    { title: "Aceptación de Términos", text: "El uso de este sitio o servidor, la contratación de nuestros servicios o la interacción con la comunidad implica la aceptación total de estas reglas." },
    { title: "Pagos y Reembolsos", text: "Todos los pagos realizados por productos digitales, diseños o servicios son finales y no reembolsables una vez iniciado el trabajo." },
    { title: "Proceso de Pago", text: "Los pedidos o proyectos comenzarán únicamente tras verificar el pago correspondiente o el anticipo acordado mediante ticket." },
    { title: "Tiempos de Entrega", text: "Los plazos estimados pueden variar según la complejidad del proyecto y la carga de trabajo actual del estudio." },
    { title: "Revisiones y Cambios", text: "Cada servicio incluye un número limitado de modificaciones estipuladas. Cambios excesivos o fuera de lo acordado pueden generar un costo extra." },
    { title: "Propiedad Intelectual", text: "El estudio conserva los derechos de los recursos de trabajo y archivos hasta completar el pago total. La reventa no autorizada de nuestros productos está estrictamente prohibida." },
    { title: "Uso de Recursos", text: "Los diseños, configuraciones o códigos entregados son para el uso personal o comercial acordado con el cliente, sin derecho a redistribuirlos como propios." },
    { title: "Conducta y Respeto", text: "Se requiere una actitud cordial y respetuosa hacia los clientes, miembros y todo el equipo del staff en cualquier canal." },
    { title: "Sanciones", text: "El incumplimiento de las reglas o faltas graves de respeto puede resultar en la expulsión permanente y cancelación de los servicios en curso sin derecho a reembolso." },
    { title: "Modificaciones", text: "El estudio se reserva el derecho de actualizar estos términos y condiciones en cualquier momento para adaptarlos a nuevas regulaciones o servicios." },
    { title: "Responsabilidad por Enlaces Externos", text: "El estudio no se hace responsable por archivos, enlaces o software de terceros compartidos por usuarios externos fuera de los canales oficiales." },
    { title: "Fraudes y Estafas Externas", text: "El estudio no se hace responsable por transacciones, acuerdos o negocios realizados fuera de los canales oficiales de ticket o con personas que no forman parte del staff oficial." },
    { title: "Verificación de Identidad", text: "Es responsabilidad exclusiva del cliente verificar que se está comunicando con los canales y cuentas oficiales del estudio antes de realizar cualquier transferencia o pago para evitar suplantaciones de identidad." },
    { title: "Phishing y Enlaces Maliciosos", text: "Queda estrictamente prohibido compartir enlaces de descarga no verificados, capturas modificadas o archivos ejecutables sospechosos; el estudio no se hace responsable por la pérdida de cuentas o datos derivada de la negligencia del usuario." },
    { title: "Comprobantes Falsificados", text: "Cualquier intento de presentar comprobantes de pago falsos, alterados o anulados resultará en la cancelación inmediata del servicio, veto permanente y publicación del caso como medida de seguridad para la comunidad." },
    { title: "Disputas de Pago (Contracargos)", text: "Iniciar una disputa o contracargo fraudulento en pasarelas de pago o plataformas bancarias sin justificación válida y tras haber recibido el producto digital conllevará acciones legales internas, veto global y pérdida de cualquier soporte futuro." },
    { title: "Cláusula de Limitación de Responsabilidad", text: "El estudio no asume responsabilidad financiera o legal por pérdidas indirectas, daños en servidores de terceros o fallos derivados del mal uso de las configuraciones, scripts o diseños entregados una vez instalados." }
  ],
  en: [
    { title: "Acceptance of Terms", text: "The use of this site or server, the contracting of our services, or interaction with the community implies full acceptance of these rules." },
    { title: "Payments and Refunds", text: "All payments made for digital products, designs, or services are final and non-refundable once work has begun." },
    { title: "Payment Process", text: "Orders or projects will only begin after verifying the corresponding payment or the agreed-upon deposit via a ticket." },
    { title: "Delivery Times", text: "Estimated deadlines may vary depending on the project's complexity and the study's current workload." },
    { title: "Revisions and Changes", text: "Each service includes a limited number of stipulated modifications. Excessive changes or alterations outside of what was agreed upon may incur an extra fee." },
    { title: "Intellectual Property", text: "The study retains the rights to the work resources and files until full payment is completed. Unauthorized resale of our products is strictly prohibited." },
    { title: "Use of Resources", text: "The designs, configurations, or codes delivered are for the personal or commercial use agreed upon with the client, with no right to redistribute them as one's own." },
    { title: "Conduct and Respect", text: "A cordial and respectful attitude is required toward clients, members, and all staff team members in any server channel." },
    { title: "Sanctions", text: "Failure to comply with server rules or severe disrespect may result in permanent expulsion and cancellation of ongoing services without the right to a refund." },
    { title: "Modifications", text: "The study reserves the right to update these terms and conditions at any time to adapt them to new regulations or services." },
    { title: "Responsibility for External Links", text: "The study is not responsible for files, links, or third-party software shared by external users inside the server or outside of official channels." },
    { title: "Frauds and External Scams", text: "The study is not responsible for transactions, agreements, or business conducted outside of official ticket channels or with individuals who are not part of the official staff." },
    { title: "Identity Verification", text: "It is the client's sole responsibility to verify that they are speaking with the study's official channels and accounts before making any transfer or payment to prevent identity spoofing." },
    { title: "Phishing and Malicious Links", text: "Sharing unverified download links, modified screenshots, or suspicious executable files is strictly prohibited; the study is not responsible for the loss of accounts or data resulting from user negligence." },
    { title: "Falsified Receipts", text: "Any attempt to present fake, altered, or voided payment receipts will result in the immediate cancellation of the service, a permanent ban, and the publication of the case as a security measure for the community." },
    { title: "Payment Disputes (Chargebacks)", text: "Initiating a fraudulent dispute or chargeback on payment gateways or banking platforms without valid justification and after having received the digital product will entail internal legal actions, a global ban, and the loss of any future support." },
    { title: "Limitation of Liability Clause", text: "The study assumes no financial or legal responsibility for indirect losses, damage to third-party servers, or failures resulting from the misuse of delivered configurations, scripts, or designs once installed." }
  ],
  pt: [
    { title: "Aceitação dos Termos", text: "O uso deste site ou servidor, a contratação de nossos serviços ou a interação com a comunidade implica a aceitação total destas regras." },
    { title: "Pagamentos e Reembolsos", text: "Todos os pagamentos feitos por produtos digitais, designs ou serviços são finais e não reembolsáveis uma vez iniciado o trabalho." },
    { title: "Processo de Pagamento", text: "Os pedidos ou projetos começarão apenas após a verificação do pagamento correspondente ou do sinal acordado via ticket." },
    { title: "Prazos de Entrega", text: "Os prazos estimados podem variar dependendo da complexidade do projeto e da carga de trabalho atual do estúdio." },
    { title: "Revisões e Alterações", text: "Cada serviço inclui um número limitado de modificações estipuladas. Alterações excessivas ou fora do acordado podem gerar uma taxa extra." },
    { title: "Propriedade Intelectual", text: "O estúdio retém os direitos dos recursos de trabalho e arquivos até a conclusão do pagamento total. A revenda não autorizada dos nossos produtos é estritamente proibida." },
    { title: "Uso de Recursos", text: "Os designs, configurações ou códigos entregues são para o uso pessoal ou comercial acordado com o cliente, sem direito a redistribuí-los como seus." },
    { title: "Conduta e Respeito", text: "É necessária uma atitude cordial e respeitosa com clientes, membros e toda a equipe do staff em qualquer canal." },
    { title: "Sanções", text: "O descumprimento das regras ou desrespeito grave pode resultar em expulsão permanente e cancelamento dos serviços em andamento sem direito a reembolso." },
    { title: "Modificações", text: "O estúdio reserva-se o direito de atualizar estes termos e condições a qualquer momento para adaptá-los a novas regulamentações ou serviços." },
    { title: "Responsabilidade por Links Externos", text: "O estúdio não se responsabiliza por arquivos, links ou software de terceiros compartilhados por usuários externos fora dos canais oficiais." },
    { title: "Fraudes e Golpes Externos", text: "O estúdio não se responsabiliza por transações, acordos ou negócios realizados fora dos canais oficiais de ticket ou com pessoas que não fazem parte do staff oficial." },
    { title: "Verificação de Identidade", text: "É responsabilidade exclusiva do cliente verificar se está se comunicando com os canais e contas oficiais do estúdio antes de realizar qualquer transferência ou pagamento para evitar falsificação de identidade." },
    { title: "Phishing e Links Maliciosos", text: "É estritamente proibido compartilhar links de download não verificados, capturas modificadas ou arquivos executáveis suspeitos; o estúdio não se responsabiliza pela perda de contas ou dados decorrente de negligência do usuário." },
    { title: "Comprovantes Falsificados", text: "Qualquer tentativa de apresentar comprovantes de pagamento falsos, alterados ou anulados resultará no cancelamento imediato do serviço, banimento permanente e publicação do caso como medida de segurança para a comunidade." },
    { title: "Disputas de Pagamento (Estornos)", text: "Iniciar uma disputa ou estorno fraudulento em gateways de pagamento ou plataformas bancárias sem justificativa válida e após ter recebido o produto digital acarretará ações legais internas, banimento global e perda de qualquer suporte futuro." },
    { title: "Cláusula de Limitação de Responsabilidade", text: "O estúdio não assume responsabilidade financeira ou legal por perdas indiretas, danos a servidores de terceiros ou falhas resultantes do uso indevido das configurações, scripts ou designs entregues uma vez instalados." }
  ],
  fr: [
    { title: "Acceptation des Conditions", text: "L'utilisation de ce site ou serveur, la souscription à nos services ou l'interaction avec la communauté implique l'acceptation totale de ces règles." },
    { title: "Paiements et Remboursements", text: "Tous les paiements effectués pour des produits numériques, designs ou services sont définitifs et non remboursables une fois le travail commencé." },
    { title: "Processus de Paiement", text: "Les commandes ou projets ne commenceront qu'après vérification du paiement correspondant ou de l'acompte convenu via ticket." },
    { title: "Délais de Livraison", text: "Les délais estimés peuvent varier en fonction de la complexité du projet et de la charge de travail actuelle du studio." },
    { title: "Révisions et Modifications", text: "Chaque service comprend un nombre limité de modifications stipulées. Des modifications excessives ou hors accord peuvent entraîner des frais supplémentaires." },
    { title: "Propriété Intellectuelle", text: "Le studio conserve les droits sur les ressources de travail et fichiers jusqu'au paiement intégral. La revente non autorisée de nos produits est strictement interdite." },
    { title: "Utilisation des Ressources", text: "Les designs, configurations ou codes livrés sont destinés à l'usage personnel ou commercial convenu avec le client, sans droit de les redistribuer comme les meins." },
    { title: "Conduite et Respect", text: "Une attitude cordiale et respectueuse est requise envers les clients, les membres et toute l'équipe dans n'importe quel canal." },
    { title: "Sanctions", text: "Le non-respect des règles ou un manque de respect grave peut entraîner l'expulsion permanente et l'annulation des services en cours sans remboursement." },
    { title: "Modifications", text: "Le studio se réserve le droit de mettre à jour ces conditions générales à tout moment pour les adapter aux nouvelles réglementations ou services." },
    { title: "Responsabilité concernant les Liens Externes", text: "Le studio n'est pas responsable des fichiers, liens ou logiciels tiers partagés par des utilisateurs externes en dehors des canaux officiels." },
    { title: "Fraudes et Escroqueries Externes", text: "Le studio n'est pas responsable des transactions, accords ou affaires conclus en dehors des canaux officiels de ticket ou avec des personnes ne faisant pas partie du staff officiel." },
    { title: "Vérification d'Identité", text: "Il est de la seule responsabilité du client de vérifier qu'il communique avec les canaux et comptes officiels du studio avant d'effectuer tout virement ou paiement pour éviter l'usurpation d'identité." },
    { title: "Hameçonnage et Liens Malveillants", text: "Il est strictement interdit de partager des liens de téléchargement non vérifiés, des captures modifiées ou des fichiers exécutables suspects; le studio n'est pas responsable des pertes résultant de la négligence de l'utilisateur." },
    { title: "Reçus Falsifiés", text: "Toute tentative de présenter des reçus de paiement falsifiés, altérés ou annulés entraînera l'annulation immédiate du service, un bannissement permanent et la publication du cas par mesure de sécurité pour la communauté." },
    { title: "Litiges de Paiement (Rétrofacturations)", text: "L'initiation d'un litige ou d'une rétrofacturation frauduleuse sur des passerelles de paiement ou des plateformes bancaires sans justification valable et après avoir reçu le produit numérique entraînera des actions légales internes, un bannissement global et la perte de tout support futur." },
    { title: "Clause de Limitation de Responsabilité", text: "Le studio n'assume aucune responsabilité financière ou légale pour les pertes indirectes, les dommages aux serveurs tiers ou les défaillances résultant de la mauvaise utilisation des configurations, scripts ou designs livrés une fois installés." }
  ]
};

/* ────────────────────────────────────────────────────────────────
   LANGUAGE META
   ──────────────────────────────────────────────────────────────── */
const LANG_META = {
  es: { flag: '🇪🇸', code: 'ES' },
  en: { flag: '🇬🇧', code: 'EN' },
  pt: { flag: '🇧🇷', code: 'PT' },
  fr: { flag: '🇫🇷', code: 'FR' },
};

/* ────────────────────────────────────────────────────────────────
   STATE
   ──────────────────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('ss_lang') || 'es';
let currentTheme = localStorage.getItem('ss_theme') || 'dark';

/* ────────────────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang, true);
  initAurora();
  initNavbar();
  initDock();
  initLangSelector();
  initThemeToggle();
  initLikeButton();
  initBorderGlow();
  initScrollReveal();
  initContactForm();
  initScrollTop();
  initContentProtection();

  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ────────────────────────────────────────────────────────────────
   THEME
   ──────────────────────────────────────────────────────────────── */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ss_theme', theme);
}

function initThemeToggle() {
  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

/* ────────────────────────────────────────────────────────────────
   CONTENT PROTECTION (No right-click, no copy, no drag)
   ──────────────────────────────────────────────────────────────── */
function initContentProtection() {
  // Disable right-click context menu across the page
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Disable dragging of images, links, text
  document.addEventListener('dragstart', e => e.preventDefault());

  // Disable copy & cut actions outside inputs
  document.addEventListener('copy', e => {
    if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
    }
  });

  document.addEventListener('cut', e => {
    if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
    }
  });

  // Ensure all images are non-draggable and block context menu
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('contextmenu', e => e.preventDefault());
    img.addEventListener('dragstart', e => e.preventDefault());
  });
}

/* ────────────────────────────────────────────────────────────────
   LANGUAGE / i18n
   ──────────────────────────────────────────────────────────────── */
function applyLang(lang, isInit = false) {
  if (!I18N[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('ss_lang', lang);

  const t = I18N[lang];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (t[key].includes('\n')) {
        el.innerHTML = t[key].replace(/\n/g, '<br>');
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Rebuild Terms Accordion in selected language
  buildAccordion(lang);

  // Update selector UI
  const meta = LANG_META[lang];
  document.getElementById('current-flag').textContent = meta.flag;
  document.getElementById('current-lang-code').textContent = meta.code;

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Update product images based on language
  const langToImgSuffix = {
    'es': 'es',
    'en': 'en',
    'pt': 'br',
    'fr': 'fr'
  };
  const suffix = langToImgSuffix[lang] || 'es';

  const designImg = document.getElementById('design-product-img');
  if (designImg) {
    const basePath = designImg.src.substring(0, designImg.src.lastIndexOf('/'));
    designImg.src = `${basePath}/design${suffix}.png`;
  }

  const botImg = document.getElementById('bot-product-img');
  if (botImg) {
    const basePath = botImg.src.substring(0, botImg.src.lastIndexOf('/'));
    if (lang === 'pt') {
      botImg.src = `${basePath}/botbr.png`;
    } else {
      botImg.src = `${basePath}/botall.png`;
    }
  }

  // Trigger hover-like animation on portfolio cards only if not initializing
  if (!isInit) {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
      // Force reflow to restart transition if needed
      card.classList.remove('lang-animating');
      void card.offsetWidth;

      card.classList.add('lang-animating');
      // Clear any existing timeout to avoid overlaps if clicked quickly
      if (card.dataset.animTimeout) clearTimeout(parseInt(card.dataset.animTimeout));

      const timeoutId = setTimeout(() => {
        card.classList.remove('lang-animating');
      }, 350);
      card.dataset.animTimeout = timeoutId;
    });
  }
}

function initLangSelector() {
  const selector = document.getElementById('lang-selector');
  const btn = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = selector.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  dropdown.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      applyLang(opt.dataset.lang);
      selector.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', () => {
    selector.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
}

/* ────────────────────────────────────────────────────────────────
   NAVBAR (mobile hamburger)
   ──────────────────────────────────────────────────────────────── */
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-dock') || document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ────────────────────────────────────────────────────────────────
   ACCORDION (Terms)
   ──────────────────────────────────────────────────────────────── */
function buildAccordion(lang = currentLang) {
  const accordion = document.getElementById('accordion');
  if (!accordion) return;

  accordion.innerHTML = '';

  const termsList = TERMS[lang] || TERMS['es'];

  termsList.forEach((term, i) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.setAttribute('role', 'listitem');

    item.innerHTML = `
      <div class="accordion-header" role="button" tabindex="0"
           aria-expanded="false" aria-controls="acc-body-${i}" id="acc-header-${i}">
        <span class="accordion-title">${term.title}</span>
        <svg class="accordion-icon" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </div>
      <div class="accordion-body" id="acc-body-${i}" role="region"
           aria-labelledby="acc-header-${i}">
        <div class="accordion-body-inner">
          <p>${term.text}</p>
        </div>
      </div>
    `;

    const header = item.querySelector('.accordion-header');

    const toggle = () => {
      const isOpen = item.classList.contains('open');
      // Close all
      accordion.querySelectorAll('.accordion-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });
      // Open clicked (unless it was already open)
      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    };

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    accordion.appendChild(item);
  });
}

/* ────────────────────────────────────────────────────────────────
   SCROLL REVEAL (IntersectionObserver)
   ──────────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el, i) => {
    // Stagger portfolio/testimonial cards slightly
    if (el.closest('.portfolio-grid') || el.closest('.testimonials-grid')) {
      const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = `${idx * 60}ms`;
    }
    observer.observe(el);
  });
}

/* ────────────────────────────────────────────────────────────────
   SCROLL TO TOP
   ──────────────────────────────────────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ────────────────────────────────────────────────────────────────
   CONTACT FORM
   ──────────────────────────────────────────────────────────────── */
/* ────────────────────────────────────────────────────────────────
   CONTACT FORM (React Bits FuseButton Controller)
   ──────────────────────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formErrGlobal = document.getElementById('form-error-global');

  const fuseContainer = document.getElementById('fuse-submit-btn');
  const fuseUndoBtn   = document.getElementById('fuse-undo-btn');
  const fuseRimRect   = document.getElementById('fuse-rim-rect');
  const fuseStatus    = document.getElementById('fuse-status');

  let fusePhase = 'idle'; // 'idle' | 'armed' | 'settled'
  let fuseAnim = null;
  const undoWindowMs = 4000;

  const fields = [
    { id: 'name', groupId: 'fg-name' },
    { id: 'phone_number', groupId: 'fg-phone_number' },
    { id: 'message', groupId: 'fg-message' },
  ];

  // Clear error on input
  fields.forEach(({ id, groupId }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        if (el.value.trim()) {
          const group = document.getElementById(groupId);
          if (group) group.classList.remove('error');
        }
      });
    }
  });

  function setFusePhase(nextPhase) {
    fusePhase = nextPhase;
    if (fuseContainer) {
      fuseContainer.setAttribute('data-phase', nextPhase);
    }
    if (fuseStatus) {
      fuseStatus.textContent = nextPhase === 'idle' ? '' : (nextPhase === 'armed' ? 'Deshacer' : 'Mensaje enviado');
    }
  }

  function startFuseAnimation(onFinishCallback) {
    if (!fuseRimRect) return;
    if (fuseAnim) fuseAnim.cancel();

    fuseAnim = fuseRimRect.animate(
      [
        { strokeDashoffset: 0 },
        { strokeDashoffset: -1 }
      ],
      {
        duration: undoWindowMs,
        easing: 'linear',
        fill: 'forwards'
      }
    );

    fuseAnim.onfinish = () => {
      onFinishCallback();
    };
  }

  function cancelFuse() {
    if (fuseAnim) {
      fuseAnim.cancel();
      fuseAnim = null;
    }
    setFusePhase('idle');
  }

  // Pointer press scaling & Escape key undo
  if (fuseContainer) {
    fuseContainer.addEventListener('pointerdown', (e) => {
      if (e.button === 0 && fusePhase !== 'settled') fuseContainer.setAttribute('data-pressed', '');
    });
    const releasePress = () => fuseContainer.removeAttribute('data-pressed');
    fuseContainer.addEventListener('pointerup', releasePress);
    fuseContainer.addEventListener('pointercancel', releasePress);
    fuseContainer.addEventListener('pointerleave', releasePress);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && fusePhase === 'armed') {
        e.preventDefault();
        cancelFuse();
      }
    });
  }

  if (fuseUndoBtn) {
    fuseUndoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cancelFuse();
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Reset feedback
    if (formSuccess) formSuccess.classList.remove('show');
    if (formErrGlobal) formErrGlobal.classList.remove('show');

    if (fusePhase === 'armed' || fusePhase === 'settled') return;

    // Validate
    let isValid = true;
    fields.forEach(({ id, groupId }) => {
      const el = document.getElementById(id);
      const group = document.getElementById(groupId);
      if (!el.value.trim()) {
        if (group) group.classList.add('error');
        isValid = false;
      } else {
        if (group) group.classList.remove('error');
      }
    });
    if (!isValid) return;

    // Arm fuse button
    setFusePhase('armed');

    startFuseAnimation(async () => {
      // Fuse burned out -> Send post request
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: document.getElementById('name').value.trim(),
            phone_number: document.getElementById('phone_number').value.trim(),
            message: document.getElementById('message').value.trim(),
          }),
        });

        const data = await res.json();

        if (data.success) {
          setFusePhase('settled');
          form.reset();
          showNotification(formSuccess, 'success');
          setTimeout(() => {
            setFusePhase('idle');
          }, 3000);
        } else {
          setFusePhase('idle');
          showNotification(formErrGlobal, 'error');
        }
      } catch {
        setFusePhase('idle');
        showNotification(formErrGlobal, 'error');
      }
    });
  });

  function showNotification(el, type) {
    if (!el) return;
    el.classList.add('show');
    playNotificationSound(type);
    setTimeout(() => {
      el.classList.remove('show');
    }, 3000);
  }

  function playNotificationSound(type) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (e) {
      console.log('Audio not supported or blocked');
    }
  }
}

/* ────────────────────────────────────────────────────────────────
   PULSE HEART LIKE BUTTON (React Bits Component + SQLite Persistence)
   ──────────────────────────────────────────────────────────────── */
function initLikeButton() {
  const btn = document.getElementById('pulse-like-btn');
  const pill = document.getElementById('pulse-pill');
  const heartIcon = document.getElementById('pulse-heart-icon');
  const countNum = document.getElementById('pulse-count-num');
  const countContainer = document.getElementById('pulse-count');
  const srText = document.getElementById('pulse-sr');

  if (!btn || !countContainer) return;

  let isLiked = false;
  let currentCount = 0;
  let isRunningAnimation = false;

  const formatNum = n => new Intl.NumberFormat().format(n);

  function updateUI(liked, count, animateRoll = false) {
    const prevCount = currentCount;
    isLiked = liked;
    currentCount = count;

    btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
    if (srText) srText.textContent = `Me gusta, ${formatNum(count)}`;

    if (animateRoll && prevCount !== count && countContainer) {
      const oldStr = formatNum(prevCount);
      const newStr = formatNum(count);
      const isUp = count > prevCount;

      countContainer.innerHTML = '';
      const slot = document.createElement('span');
      slot.className = 'pulse-heart__slot';
      const roll = document.createElement('span');
      roll.className = 'pulse-heart__roll';

      const topSpan = document.createElement('span');
      topSpan.textContent = isUp ? oldStr : newStr;
      const bottomSpan = document.createElement('span');
      bottomSpan.textContent = isUp ? newStr : oldStr;

      roll.appendChild(topSpan);
      roll.appendChild(bottomSpan);
      slot.appendChild(roll);
      countContainer.appendChild(slot);

      void roll.offsetWidth;
      roll.style.transform = isUp ? 'translateY(-1em)' : 'translateY(0)';

      setTimeout(() => {
        countContainer.innerHTML = `<span id="pulse-count-num">${newStr}</span>`;
      }, 360);
    } else {
      countContainer.innerHTML = `<span id="pulse-count-num">${formatNum(count)}</span>`;
    }
  }

  // Fetch initial likes count and status from SQLite DB
  fetch('/api/likes')
    .then(r => r.json())
    .then(data => {
      if (data.success) {
        updateUI(data.liked, data.count, false);
      }
    })
    .catch(err => console.error('Error fetching likes:', err));

  // Pulse heartbeat animation algorithm matching React Bits
  function runHeartbeatAnimation(nextLiked, nextCount) {
    if (isRunningAnimation) return;
    isRunningAnimation = true;

    btn.setAttribute('data-running', '');
    const duration = 560; // ms
    const dotSize = 0.3;
    const overshoot = 1.7;
    const beat = 3; // % dip
    const OUT = 0.4; // 40% threshold for flip

    const back = (k, c) => 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2);
    const swellOf = (t, c) => (t <= 0 ? 0 : t < OUT ? 1 - Math.pow(1 - t / OUT, 3) : 1 - back((t - OUT) / (1 - OUT), c));

    let t0 = performance.now();
    let swapped = false;

    function tick(now) {
      const elapsed = now - t0;
      const t = Math.min(1, elapsed / duration);
      const s = swellOf(t, overshoot);
      const k = 1 - (1 - dotSize) * s;

      if (heartIcon) heartIcon.style.transform = `scale(${k})`;
      if (pill) pill.style.transform = `scale(${1 - (beat / 100) * s})`;

      if (!swapped && t >= OUT) {
        swapped = true;
        updateUI(nextLiked, nextCount, true);
      }

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        if (heartIcon) heartIcon.style.transform = '';
        if (pill) pill.style.transform = '';
        btn.removeAttribute('data-running');
        isRunningAnimation = false;
      }
    }

    requestAnimationFrame(tick);
  }

  // Pointer press scaling
  btn.addEventListener('pointerdown', e => {
    if (e.button === 0) btn.setAttribute('data-pressed', '');
  });
  const releasePress = () => btn.removeAttribute('data-pressed');
  btn.addEventListener('pointerup', releasePress);
  btn.addEventListener('pointercancel', releasePress);
  btn.addEventListener('pointerleave', releasePress);

  // Click handler to toggle like in SQLite database
  btn.addEventListener('click', () => {
    const nextLiked = !isLiked;
    const nextCount = currentCount + (nextLiked ? 1 : -1);

    runHeartbeatAnimation(nextLiked, nextCount);

    fetch('/api/likes', { method: 'POST' })
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          updateUI(data.liked, data.count, false);
        }
      })
      .catch(err => {
        console.error('Error toggling like:', err);
      });
  });
}

/* ────────────────────────────────────────────────────────────────
   BORDER GLOW COMPONENT (React Bits)
   ──────────────────────────────────────────────────────────────── */
function initBorderGlow() {
  function getCenterOfElement(el) {
    const rect = el.getBoundingClientRect();
    return [rect.width / 2, rect.height / 2];
  }

  function getEdgeProximity(el, x, y) {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }

  function getCursorAngle(el, x, y) {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    let radians = Math.atan2(dy, dx);
    let degrees = radians * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }

  const cards = document.querySelectorAll('.border-glow-card');
  cards.forEach(card => {
    card.addEventListener('pointermove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const edge = getEdgeProximity(card, x, y);
      const angle = getCursorAngle(card, x, y);

      card.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(3)}`);
      card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
    });
  });
}

/* ────────────────────────────────────────────────────────────────
   DOCK COMPONENT (React Bits - Spring Magnification Effect)
   ──────────────────────────────────────────────────────────────── */
function initDock() {
  const dockPanel = document.getElementById('nav-dock');
  if (!dockPanel) return;

  const items = dockPanel.querySelectorAll('.dock-item');
  if (!items.length) return;

  const baseSize = 38;
  const magnification = 54;
  const distance = 140;

  function resetSizes() {
    items.forEach(item => {
      if (window.innerWidth > 768) {
        item.style.width = `${baseSize}px`;
        item.style.height = `${baseSize}px`;
      } else {
        item.style.width = '';
        item.style.height = '';
      }
    });
  }

  dockPanel.addEventListener('mousemove', e => {
    if (window.innerWidth <= 768) return;

    const mouseX = e.clientX;

    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const dx = Math.abs(mouseX - itemCenterX);

      if (dx < distance) {
        const factor = 1 - dx / distance;
        const size = Math.round(baseSize + (magnification - baseSize) * (factor * factor));
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;
      } else {
        item.style.width = `${baseSize}px`;
        item.style.height = `${baseSize}px`;
      }
    });
  });

  dockPanel.addEventListener('mouseleave', resetSizes);
  window.addEventListener('resize', resetSizes);
}

/* ────────────────────────────────────────────────────────────────
   AURORA BACKGROUND COMPONENT (React Bits WebGL2 Shader)
   ──────────────────────────────────────────────────────────────── */
function initAurora() {
  const container = document.getElementById('aurora-container');
  const canvas = document.getElementById('aurora-canvas');
  if (!container || !canvas) return;

  const gl = canvas.getContext('webgl2', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: true
  });
  if (!gl) {
    console.warn('WebGL2 not supported for Aurora background');
    return;
  }

  const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

  const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform float uLightMode;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  if (uLightMode > 0.5) {
    float energy = clamp(max(intensity, 0.0), 0.0, 1.0);
    float coverage = clamp(auroraAlpha * (0.55 + 0.45 * energy), 0.0, 0.86);
    vec3 chroma = pow(clamp(rampColor, 0.0, 1.0), vec3(1.2));
    float chromaPeak = max(chroma.r, max(chroma.g, chroma.b));
    chroma /= max(chromaPeak, 0.0001);
    fragColor = vec4(mix(vec3(1.0), chroma, min(coverage * 1.08, 0.94)), 1.0);
  } else {
    fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
  }
}
`;

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Aurora Shader Compile Error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vertShader = createShader(gl, gl.VERTEX_SHADER, VERT);
  const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAG);
  if (!vertShader || !fragShader) return;

  const program = gl.createProgram();
  gl.attachShader(program, vertShader);
  gl.attachShader(program, fragShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Aurora Program Link Error:', gl.getProgramInfoLog(program));
    return;
  }

  gl.useProgram(program);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
     3, -1,
    -1,  3
  ]), gl.STATIC_DRAW);

  const positionLoc = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(positionLoc);
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

  const uTimeLoc = gl.getUniformLocation(program, 'uTime');
  const uAmplitudeLoc = gl.getUniformLocation(program, 'uAmplitude');
  const uColorStopsLoc = gl.getUniformLocation(program, 'uColorStops');
  const uResolutionLoc = gl.getUniformLocation(program, 'uResolution');
  const uBlendLoc = gl.getUniformLocation(program, 'uBlend');
  const uLightModeLoc = gl.getUniformLocation(program, 'uLightMode');

  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const num = parseInt(hex, 16);
    return [(num >> 16 & 255) / 255, (num >> 8 & 255) / 255, (num & 255) / 255];
  }

  const colorHexes = ["#1ce9ff", "#bc75ff", "#1e008a"];
  const colorStopsFlat = colorHexes.flatMap(hexToRgb);

  gl.clearColor(0, 0, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  function resize() {
    const width = container.offsetWidth || window.innerWidth;
    const height = container.offsetHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
    gl.uniform2f(uResolutionLoc, width, height);
  }

  window.addEventListener('resize', resize);
  resize();

  const startTime = performance.now();

  function render() {
    requestAnimationFrame(render);
    const elapsed = (performance.now() - startTime) * 0.001;
    const speed = 0.5;

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    gl.uniform1f(uTimeLoc, elapsed * speed * 0.5);
    gl.uniform1f(uAmplitudeLoc, 1.0);
    gl.uniform3fv(uColorStopsLoc, new Float32Array(colorStopsFlat));
    gl.uniform1f(uBlendLoc, 0.5);
    gl.uniform1f(uLightModeLoc, isLight ? 1.0 : 0.0);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  render();
}


