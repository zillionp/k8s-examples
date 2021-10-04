## Create and Update AWS EKS with eksctl
- Install [eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html).
- Create EKS Cluster
  - `eksctl create cluster -f cluster.yml`
- Get list of clusters
  - `eksctl get cluster --name <cluster_name>`
- Delete EKS Cluster
  - `eksctl delete cluster --name <cluster_name> --region <region_name>`