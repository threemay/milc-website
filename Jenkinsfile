
// @Library('github.com/releaseworks/jenkinslib') _


pipeline {
    agent any


     environment {

                     GIT_REPO_URL = 'git@github.com:threemay/milc-website.git'
                     GIT_REPO_BRANCH = 'master'
                     GIT_CREDENTIALS_ID = '1'
                     BUILD_USER_EMAIL = '254363807@qq.com'
                     BUILD_USER_ID = 'threemay'
                     DOCKER_IMAGE = "test"
                     DOCKER_CONTAINER = "my_container"
                 }

    stages {

            stage('checkout from github') {

                steps {

                    git url: "${GIT_REPO_URL}",
                        credentialsId: "${GIT_CREDENTIALS_ID}",
                        branch: "${GIT_REPO_BRANCH}"

                }

            }


            // stage('npm build') {

            //     steps {
            //         echo "hello"
            //         // sh'''
            //         //     docker build -t ${DOCKER_IMAGE} .
            //         // '''
            //     }

            // }

            stage('create s3 bucket') {
                steps {
                    withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'aws_key', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                        sh'''
                            docker run -t -d --name ${DOCKER_CONTAINER} ${DOCKER_IMAGE}
                            docker exec ${DOCKER_CONTAINER} sh -c "aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}"
                            docker exec ${DOCKER_CONTAINER} sh -c "aws configure set aws_secret_access_key  ${AWS_SECRET_ACCESS_KEY}"
                            docker exec ${DOCKER_CONTAINER} sh -c "aws sts get-caller-identity"
                            docker exec ${DOCKER_CONTAINER} sh -c "chmod +x s3Create.sh"
                            docker exec ${DOCKER_CONTAINER} sh -c "./s3Create.sh"
                        '''
                    }

                    // sh'''
                    //     docker run -t -d --name ${DOCKER_CONTAINER} ${DOCKER_IMAGE}
                    //     docker exec ${DOCKER_CONTAINER} sh -c "chmod +x s3BucketCreate.sh && ./s3BucketCreate.sh"
                    //     docker exec ${DOCKER_CONTAINER} sh -c "chmod +x s3BucketCreate.sh && ./s3BucketCreate.sh"
                    // '''
                }
            }






        // stage('Hello2') {
        //     steps {
        //         echo 'Hello World'
        //     }
        // }
    }
}