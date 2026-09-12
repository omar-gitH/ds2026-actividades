# Backend de la Librería

Este backend expone una API simple con dos endpoints:

- `GET /` — verifica que el servidor está activo
- `GET /libros` — devuelve la lista de libros disponibles

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Desde `c13-docker/backend`:

```bash
npm install
```

## Ejecutar el servidor en modo desarrollo

```bash
npm run dev
```

El servidor quedará disponible en `http://localhost:3000`.

## Endpoints y pruebas

### 1. Verificar que el servidor funciona

#### Con `Invoke-RestMethod`

```bash
Invoke-RestMethod http://localhost:3000/
```

Respuesta esperada:

```json
{ "mensaje": "API de la Librería lista" }
```

#### Con navegador

Abre `http://localhost:3000/` y deberías ver el JSON de respuesta.

### 2. Obtener la lista completa de libros

#### Con `curl`

```bash
Invoke-RestMethod http://localhost:3000/libros
```

Respuesta esperada: un arreglo de 6 objetos con esta estructura:

```json
[
  {
    "id": 1,
    "titulo": "The Hobbit",
    "autor": "J.R.R. Tolkien",
    "precio": 3500,
    "imagen": "https://covers.openlibrary.org/b/id/8225266-L.jpg",
    "disponible": true
  },
  {
    "id": 2,
    "titulo": "1984",
    "autor": "George Orwell",
    "precio": 4500,
    "imagen": "https://www.penguinlibros.com/ar/4246109-large_default/1984-edicion-definitiva-avalada-por-the-orwell-estate.webp",
    "disponible": true
  },
  {
    "id": 3,
    "titulo": "El principito",
    "autor": "A. de Saint-Exupéry",
    "precio": 2800,
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfii1WITzF0zjao4wMwZmj30LmPbsiMFy0FCn54d64ftSr6VIUlf1r1ChG5aursCE-c4UCoLNzOy-z9HO1L2QTohxRZR1h1X4qCX4bw&s=10",
    "disponible": true
  },
  {
    "id": 4,
    "titulo": "Sherlock Holmes",
    "autor": "Arthur Conan Doyle",
    "precio": 5200,
    "imagen": "https://storage-aws-production.publica.la/bookwire-direct-sales/issues/2025/03/oVyN01oggMRNpjLM/4605b06c-c96f-4fc2-9d3b-be6c20e60265_cover.jpg",
    "disponible": true
  },
  {
    "id": 5,
    "titulo": "Coraline",
    "autor": "Neil Gaiman",
    "precio": 3900,
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsFqtEe_GBnaN1CqChLU7G8375EfsJdkxvNUvqTYNGC3Ld3UCJZaGFvckPOXUYILrAJyGvK-AHgUpNuaETM9upe1_H-6hxCdN7h1X4w&s=10",
    "disponible": true
  },
  {
    "id": 6,
    "titulo": "Don Quijote",
    "autor": "Miguel de Cervantes",
    "precio": 4100,
    "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFvNdHNmDXzZ1A5iwW_qCsGoYe910RbxL6sZvalNlHrUHiunnfTPdrk_O_4Y9NGZETzb1aXyHy-DaqkUIkB9uXvnPwnvYHKsCIJYq34&s=10",
    "disponible": true
  }
]
```

#### Con `http` (VS Code REST Client)

En `api.http` puedes usar:

```http
GET http://localhost:3000/

###

GET http://localhost:3000/libros
```

### 3. Validar el contenido

Asegúrate de que la respuesta de `/libros` contenga 6 libros y que cada libro tenga las propiedades:

- `id`
- `titulo`
- `autor`
- `precio`
- `imagen`
- `disponible`

## Posibles pruebas adicionales

- Comparar los datos devueltos por el backend con los datos mostrados en el frontend.
- Abrir `/libros` en el navegador para comprobar que es JSON válido.
- Revisar la consola del servidor para verificar que el backend está levantado sin errores.

*importante:*

