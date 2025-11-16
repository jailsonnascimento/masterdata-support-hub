import React, { useState, useEffect } from 'react';

interface ClientLogoProps {
  clientName: string | null;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ clientName }) => {
  // O componente agora busca por uma imagem de fundo, não mais um logo.
  // Ex: `/?client=acme` -> `/assets/acme-background.jpg`
  
  // Imagem de fundo padrão, localizada em `public/assets/`.
  const defaultBg = '/assets/default-background.jpg';
  // Imagem de fundo do cliente, também localizada em `public/assets/`.
  const clientBg = clientName ? `/assets/${clientName}-background.jpg` : defaultBg;
  
  const [imageUrl, setImageUrl] = useState(defaultBg); // Começa com o padrão para evitar "flash" de tela vazia

  // Verifica se a imagem customizada do cliente existe. Se não, usa a padrão.
  useEffect(() => {
    if (clientBg === defaultBg) {
      setImageUrl(defaultBg);
      return;
    }

    const img = new Image();
    img.src = clientBg;
    img.onload = () => setImageUrl(clientBg);
    img.onerror = () => setImageUrl(defaultBg);
  }, [clientBg]);

  return (
    <div
      className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-500"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label={clientName ? `Imagem de fundo para o cliente ${clientName}` : 'Imagem de fundo padrão'}
      role="img"
    ></div>
  );
};

export default ClientLogo;