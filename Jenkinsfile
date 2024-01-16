
pipeline {
    agent  any
    stages {
        stage("Approval gate") { // Check request status
            steps {
                retry(20) { // Poll every 30s for 10min
                    waitUntil {
                        sleep 30
                        checkGatingStatus(
                          site:'<YOUR-SITE>.atlassian.net', 
                          environmentId:'us-prod-1'
                        )
                    }
                }   
            }
        }
        stage('deployments') {
            parallel {
                stage('deploy to stg') {
                    steps {
                        echo 'stg deployment done'
                    }
                }
                stage('deploy to prod') {
                    steps {
                        echo 'prod deployment done'
                    }
                }
            }
           post {
                 always {
                     jiraSendBuildInfo branch: 'main'
                 }
             }
        }
    }
}