Para que el entorno local no siga respondiendo a los send request de API Rest, ejecutar el siguiente comando

```
Stop-Process -Id 25948

```

Para obtener los procesos que se estan escuchando en el puerto 3000:

```
Get-NetTCPConnection -LocalPort 3000
```

Y para detenerlos o dar de baja esos procesos:

```
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

```


```markdown
# 🚀 Guía de Solución de Conflictos de Puertos: Docker vs Entorno Local

Este documento registra cómo solucionar el problema donde Docker falla al levantar contenedores (ej. `docker compose up`) porque el puerto de la API (ej. `3000`) ya está en uso por un proceso de Windows.

## ⚠️ El Origen del Problema
Ocurre cuando levantas el proyecto de forma local (`npm run dev`) y luego intentas levantarlo con Docker sin haber cerrado correctamente el proceso local. Ambos intentan ocupar el mismo puerto y chocan.

---

## 🔍 Paso 1: Diagnóstico (¿Quién está usando el puerto?)

Abre una terminal de PowerShell y ejecuta este comando para descubrir qué ID de proceso (PID) tiene secuestrado el puerto (cambia `3000` por el tuyo si es necesario):

```powershell
Get-NetTCPConnection -LocalPort 3000

```

> **Nota:** Presta atención al número en la columna **`OwningProcess`** y al estado en la columna **`State`**.

---

## 🛠️ Paso 2: Las Soluciones (De menor a mayor intensidad)

### Nivel 1: El cierre amable (Recomendado)

Busca en VS Code la terminal donde ejecutaste el servidor y presiona `Ctrl + C` para detenerlo de forma segura.

### Nivel 2: El cierre forzado por PID

Si cerraste la terminal por accidente, fuerza el cierre usando el número que obtuviste en el diagnóstico (reemplaza `PID` por tu número):

```powershell
Stop-Process -Id <PID> -Force

```

### Nivel 3: El "Francotirador" (Comando de un solo paso)

Si quieres buscar el proceso que está escuchando activamente y destruirlo en un solo comando sin tener que buscar el número manualmente, ejecuta:

```powershell
Get-NetTCPConnection -LocalPort 3000 -State Listen | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

```

---

## 👻 Paso 3: Estados "Fantasmas" y Errores de Windows

Al intentar matar un proceso, podrías toparte con estos errores. **No te asustes, significan que el proceso original ya no existe:**

* ❌ **Error: Acceso Denegado / Proceso `Idle (0)**`
* **Qué es:** Windows asigna el puerto al PID 0 durante la limpieza de red. Es un proceso vital del sistema.
* **Solución:** No hagas nada. Espera 30 segundos y el puerto se liberará solo.


* ❌ **Error: No se encuentra ningún proceso / Estado `FinWait2**`
* **Qué es:** El programa de Node ya se cerró con éxito, pero Windows mantiene el puerto semi-abierto unos segundos por seguridad para no perder paquetes de red residuales.
* **Solución:** Espera 30 a 60 segundos hasta que la conexión desaparezca.



---

## 🚨 Paso 4: La Solución Extrema (Reset de Red como Administrador)

Si ya esperaste varios minutos, el puerto sigue atascado en un estado fantasma (como `FinWait2`) y Docker sigue sin poder iniciar, la red interna de Windows se quedó colgada.

Para solucionarlo, debes reiniciar el administrador de red (NAT):

1. Abre **PowerShell como Administrador** (Clic derecho en el menú inicio de Windows > Windows PowerShell (Administrador)).
2. Ejecuta estos dos comandos en orden:

```powershell
net stop winnat
net start winnat

```

> **Resultado:** Esto sacude las conexiones de red de Windows, destruye las conexiones bloqueadas y libera el puerto al instante.

---

## 💡 Regla de Oro

**Trabaja siempre con un solo entorno a la vez.** Si vas a usar Docker, asegúrate de no tener ningún `npm run dev` corriendo de fondo en tu PC.

