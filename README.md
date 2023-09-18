# Ejemplos de uso de Mocha y Chai

Repositorio de ejemplos de Mocha y Chai

## Instalación de dependencias
- npm i
- yarn i
- ó pnpm i
## Ejecución de pruebas
- npm run test
- mocha test/prueba_01.test.js
- mocha --grep "Debe sumar números negativos correctamente" # sólo los test con ese patrón
- mocha --grep "@fast" # sólo un tag específico

## Ejecución de pruebas con informes XML
- npm run test:xunit-report
- dejará un fichero text-results.xml con los resultados
## Ejecución de pruebas con informes HTML
- npm run test:html-report
- dejará una carpeta llamada mochaawesome-report con los resultados en html
