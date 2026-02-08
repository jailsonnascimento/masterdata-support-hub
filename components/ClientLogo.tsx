import React, { useState, useEffect } from 'react';

interface ClientLogoProps {
  clientName: string | null;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ clientName }) => {
  // Imagem padrão
  const defaultBg = '/assets/default-background.jpg';

  // Imagem do cliente
  const clientBg = clientName
    ? `/assets/${clientName}-background.jpg`
    : defaultBg;

  const [imageUrl, setImageUrl] = useState(defaultBg);

  // Verifica se a imagem do cliente existe
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
      className="
        absolute inset-0
        bg-cover bg-center
        transition-opacity duration-500
        pointer-events-none
      "
      style={{ backgroundImage: `url('${imageUrl}')` }}
      aria-hidden="true"
    />
  );
};

export default ClientLogo;
