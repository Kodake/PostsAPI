pipeline {
    agent any

    stages {
        stage('docker build') {
            steps {
                script {
                    bat "docker build -t posts-api:latest ."
                }
            }
        }
        stage('docker run') {
            steps {
                script {
                    bat "docker run -p 5000:5000 posts-api:latest"
                }
            }
        }
    }
}
