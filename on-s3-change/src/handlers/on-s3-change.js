const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.onS3ChangeHandler = async (event, context) => {
  console.log(event);
};
