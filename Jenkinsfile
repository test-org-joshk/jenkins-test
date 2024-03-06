pipeline {
    agent  any
    parameters {
        choice choices: ['development', 'staging', 'production'], name: 'envs'
    }
    stages {
        stage('Setting deployment') {
            steps {
                script {
                    currentBuild.description = "Deploying for the following ticket: ${params.issueKey}\n Deploying to the ${params.envs} environment"
                }
            }
        }
        stage('Checkout it') {
            checkout scm
        }
        stage("Performing deployment") {
            steps {
                echo "Deploying to ${params.envs} environment"
                jiraSendDeploymentInfo (
                    environmentId: params.envs,
                    environmentName: params.envs,
                    environmentType: params.envs,
                    serviceIds: [''],
                    site: 'joshkayjira.atlassian.net',
                    state: 'successful'
                )
             }
        }
    }
}
