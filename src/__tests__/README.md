# Test REST API

## Product Test
```
Feature: El usuario puede obtener, crear, listar, actualizar productos con éxito.

    Scenario: El usuario obtiene un producto creado.
        When: El usuario crea un producto.
         And: El producto se crea con éxito.
         And: El usuario obtiene el producto creado.
        Then: El usuario recibe un codigo de estado 201.
         And: El producto recuperado es correcto.

    Scenario: El usuario obtiene un producto existente.
       Given: Existe un producto.
        When: El usuario obtiene un producto creado.
        Then: El usuario recibe un codigo de estado 200.
         And: El producto recuperado es correcto.


    Scenario: El usuario elimina un producto creado.
       Given: Existe un producto.
         And: El usuario elimina el producto creado.
         And: El usuario recibe un codigo de estado 204.
        When: El usuario obtiene el producto creado.
        Then: El usuario recibe un codigo de estado 404.
```