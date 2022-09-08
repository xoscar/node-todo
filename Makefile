up:
	docker compose -f docker-compose.yaml -f tracetest/docker-compose.yaml up

down:
	docker compose -f docker-compose.yaml -f tracetest/docker-compose.yaml down
