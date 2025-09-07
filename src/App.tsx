import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { MapPin, Phone, ExternalLink, Menu, X, Users, Clock, Heart, ChevronUp, Star, Quote } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const passeios = [
    {
      nome: "Ilha Anchieta",
      foto: "img/ILHA-ANCHIETA_2.jpg",
      descricao: "A Ilha Anchieta é um passeio incrível, com praias lindas e muita história. Nós sempre nos encantamos com os macaquinhos que encontramos por lá!",
      endereco: "Ilha Anchieta, Ubatuba - SP",
      mapsLink: "https://maps.google.com/?q=Ilha+Anchieta+Ubatuba+SP",
      dica: "Leve protetor solar e água! O passeio dura o dia todo."
    },
    {
      nome: "Ilha das Couves",
      foto: "img/ILHA-DAS-COUVES.jpg",
      descricao: "Uma das nossas ilhas favoritas! Água cristalina perfeita para mergulho e snorkel. É um pedacinho do paraíso bem pertinho de casa.",
      endereco: "Ilha das Couves, Ubatuba - SP",
      mapsLink: "https://maps.google.com/?q=Ilha+das+Couves+Ubatuba+SP",
      dica: "Lembre-se de levar snorkel e máscara! Os peixinhos são lindos."
    },
    {
      nome: "Cachoeira da Renata",
      foto: "img/cachoeira-da-renata-1.jpeg",
      descricao: "Uma cachoeira linda e refrescante! A trilha é tranquila e vale muito a pena. Ideal para um dia de calor.",
      endereco: "Estrada da Cachoeira da Renata, Ubatuba - SP",
      mapsLink: "https://maps.google.com/?q=Cachoeira+da+Renata+Ubatuba+SP",
      dica: "Use tênis antiderrapante e leve repelente!"
    },
    {
      nome: "Projeto Tamar",
      foto: "img/AdobeStock_1626397351.jpeg",
      descricao: "Um lugar especial para conhecer as tartarugas marinhas! Educativo e emocionante, amamos levar nossos hóspedes lá.",
      endereco: "Av. Marginal, 7200 - Itaguá, Ubatuba - SP",
      mapsLink: "https://maps.google.com/?q=Projeto+Tamar+Ubatuba+SP",
      telefone: "(12) 3832-6202"
    },
    {
      nome: "Passeio de Escuna",
      foto: "img/AdobeStock_308356448.jpeg",
      descricao: "O passeio de escuna é imperdível! Conhecer as ilhas de uma forma relaxante e divertida é maravilhoso.",
      endereco: "Cais do Porto de Ubatuba",
      mapsLink: "https://maps.google.com/?q=Porto+Ubatuba+SP",
      dica: "Reserve com antecedência na alta temporada!"
    },
    {
      nome: "Aquário de Ubatuba",
      foto: "https://images.unsplash.com/photo-1631300692372-d96d2d13c20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcXVhcml1bSUyMGZpc2glMjB0cm9waWNhbHxlbnwxfHx8fDE3NTY2NTY4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      descricao: "O Aquário é perfeito para toda a família! As crianças adoram e os adultos também se encantam com a vida marinha local.",
      endereco: "R. Guarani, 859 - Itaguá, Ubatuba - SP",
      mapsLink: "https://maps.google.com/?q=Aquário+Ubatuba+SP",
      telefone: "(12) 3832-1382"
    }
  ];

  const utilidades = [
    {
      nome: "Supermercado Garotão",
      foto: "img/AdobeStock_592612000.jpeg",
      descricao: "O Garotão é um ótimo mercado, tem de tudo um pouco e o pãozinho de lá é uma delícia! Fica bem pertinho da nossa casa.",
      endereco: "Estrada de Maranduba, Ubatuba - SP",
      mapsLink: "https://maps.google.com/?q=Supermercado+Garotão+Maranduba+Ubatuba",
      telefone: "(12) 3833-XXXX"
    },
    {
      nome: "Supermercados Litoral Norte",
      foto: "img/AdobeStock_592609637.jpeg",
      descricao: "O supermercado Litoral Norte é um pouco mais longe, porém tem um ótimo preço, mesmo em temporada.",
      endereco: "Rod. Rio-Santos, 1890 - Maranduba, Ubatuba - SP, 11679-000",
      mapsLink: "https://maps.google.com/?q=Rod.+Rio-Santos,+1890+-+Maranduba,+Ubatuba+-+SP",
      telefone: "(12) 3834-1530"
    },
    {
      nome: "Galeria Maranduba",
      foto: "img/galeria-maranduba.jpg",
      descricao: "Com várias opções de lojas e alimentação, a Galeria Maranduba é perfeita para fazer compras e encontrar tudo que precisam.",
      endereco: "Galeria Maranduba, Av. Ten. Manoel Barbosa da Silva - Maranduba, Ubatuba - SP, 11680-000",
      mapsLink: "https://maps.google.com/?q=Galeria+Maranduba,+Av.+Ten.+Manoel+Barbosa+da+Silva+-+Maranduba,+Ubatuba+-+SP",
      telefone: ""
    },
    {
      nome: "SORVETERIA OGGI",
      foto: "img/oggie.webp",
      descricao: "Sorvetes deliciosos para refrescar nos dias de calor! Uma parada obrigatória para quem ama um gelado.",
      endereco: "R. Srg. Pedro Krinski, 21 - Maranduba, Ubatuba - SP, 11681-312",
      mapsLink: "https://maps.google.com/?q=R.+Srg.+Pedro+Krinski,+21+-+Maranduba,+Ubatuba+-+SP",
      telefone: ""
    },
    {
      nome: "Açougue Camar Carnes",
      foto: "img/acougue-gourmet-boutique-feab5352.webp",
      descricao: "Carnes frescas e de qualidade! O açougue tem uma ótima seleção para os seus churrascos.",
      endereco: "R. do Eixo, 941 - Maranduba, Ubatuba - SP, 11682-168",
      mapsLink: "https://maps.google.com/?q=R.+do+Eixo,+941+-+Maranduba,+Ubatuba+-+SP",
      telefone: "(12) 3849-5240"
    },
    {
      nome: "Peixaria Maranduba",
      foto: "https://images.unsplash.com/photo-1637679242615-0ddbbb34b7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwbWFya2V0JTIwc2VhZm9vZHxlbnwxfHx8fDE3NTY2NTY4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      descricao: "Peixes fresquinhos toda manhã! O pessoal é muito atencioso e sempre tem as melhores opções do dia.",
      endereco: "Praia de Maranduba, Ubatuba - SP",
      mapsLink: "https://maps.google.com/?q=Peixaria+Maranduba+Ubatuba",
      telefone: "(12) 3833-XXXX"
    },
    {
      nome: "Farma Conde",
      foto: "img/Farma_Conde.jpg",
      descricao: "Farmácia de confiança na região, com ótimo atendimento e tudo que vocês precisam para cuidar da saúde.",
      endereco: "Rod. Governador Mário Covas, 878 - Praia do Sape, Ubatuba - SP, 11680-000",
      mapsLink: "https://maps.google.com/?q=Rod.+Governador+Mário+Covas,+878+-+Praia+do+Sape,+Ubatuba+-+SP",
      telefone: "(12) 3849-8400"
    },
    {
      nome: "Posto de Saúde de Maranduba",
      foto: "img/posto-saude.jpeg",
      descricao: "Para emergências básicas e atendimento de saúde. Sempre bom saber onde fica!",
      endereco: "Maranduba, Ubatuba - SP",
      mapsLink: "https://maps.app.goo.gl/FJRXCyga4XiBWQae8",
      telefone: "(12) 3849-6137"
    }
  ];

  const quiosques = [
    {
      nome: "Quiosque Eskizitinho",
      estrelas: 4.4,
      foto: "img/AdobeStock_1056983327.jpeg",
      endereco: "Av marginal 1421 - Maranduba, Ubatuba - SP, 11680-000",
      telefone: "(12) 3849-8590",
      mapsLink: "https://share.google/Dd0xggrT3VeqCAqcx",
      avaliacoes: [
        { nome: "Glauber", comentario: "Ótimo serviço, garçons atenciosos, porções feitas na hora e drinks de qualidade." },
        { nome: "Gisele Telles", comentario: "Camarão Delia bem temperadinho Tilápia show Batata frita Tudo de bom" },
        { nome: "Julianderson Lima", comentario: "Ótimos funcionários educados e gente boa." }
      ]
    },
    {
      nome: "Quiosque Do Joel",
      estrelas: 4.5,
      foto: "img/crianca-praia-maranduba-ubatuba-sp.jpg",
      endereco: "Rod. Dr. Manoel Hipólito do Rêgo, 851-889 - Maranduba, Ubatuba - SP, 11680-000",
      telefone: "",
      mapsLink: "https://share.google/fLgQbyWJhwzDvampW",
      avaliacoes: [
        { nome: "Walter", comentario: "Atendimento de primeira. Recomendo." },
        { nome: "Fábio", comentario: "Ótimo atendimento com o garçom Fernando e preços justos. Excelente localização na praia!" },
        { nome: "Bel", comentario: "Excelente atendimento. Joel e Cida os proprietários são muito cordiais e atenciosos." }
      ]
    },
    {
      nome: "Quiosque Do Gaucho",
      estrelas: 4.5,
      foto: "img/guarda-sol-amerelo-praia-maranduba-ubatuba-sp.jpg",
      endereco: "Rod. Dr. Manoel Hipólito do Rêgo, 851-889 - Maranduba, Ubatuba - SP, 11680-000",
      telefone: "",
      mapsLink: "https://share.google/gkklTU4tM2CWJDhyj",
      avaliacoes: [
        { nome: "Ana Claudia", comentario: "Ótimo atendimento. Preço bom! Porções excelentes e uma vista maravilhosa" },
        { nome: "Agnaldo", comentario: "Muito bem recebido e as porções, muito boas. Parabéns aos atendentes , sempre sorridentes e prestativos" },
        { nome: "Daniela", comentario: "Ótimo atendimento, porções muito bem feitas e saborosas !" }
      ]
    }
  ];

  const telefonesUteis = [
    { nome: "SAMU", telefone: "192" },
    { nome: "Bombeiros", telefone: "193" },
    { nome: "Polícia Militar", telefone: "190" },
    { nome: "Polícia Militar Maranduba", telefone: "(12) 3849-8339" },
    { nome: "Santa Casa de Ubatuba", telefone: "(12) 3832-1212" },
    { nome: "Prefeitura de Ubatuba", telefone: "(12) 3832-7100" }
  ];

  const avaliacoes = [
    {
      nome: "Jeisiane Aparecida Fonseca",
      data: "março de 2025",
      comentario: "Fomos muito bem recebidos tanto pelo proprietário quanto pelo caseiro. A casa é ótima, muito espaçosa, bem segura. Fizemos duas pontuações ao Sr Luiz quanto aos botões do fogão que estão soltando e para colocar mais espelhos na casa, o qual foi solícito e disse que vai providenciar os reparos. Mas fora isso, não temos nada para reclamar. Voltaremos mais vezes."
    },
    {
      nome: "Laiza",
      data: "abril de 2025", 
      comentario: "Eu e minha família fomos bem recebidos, a casa é aconchegante, espaçosa tem uma ótima localização, 5 minutos a pé da praia, restaurantes e supermercados, bairro tranquilo. Nossa estadia foi maravilhosa, pretendemos voltar ❤️"
    },
    {
      nome: "Vinícius",
      data: "fevereiro de 2025",
      comentario: "Excelente acomodação, lugar muito tranquilo e aconchegante, tudo conforme descrito no anúncio (texto e fotos), cozinha muito bem equipada. O anfitrião sempre respondeu prontamente e o check in e o check out foram rápidos. Espero retornar futuramente e recomendo para quem for se hospedar em Maranduba."
    },
    {
      nome: "Ana Lucia Pereira De Souza", 
      data: "janeiro de 2025",
      comentario: "Foi muito boa, gostei muito. A casa é maravilhosa, tudo limpinho, o quintal com muito espaço."
    },
    {
      nome: "Flaviane",
      data: "fevereiro de 2025",
      comentario: "Muito boa casa em local de fácil acesso."
    }
  ];

  // Monitor scroll position to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header id="top" className="relative">
        <div 
          className="h-screen bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('img/AdobeStock_287878146.webp')`
          }}
        >
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 p-4 z-50">
            <div className="flex justify-between items-center">
              <div className="text-white"></div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2 rounded-lg bg-black/20 backdrop-blur-sm"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex gap-6">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/20"
                  onClick={() => scrollToSection('passeios')}
                >
                  Passeios
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/20"
                  onClick={() => scrollToSection('quiosques')}
                >
                  Quiosques
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/20"
                  onClick={() => scrollToSection('utilidades')}
                >
                  Utilidades
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/20"
                  onClick={() => scrollToSection('avaliacoes')}
                >
                  Avaliações
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/20"
                  onClick={() => scrollToSection('sobre')}
                >
                  Sobre Ubatuba
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 bg-black/80 backdrop-blur-sm rounded-lg p-4">
                <div className="flex flex-col gap-2">
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/20 justify-start"
                    onClick={() => scrollToSection('passeios')}
                  >
                    Passeios
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/20 justify-start"
                    onClick={() => scrollToSection('quiosques')}
                  >
                    Quiosques
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/20 justify-start"
                    onClick={() => scrollToSection('utilidades')}
                  >
                    Utilidades
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/20 justify-start"
                    onClick={() => scrollToSection('avaliacoes')}
                  >
                    Avaliações
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/20 justify-start"
                    onClick={() => scrollToSection('sobre')}
                  >
                    Sobre Ubatuba
                  </Button>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl mb-6 text-white">
                Bem-vindos ao nosso Cantinho em Maranduba!
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Um guia feito com carinho por Gi & Luiz para tornar sua estadia inesquecível.
              </p>
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => scrollToSection('passeios')}
                >
                  Explore nossos passeios <Heart className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Passeios Section */}
      <section id="passeios" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Passeios Imperdíveis</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ubatuba é um paraíso! Adoramos explorar a região e aqui estão alguns dos nossos lugares favoritos que recomendamos de coração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passeios.map((passeio, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={passeio.foto}
                    alt={passeio.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {passeio.nome}
                    <MapPin className="h-4 w-4 text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{passeio.descricao}</p>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{passeio.endereco}</span>
                  </div>

                  {passeio.telefone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{passeio.telefone}</span>
                    </div>
                  )}

                  {passeio.dica && (
                    <Badge variant="secondary" className="text-xs">
                      💡 {passeio.dica}
                    </Badge>
                  )}

                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => window.open(passeio.mapsLink, '_blank')}
                  >
                    Ver no mapa <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quiosques Section */}
      <section id="quiosques" className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Quiosques Mais Próximos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Para saborear deliciosos pratos à beira-mar! Aqui estão os melhores quiosques próximos da nossa casa, cada um com seu charme especial.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {quiosques.map((quiosque, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={quiosque.foto}
                    alt={quiosque.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {quiosque.nome}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(Math.floor(quiosque.estrelas))].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {quiosque.estrelas % 1 !== 0 && (
                        <Star className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{quiosque.estrelas} estrelas</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{quiosque.endereco}</span>
                  </div>

                  {quiosque.telefone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{quiosque.telefone}</span>
                    </div>
                  )}

                  {quiosque.avaliacoes.length > 0 && (
                    <div className="space-y-3">
                      <h5 className="text-sm font-medium">O que os clientes falam:</h5>
                      {quiosque.avaliacoes.map((avaliacao, avalIndex) => (
                        <div key={avalIndex} className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground italic">"{avaliacao.comentario}"</p>
                          <p className="text-xs mt-1 font-medium">- {avaliacao.nome}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => window.open(quiosque.mapsLink, '_blank')}
                  >
                    Ver no mapa <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Utilidades Section */}
      <section id="utilidades" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Utilidades Próximas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Para facilitar sua estadia, aqui estão alguns lugares úteis pertinho da nossa casa. Tudo o que vocês podem precisar está a poucos minutos de distância.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {utilidades.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={item.foto}
                    alt={item.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {item.nome}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{item.descricao}</p>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.endereco}</span>
                  </div>

                  {item.telefone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.telefone}</span>
                    </div>
                  )}

                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => window.open(item.mapsLink, '_blank')}
                  >
                    Ver no mapa <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Telefones Úteis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Telefones Úteis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {telefonesUteis.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium">{item.nome}</span>
                    <Badge variant="outline">{item.telefone}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Avaliações Section */}
      <section id="avaliacoes" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">O que nossos hóspedes dizem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ficamos muito felizes com o carinho dos nossos hóspedes! Estas avaliações nos enchem de orgulho e motivação para continuar recebendo vocês da melhor forma possível.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {avaliacoes.map((avaliacao, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{avaliacao.nome}</CardTitle>
                        <Quote className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">{avaliacao.data}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {avaliacao.comentario}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Quer deixar sua avaliação também?
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open('#', '_blank')}
            >
              Avaliar no Airbnb <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Ubatuba Section */}
      <section id="sobre" className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Sobre a Nossa Ubatuba</h2>
            <p className="text-lg text-muted-foreground">
              Somos apaixonados por esta cidade e sua história rica. Aqui contamos um pouco mais sobre Ubatuba para vocês.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <ImageWithFallback
                src="img/AdobeStock_372062510.jpeg"
                alt="Ubatuba"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl mb-4">História e Cultura</h3>
              <p className="text-muted-foreground">
                Ubatuba, conhecida como a "Capital do Surf", é uma cidade histórica fundada em 1637. 
                Seu nome vem da palavra tupi que significa "lugar da abundância de ubás" (canoas).
              </p>
              <p className="text-muted-foreground">
                A cidade preserva sua arquitetura colonial e oferece mais de 100 praias ao longo de seus 83 km de costa, 
                sendo um dos destinos mais procurados do litoral norte de São Paulo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4>População</h4>
                <p className="text-2xl mt-2">~95.000</p>
                <p className="text-sm text-muted-foreground mt-1">habitantes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4>Área</h4>
                <p className="text-2xl mt-2">723 km²</p>
                <p className="text-sm text-muted-foreground mt-1">de território</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h4>Distância de SP</h4>
                <p className="text-2xl mt-2">230 km</p>
                <p className="text-sm text-muted-foreground mt-1">pela rodovia</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Distâncias Importantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>São José dos Campos</span>
                    <Badge variant="outline">140 km</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Rio de Janeiro</span>
                    <Badge variant="outline">280 km</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Santos</span>
                    <Badge variant="outline">150 km</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Aeroporto de Guarulhos</span>
                    <Badge variant="outline">200 km</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Campos do Jordão</span>
                    <Badge variant="outline">180 km</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Paraty</span>
                    <Badge variant="outline">80 km</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-red-400" />
            <h3 className="text-2xl">Com carinho, Gi & Luiz</h3>
            <Heart className="h-6 w-6 text-red-400" />
          </div>
          
          <p className="text-lg">
            Esperamos que aproveitem muito! Qualquer dúvida, é só chamar.
          </p>

          <div className="mb-6">
            <p className="mb-3">📱 WhatsApp do Luiz:</p>
            <Button 
              variant="outline" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open('https://wa.me/5511967074824', '_blank')}
            >
              +55 11 96707-4824 <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-2">📍 Endereço da nossa casa:</p>
              <Button 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://maps.app.goo.gl/nhivEwYmD3unMRuw6', '_blank')}
              >
                Ver no Google Maps <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div>
              <p className="mb-2">🏠 Veja mais sobre nossa casa:</p>
              <Button 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://www.airbnb.com.br/rooms/1335517473026749887?check_in=2025-02-19&check_out=2025-02-21&guests=1&adults=14&s=67&unique_share_id=4f09e02f-e594-4582-b92b-463c8d61562a', '_blank')}
              >
                Acesse nosso Airbnb <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 mt-8">
            <p className="text-sm opacity-80">
              © 2025 Cantinho da Gi & Luiz - Feito com ❤️ para nossos hóspedes especiais
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}