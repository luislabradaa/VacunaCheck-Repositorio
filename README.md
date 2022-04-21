# Integradora II
[![Contribuidores][contribuidores-shield]][contributors-url]

## contenido
<details>
  <summary>Tabla contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#descripción">Descripción</a></li>
        <li><a href="#objetivos">Objetivos</a></li>
        <li><a href="#organigrama">Organigrama</a></li>
        <li><a href="#diagrama-gantt">Diagrama Gantt</a></li>
      </ul>
    </li>
    <li>
      <a href="#análisis-de-la-solución">Análisis de la Solución</a>
      <ul>
        <li><a href="#requerimientos">Requerimientos</a></li>
        <li><a href="#diagrama-casos-de-uso">Diagrama de Casos de Uso</a></li>
      </ul>
    </li>
    <li>
      <a href="#diseño-de-la-solución">Diseño de la Solución</a>
      <ul>
        <li><a href="#modelo-relacional">Modelo Relacional</a></li>
        <li><a href="#diagrama-de-clases">Diagrama de Clases</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
      </ul>
    </li>    
    <li>
      <a href="#implementación">Implementación</a>
      <ul>
        <li><a href="#estándares-codificación">Estándares Codificación</a></li>
        <li><a href="#arquitectura">Arquitectura</a></li>
        <li><a href="#código-fuente">Código Fuente</a></li>
      </ul>
    </li>      
    <li>
      <a href="#pruebas">Pruebas</a>
      <ul>
        <li><a href="#casos-de-prueba">Casos de prueba</a></li>
        <li><a href="#ejecución">Ejecución</a></li>
      </ul>
    </li>       
    <li><a href="#guias">Guias</a></li>
    <li><a href="#contribucion">Contribución</a></li>
    <li><a href="#licencia">licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#participantes">Participantes</a></li>
  </ol>
</details>

<!-- Acerca del proyecto -->
## Acerca del proyecto
## Tecnologias a utilizar 
## Node JS V16.13.2
## JavaScript 1.5
## MongoDB Atlas 
<!-- Descripción -->
#### Descripción.
## El propósito del proyecto consta de llevar un mejor control de las medidas preventivas contra el covid-19 y sobrellevar  la situación actual. Al mismo tiempo  simular  una experiencia profesional en donde este proyecto se realizará por un equipo de trabajo de la Universidad Tecnológica del Norte de Guanajuato de la carrera de Desarrollo de Software Multiplataforma.
## Para finalizar se tiene considerado que se concluya en un tiempo estimado de  un mes y medio, con un costo de estimación de  mil pesos mexicanos que se distribuye entre los siguientes  componentes Placa Arduino uno, Cable, Lector de QR y Shield usb host 2.0.

## La idea principal del proyecto es construir una aplicación web que registre el estatus de vacunación de las personas que se registran y posteriormente se puedan verificar en la entrada de algún establecimiento que implemente esta aplicación. Los usuarios se deben registrar en la plataforma ingresando sus datos personales y los datos del comprobante de vacunación una vez se guarden estos datos con éxito la plataforma va a generar un código QR descargable.  Por medio de este código se corrobora si esa persona está vacunada, de ser así la aplicación VacunaCheck  debe mostrar el estatus de la persona, de no ser así o no contar con un código QR la aplicación web VacunaCheck debe mostrar que la persona no está registrada. 
## Para el siguiente proyecto se necesita conocimientos sobre Laravel ya que será el framework donde se elaborará esta aplicación web. Así mismo se necesita conocimientos en base de datos para lograr almacenar la información de los usuarios que sean registrados.
## La finalidad de este proyecto es que los establecimientos, que tienen contacto con mucha gente, exijan la comprobación de que estás vacunado contra el COVID 19 para puedan brindar un servicio seguro y responsable.

## El inicio del proyecto fue el dia jueves de la fecha 02/01/2022
## La fecha de termino y entrega de la aplicacion es el dia Martes de la fecha 19/04/2022

