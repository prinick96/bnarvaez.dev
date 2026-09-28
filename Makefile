.PHONY: docker-up test

docker-up:
	docker compose up --build -d

test:
	npm test
