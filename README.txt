PRODUCT MICROSERVICES (NestJS, Prisma and SQLite)

* Inicializar al microservice
    - Crear la app
        $ nest new products-ms
            > ? Which package manager would you ❤️  to use? npm
        $ cd products-ms
        $ npm run start         // Run development
        $ npm run start:dev     // Run watch mode

    - NestJS CLI
        + Crear un nuevo resource (Sin archivos de test)
            $ nest g res products --no-spec
                > ? What transport layer do you use? REST API   // Por esta ocacion REST API y no MS!!!
                > ? Would you like to generate CRUD entry points? (Y/n) y
    
    - Postman
        + Crete a new Workspace (Click "New" | "Workspace" > "Blank workspace")
            > Name: "Ax2CDev"
              Click "Create"
        + Create a new collection (Click "+" | "Blank collection")
            > Name: "ms-nestjs-products-ms"

        + HTTP requests
            * Product (Click "..." > Add folder > Name: "Product")
                - Create Product
                    > POST: http://localhost:3000/products                                          Click "Send"
                        > Body | raw (JSON)
                            { }
                - Get All Products
                    > GET: http://localhost:3000/products                                           Click "Send"
                - Get Single Product
                    > GET: http://localhost:3000/products/{{PRODUCT_ID}}                            Click "Send"
                - Update Product
                    > PATCH: http://localhost:3000/products/{{PRODUCT_ID}}                          Click "Send"
                        > Body | raw (JSON)
                            { }
                - Delete Product
                    > DELETE: http://localhost:3000/products/{{PRODUCT_ID}}                         Click "Send"