<!-- Objetivos -->
#### Objetivos.
## El objetivo de VacunaCheck es llevar un control respecto a las campañas de vacunación dentro del país para evitar la propagación del virus intentando apartar a las personas de alto riesgo de las personas con menor riesgo y así sobrellevar la situación de manera eficaz y automatizada.

<!-- Organigrama -->
#### Organigrama.
## Tester      -->   Jessy Javier Araiza Cervantes
## Programador -->   Juan Luis Negrete Labrada
## Diseñadora  -->   Paola Guadalupe Patlan Gonzalez
## Analista    -->   Lizbeth Perez Salinas

<!-- Diagrama Gantt -->
#### Diagrama Gantt.
## ![1](https://user-images.githubusercontent.com/97042023/164008181-b0a0d01a-286e-443e-8a0f-a67e387a842f.png)
## ![2](https://user-images.githubusercontent.com/97042023/164008222-acab80e0-a159-4e5e-9afa-85a35fbd90ac.png)
## ![3](https://user-images.githubusercontent.com/97042023/164008240-4c62d127-d3bd-4e8a-80bd-551562fbd3f6.png)
## ![4](https://user-images.githubusercontent.com/97042023/164008262-dca6012c-706d-477c-8cc7-2f205b6f3ae3.png)




<!-- Análisis del proyecto -->
## Análisis de la Solución.
## La solución que se brinda es una ayuda para los negocios, ya que, al estar registrada la clientela, podrán saber quien este vacunado y quien no lo está. De esta manera se le permitirá el acceso al negocio, ya sea Restaurante, Bar, Tienda, Cafetería, o a cualquier lugar que cuente con nuestra aplicación y este registrado.  

<!-- Requerimientos -->
#### Requerimientos.
## Requerimientos Funcionales
## 1-Pantalla Principal
## ![R1](https://user-images.githubusercontent.com/97042023/164009537-c919f83c-d957-4b72-84f9-14c5b164e6c7.png)
## 2-Registro
## ![R2](https://user-images.githubusercontent.com/97042023/164009685-667f4536-6c22-4430-8de9-c998deff3574.png)
## 3-Leer QR
## ![R3](https://user-images.githubusercontent.com/97042023/164009843-ef5b8fcb-cc93-4c71-a2fa-136858e777a7.png)
## Requerimientos No Funcionales
## 1- De Apariencia
## ![RN1](https://user-images.githubusercontent.com/97042023/164010319-50d1017c-b87e-4d74-9fc3-cdcc45a33bad.png)
## 2- Usabilidad
## ![RN2](https://user-images.githubusercontent.com/97042023/164010430-4de5a99c-1763-4748-8725-17cc75b34512.png)
## 3- Rendimiento
## ![RN3](https://user-images.githubusercontent.com/97042023/164010545-a23bda19-ce45-4f0e-a949-733a51f4ee0f.png)
## 4- Operacionales
## ![RN4](https://user-images.githubusercontent.com/97042023/164010665-ee869956-6be9-4ddd-8090-e4ac0714705d.png)
## 5 y 6 - Mantenimiento y portavilidad 
## ![RN5Y6](https://user-images.githubusercontent.com/97042023/164010794-6cef435f-63e4-4ef6-a14e-61e16db73584.png)
## 7- Seguridad
## ![RN7](https://user-images.githubusercontent.com/97042023/164010912-009a5ff8-5bb3-4c97-b50e-0657417356c2.png)

<!-- Diagrama de Casos de Uso -->
#### Diagrama Casos de Uso.
Casos de Uso
## ![CU1](https://user-images.githubusercontent.com/97042023/164011417-87150610-d54c-413d-9264-bb3fd52095e0.png)
## ![CU2](https://user-images.githubusercontent.com/97042023/164011430-d85a15d6-019c-487a-acf3-d2dfb7f63651.png)
## ![CU3](https://user-images.githubusercontent.com/97042023/164011451-bd5b3b28-69d6-433d-9333-673c1eafba0b.png)



