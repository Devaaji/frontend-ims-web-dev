import { parseCookies, setCookie, destroyCookie } from 'nookies';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useAuthUserStore = create(
  devtools(
    (set) => {
      const cookies = parseCookies();
      const { _t: accessToken } = cookies;

      return {
        accessToken,
        setCreateToken: (newAccessToken) => {
          setCookie(null, '_t', newAccessToken, { path: '/' });
          set({
            accessToken: newAccessToken,
          });
        },
      };
    },
    { name: 'user' }
  )
);

export default useAuthUserStore;
