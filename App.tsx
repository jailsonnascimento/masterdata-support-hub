import React from 'react';
import ClientLogo from './components/ClientLogo'; // Este componente agora renderiza o fundo
import InstagramIcon from './components/icons/InstagramIcon';
import YoutubeIcon from './components/icons/YoutubeIcon';
import WhatsappIcon from './components/icons/WhatsappIcon';

const App: React.FC = () => {
  // Lê os parâmetros da URL para encontrar o nome do cliente.
  const urlParams = new URLSearchParams(window.location.search);
  const clientName = urlParams.get('client');

  // Caminho para o logo dentro da pasta `public/assets`, conforme necessário para o deploy no Netlify.
  const masterdataLogoUrl = "/assets/masterdata-logo.png";
  // Link do WhatsApp atualizado com número e mensagem
  const whatsappLink = "https://wa.me/5534988147962?text=Suporte%20MasterData";
  const instagramLink = 'https://instagram.com';
  const youtubeLink = 'https://youtube.com';

  return (
    <main className="relative w-screen h-screen bg-gray-900 overflow-hidden font-sans text-white">
      {/* Camada 1 (z-0): Imagem de fundo do cliente */}
      <ClientLogo clientName={clientName} />
      
      {/* Camada 3 (z-20): Rodapé com todos os elementos de ação */}
      <footer className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20 flex items-end justify-between w-full bg-gradient-to-t from-black/50 via-black/20 to-transparent">
        {/* Ícones de Redes Sociais (Esquerda) */}
        <div className="flex items-center gap-4">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Instagram" className="hover:opacity-80 transition-opacity transform hover:scale-110">
            <InstagramIcon className="w-6 h-6 md:w-7 md:h-7" />
          </a>
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer" aria-label="Visite nosso canal no YouTube" className="hover:opacity-80 transition-opacity transform hover:scale-110">
            <YoutubeIcon className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>

        {/* Logo e Botão de Suporte (Direita) */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={masterdataLogoUrl}
            alt="Logo da MasterData"
            className="h-[300px] w-[300px] object-contain drop-shadow-lg"
          />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contatar Suporte via WhatsApp"
            className="
              inline-flex items-center justify-center gap-2 px-6 py-3
              bg-[#25A244] text-white font-bold text-base rounded-full
              shadow-2xl hover:bg-[#1f8a38] transition-all duration-300
              transform hover:scale-110
            "
          >
            <WhatsappIcon className="w-6 h-6" />
            <span>Suporte - Clique aqui</span>
          </a>
        </div>
      </footer>
    </main>
  );
};

export default App;