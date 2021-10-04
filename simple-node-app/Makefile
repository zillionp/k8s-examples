.PHONEY: build-image
build-image:
	docker build \
	-f Dockerfile \
	--no-cache \
	-t mandip810/simple-node-app:${TAG} .

.PHONEY: push-image
push-image:
	docker push mandip810/simple-node-app:${TAG}