import { MeetingDetails } from "./../constants/meetingDetails";
import { NextFunction, Request, Response } from "express";
import * as fs from "fs";
import {
  PartnerRequest,
  Office,
} from "../dtos/responses/partners/partners.response.dto";
import { getResponse } from "../utils/response";

export const list = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let fr = fs.readFileSync("partners.json", "utf8");
  let partnerRequest: PartnerRequest[] = JSON.parse(fr);
  partnerRequest = partnerRequest.splice(+request.params.skip,+request.params.take);
  return response.send(getResponse(partnerRequest));

};

export const listWithinRange = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let range: number = +request.params.range;
  let fr = fs.readFileSync("partners.json", "utf8");
  let partnerRequest: PartnerRequest[] = JSON.parse(fr);
  partnerRequest.forEach((value) => {
    value.offices.forEach((office) => {
      office.distance = calculatedistance(office);
    });
  });

  let partnerResult: PartnerRequest[] = [];
  partnerRequest.forEach((value) => {
    for (var i = 0; i < value.offices.length; i++) {
      if (range >= value.offices[i].distance) {
        partnerResult.push(value);
        break;
      }
    }
  });
  
  partnerResult = partnerResult.sort((a, b) => (a.urlName > b.urlName ? 1 : -1));
  partnerResult = partnerResult.splice(+request.params.skip,+request.params.take);
  response.send(getResponse(partnerResult));
};

export const calculatedistance = (office: Office) => {
  let coords: string[] = office.coordinates.split(",");
  let long = +coords[0];
  let lat = +coords[1];

  let absoluteDifferenceLat = +(lat - MeetingDetails.lat);
  let absoluteDifferenceLong = +(long - MeetingDetails.long);

  let result =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin(absoluteDifferenceLat / 2) *
          Math.sin(absoluteDifferenceLat / 2) +
          Math.cos(lat) +
          Math.cos(MeetingDetails.lat) *
            Math.sin(absoluteDifferenceLong / 2) *
            Math.sin(absoluteDifferenceLong / 2)
      )
    );
  if (result != NaN) {
    return MeetingDetails.earthRadius * result;
  }
  return result;
};
