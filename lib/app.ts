import * as express from "express";
import * as bodyparser from "body-parser";
import {Routes} from "./routes/crmRoutes";

class App{

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void{
        //support application/json post data
        this.app.use(bodyparser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyparser.urlencoded({ extended : false }));
    }
}

export default new App().app;