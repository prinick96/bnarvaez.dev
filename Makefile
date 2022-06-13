docker-up:
	docker build -t bnarvaez-dev . 
	docker-compose --env-file .env up -d

test:
	npm test