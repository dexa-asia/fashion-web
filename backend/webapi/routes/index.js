import routeProduct from "./route_product.js";
import routeSite from "./route_site.js";

const setupRoutes = (app) => {
    app.use('/',routeSite );
    app.use('/product',routeProduct)

};

export default setupRoutes;