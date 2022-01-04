/* eslint-disable @typescript-eslint/naming-convention */
import * as AWS from 'aws-sdk';

export default class AWSHelper {

  /**
   * Return an AWS SDK instance with configuration definitions.
   * @returns {Object} AWS SDK instance
   */
  public static AWSObject() {
    AWS.config.update({
      region: process.env.AWS_REGION ?? 'ap-southeast-1',
    });

    AWS.config.apiVersions = {
      dynamodb: '2012-08-10',
    };

    return AWS;
  }
}
