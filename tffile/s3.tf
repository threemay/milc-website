## SPDX-FileCopyrightText: Copyright 2019 Amazon.com, Inc. or its affiliates
##
### SPDX-License-Identifier: MIT-0

resource "aws_s3_bucket" "stepfunction_ecs_source_s3bucket" {
  bucket =  "${var.app_prefix}-${var.stage_name}-source-bucketity"
  acl    = "public-read"
  policy = templatefile("s3-policy.json", { bucket = "${var.app_prefix}-${var.stage_name}-source-bucketity" })

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = {
    Name        = "${var.app_prefix}-source-s3"
    Environment = "${var.stage_name}"
  }
}

output "s3_url" {
  description = "s3_url for static index.html"
  value       = "http://${var.app_prefix}-${var.stage_name}-source-bucketity.s3-website-${var.aws-region}.amazonaws.com"
}

# resource "aws_s3_bucket" "stepfunction_ecs_target_s3bucket" {
#   bucket =  "${var.app_prefix}-${var.stage_name}-target-bucket-${data.aws_caller_identity.current.account_id}"
#   acl    = "private"

#   tags = {
#     Name        = "${var.app_prefix}-target-s3"
#     Environment = "${var.stage_name}"
#   }
# }

# resource "aws_vpc_endpoint" "stepfunction_ecs_s3_vpc_endpoint" {
#   vpc_id       = "${aws_vpc.stepfunction_ecs_vpc.id}"
#   service_name = "com.amazonaws.${data.aws_region.current.name}.s3"

#   tags = {
#     Environment = "${var.app_prefix}-s3-vpc-endpoint"
#   }
# }