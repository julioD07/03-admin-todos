# Development
Pasos para levantar la app en desarrollo:


1. levantar la base de datos
```bash
docker-compose up -d
```

2. Renombrar el archivo .env.template a .env
3. Renombrar las variables de entorno en el archivo .env
4. Ejecutar el SEED para [crear los datos iniciales](http://localhost:3001/api/seed)

# Prisma Commands

```bash
npx prisma init
npx prisma migrate dev
npx prisma generate
```

# Prod


# Stage