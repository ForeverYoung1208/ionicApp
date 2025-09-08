# deployment

## before deployment, a relevant infrastructure must be created (s3 bucket, cloudfront distribution, route53 record)

See ../api/README.md for details how to create it (it is created with api's infrastructure setup cdk script)

## ci/cd variables

before setup ci/cd, you need to know and set up the following variables

- secrets.VITE_GOOGLE_MAPS_API_KEY 
- secrets.AWS_ACCESS_KEY_ID 
- secrets.AWS_SECRET_ACCESS_KEY 
- vars.CODE_BUCKET
- vars.AWS_REGION 
- vars.VITE_API_SERVER_URL 
- vars.CLOUDFRONT_DISTRIBUTION_ID 
