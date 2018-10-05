import * as express from "express";
import * as bodyparser from "body-parser";

class App{

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void{
        //support application/json post data
        this.app.use(bodyparser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyparser.urlencoded({ extended : false }));
    }
}

export default new App().app;