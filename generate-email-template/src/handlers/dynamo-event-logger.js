const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.DynamoStreamEventLoggerHandler = async (event, context) => {
    if (event.Records && event.Records.length) {
        for (let i = 0; i < event.Records.length; i++) {
            const e = event.Records[i];
            if (e.Dynamodb && e.Dynamodb.NewImage && e.Dynamodb.NewImage.email) {
                try {
                    const params = {
                        Bucket: process.env.BUCKET_NAME,
                        Key: `${e.dynamodb.NewImage.email.S}.txt`,
                        Body: `teste de e-mail`
                    };
                    await s3.putObject(params).promise();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }
}
