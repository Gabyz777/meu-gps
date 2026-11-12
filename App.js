import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const [permissaoConcedida, setPermissaoConcedida] = useState(false);

useEffect(() => {
  const pedirPermissao = async () => {
    // A API paralisa o código e mostra a janelinha do Android!
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status === 'granted') {
      setPermissaoConcedida(true);
      console.log("Uhul! O usuário deixou rastrear!");
    } else {
      console.log("Fomos bloqueados. Game over.");
    }
  };

  pedirPermissao();
}, []);