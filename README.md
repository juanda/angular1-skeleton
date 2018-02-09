# Proyecto básico Angular 1

# Desarrollo

Instalamos grunt y bower globalmente:

    # npm install grunt -g
    # npm install bower -g

Instalamos las dependencias de node para usar las herramientas de
desarrollo facilitadas por grunt:

    # npm install

O si instalamos en el espacio compartido de una máquina vagrant:

    # npm install --no-bin-links

Instalamos las dependencias de bower, que son las que utilizará la aplicación
web:

    # bower install


Arrancamos el servidor de desarrollo:

    # grunt serve

Y la aplicación podemos verla en un navegador que apunte a:

    http://localhost:9000


# Desarrollo con docker

Construir la imagen a partir del Dockerfile

    # docker build -t <username>/angular1-skeleton .

Una vez construida la imagen podemos crear nuevos contenedores con:

    # docker run --name angular1app -d -p 9000:9000 <username>/angular1-skeleton

Y se puede acceder a la aplicación en

    # http://localhost:9000

O si usamos vagrant:

    # http://192.168.33.10:9000


Si queremos desarrollar es fundamental montar en el contenedor el volumen del host, para que al hacer cambios en el código el contenedor los vea:

    # docker run -d \
    -p 9000:9000 \
    --name angular1app \
    --mount type=bind,source="$(pwd)",target=/app \
    <username>/angular1-skeleton

Una vez que tenemos creado el contenedor para desarrollo con esta última instrucción, podemos pararlo:

    # docker stop angular1app (o <container-id>)

Y volverlo a arrancar cuando queramos:

    # docker start angular1app (o <container-id>)


# Construcción de la aplicación para distribución

    # grunt build

Construye en el directorio ``dist`` una versión minimizada y "uglificada" de la aplicación.



