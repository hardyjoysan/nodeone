import {Request, Response} from "express";
import {ContactController} from "../controllers/crmController";

export class Routes{
    public contactController: ContactController = new ContactController();
    
    
    public routes(app): void{

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET Direct home link'
            })
        })

        // Get all contacts
        app.route('/contact')
            .get(this.contactController.getContacts)

        // Create a new contact
        app.route('/contact')
            .post(this.contactController.addNewContact);

        app.route('/contact/:contactId')
            // get a specific contact
            .get(this.contactController.getContactWithID)
            // update a specific contact
            .put(this.contactController.updateContact)
            // delete a specific contact
            .delete(this.contactController.deleteContact)

    }
}