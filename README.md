🚀 Test Performance Lab

Приложение на React с корзиной товаров, фильтрацией и пагинацией. Используется фейковый сервер json-server.

🧰 Технологии

React 19

TypeScript

Redux Toolkit

React Redux

React Router v6

React Paginate

Axios

JSON Server

Concurrently

Normalize.css

📆 Установка

git clone https://github.com/Sergey1a/performance-lab.git
cd performance-lab
npm install

▶️ Запуск проекта

npm start

Команда запускает две задачи параллельно:

react-scripts start — запускает фронтенд на http://localhost:3000

json-server — запускает моковый API сервер на http://localhost:3001

📁 Структура проекта

src/components — компоненты приложения

src/redux — Redux slices и store

server/db.json — моковые данные для json-server

📦 Скрипты

Скрипт

Назначение

npm start

Запускает клиент и сервер

npm run dev

Только React приложение

npm run server

Только JSON-сервер

npm run build

Сборка проекта

📆 Пример запроса к API

GET http://localhost:3001/food?_page=1&_limit=4&_sort=title&_order=desc