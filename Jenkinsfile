pipeline {
    agent any

    stages {
        stage('docker build') {
            steps {
                script {
                    sh "docker build -f PostAPI/Dockerfile -t kodake/mern-backend:latest ."
                }
            }
        }
        stage('docker push') {
            steps {
                script {
                    sh "docker push kodake/mern-backend:latest"
                }
            }
        }
    }
}
