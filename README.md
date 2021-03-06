# Выполнение тестового задания АО «Новая перевозочная компания». Frontend.
Backend в [соседнем репозитории](https://github.com/Trosh-A/npk.back)
## Задание
- Есть таблица с данными. Пример таблицы приведен ниже. Будем считать, что в таблице есть несколько сотен записей; (id:int, firstName:string, lastName:string, dateOfBirth, height:int)
- Необходимо написать Web приложение, состоящее из двух отдельных приложений Frontend(желательно Vue.js) + Backend(ASP.NET Core 5+) REST API;
- Приложение должно выводить на страницу данные, с использованием [DxDataGrid компонента](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/);
- БД использовать любую или не использовать вовсе, а хранить данные в памяти или Json файле;
- В таблице должна быть возможность использовать фильтры;
- При работе с БД, если она будет, использовать EntityFramework;
- Фильтровать данные на серверной стороне;
- В самой таблице должны быть фильтры поиска по полям Name и Height;
- Таблица должна позволять осуществлять сортировку;
- Таблица должна содержать элементы листания страниц.
## Особенности реализации
- Применена русская локализация;
- Все доступные операции сделаны на стороне сервера.
## Как запустить
- Скачать/клонировать репозиторий [npkback](https://github.com/Trosh-A/npk.back)
- Скачать зависимости из Nuget dotnet restore
- Собрать и запустить проект с помощью dotnet-cli или в Visual Studio.
## Если необходима доработка Vue приложения
- Скачать проект frontend из ветки main;
- В проекте frontend установить переменную окружения VUE_APP_BASE_SERVER_URL с адресом backend (например: VUE_APP_BASE_SERVER_URL=https://localhost:7028). Внимание: в конце пути слеш не ставить! 
- Скачать зависимости npm install;
- Собрать (npm run build) или запустить в dev режиме (npm run serve).
