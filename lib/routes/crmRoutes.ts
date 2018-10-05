import {Request, Response} from "express";

export class Routes{
    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfull.'
            })
        })

        //Contact
        app.route('/contact')
        //GET - All Contacts
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Get request successfull.'
            })
        })
        //POST - Create new contact
        .post((req: Request, res: Response) => {
            res.status(200).send({
                message: 'POST request successfull.'
            })
        })

        // Contact detail
        app.route('/contact/:contactId')
        // GET - specific contact
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successful'
            })
        })
        // PUT - Update a contact
        .put((req: Request, res: Response) => {
            res.status(200).send({
                message: 'PUT request successful'
            })
        })
        // DELETE a contact
        .delete((req: Request, res: Response) => {       
            res.status(200).send({
                message: 'DELETE request successful'
            })
        })


    }
}