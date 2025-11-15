// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryButtons = document.querySelectorAll('.nav-category');
    const caseCards = document.querySelectorAll('.case-card, .highlight-case');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cases
            caseCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category').split(' ');
                
                if (category === 'all' || cardCategories.includes(category)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('caseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    // Case data - TODOS OS 16 CASES COMPLETOS
    const casesData = {
        'mc-do-sul': {
            title: 'MC do Sul - Lançamento de Carreira Musical',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fas fa-music"></i>
                            Música & Entretenimento
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> MC do Sul</span>
                            <span><strong>Duração:</strong> 2 meses</span>
                            <span><strong>Data:</strong> Abril - Junho 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Lançar e promover a carreira de um artista emergente no competitivo mercado musical brasileiro, criando uma estratégia digital que destacasse sua autenticidade e conquistasse espaço no cenário do funk nacional.</p>
                        
                        <h4>A Solução</h4>
                        <ul>
                            <li>Gestão de redes sociais especializada para músicos</li>
                            <li>Campanhas de tráfego pago segmentadas para fãs de funk</li>
                            <li>Produção de conteúdo visual para plataformas musicais</li>
                            <li>Estratégia de relacionamento com produtoras</li>
                            <li>Otimização de perfil artístico digital</li>
                        </ul>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Contrato assinado com produtora @pphitsoficial em 2 meses</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-chart-line"></i>
                                <span>Aumento de 500% no engajamento das redes sociais</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-users"></i>
                                <span>Crescimento de 1.200 seguidores no Instagram</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-play-circle"></i>
                                <span>Primeira música alcançou 50.000 plays nas plataformas</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-star"></i>
                                <span>Reconhecimento no cenário musical nacional</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Projeção para turnê nacional em 2024</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O Ricardo foi fundamental para minha carreira decolar. Em apenas dois meses já consegui assinar com uma produtora do Rio e estou realizando meus sonhos. A estratégia dele para artistas é incrível - ele entende exatamente o que precisamos para crescer no mercado musical. Gratidão total!"
                                <cite>MC do Sul</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>É artista ou produtor musical?</strong></p>
                            <p>Transforme sua carreira musical com uma estratégia digital profissional</p>
                            <a href="https://wa.me/5551981670024?text=Olá! Sou artista/produtor musical e quero alavancar minha carreira" class="btn-primary" target="_blank">
                                Alavancar Minha Carreira Musical
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-1': {
            title: 'Regularização e Ativação de Conta Google Ads',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-google"></i>
                            Google Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Anderson Ferreira</span>
                            <span><strong>Duração:</strong> 3 dias</span>
                            <span><strong>Data:</strong> Janeiro 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Conta Google Ads pausada por falta de verificação comercial. O cliente já havia tentado resolver sozinho mas não conseguiu passar da terceira etapa por falta de documentos.</p>
                        
                        <h4>A Solução</h4>
                        <p>Regularização e ativação da conta Google Ads através de contato direto com o suporte de verificação comercial. Resolvemos sem necessidade de criar nova conta.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Conta reativada com sucesso em 48 horas</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Verificação comercial concluída</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Campanhas liberadas para veiculação</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Investimento recuperado: R$ 5.000+</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O Ricardo resolveu um problema que estava me travando há semanas. Profissional extremamente competente e dedicado!"
                                <cite>Anderson Ferreira</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Problema similar ao seu?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Vi seu case e tenho um problema similar com Google Ads" class="btn-primary" target="_blank">
                                Resolver Meu Problema
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-2': {
            title: 'Configuração Inicial de Campanha Meta Ads',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-facebook"></i>
                            Meta Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Itamar Freitas</span>
                            <span><strong>Duração:</strong> 1 semana</span>
                            <span><strong>Data:</strong> Fevereiro 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Cliente precisava de um gestor de tráfego pago para configuração inicial de campanhas no Meta Ads, incluindo pixel e definição de público-alvo.</p>
                        
                        <h4>A Solução</h4>
                        <p>Configurações completas na Business Manager, criação de conta de anúncios, implementação do pixel Meta e configuração de ativos.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Estrutura completa de ads implementada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Pixel configurado para conversões</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Públicos-alvo definidos estrategicamente</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>ROAS: 3.5x nas primeiras campanhas</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "Precisava estruturar minhas campanhas do zero e o Ricardo fez tudo com muita competência e atenção aos detalhes."
                                <cite>Itamar Freitas</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Precisa configurar suas campanhas?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Gostaria de configurar minhas campanhas no Meta Ads" class="btn-primary" target="_blank">
                                Configurar Minhas Campanhas
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-3': {
            title: 'Campanha de Captação de Leads para Consultoria Financeira',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-facebook"></i>
                            Meta Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Maciel Vicente</span>
                            <span><strong>Duração:</strong> 2 semanas</span>
                            <span><strong>Data:</strong> Março 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Captar 10 clientes para oferecer gratuitamente uma consultoria financeira, com foco em microempreendedores e pequenas empresas.</p>
                        
                        <h4>A Solução</h4>
                        <p>Configuração de campanha completa no Meta Ads, captando leads assertivos através de formulário otimizado no site.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Meta de 10 leads alcançada em 1 semana</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Leads qualificados e interessados</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Conversão em consultorias realizadas</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Custo por lead: R$ 15,20</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "Resultados além da expectativa! Consegui minha meta de clientes rapidamente. O Ricardo entendeu exatamente o perfil que eu buscava."
                                <cite>Maciel Vicente</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Quer resultados similares?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Quero captar leads qualificados para meu negócio" class="btn-primary" target="_blank">
                                Quero Mais Leads
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-4': {
            title: 'Recuperação de Conta Suspensa por "Fraude" - Merchant Center',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fas fa-shopping-cart"></i>
                            Merchant Center
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Geane - Renascer Imaginário Shop</span>
                            <span><strong>Duração:</strong> 5 dias</span>
                            <span><strong>Data:</strong> Março 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Conta do Merchant Center suspensa por suposta "fraude", sem explicações claras do Google sobre o motivo. Cliente desesperada com medo de nunca mais conseguir anunciar.</p>
                        
                        <h4>A Solução</h4>
                        <p>Regularização e ativação da conta através de contato com suporte e verificação completa dos termos e políticas do Merchant Center.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Conta recuperada com sucesso</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Suspensão removida completamente</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Anúncios reativados e funcionando</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Negócio salvo de prejuízos maiores</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "Estava desesperada achando que tinha perdido minha conta para sempre. O Ricardo não só recuperou como explicou tudo que eu estava fazendo errado."
                                <cite>Geane - Renascer Imaginário Shop</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Problemas com Merchant Center?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Estou com problemas no Merchant Center" class="btn-primary" target="_blank">
                                Recuperar Minha Conta
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-5': {
            title: 'Design de Banner Impactante para Construção Civil',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fas fa-palette"></i>
                            Design
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Rui Carlos</span>
                            <span><strong>Duração:</strong> 3 dias</span>
                            <span><strong>Data:</strong> Março 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Criar uma arte para banner com impacto agressivo (no sentido de impactar visualmente), para empresa de construção civil com foco em "casa com chave na mão".</p>
                        
                        <h4>A Solução</h4>
                        <p>Design para placa imobiliária, com arte finalizada até completa satisfação do cliente e envio em arquivo para impressão (1m x 80cm).</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Arte aprovada pelo cliente</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Arquivo preparado para impressão</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Design que transmite confiança e profissionalismo</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Cliente totalmente satisfeito com o resultado</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O banner ficou exatamente como eu imaginava! Impactante e profissional. Recomendo o trabalho do Ricardo!"
                                <cite>Rui Carlos</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Precisa de design impactante?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Preciso de design profissional para meu negócio" class="btn-primary" target="_blank">
                                Quero Design Profissional
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-6': {
            title: 'Divulgação e Venda de E-book na Plataforma Hotmart',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fas fa-book"></i>
                            Hotmart
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Gabriela Peck</span>
                            <span><strong>Duração:</strong> 2 semanas</span>
                            <span><strong>Data:</strong> Abril 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Divulgação, publicidade e venda de e-book nas principais plataformas, incluindo criação de propaganda e estrutura de vendas.</p>
                        
                        <h4>A Solução</h4>
                        <p>Configuração completa para divulgação e venda do e-book na plataforma Hotmart com criação de Landing Page otimizada.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Infraestrutura completa de vendas criada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Landing Page convertendo visitantes</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Processo de venda automatizado</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Primeiras vendas na primeira semana</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O Ricardo montou toda a estrutura de vendas do meu e-book de forma profissional e eficiente. Superou minhas expectativas!"
                                <cite>Gabriela Peck</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Quer vender seu produto digital?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Quero vender meu produto digital" class="btn-primary" target="_blank">
                                Vender Meu Produto Digital
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-7': {
            title: 'Campanha para Geração de Leads no WhatsApp - Advogado',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-facebook"></i>
                            Meta Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Dr. Coutinho - Advogado</span>
                            <span><strong>Duração:</strong> 1 semana</span>
                            <span><strong>Data:</strong> Abril 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Montar campanha no Facebook Ads para gerar leads no WhatsApp para serviços jurídicos, utilizando arte pronta do cliente.</p>
                        
                        <h4>A Solução</h4>
                        <p>Criação e otimização de campanhas de anúncios local no Meta Ads para promover serviços jurídicos.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Campanha configurada e otimizada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Geração de leads qualificados</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Funnel de conversão implementado</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Retorno sobre investimento positivo</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "As campanhas geraram clientes reais para meu escritório. O Ricardo entendeu perfeitamente o público-alvo do segmento jurídico."
                                <cite>Dr. Coutinho - Advogado</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Quer gerar leads no WhatsApp?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Quero gerar leads no WhatsApp" class="btn-primary" target="_blank">
                                Gerar Leads no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-7-1': {
            title: 'Otimização de Campanha Google Ads - Advogado',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-google"></i>
                            Google Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Dr. Coutinho - Advogado</span>
                            <span><strong>Duração:</strong> 2 dias</span>
                            <span><strong>Data:</strong> Abril 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Campanha no Google Ads com baixo desempenho: 20 cliques em 2 dias sem conversões. Necessidade de análise ou recriação da campanha.</p>
                        
                        <h4>A Solução</h4>
                        <p>Criação e otimização de campanhas de anúncios local no Google Ads para promover serviços jurídicos.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Campanha reotimizada para conversões</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Métricas de performance melhoradas</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Retorno sobre investimento aumentado</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Primeiras conversões em 24h</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O Ricardo identificou os problemas na minha campanha do Google e corrigiu tudo. Agora tenho conversões reais!"
                                <cite>Dr. Coutinho - Advogado</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Campanha com baixo desempenho?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Minha campanha não está convertendo" class="btn-primary" target="_blank">
                                Otimizar Minha Campanha
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-8': {
            title: 'Campanha para Venda de Ingressos Teatrais',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-facebook"></i>
                            Meta Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Os Mentalistas</span>
                            <span><strong>Duração:</strong> 1 semana</span>
                            <span><strong>Data:</strong> Maio 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Campanha focada em vendas de ingressos para espetáculo teatral em São Paulo, requerendo experiência em segmento cultural (teatro, shows, eventos).</p>
                        
                        <h4>A Solução</h4>
                        <p>Criação e otimização de campanha de anúncios local para promover venda de ingressos teatral com configurações especializadas no Meta Ads.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Campanha segmentada para público cultural</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Vendas de ingressos otimizadas</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Experiência em eventos culturais comprovada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Lotação do evento aumentada em 40%</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O Ricardo conseguiu atingir exatamente o público que frequenta teatro. As vendas de ingressos superaram nossas expectativas!"
                                <cite>Os Mentalistas</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Precisa vender ingressos ou tickets?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Preciso vender ingressos/entradas" class="btn-primary" target="_blank">
                                Vender Ingressos
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-9': {
            title: '30 Artes para Posts de Instagram - Neuromarketing',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fas fa-palette"></i>
                            Design
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Vitória Viana</span>
                            <span><strong>Duração:</strong> 1 semana</span>
                            <span><strong>Data:</strong> Maio 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Criação de 30 artes para posts do Instagram de uma especialista em Neuromarketing, com conteúdo já preparado.</p>
                        
                        <h4>A Solução</h4>
                        <p>Criação de 30 artes para conteúdo pronto para redes sociais, destacando produtos e serviços de forma criativa e informativa através de design de carrosséis.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>30 artes profissionais entregues</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Design alinhado com neuromarketing</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Conteúdo visual otimizado para engajamento</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Aumento de 65% no engajamento do perfil</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "As artes ficaram incríveis e totalmente alinhadas com a proposta do neuromarketing. Meu engajamento nas redes aumentou significativamente!"
                                <cite>Vitória Viana</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Precisa de artes profissionais?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Gostaria de artes profissionais para minhas redes sociais" class="btn-primary" target="_blank">
                                Quero Artes Profissionais
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-10': {
            title: '40 Posts Completo para Business Suite',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fas fa-palette"></i>
                            Design
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Regiane Pandolfi</span>
                            <span><strong>Duração:</strong> 2 semanas</span>
                            <span><strong>Data:</strong> Maio 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Criar 40 posts completos (imagens, títulos e descrições) para publicar em 4 páginas distintas no Facebook e Instagram.</p>
                        
                        <h4>A Solução</h4>
                        <p>Desenvolvimento de 40 posts para Facebook e Instagram, incluindo design das imagens, títulos persuasivos e descrições informativas dos produtos e serviços.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>40 posts completos entregues</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Conteúdo para 4 páginas diferentes</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Estratégia de conteúdo personalizada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Aumento de 70% na consistência de publicação</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O Ricardo organizou toda a minha presença digital com posts profissionais e estratégicos. Agora tenho conteúdo de qualidade para meses!"
                                <cite>Regiane Pandolfi</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Precisa de conteúdo para redes sociais?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Gostaria de conteúdo completo para minhas redes sociais" class="btn-primary" target="_blank">
                                Quero Conteúdo Completo
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-11': {
            title: 'Correção e Unificação de Business Manager',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-facebook"></i>
                            Meta Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> João Pedro - JP Automotivo</span>
                            <span><strong>Duração:</strong> 3 dias</span>
                            <span><strong>Data:</strong> Junho 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Múltiplas Business Managers com informações desorganizadas e diferentes, necessitando unificar todos os dados em uma única BM.</p>
                        
                        <h4>A Solução</h4>
                        <p>Ajustes nas configurações das BMs do Facebook para resolver problemas técnicos e melhorar o desempenho das campanhas publicitárias.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Business Manager unificado e organizado</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Dados centralizados</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Problemas técnicos resolvidos</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Otimização de 40% no desempenho das campanhas</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "Finalmente consegui organizar minhas contas de anúncios! O Ricardo resolveu um problema que me incomodava há meses."
                                <cite>João Pedro - JP Automotivo</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Problemas com Business Manager?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Preciso de ajuda com Business Manager" class="btn-primary" target="_blank">
                                Resolver Meu Business Manager
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-12': {
            title: 'Lançamento Completo de E-book',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-facebook"></i>
                            Meta Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Vórtex Visionário</span>
                            <span><strong>Duração:</strong> 2 semanas</span>
                            <span><strong>Data:</strong> Junho 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Preparar e divulgar campanhas para venda de e-book pronto para lançamento em múltiplas plataformas (Google, Facebook, Instagram).</p>
                        
                        <h4>A Solução</h4>
                        <p>Criação de elementos visuais e gestão de Tráfego Pago promovendo a venda do e-book e impulsionando a marca Vórtex Visionário.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Campanha multi-plataforma implementada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Elementos visuais profissionais criados</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Estratégia de lançamento executada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Vendas 3x acima da expectativa</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O lançamento do meu e-book foi um sucesso graças à estratégia completa do Ricardo. As vendas superaram todas as expectativas!"
                                <cite>Vórtex Visionário</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Quer lançar um e-book?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Quero lançar meu e-book" class="btn-primary" target="_blank">
                                Lançar Meu E-book
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-13': {
            title: 'Campanha para Consultoria de Sono Infantil',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-facebook"></i>
                            Meta Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Bia Lopez</span>
                            <span><strong>Duração:</strong> 1 semana</span>
                            <span><strong>Data:</strong> Junho 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Encontrar público assertivo para campanha de consultoria de sono infantil com baixo orçamento de investimento.</p>
                        
                        <h4>A Solução</h4>
                        <p>Configuração e gerenciamento de anúncios pagos no Meta Ads para promover os serviços de consultoria de sono infantil.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Público-alvo assertivo identificado</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Campanha otimizada para baixo orçamento</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Leads qualificados gerados</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>ROI de 5x no primeiro mês</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "Como estava começando, tinha um orçamento limitado. O Ricardo conseguiu resultados incríveis mesmo com pouco investimento!"
                                <cite>Bia Lopez</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Tem um orçamento limitado?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Tenho um orçamento limitado e preciso de resultados" class="btn-primary" target="_blank">
                                Otimizar Meu Orçamento
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-14': {
            title: 'Campanha Local para Serviços de Ar Condicionado',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fab fa-google"></i>
                            Google Ads
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Thiago Wolf - Tjb Wolf</span>
                            <span><strong>Duração:</strong> 1 semana</span>
                            <span><strong>Data:</strong> Julho 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Configurar anúncios no Google Ads em raio de 40km para serviços de instalação, manutenção e higienização de ar condicionado.</p>
                        
                        <h4>A Solução</h4>
                        <p>Desenvolvimento de material publicitário completo para a marca Tjb Wolf, incluindo logo, materiais promocionais e gestão de tráfego local.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Identidade visual criada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Campanha local configurada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Alcance aumentado na região desejada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Aumento de 50% nas ligações de clientes locais</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O Ricardo criou toda minha identidade visual e configurou campanhas que trouxeram clientes da minha região. Serviço completo e eficiente!"
                                <cite>Thiago Wolf - Tjb Wolf</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Quer atrair clientes locais?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Quero atrair mais clientes locais" class="btn-primary" target="_blank">
                                Atrair Clientes Locais
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-15': {
            title: 'Desenvolvimento Completo de E-commerce',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fas fa-shopping-cart"></i>
                            E-commerce
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Mila Shop</span>
                            <span><strong>Duração:</strong> 3 semanas</span>
                            <span><strong>Data:</strong> Julho 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Criar site e-commerce completo com logo, banners, posts e gestão de tráfego pago para produtos dropshipping e pronta entrega.</p>
                        
                        <h4>A Solução</h4>
                        <p>Desenvolvimento de site e-commerce para a loja online Mila Shop, incluindo design, criação de logo e gestão de tráfego pago.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Site e-commerce funcional</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Identidade visual única criada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Estratégia de tráfego implementada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Primeiras vendas na primeira semana</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "O Ricardo fez minha loja virtual do zero e ainda cuida do tráfego. As vendas começaram logo na primeira semana!"
                                <cite>Mila Shop</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Quer criar sua loja virtual?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Quero criar minha loja virtual" class="btn-primary" target="_blank">
                                Criar Minha Loja Virtual
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'caso-16': {
            title: 'Logo Elegante para Clínica Odontológica',
            content: `
                <div class="modal-case">
                    <div class="case-header">
                        <span class="category-badge">
                            <i class="fas fa-palette"></i>
                            Design
                        </span>
                        <div class="case-meta">
                            <span><strong>Cliente:</strong> Dra. Diane Omizollo</span>
                            <span><strong>Duração:</strong> 3 dias</span>
                            <span><strong>Data:</strong> Agosto 2024</span>
                        </div>
                    </div>
                    
                    <div class="case-content">
                        <h4>O Desafio</h4>
                        <p>Criar logo discreta e elegante para sacolas da clínica, sem elementos óbvios de odontologia, transmitindo sofisticação.</p>
                        
                        <h4>A Solução</h4>
                        <p>Criação de logo marca profissional para embalagens e sacolas, com foco na elegância moderna e discrição.</p>
                        
                        <h4>Resultados</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Logo elegante e discreta criada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Identidade visual sofisticada</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Aplicação em sacolas e embalagens</span>
                            </div>
                            <div class="result-item">
                                <i class="fas fa-check-circle"></i>
                                <span>Total satisfação da cliente</span>
                            </div>
                        </div>
                        
                        <div class="testimonial">
                            <blockquote>
                                "Exatamente o que eu imaginava! Uma logo discreta, elegante e moderna que passa a imagem que eu queria para minha clínica."
                                <cite>Dra. Diane Omizollo</cite>
                            </blockquote>
                        </div>

                        <div class="case-cta">
                            <p><strong>Precisa de uma logo profissional?</strong></p>
                            <a href="https://wa.me/5551981670024?text=Olá! Quero uma logo profissional" class="btn-primary" target="_blank">
                                Quero Minha Logo
                            </a>
                        </div>
                    </div>
                </div>
            `
        }
    };
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const caseId = this.getAttribute('data-case');
            const caseData = casesData[caseId];
            
            if (caseData) {
                modalTitle.textContent = caseData.title;
                modalBody.innerHTML = caseData.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});