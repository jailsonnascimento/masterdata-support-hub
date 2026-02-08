import React from 'react';
import ClientLogo from './components/ClientLogo';
import InstagramIcon from './components/icons/InstagramIcon';
import YoutubeIcon from './components/icons/YoutubeIcon';
import WhatsappIcon from './components/icons/WhatsappIcon';

const App: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const clientName = urlParams.get('client');

  const whatsappLink = "https://wa.me/5534988147962?text=Suporte%20MasterData";
  const instagramLink = "https://instagram.com";
  const youtubeLink = "https://youtube.com";

  return (
    <main className="w-screen h-screen overflow-hidden font-sans text-white">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-[74%_26%]">

        {/* ===== COLUNA ESQUERDA ===== */}
        <div className="relative w-full h-full">
          <ClientLogo clientName={clientName} />

          {/* Redes sociais */}
          <div className="absolute bottom-6 left-6 z-20 flex gap-4">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>

        {/* ===== COLUNA DIREITA ===== */}
        <div
          className="relative w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/masterdata-side-banner.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Botão */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 px-6 py-3
                bg-[#25A244] text-white font-bold rounded-full
                shadow-2xl hover:bg-[#1f8a38]
                transition-all transform hover:scale-110
              "
            >
              <WhatsappIcon className="w-6 h-6" />
              <span>Suporte Clique aqui</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default App;
