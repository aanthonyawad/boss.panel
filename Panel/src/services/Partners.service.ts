import { MeetingDetails } from './../constants/meetingDetails';
import { Office, PartnerRequest } from './../dtos/requests/partners/partners.requests.dto';
import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';


    export const list = async(request: Request, response: Response, next: NextFunction) => {
        let fr =  fs.readFileSync('partners.json','utf8');
        let partnerRequest : PartnerRequest [] = JSON.parse(fr);
        let partnerResult : PartnerRequest [] = [];
        partnerRequest.forEach(value =>{
            value.offices.forEach(office =>{ 
                let result = calculatedistance(office);
                if(result != NaN ){
                    office.distance = MeetingDetails.earthRadius*result
                    // partnerResult.push(value);
                }
            })
        }) 
        return response.send(partnerRequest); 
        
    }

    export const listWithinRange = async(request: Request, response: Response, next: NextFunction) => {
        let fr =  fs.readFileSync('partners.json','utf8');
        let partnerRequest : PartnerRequest [] = JSON.parse(fr);
        partnerRequest.sort((a,b) => a.urlName > b.urlName ? 1: -1); 
        
    }

    export const listOne = async(request: Request, response: Response, next: NextFunction) => {

    }

    export const  add = async(request: Request, response: Response, next: NextFunction) => {
        
    }

    export const put = async (request: Request, response: Response, next: NextFunction) => {

    }

    export const deleteOne =  async (request: Request, response: Response, next: NextFunction) =>{
        
    }

    export  const calculatedistance = (office: Office) => {
        let coords : string [] = office.coordinates.split(',');
        let long = +coords[0];
        let lat = +coords[0];

        let absoluteDifferenceLat = +(lat - MeetingDetails.lat); 
        let absoluteDifferenceLong = +(long - MeetingDetails.long); 
        
        return 2
        *Math.asin(
            Math.sqrt(
                Math.sin(absoluteDifferenceLat/2)
                *Math.sin(absoluteDifferenceLat/2)
                +Math.cos(lat)+Math.cos(MeetingDetails.lat)
                *Math.sin(absoluteDifferenceLong/2)
                *Math.sin(absoluteDifferenceLong/2)
            )
        );
                

    }