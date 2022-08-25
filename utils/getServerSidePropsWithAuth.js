const dataNotion = null;

export const getServerSidePropsWithNoAuth = async () => {
  const email = dataNotion;
  const accessToken = dataNotion;

  if (email && accessToken) {
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

export const getServerSidePropsWithAuth = async () => {
  const email = dataNotion;
  const accessToken = dataNotion;

  if (!email && !accessToken) {
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
