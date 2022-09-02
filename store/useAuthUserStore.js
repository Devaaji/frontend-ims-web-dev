import { parseCookies, setCookie, destroyCookie } from 'nookies';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useAuthUserStore = create(
  devtools(
    (set) => {
      const cookies = parseCookies();
      const { id: id, _t: accessToken } = cookies;

      return {
        id,
        accessToken,
        setId: (newId) => {
          setCookie(null, '_id', newId, { path: '/' });
          set({
            id: newId,
          });
        },
        setCreateToken: (newAccessToken) => {
          setCookie(null, '_t', newAccessToken, { path: '/' });
          set({
            accessToken: newAccessToken,
          });
        },
        setLogout: () => {
          destroyCookie(null, '_t', { path: '/' });
          set({
            accessToken: undefined,
          });
        },
      };
    },
    { name: 'user' }
  )
);

export default useAuthUserStore;
