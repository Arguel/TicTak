# tictak

Tiktok spa clon

### Implementaciones activas

- Implementacion en firebase - [https://tictak-38545.firebaseapp.com/](https://tictak-38545.firebaseapp.com/)

Este proyecto necesita el siguiente servicio web [videos-api](https://github.com/codigofacilito/videos-api)

Una vez descargado, hay que instalar dependencias con npm install, tambien hay correr las migraciones para la base de datos, se puede usar [sequelize-cli](https://www.npmjs.com/package/sequelize-cli), yo recomiendo instalarlo globalmente con el siguiente comando

<pre><code>npm install -g sequelize-cli</code></pre>

Una vez instalado correr las migraciones con

<pre><code>sequelize db:migrate</code></pre>

El proyecto tambien usa [ngrok](https://ngrok.com/) para no tener que subir nuestro servicio web a un endpoint (tunnel)

Y lo ultimo que nos faltaria hacer es correr nuestro proyecto de react, y para eso podemos usar el siguiente comando:

<pre><code>npm start</code></pre>