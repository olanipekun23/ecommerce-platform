# E-Commerce with GitHub Actions

## 📅 Capstone Project: E-Commerce Application CI/CD Pipeline

---

## 📆 Project Overview

This project implements a **fully automated CI/CD pipeline** for a full-stack **E-Commerce Platform** using **GitHub Actions**. The application consists of two main components:

* **E-Commerce API**: A Node.js/Express backend responsible for product listings, user accounts, and order processing.
* **E-Commerce Frontend**: A React web application allowing users to browse products, manage accounts, and place orders.

The main goal is to ensure **continuous integration** and **continuous delivery** using GitHub Actions, Docker, and cloud deployment.

---

## 🚀 Project Tasks

### Task 1: Project Setup

* Create a GitHub repository named `ecommerce-platform`.

![Git repo](image.png)

![readme.md](image-1.png)

![git repo created](image-2.png)


* Inside the repository, create two directories:

  * `api/` for the backend.
  * `webapp/` for the frontend.

![proj dir](image-3.png)

![git clone](image-4.png)

![api & webapp](image-5.png)

### Task 2: Initialize GitHub Actions

* Initialize a Git repository with the above structure.

![git structre](image-6.png)


![profile](image-8.png)

![Pat](image-9.png)

![Token](image-10.png)

![token info](image-11.png)

![Token generated](image-12.png)


* Create a `.github/workflows/` directory for storing GitHub Actions workflows.

![git workflow dir](image-7.png)

### Task 3: Backend API Setup

* Set up a Node.js/Express application inside the `api/` directory.
* Add basic features:

  * Product listing
  * User account management
  * Order processing
* Add unit tests using Jest or Mocha.

![npm](image-13.png)

![install express](image-14.png)

![npm save dev](image-15.png)

![test](image-16.png)

![index.js](image-20.png)


![P.json](image-22.png)

![updated](image-23.png)



### Task 4: Frontend Web Application Setup

* Set up a React app inside the `webapp/` directory.
* Connect to the backend API.
* Implement key UI features:

  * Product display
  * User login
  * Order placement

![react](image-21.png)

![created](image-28.png)  

![compiled ](image-29.png)

![product](image-17.png)

![home](image-18.png)

![order](image-19.png)

![product list](image-55.png)

![login](image-56.png)

![order](image-57.png)

![home](image-58.png)


### Task 5: Continuous Integration Workflow

* Create GitHub Actions workflows for backend and frontend.
* Each workflow should:

  * Install dependencies
  * Run tests
  * Build the application

![ci.yml](image-30.png)

  ![npm](image-24.png)

![npm save d](image-25.png)

![health test](image-27.png)

![git push](image-31.png)

![wf success](image-35.png)

![wf success](image-36.png)

![build success](image-32.png)

### Task 6: Docker Integration

* Create Dockerfiles in both `api/` and `webapp/` directories.

![docker file FE ](image-33.png)

![dockerfile BE](image-34.png)


* Modify the workflows to build Docker images for both components.

![wf dir](image-37.png)

![workflow](image-38.png)

![docker build api](image-39.png)

![docker build webapp](image-40.png)

### Task 7: Deploy to Cloud

* Choose AWS as the cloud provider.
* Set up an EC2 instance to host the backend.
* Use GitHub Actions to:

  * Upload Docker images to EC2 using `scp`

  ![Ec2 dash](image-41.png)

  ![Ec2](image-42.png)

  ![ec2 config](image-43.png)

  ![scp yml](image-45.png)


  * Deploy images using `docker run`

  ![docker running](image-48.png)

  ![success ](image-49.png)


![deploy to aws](image-50.png)


  * Store sensitive credentials using

**GitHub Secrets**:

  * `EC2_HOST`, `EC2_SSH_KEY`, etc.

  ![repository secrets](image-46.png)

![saved](image-47.png)


### Task 8: Continuous Deployment

* Set up workflows to **automatically deploy** whenever code is pushed to the `main` branch.
* Backend workflow example:

  ```yaml
  on:
    push:
      branches:
        - main
  ```



![automated wf](image-51.png)

![on push](image-52.png)




### Task 9: Performance and Security

* Implement **Docker layer caching** to speed up build times.
* Use **GitHub Secrets** to store:

  * Cloud credentials
  * API keys
  * JWT secrets
  * Database connection strings


![cache](image-53.png)

![Keys](image-54.png)


### Task 10: Documentation

* Document the project setup, structure, workflow, and instructions for local development in this `README.md` file.

---

## 🔧 Local Development Instructions

### Backend (API)

```bash
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform/api
npm install
npm run dev
```

### Frontend (WebApp)

```bash
cd ../webapp
npm install
npm start
```

### Docker Build and Run Locally

```bash
docker build -t ecommerce-api ./api
docker run -d -p 5000:5000 --name ecommerce-api ecommerce-api
```

---

## 🌐 Deployment Instructions

### Using GitHub Actions

* Workflow is automatically triggered on push to `main`.
* CI/CD steps include:

  * Build Docker image
  * Save image
  * Upload image to EC2
  * SSH into EC2 and deploy container

### Manual Deployment (if needed)

```bash
scp -i your-key.pem ecommerce-api.tar ubuntu@<EC2_HOST>:/home/ubuntu/
ssh -i your-key.pem ubuntu@<EC2_HOST>
docker load < ecommerce-api.tar
docker stop ecommerce-api || true
docker rm ecommerce-api || true
docker run -d -p 80:5000 --name ecommerce-api ecommerce-api
```

---

## 🎓 Technologies Used

* **Backend**: Node.js, Express
* **Frontend**: React.js
* **CI/CD**: GitHub Actions
* **Containerization**: Docker
* **Cloud Hosting**: AWS EC2

---

## 🔐 GitHub Secrets Required

| Secret Name   | Purpose                         |
| ------------- | ------------------------------- |
| `EC2_HOST`    | EC2 Public IP or DNS            |
| `EC2_SSH_KEY` | SSH private key for EC2         |
| `DB_PASSWORD` | Backend DB authentication       |
| `JWT_SECRET`  | JWT signing token               |
| `API_KEY`     | Any third-party API credentials |

---

## 🚧 Security Measures

* Secrets are never hard-coded
* All credentials are stored in **GitHub Secrets**
* SSH keys are used instead of passwords

---

## ✨ Conclusion

This Capstone Project offers **hands-on experience** in building and deploying a real-world E-Commerce application with full CI/CD automation using GitHub Actions. It includes:

* Full-stack development
* Dockerization
* Cloud deployment
* Secure secrets management
* Performance optimization

It demonstrates the **end-to-end DevOps lifecycle**, making it ideal for developers and DevOps engineers looking to master modern deployment pipelines.

---

## 📖 Additional Resources

* [Node.js Documentation](https://nodejs.org/)
* [React Documentation](https://reactjs.org/)
* [Docker Documentation](https://docs.docker.com/)
* [GitHub Actions Docs](https://docs.github.com/en/actions)
* Cloud Platform Guides:

  * [AWS](https://docs.aws.amazon.com/)
  * [Azure](https://learn.microsoft.com/en-us/azure/devops/pipelines/)
  * [Google Cloud](https://cloud.google.com/docs)

---

> ⚠️ **Note**: Customize EC2 IP and secrets in your workflow before using this project in production.
