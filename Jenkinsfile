pipeline {
    agent any

    stages {
        stage('docker build') {
            steps {
                scripts {
                    sh "docker build -f PostAPI/Dockerfile -t kodake/posts-api:latest"
                }
            }
        }
        stage('docker push') {
            steps {
                scripts {
                    sh "docker push kodake/posts-api:latest"
                }
            }
        }
    }
}