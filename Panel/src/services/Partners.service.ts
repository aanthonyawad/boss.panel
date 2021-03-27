import { NextFunction, Request, Response } from 'express';
import SomeException from '../exceptions/some-error.exception';
import ContactDetailsSchema from '../entities/contactDetails.schema';
import { PartnersResponse } from '../dtos/responses/partners/partners.response.dto';
import ContactDetailsDbContext from '../dbcontexts/application.context';
import ContactDetails from '../entities/contactDetails.schema';


    export const list = async(request: Request, response: Response, next: NextFunction) => {
        await ContactDetailsDbContext.find((err : any,res : any)=>{
            if(err)
                return next(new SomeException('Unable to Fetch Details '));
                
            response.send(res);
        })
    }
    export const listOne = async(request: Request, response: Response, next: NextFunction) => {

    }
    export const  add = async(request: Request, response: Response, next: NextFunction) => {
        let contactDetails = new ContactDetailsDbContext(request.body); 
        await  contactDetails.save((err :any)=>{
            if(err)
                return next(new SomeException('Unable to Create Contact Detail '));
            
            response.send(contactDetails);
        });
    }
    export const put = async (request: Request, response: Response, next: NextFunction) => {

    }
    export const deleteOne =  async (request: Request, response: Response, next: NextFunction) =>{
        
    }

