export const ENV = {
  SERVER_HOST: 'http://localhost:1337/api',
 API_URL: 'http://localhost:1337/api',
  API_URL_TEMPORAL: 'https://gaming-be-grgrimales-projects.vercel.app', //'https://gaming-be-grgrimales-projects.vercel.app',
   //SERVER_HOST: "https://gaming-be-grgrimales-projects.vercel.app/",
   //API_URL: "https://gaming-be-grgrimales-projects.vercel.app/",
  ENDPOINTS: {
    AUTH: {
      REGISTER: "/auth/local/register",
      LOGIN: "/auth/local",
    },
    USERS_ME:  "/auth/local", //"/users/me",
    USERS: "/users",
    PLATFORM: "/platforms",
    ADDRESS: "/addresses",
    GAME: "/games",
    WISHLIST: "/wishlists",
    PAYMENT_ORDER: "/payment-order",
    ORDERS: "/orders",
  },
  TOKEN: "token",
  CART: "cart",
  STRIPE_KEY:
    "pk_test_51NoEb9JHYEbXwkcVvogtctVH6JWpg5Q27o7LpSd3ISOkkwA3UGEl3wmG8RKmJwkqQnQ7ofciX5vIJTQ3NIL7RXuc00lvoA0s1F",
};
