# Django - Webpack boilerplate


<p align="center">
  <img align="center" width="460" height="300" src="x_static/images/django.png">
</p>


A **Django - WebPack** configuration with a set of django, sass and js utils (scss mixins, eslinter, conditioner.js)!

## Setup

Simply clone this project, create a virtual environment and install dependencies.

```
py -m venv venv
pip install -r requirements.txt
cd x_frontend
npm install
```

The boilerplate comes installed with django-environ so create your ``.env`` file and add the ``SECRET_KEY`` variable to it (you can use the commented key in the settings.py file to start with).

You can then run migrations on the backend side. To use the dev config in webpack use ``npm run start`` (build for the prod config).

You are now all set to create an app and start working. An url is set with a ``TemplateView`` in the ``config.urls.py`` file for the home page.

## Utils

### Django

Along with django-environ, the boilerplate comes installed with the [django extentions module](https://django-extensions.readthedocs.io/en/latest/). You can remove it from the INSTALLED_APPS variable if you wish. With it you have access to some usefull commands such as 

- shell_plus - An enhanced version of the Django shell. It will autoload all your models making it easy to work with the ORM right away.
- drop_test_database - Drops the test database. Usefull when running Django test via some automated system (BuildBot, Jenkins, etc) and making sure that the test database is always dropped at the end.
- reset_db - Resets a database (currently sqlite3, mysql, postgres). Uses “DROP DATABASE” and “CREATE DATABASE”.
- runscript - Runs a script in the django context.
- and many more!

### JS






