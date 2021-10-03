
npm run build

npm install webpack




docker run -t -d --name nd node-docker

docker exec -it nd bash


docker images -a | grep none | awk '{ print $3; }' | xargs docker rmi -f

docker container prune