# Running simple nodejs app with kubernetes

## Minikube
- This project is using [minikube](https://minikube.sigs.k8s.io/docs/) to run local kubernetes cluster.
- `minikube start` command will setup a local kubernetes cluster in your machine.

## Build and Push docker image
- ***Makefile*** is used to build and push image to docker hub
    - This project's make file contains two commands
        - build
        - push
    - `TAG=${tag_name} make build-image`
    - `TAG=${tag_name} make push-image`

## Kubernetes
- All ***kubernetes*** yml files are located inside `k8s` folder.
- It contains `service.yml` and `deployment.yml` file
    - `service.yml` contains kubernetes service config. We will use LoadBalancer to route traffic from port 80 in service to port 8080 of our app.
    - `deployment.yml` contains the deployment config for our app.
- In order to access the app running locally. You will further need to forward the kubernetes port to your localport.
    - `kubectl port-forward pod/{pod_name} host_machine_port:container_port`

## AWS EKS
- Install `aws` cli you haven't already
- create kubernetes cluster and connect your cluster to local machine
  - `aws eks --region region_name update-kubeconfig --name cluster_name`
  - The above command will add aws kuberntes config in ~/.kube/config file
- Follow the steps defined under ***Kubernetes*** heading
- 