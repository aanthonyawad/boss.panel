import { MeetingDetails } from './../src/constants/meetingDetails';
import * as chai from 'chai';


export const calculatedistance = () => {
    let long = 1.28304;
    let lat = 103.85199319999992;
  
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
    
    chai.expect(result).equal(19.566992494874732);
  };