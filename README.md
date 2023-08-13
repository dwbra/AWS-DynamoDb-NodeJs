# AWS DynamoDb NodeJS Showcase

### A simple NodeJs/Express project to showcase how you can interact with DynamoDb.

Instructions for setup: <br>
1 - Set up AWS on CLI. <br>
2 - Set up a profile / user in your AWS account, assign it DynamoDb permissions, generate a key. <br>
3 - Update your AWS cli config with the new credentials and run a command such as <aws s3 ls> to output any s3 instances you may have and prove you have a secure connection to your AWS account.
4 - If you don't have any exsiting DynamoDb tables, go to the DynamoDb section of AWS and create a table. Else skip this step.
5 - Download the git repo, and run npm i.
6 - Test the instance works, run npm run dev, in your terminal console, you should see a) console.log message and b) a list of any dynamoDb tables that you've created in your AWS account. If you've configured your AWS config in the CLI correctly this should just work as AWS is smart enough to detect your credentials and use them. For more information > https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-shared.html
