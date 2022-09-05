import { destroyCookie, parseCookies } from 'nookies';

export const getServerSidePropsWithNoAuth = async (context) => {
  const { _t: accessToken, _id: userId } = parseCookies(context, { path: '/' });

  if (userId && accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export const getServerSidePropsWithAuth = async (context) => {
  const { _t: accessToken, _id: userId } = parseCookies(context, { path: '/' });

  if (!userId) {
    destroyCookie(context, '_t', { path: '/' });
    destroyCookie(context, '_id', { path: '/' });

    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  if (!accessToken) {
    destroyCookie(context, '_t', { path: '/' });
    destroyCookie(context, '_id', { path: '/' });

    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
