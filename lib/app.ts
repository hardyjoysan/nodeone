import * as express from "express";
import * as bodyparser from "body-parser";
import {Routes} from "./routes/crmRoutes";
import * as mongoose from "mongoose";

class App{

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://root:hardy12345@ds223253.mlab.com:23253/nodeone';

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        //support application/json post data
        this.app.use(bodyparser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyparser.urlencoded({ extended : false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}

export default new App().app;