
# Instrucciones

1. Ejecutar la instruccion para instalar los paquetes de Node del proyecto

```bash
npm install
```

2. Instalar y abrir MySQL, crear la base mediante el siguiente comando:

```sql
create database <nombre_base>
```

**No olvidar sustituir las variables entre `<>`**

3. Crear un archivo `.env`, en este archivo se guardan variables estaticas como son las conexiones con las bases, puertos a usar entre otros, el archivo tendra el siguiente contenido:

```bash
# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://<usuario_base>:<password_base>@<host_base>:<puerto_base>/<nombre_base>"
```

**No olvidar sustituir en `DATABASE_URL` las variables entre `<>`**

4. Cargar el esquema de la base en MySQL mediante la siguiente instruccion, situarse dentro de la carpeta raiz del proyecto:

```bash
npx prisma db push
```

5. Generar el cliente para poder utilizar prisma, esto hara un mapeo de las tablas de la base para crear clases que se puedan utilizar en el desarrollo, al igual que el paso anterior siturse en la carpeta raiz del proyecto:

```bash
npx prisma generate
```

6. Construir el proyecto para ser ejecutado en Javascript mediante la siguiente instruccion:

```bash
npx tsc
```

7. Ejecutar el archivo `app.js` para iniciar la aplicacion, para esto posicionarse en la raiz de todo el proyecto, es decir en la carpeta `backend_nutrideliver`

```bash
node dist/app.js
```

8. El backend se ejecuta en el puerto `3000`, utilizar la siguiente ruta para acceder:

```
http://localhost:3000/api/v1
```
