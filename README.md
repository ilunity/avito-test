## Запуск

###
Запуск с помощью node

- `npm install` - установка зависимостей
- `npm run build` - сборка проекта
- `npm run preview` - запуск превью проекта на `http://localhost:5173/`

###
Запуск с помощью докера

- `docker build -t avito-test ./` - сборка образа
- `docker run -p 3000:3000 -p 8000:8000 avito-test` - запуск контейнера. URL: `http://localhost:4173/`
