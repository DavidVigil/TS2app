
# Instrucciones

1. Ejecutar la instruccion para instalar los paquetes de Node del proyecto

```bash
npm install
```

2. Cargar el esquema de la base en MySQL mediante la siguiente instruccion

```bash
npx prisma db push
```

3. Generar el cliente para poder utilizar prisma, esto hara un mapeo de las tablas de la base para crear clases que se puedan utilizar en el desarrollo

```bash
npx prisma generate
```

3. Construir el proyecto para ser ejecutado en Javascript mediante la siguiente instruccion:

```bash
npx tsc
```

4. Ejecutar el archivo `app.js` para iniciar la aplicacion, para esto posicionarse en la raiz de todo el proyecto, es decir en la carpeta `backend_nutrideliver`

```bash
node dist/app.js
```

5. El backend se ejecuta en el puerto `3000`, utilizar la siguiente ruta para acceder:

```
http://localhost:3000/api/v1
```