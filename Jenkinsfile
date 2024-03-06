pipeline {
    agent {
        kubernetes {
            cloud 'kubernetes'
        }
    }
    options {
        ansiColor('xterm')
    }
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
        stage("Performing deployment") {
            steps {
                echo "Deploying to ${params.envs} environment"
                jiraSendDeploymentInfo (
                    environmentId: params.envs,
                    environmentName: params.envs,
                    environmentType: params.envs,
                    serviceIds: [''],
                    site: 'creativeadvtech.atlassian.net',
                    state: 'successful'
                )
             }
        }
    }
}
