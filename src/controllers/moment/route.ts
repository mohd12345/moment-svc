import { Router } from "express";
import momentControllerInstance from "./MomentController";
import controllerAdapter from "../../middlewares/controllerAdapter";
import AuthManager from "../../middlewares/AuthManager";
const authManager = AuthManager.getInstance();
const router = Router();

router.post(
  "/",
  authManager.auth,
  controllerAdapter(momentControllerInstance, "create")
);

router.delete(
  "/:id",
  authManager.auth,
  controllerAdapter(momentControllerInstance, "delete")
);

router.post(
  "/list",
  authManager.auth,
  controllerAdapter(momentControllerInstance, "get")
);

router.put(
  "/",
  authManager.auth,
  controllerAdapter(momentControllerInstance, "update")
);

export default router;
