
# Enterprise’ warp-drive management software

## Authors

- [@efaby](https://www.github.com/efaby) Fabian Villa


## Documentation

Calcular el flujo de funcionamiento de cada inyector para un porcentaje de la velocidad de la luz deseado, de modo que maximice el tiempo de funcionamiento
en una situación de daño dada y también, para una situación de daño dada, ofrece calcular la velocidad máxima a la que se puede viajar de
forma indefinida.
## Run Locally

Ir al directorio del proyecto
```bash
  cd demoCli
```

Instalar dependencias

```bash
  npm install
```

Ejecutar la aplicacion

```bash
  npm run start <command> injector1 injector2 injector3 speedPercentage
```
Comandos

- **flow** - Comando que calcula el flujo de cada inyector dado la velocidad.
- **speedMax** - Command tque calcula la velocidad maxima en forma indefinida para una situacion de daño.

Ejecutar la pruebas

```bash
  npm run test
```
## Usage/Examples

Ejemplo para calculo de flujo de cada inyector
```bash
  npm run start flow 20 10 0 100
```

Respuesta
```bash
  Flujo de funcionamiento de cada Inyector
  A: 90 mg/s, B: 100 mg/s, C: 110 mg/s, 
  Tiempo de funcionamiento: 90 Minutos
```
Ejemplo para calculo de velocidad
```bash
  npm run start speedMax 20 0 10
```

Respuesta
```bash
  Flujo de funcionamiento de cada Inyector
  La velodidad Maxima para viajar en forma indefinida es  90
```