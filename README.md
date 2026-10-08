# 🚀 AI Powered Devops Monitoring Platform

A complete DevOps automation project designed to demonstrate modern software deployment, CI/CD workflows, container orchestration, infrastructure automation, and real-time monitoring using industry-standard tools.

---

## 📌 Project Overview

The DevOps CI/CD Monitoring Platform automates the complete application lifecycle from source code management to deployment and monitoring.

The project integrates multiple DevOps tools to create a production-style workflow:

GitHub → Jenkins → Docker → Kubernetes → Prometheus → Grafana

This project demonstrates:

* Continuous Integration (CI)
* Continuous Deployment (CD)
* Containerization
* Kubernetes orchestration
* Infrastructure as Code (IaC)
* Real-time monitoring

---

## ✨ Features

✔ Automated CI/CD pipeline using Jenkins
✔ Docker containerization for application packaging
✔ Kubernetes deployment and replica management
✔ Infrastructure automation using Terraform
✔ Real-time monitoring using Prometheus
✔ Grafana dashboards for visualization
✔ Pod and node metrics monitoring
✔ Scalable application deployment
✔ Kubernetes service exposure

---

## 🛠 Tech Stack

**Backend**

* Node.js
* Express.js

**DevOps Tools**

* GitHub
* Jenkins
* Docker
* Kubernetes
* Terraform
* Prometheus
* Grafana
* Docker Hub

**Frontend**

* HTML
* CSS
* JavaScript

---

## 🏗 Architecture

```text
Developer Code
        ↓
     GitHub
        ↓
 Jenkins Pipeline
        ↓
 Docker Image Build
        ↓
   Docker Hub
        ↓
Kubernetes Deployment
        ↓
 Prometheus Monitoring
        ↓
 Grafana Dashboard
```

---

## 📂 Project Structure

```text
devops-platform/
│
├── app.js
├── Dockerfile
├── Jenkinsfile
├── package.json
├── README.md
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
│
└── terraform/
    └── main.tf
```

---

## ⚙ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/ArpitSharma5691/devops-platform.git

cd devops-platform
```

### Install Dependencies

```bash
npm install
```

### Run Application

```bash
node app.js
```

Application URL:

```text
http://localhost:3000
```

---

## 🐳 Docker Setup

Build Docker Image:

```bash
docker build -t arpitsharma01/devops-dashboard .
```

Push Docker Image:

```bash
docker push arpitsharma01/devops-dashboard
```

---

## ☸ Kubernetes Deployment

Start Kubernetes Cluster:

```bash
minikube start
```

Deploy Application:

```bash
kubectl apply -f k8s/
```

Check Running Pods:

```bash
kubectl get pods
```

Open Service:

```bash
minikube service dashboard-service
```

---

## 📊 Monitoring Setup

### Install Prometheus

```bash
helm install prometheus prometheus-community/prometheus
```

Open:

```text
http://localhost:9090
```

---

### Install Grafana

```bash
helm install grafana grafana/grafana
```

Open:

```bash
kubectl port-forward service/grafana 3001:80
```

URL:

```text
http://localhost:3001
```

---

## 🔄 Jenkins Pipeline Stages

1. Checkout SCM
2. Build Docker Image
3. Deploy to Kubernetes

---

## ☸ Kubernetes Resources Used

* Deployments
* Pods
* Services
* ReplicaSets
* StatefulSets
* DaemonSets

---

## 📈 Monitoring Metrics

The platform monitors:

* CPU Usage
* Memory Usage
* Pod Metrics
* Node Metrics
* Kubernetes Cluster Health
* Running Containers

---

## 🔮 Future Enhancements

* GitHub webhook automation
* AWS cloud deployment
* Horizontal Pod Autoscaling (HPA)
* Email alerts and notifications
* Advanced Grafana dashboards

---

## 👨‍💻 Author

Arpit Sharma
