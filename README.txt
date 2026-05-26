PRODUCT MICROSERVICES (NestJS, Prisma and SQLite)

* Inicializar al microservice
    - Crear la app
        $ nest new products-ms
            > ? Which package manager would you ❤️  to use? npm
        $ cd products-ms
        $ npm run start         // Run development
        $ npm run start:dev     // Run watch mode

    - Prisma CLI
        + Crea la config inicial
            $ npx prisma init
        + Generar los archivos de migración SQL
            $ npx prisma migrate dev --name init
        + Instalar prisma client
            $ npm install @prisma/client
        + Generar los tipos y el cliente para la app (Ejecutar de nuevo si existe cambios en el esquema)
            $ npx prisma generate
        + Instalar el driver adapter para la DB
            $ npm install @prisma/adapter-better-sqlite3

        + Generar los archivos de migración SQL, tipos y cliente (NOTA: solo si existe cambios en el modelo)
            $ npx prisma migrate dev --name {{MIGRATE_NAME}}
            $ npx prisma generate
            
            $ npx prisma migrate dev --name available
            $ npx prisma generate
            $ npx prisma migrate dev --name available-index
            $ npx prisma generate

    - Instalar dependencias
        + Validation (Validacion de la data)
            $ npm i --save class-validator class-transformer
        + DotENV (Variables de entorno)
            $ npm i dotenv
        + Joi (Vaidador de Schema)
            $ npm i joi
        + Pisma (ORM)
            $ npm install prisma --save-dev

    - NestJS CLI
        + Crear un nuevo resource (Sin archivos de test)
            $ nest g res products --no-spec
                > ? What transport layer do you use? REST API   // Por esta ocacion REST API y no MS!!!
                > ? Would you like to generate CRUD entry points? (Y/n) y

        + Comenzar a crear microservices
            $ npm i --save @nestjs/microservices

    - TablePlus
        + Localizar el archivo en la raiz de la app './dev.db'.
        + Crear una nueva conexion para SQLite DB (Click '+' | New Connection)
            > Name: Products MS
            > SQLite
            > Select file .sql: {{FILE.sql}}
            Click 'Test' | 'Save' | 'Connect'
    
    - Postman
        + Crete a new Workspace (Click "New" | "Workspace" > "Blank workspace")
            > Name: "Ax2CDev"
              Click "Create"
        + Create a new collection (Click "+" | "Blank collection")
            > Name: "ms-nestjs-products-ms"

        + HTTP requests
            * Product (Click "..." > Add folder > Name: "Product")
                - Create Product
                    > POST: http://localhost:3001/products                                          Click "Send"
                        > Body | raw (JSON)
                            {
                                "name": "Smartphone",
                                "price": 100
                            }
                - Get All Products
                    > GET: http://localhost:3001/products                                           Click "Send"
                    > GET: http://localhost:3001/products?page=1&limit=10                           Click "Send"
                - Get Single Product
                    > GET: http://localhost:3001/products/{{PRODUCT_ID}}                            Click "Send"
                - Update Product
                    > PATCH: http://localhost:3001/products/{{PRODUCT_ID}}                          Click "Send"
                        > Body | raw (JSON)
                            { 
                                "name": "Smartphone updated",
                            }
                - Delete Product
                    > DELETE: http://localhost:3001/products/{{PRODUCT_ID}}                         Click "Send"