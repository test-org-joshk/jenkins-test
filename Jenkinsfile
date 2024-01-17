
pipeline {
    agent  any
    stages {
        stage("Approval gate") { // Check request status
            steps {
                retry(5) { // Poll every 30s for 10min
                    waitUntil {
                        sleep 5
                        checkGatingStatus(
                          site:'joshkayjira.atlassian.net',
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
