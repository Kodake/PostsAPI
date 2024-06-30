pipeline {
    agent any

    stages {
        stage('docker build') {
            steps {
                script {
                    bat "docker build -t ./Dockerfile ."
                }
            }
        }
        stage('docker push') {
            steps {
                script {
                    bat "docker push kodake/mern-backend:latest"
                }
            }
        }
    }
}