<!-- Diseño del proyecto -->
## Diseño de la Solución.
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Modelo Relacional -->
#### Modelo Relacional.
Esquema de la base de datos
## ![ModeloA](https://user-images.githubusercontent.com/87044535/164107371-e2764179-ae9c-4a53-a13c-c2c8beb21de6.jpg)
## ![ModeloB](https://user-images.githubusercontent.com/87044535/164109701-0c89feaf-1096-484e-a843-8333f19314bc.jpg)

<!-- Diagrama de Clases -->
#### Diagrama de Clases.
## ![ModeloClases](https://user-images.githubusercontent.com/87044535/164110249-2a1c3e3f-d505-40b1-ba7a-4374dd907827.jpg)


<!-- Diagrama de Componentes -->
#### Diagrama de Componentes.
Esquema de los componentes que interactúan (Modelo, Vista, Controlador, Servidor Web, Servidor de base de datos)


<!-- Implementación del proyecto -->
## Implementación.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Estándares de Codificación -->
#### Estándares Codificación.
Estándares empleados en la codificación

<!-- Arquitectura MVC y Middleware -->
#### Arquitectura.
Definir los patrones empleados y de seguridad.

<!-- Código Fuente -->
#### Código Fuente.
Código Fuente de la solución


<!-- Pruebas proyecto -->
## Pruebas.
Casos de prueba
## Prueba Registrar 
![image](https://user-images.githubusercontent.com/87114168/164343551-c55e48c1-b601-400e-bc22-1068d109bda9.png)
## Prueba Leer QR
![image](https://user-images.githubusercontent.com/87114168/164498797-b7515ee4-cc2a-4de4-b628-a2618967826b.png)
## Prueba Consulta de Datos 
![image](https://user-images.githubusercontent.com/87114168/164344948-4ce19f99-0ee8-49be-899b-200f990328a9.png)
## Prueba de Actualizar
![image](https://user-images.githubusercontent.com/87114168/164345499-b0bdecab-3df2-4247-b4ff-05418bdc45d8.png)
## Prueba inyección SQL o NOSQL
![image](https://user-images.githubusercontent.com/87114168/164260506-e13a2269-7fdf-4b87-9941-fdf7ada792c7.png)


<!-- Iniciando -->
## Iniciando
# Es una aplicacion que permite el registro de usuarios, al registrar a los usuarios se les otorgara un codigo qr, en el cual se estar almacenados.
# Este codigo QR se utilizara en otra pantalla llamada LeerQR que lo que ara es leer tu QR y buscar tu informacion en la base de datos, mandarte un mensaje si estas registrado o no lo estas y mostrarte tus datos.

<!-- Requisitos -->
### Requisitos
Requisitos de Instalación.

Dependencias:
    cookie-parser
    debug
    express
    express-session
    express-validator
    handlebars
    hbs
    http-errors
    joi
    mongoose
    morgan
    nodemon
    qrcode
    


## Guias
Guias de Uso.
## QR generador
El generador de qr es automatico. Por lo tanto su uso se basa en el metodo DataURL de la dependencia qrcode, este metodo nos crea un qr automaticamente cuando se realiza un  nuevo registro en la aplicación el controlador asigna automaticamente el folio a un nuevo código qr, lo genera y lo renderiza en la vista mostrarqr.  

## contribucion
Equipo de trabajo de alumnos de la "Universidad Tecnologica del Norte de Guanajuato."

## Licencia
Uso Libre

## Contacto
Correo electronico:
vacunacheck2020@gmail.com

## Participantes
* [participante 1](https://github.com/Lizbeth-Ps)
* [participante 2](https://github.com/luislabradaa)
* [participante 3](https://github.com/PaolaPatlan)
* [participante 4](https://github.com/Araiza07)

[contribuidores-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/luislabradaa/VacunaCheck-Repositorio
