//auth
import { router as registerRoute } from "./auth/register.js";
import { router as loginRoute } from "./auth/login.js"
import { router as refreshTokenRoute } from "./auth/refreshToken.js"


export {
  registerRoute,
  loginRoute,
  refreshTokenRoute
};

