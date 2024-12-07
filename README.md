# **Proyecto Final - NutriDeliver**
## UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO
## FACULTAD DE INGENIERÍA
## Temas selectos de ingeniería en computación II

### **Integrantes:**
- Becerril Olivar Axel Daniel
- Castañeda Mora Carlos
- Cerón Maciel Eduardo Alfredo
- Colin Mosqueda Eduardo
- Dávila Reyes Ernesto Gabriel
- Flores Pérez Milner Ushuaía
- Guzmán Ramírez Aldo Yael
- Quiñones Reyes Maximiliano
- Resendiz Cruz Rodrigo Daniel
- Valenzuela Vigil Ángel David

---

## **Cómo configurar y ejecutar este proyecto**

### ❖ Instalar Node.js (ignorar si ya está instalado)
1. Visite el sitio web oficial de Node.js, es decir.  
   [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
2. Descargue el programa de instalación de Node.js  
3. Inicie el instalador.  
4. Siga las indicaciones del instalador.  

**—Primero inicie el backend, luego el frontend y el administrador—**

---

### ❖ Instrucciones para establecer el backend del proyecto
1. Acceda a la carpeta del proyecto en VS Code.  
2. Iniciar terminal integrado  
   Haga clic con el botón derecho en la barra lateral > Seleccione “Abrir en la terminal integrada”.  
3. Escriba `npm install` y pulse Enter y espere.  
   **Instalación pendiente (requiere conexión a Internet)**

---

4. Configuración de MongoDB
#### a. Abra este vínculo - [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)  
   ![](./img/mongoPagina.jpeg)  

#### b. A continuación, regístrese en el sitio web.  
   ![](./img/mongoSing.jpeg)  

#### c. Seleccione la opción Nuevo proyecto  
   ![](./img/projecMongo.jpeg)  

#### d. Después de crear el proyecto, dirígete a la sección de base de datos y Desarrollar una base de datos  
   ![](./img/DataMongo.jpeg)  

#### e. Seleccione M0 y su área y genere una base de datos  
   ![](./img/deploy.jpeg)  

#### f. Configurar el nombre de usuario y la contraseña y crear un usuario  
   ![](./img/loginMongo.jpeg)  

   **Nota:** No emplee el símbolo `@` en la contraseña.

#### g. Ahora haga clic en Terminar y cerrar  
   ![](./img/finishMongo.jpeg)  

#### h. Incluya en la lista blanca la dirección IP 0.0.0.0 y presione Agregar entrada.  
   ![](./img/addMongo.jpeg)  

#### i. Ahora haga clic en Conectar.  
   ![](./img/deploymentsMongo.jpeg)  

#### j. Ahora elija la opción Compass  
   ![](./img/compassMongo.jpeg)  

#### k. Y copia la cadena de conexión.  
   ![](./img/copyMongo.jpeg)  

#### l. Y pégalo en `db.js` sustituyendo `contraseña` por la contraseña que configuraste anteriormente en 4.F y guarda los cambios  
   ![](./img/conectMongo.jpeg)  

---

5. Ahora debemos configurar Stripe
- Abra el archivo `.env` en la carpeta del backend y coloque su secreto de Stripe en la variable de entorno `CLAVE_SECRETA_STRIPE`  
   ![](./img/secretMongo.jpeg)  

---

6. Para iniciar el backend, utilice `npm run server` en la terminal integrada.  
   ![](./img/terminalMongo.jpeg)
