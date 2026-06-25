This is a project to build static websites fast, using 
docker (isolates node + astro), 
node.js (run astro, process tailwind), 
astro (assembles html), 
tailwindcss (generates CSS at build/dev time).


###COMMANDS###

To build docker image:
	$ docker compose up --build -d
To check if image running:
	$ docker ps
To update docker image:
	$ docker compose build
To connect to docker container:
	$ docker exec -it <container_name_or_id> /bin/bash
To check website localy:
	$ http://localhost:4321

###COMMANDS###



###RESOURCES###
linktree template:
	https://github.com/nevthereal/linktree-template
###RESOURCES###