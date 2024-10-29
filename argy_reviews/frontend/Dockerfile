# Dockerfile para Node.js (frontend)
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de Node.js
COPY package*.json ./

# Instalar dependencias de Node.js
RUN npm install

# Copiar el resto del código del frontend
COPY . .

# Exponer el puerto que usará Node.js
EXPOSE 3000

# Comando para ejecutar el servidor de desarrollo de Node.js
CMD ["npm", "run", "dev"]
