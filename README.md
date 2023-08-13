# AWS DynamoDb NodeJS Showcase

### A simple NodeJs/Express project to showcase how you can interact with DynamoDb via AWS SDK.

Instructions for setup: <br>
1 - Set up AWS on CLI. <br>
2 - Set up a profile / user in your AWS account, assign it DynamoDb permissions, generate a key. <br>
3 - Update your AWS cli config with the new credentials and run a command such as <aws s3 ls> to output any s3 instances you may have and prove you have a secure connection to your AWS account.<br>
4 - If you don't have any exsiting DynamoDb tables, go to the DynamoDb section of AWS and create a table. Else skip this step.
5 - Download the git repo, and run npm i.<br>
6 - Test the instance works, run npm run dev, in your terminal console, you should see a) console.log message and b) a list of any dynamoDb tables that you've created in your AWS account. If you've configured your AWS config in the CLI correctly this should just work as AWS is smart enough to detect your credentials and use them. For more information > https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-shared.html <br>

Instructions for use: <br>
1 - Fire up postman, create a new collection and enter in the routes. <br>
2 - cd to root of dir and run npm i. Then run npm run dev and you should see nodemon running. <br>
3 - Format your JSON data objects and check the required properties and then in postman drop them in (ensure you've selected JSON as your raw data type) and fire away. You will see responses in both postman and the terminal console.
