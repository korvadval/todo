![Alt text](/src/images/demo/demo.gif "Optional title")

ОПИСАНИЕ
------------
<h4>Реализованная функциональность</h4>
<ul>
    <li>Маршрутизация;</li>
    <li>Добавление и удаление задач;</li>
    <li>Изменение статуса задачи;</li>
    <li>Фильтрация задач;</li>
</ul> 
<h4>Стек технологий:</h4>
<ul>
	<li>HTML, CSS</li>
	<li>Vue, Babel</li>
 </ul>


УСТАНОВКА 
------------

Для проверки того, что node.js установлен, выполните
~~~
node -v
~~~
Если пакета нет, выполните установку

### Установка на Ubuntu

~~~
sudo apt-get update
sudo apt-get upgrade
sudo apt install nodejs
sudo apt install npm
git clone https://github.com/korvadval/todo.git
~~~

### Установка на Windows

* Скачайте [установочный файл](https://nodejs.org), запустите его и выполните все шаги установки.  
* Скачайте исходный код приложения из репозитория:
~~~
git clone https://github.com/korvadval/todo.git
~~~


### Установка зависимостей проекта

~~~
cd <путь до папки проекта>
npm install (или yarn install)
~~~

ЗАПУСК
------------

* Для запуска приложения выполните команду:
~~~
npm run serve (или yarn serve)
~~~

После запуска приложение доступно по адресу: http://localhost:3000


* В случае изменения исходного кода, приложение необходимо пересобрать:
~~~
npm run build (или yarn build)
~~~
