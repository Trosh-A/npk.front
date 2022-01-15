# Выполнение тестового задания АО «Новая перевозочная компания». Frontend.
Backend в [соседнем репозитории](https://github.com/Trosh-A/npk.back)
## Задание
- Есть таблица с данными. Пример таблицы приведен ниже. Будем считать, что в таблице есть несколько сотен записей; (id:int, firstName:string, lastName:string, dateOfBirth, height:int)
- Необходимо написать Web приложение, состоящее из двух отдельных приложений Frontend(желательно Vue.js) + Backent(ASP.NET Core 5+) REST API;
- Приложение должно выводить на страницу данные, с использованием [DxDataGrid компонента](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/);
- БД использовать любую или не использовать вовсе, а хранить данные в памяти или Json файле;
- В таблице должна быть возможность использовать фильтры;
- При работе с БД, если она будет, использовать EntityFramework;
- Фильтровать данные на серверной стороне.
## Особенности реализации
- применена русская локализация;
- все доступные операции сделаны на стороне сервера.
