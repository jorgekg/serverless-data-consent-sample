const AWS = require('aws-sdk');

exports.generateEmailHandler = async (event, context) => {
    if (event.Records && event.Records.length) {
        for (let i = 0; i < event.Records.length; i++) {
            const e = event.Records[i];
            if (e.dynamodb && e.dynamodb.NewImage && e.dynamodb.NewImage.email) {
                try {
                    
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }
}
