//auth
import { router as registerRoute } from "./auth/register.js";
import { router as loginRoute } from "./auth/login.js"
import { router as refreshTokenRoute } from "./auth/refreshToken.js"
import { router as logoutRoute } from "./auth/logout.js"

//api
import { router as studentRoute} from "./api/student.js"
import { router as gradeRoute } from "./api/grade.js"
import { router as sectionRoute } from "./api/section.js"

export {
  registerRoute,
  loginRoute,
  refreshTokenRoute,
  logoutRoute,
  studentRoute,
  gradeRoute,
  sectionRoute
};

