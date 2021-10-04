#!/usr/bin/env sh

aws --version
terraform --version

# use terraform create s3 bucket
cd tffile
terraform init
terraform apply --auto-approve
