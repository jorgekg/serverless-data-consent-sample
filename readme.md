sam deploy -t consent-dynamodb-template.yml --guided --capabilities CAPABILITY_NAMED_IAM

Setting default arguments for 'sam deploy'
=========================================
Stack Name [sam-app]: consent-table
AWS Region [us-east-1]: us-east-1
#Shows you resources changes to be deployed and require a 'Y' to initiate deploy
Confirm changes before deploy [y/N]: y
#SAM needs permission to be able to create roles to connect to the resources in your template
Allow SAM CLI IAM role creation [Y/n]: y
Save arguments to configuration file [Y/n]: n


----------------------------------------------------------------
sam deploy -t person-dynamodb-template.yml --guided --capabilities CAPABILITY_NAMED_IAM

Setting default arguments for 'sam deploy'
=========================================
Stack Name [sam-app]: person-table
AWS Region [us-east-1]: us-east-1
#Shows you resources changes to be deployed and require a 'Y' to initiate deploy
Confirm changes before deploy [y/N]: y
#SAM needs permission to be able to create roles to connect to the resources in your template
Allow SAM CLI IAM role creation [Y/n]: y
Save arguments to configuration file [Y/n]: n

--------------------------------------------------------------------------------------------
sam deploy -t consent-appsync.yml --guided --capabilities CAPABILITY_NAMED_IAM

Setting default arguments for 'sam deploy'
=========================================
Stack Name [sam-app]: consentApi
AWS Region [us-east-1]: us-east-1
Parameter AppSyncStackName []: consentApi
Parameter ConsentTableStackName []: consent-table
#Shows you resources changes to be deployed and require a 'Y' to initiate deploy
Confirm changes before deploy [y/N]: y
#SAM needs permission to be able to create roles to connect to the resources in your template
Allow SAM CLI IAM role creation [Y/n]: y
Save arguments to configuration file [Y/n]: n

Outputs
-------------------------------------------------------------------------------------------
Key                 GraphQLApiId
Description         The API KEY of the GraphQL API
Value               da2-6a3fivntrzgcxene2qjzoxod3u

Key                 GraphQLApiEndpoint
Description         The URL to the GraphQL Endpoint
Value               https://u52btmmoybgw5hsoup7zfyg2vm.appsync-api.us-east-1.amazonaws.com/graphql

---------------------------------------------------------------------------------------------
sam deploy -t person-appsync.yml --guided --capabilities CAPABILITY_NAMED_IAM

Setting default arguments for 'sam deploy'
=========================================
Stack Name [sam-app]: personApi
AWS Region [us-east-1]: us-east-1
Parameter AppSyncStackName []: personApi
Parameter PersonTableStackName []: person-table
#Shows you resources changes to be deployed and require a 'Y' to initiate deploy
Confirm changes before deploy [y/N]: y
#SAM needs permission to be able to create roles to connect to the resources in your template
Allow SAM CLI IAM role creation [Y/n]: y
Save arguments to configuration file [Y/n]: n

Outputs
---------------------------------------------------------------------------------
Key                 GraphQLApiId
Description         The API KEY of the GraphQL API
Value               da2-ugew7zhpbvgejpbx3v2ajlj3bq

Key                 GraphQLApiEndpoint
Description         The URL to the GraphQL Endpoint
Value               https://xefxhm6jz5a5dpwlfl2rgt7nuu.appsync-api.us-east-1.amazonaws.com/graphql

----------------------------------------------------------------------------------------------------
sam deploy --guided --capabilities CAPABILITY_NAMED_IAM

Setting default arguments for 'sam deploy'
=========================================
Stack Name [generate-email]:
AWS Region [us-east-1]:
Parameter PersonTableStackName [person-table]:
#Shows you resources changes to be deployed and require a 'Y' to initiate deploy
Confirm changes before deploy [Y/n]: y
#SAM needs permission to be able to create roles to connect to the resources in your template
Allow SAM CLI IAM role creation [Y/n]: y
Save arguments to configuration file [Y/n]: n