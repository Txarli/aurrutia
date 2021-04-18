---
path: '/un-enfoque-pragmatico-de-nuestros-tests-frontend'
date: 2020-06-10
title: 'Un enfoque pragmático de nuestros tests del frontend'
banner: './images/banner.jpg'
---

Resulta difícil decir nada que no se haya dicho ya en torno a los beneficios del testing. En Biko, **tenemos un compromiso con las buenas prácticas** y tenemos clara la responsabilidad de testar nuestras aplicaciones. En este post no vengo a decirte [por qué debes hacer tests](https://www.youtube.com/watch?v=vlorWIlPgY0&t), **vengo a hablar del enfoque que estamos dando a nuestros tests en los desarrollos frontend**.

Como _software crafters_, **nuestro oficio es solucionar problemas**. No nos limitamos a ejecutar soluciones, entendemos y hacemos nuestro el dominio del problema de negocio que se quiere afrontar. Participamos de forma proactiva en el análisis y diseño de funcionalidades, **siempre con un compromiso claro por la entrega de valor**.

Como _software crafters_, en nuestro afán por crear código mantenible, **tenemos la responsabilidad de volcar en nuestra base de código todo ese conocimiento que hemos adquirido**. No nos limitamos a implementar interfaces, ni nos limitamos a implementar llamadas a un API. **Buscamos expresar la intención y motivación que subyace a aquellas soluciones de interfaz que estamos implementando**. Aquí es donde iniciamos ese proceso creativo en el que, utilizando el código como materia, vamos moldeando todo aquel conocimiento que tenemos sobre el negocio.

**El testing no está exento de este principio: debe estar basado en nuestro conocimiento del negocio**. Cuando hacemos un test del frontend, debemos ser capaces de simular la interacción de la persona al otro lado de la aplicación, expresando su intención y motivación. **Debemos hablar el lenguaje de nuestro negocio**. No nos limitamos a comprobar que ese input recibe ocho dígitos y una letra, comprobamos que una usuaria introduce su DNI para emitir facturas. No comprobamos que recibimos un dato del API, comprobamos que un usuario consulta los siniestros de su póliza.

Para alcanzar este objetivo, **es fundamental que nuestros test cubran la interacción con la interfaz de usuario**. De nada sirve hacer test unitarios de las capas de nuestra aplicación si no somos capaces de hacer click en el mismo botón que verá la persona que la utilice. A esta persona no le importan nuestros repositorios, servicios de dominio o servicios de aplicación. Esta persona lo único que verá serán botones, campos de formularios o tablas. Si no somos capaces de cubrir esto, estaremos perdiendo una parte importante del potencial de nuestros test.

## Entendido pero... ¿Cómo lo conseguimos?

En Biko desarrollamos nuestros proyectos frontend (principalmente) en TypeScript y React, utilizando [Jest](https://jestjs.io/) como framework de tests. Este framework nos facilita testar todo nuestro core, pero está limitado a la hora de hacer tests de nuestras vistas (algo que, como se ha dicho antes, resulta fundamental en un proyecto front). **Aquí es donde entra en juego la herramienta [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)**.

React Testing Library es una librería de utilidades que extiende de [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro) y nos permite renderizar una interfaz de usuario para interactuar con el DOM. **Se basa en un principio: _"cuanto más se parezcan tus tests a cómo se usa tu software, más confianza te darán"_**. Cuando lo lees parece obvio, pero es un salto cualitativo en el enfoque que damos a los tests de nuestra interfaz. No testamos detalles de implementación de nuestros componentes, sino que actuamos directamente sobre el DOM, del mismo modo que lo hará quien use nuestro software.

Utilizando esta librería junto a Jest, **tenemos la capacidad de hacer test de nuestras vistas de forma agnóstica a la implementación**. Mockeando los colaboradores como en cualquier pieza de nuestra aplicación, buscamos elementos del DOM (por texto o label, igual que lo haría cualquiera que navegue la web) e interactuamos con ellos comprobando que la respuesta obtenida es la adecuada. Esto nos permite cubrir con tests las reglas de negocio en la capa de entrega e incluso, por qué no, **desarrollar interfaces de usuario mediante TDD**.

## En conclusión

React Testing Library aumenta de forma considerable la fiabilidad de nuestros tests del frontend. Nos permite abstraernos de los detalles de implementación y **tener unos tests lo más parecido posibles a la manera en la que se utilizará nuestro software**. Gracias a este principio, obtenemos una batería de tests más robusta y que expresa más intención. Esto último nos lleva a un código más mantenible y, como _software crafters_, **pocas cosas nos hacen más felices que una base de código mantenible**.

## Si quieres saber más

Si quieres seguir investigando, añado un vídeo y un artículo que pueden resultarte interesantes. Además, si tienes inquietudes sobre testing, buenas prácticas y entrega de valor, siempre puedes buscarnos en redes sociales ([a Biko](https://twitter.com/biko2) o [a mí mismo](https://twitter.com/aitorcurrutia)), **nos encantará conocerte**.

- Un vídeo: [The Pragmatic Frontend Tester](https://www.youtube.com/watch?v=XjFeUUZm50g) ([Adriá Fontcuberta](https://twitter.com/afontq))
- Un artículo: [No pierdas el tiempo escribiendo tests](https://blog.koalite.com/2017/11/no-pierdas-el-tiempo-escribiendo-tests/) ([Juan María Hernández](https://twitter.com/gulnor))
