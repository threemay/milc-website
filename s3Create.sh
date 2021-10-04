#!/usr/bin/env sh

aws --version
terraform --version

# use terraform create s3 bucket
cd tffile
terraform init
terraform apply --auto-approve

# upload files to s3
bucketname=$(terraform output bucket_name)
aws s3 cp ./index.html s3://${bucketname}

