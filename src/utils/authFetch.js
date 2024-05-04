
import { Token } from "@/api";

export async function authFetch(url, params) {
  const tokenCtrl = new Token();
  const token = tokenCtrl.getToken();

  const logout = () => {
    tokenCtrl.removeToken();
  };

  if (!token || tokenCtrl.hasExpired(token)) { 
    console.log('Token no válido o expirado, redirigiendo a login...');
    logout();
    return; 
  }

  const paramsTemp = {
    ...params,
    headers: {
      ...params?.headers,
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 10 }
  };

  try {
    return await fetch(url, paramsTemp);
  } catch (error) {
    console.error('Error en fetch:', error);
    return error;
  }
}
