## SPDX-FileCopyrightText: Copyright 2019 Amazon.com, Inc. or its affiliates
 ##
 ### SPDX-License-Identifier: MIT-0

variable "aws-region" {
  description = "aws-region"
  default = "us-east-1"
}
 
provider "aws" {
  region = "${var.aws-region}"
}

variable "app_prefix" {
  description = "Application prefix for the AWS services that are built"
  default = "threemay"
}

variable "stage_name" {
  default = "dev"
  type    = string
}

variable "java_source_zip_path" {
  description = "Java Springboot app"
  default = "..//target//ecsFargateService-1.0-SNAPSHOT.jar"
}