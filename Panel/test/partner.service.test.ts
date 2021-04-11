import { MeetingDetails } from './../src/constants/meetingDetails';
import { expect } from 'chai';
import 'mocha';


var calculatedistance = () => {
    let lat = 10.6792447;
    let long = -61.56065180000002;
  
    let absoluteDifferenceLat = +(lat - MeetingDetails.lat);
    let absoluteDifferenceLong = +(long - MeetingDetails.long);
  
    let result = 2 *
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
      return result * MeetingDetails.earthRadius;
  };

describe('calculatedistance', () => {
  it('should return 19.566992494874732', () => {
    const result = calculatedistance();
    expect(result).to.equal(7.040693783279961);
  });
});