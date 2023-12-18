APP_NAME := vibes
VERSION_TAG ?= latest
IMAGE_NAME := $(APP_NAME):$(VERSION_TAG)

.DEFAULT_GOAL = help # display usage when there is no argument.

DOCKER_DIR := docker
DOCKER_BUILD_TIMESTAMP := docker/.build_timestamp

$(DOCKER_BUILD_TIMESTAMP): $(shell find ./docker -not -name .build_timestamp)
	@docker build -t $(IMAGE_NAME) --build-arg github_username=$(GITHUB_USERNAME) --build-arg github_token=$(GITHUB_TOKEN) .
	touch $(DOCKER_BUILD_TIMESTAMP)

.PHONY: help
help: ## show options
	@grep -E '^[a-zA-Z_-{\.}]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.PHONY: docker.build
docker.build: $(DOCKER_BUILD_TIMESTAMP) ## build docker image

.PHONY: docker.rebuild
docker.rebuild: ## rebuild docker image
	-rm $(DOCKER_BUILD_TIMESTAMP)
	make docker.build

.PHONY: docker.run
docker.run: $(DOCKER_BUILD_TIMESTAMP) ## run storybook on docker
	docker run -it -p 6006:6006 --rm --name $(APP_NAME) $(IMAGE_NAME)
