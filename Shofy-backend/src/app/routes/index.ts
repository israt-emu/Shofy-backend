import express from "express";
import {AuthRoutes} from "../modules/auth/auth.route";
import {UserRoutes} from "../modules/user/user.route";
import {ProductRoutes} from "../modules/product/product.route";
import {CartRoutes} from "../modules/cart/cart.route";

const router = express.Router();
//
const moduleRoutes = [
  {path: "/auth", route: AuthRoutes},
  {path: "/users", route: UserRoutes},
  {path: "/products", route: ProductRoutes},
  {path: "/cart", route: CartRoutes},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
