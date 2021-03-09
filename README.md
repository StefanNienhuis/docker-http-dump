# docker-http-dump
A simple [Docker image](https://hub.docker.com/r/stefannienhuis/http-dump) running a Node HTTP server that dumps all incoming requests to the console.

The HTTP server port can be changed with the PORT environment variable or by chaning the published port. See the [example configuration](docker-compose.yaml) for reference.