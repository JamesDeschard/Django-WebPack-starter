# Django - Webpack boilerplate


<p align="center">
  <img align="center" width="460" height="250" src="x_static/images/django.png">
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

You can then run migrations on the backend side. To use the dev config in webpack use ``npm run start``, more on this further down.

You are now all set to create a django app and start working. An url is set with a ``TemplateView`` in the ``config.urls.py`` file for the home page.

## Utils

### Django

#### django-environ

The boilerplate comes installed with django-environ so create your ``.env`` file and add the ``SECRET_KEY`` variable to it (you can use the commented key in the settings.py file to start with).

#### django-extensions

Along with django-environ, the boilerplate comes installed with the [django extentions module](https://django-extensions.readthedocs.io/en/latest/). You can remove it from the INSTALLED_APPS variable if you wish. With it you have access to some usefull commands such as 

- shell_plus - An enhanced version of the Django shell. It will autoload all your models making it easy to work with the ORM right away.
- drop_test_database - Drops the test database. Usefull when running Django test via some automated system (BuildBot, Jenkins, etc) and making sure that the test database is always dropped at the end.
- reset_db - Resets a database (currently sqlite3, mysql, postgres). Uses “DROP DATABASE” and “CREATE DATABASE”.
- runscript - Runs a script in the django context.
- and many more!

### JS

#### Conditioner.js

JS files with support of the latest ECMAScript are located under src/scripts. Scripts are loaded as modules with conditionnal import using [conditioner.js](https://www.npmjs.com/package/conditioner-js).

Use a data-module attribute with a value corresponding to the name of your JS file for it to be loaded in your HTML. You can condition the loading of your module to a context, for instance a breakpoint, by specifying a data-context attribute. For instance, in the following example, the Hello module will be imported if the current viewport has a width of at least 48rem (768px) and if the element is visible in the viewport.

``` html
<h1
  data-module="Hello"
  data-context="@media (min-width: 48rem) and was @visible"
>
  {{ siteTitle }}
</h1>
```

``` js
// src/assets/js/modules/Hello.ts
export default (element: HTMLElement): Function => {
  // Module mounted
  console.log('Hello', element)

  return () => {
    // Module unmounted
    console.log('Bye')
  }
}
```

#### eslinter

[Eslint](https://eslint.org/) statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.


### Fonts

**Font** files are located under src/assets/fonts/

### CSS

[Sass](https://sass-lang.com/) is the most mature, stable, and powerful professional grade CSS extension language in the world.

The boilerplate is shipped with a set of mixins such as:

- SEO Friendly

Use 2 data attributes to spread a link around an entire element. It uses the pseudo-classes trick with absolute positioning. Be careful however with relative positions inside your element. Flag the element you want to spread your link to with data-seo-container then add data-seo-target to your <a> element.

``` html
<div class="card" data-seo-container>
  <div class="card__media">
    <img src="https://picsum.photos/165/165" alt="photo placeholder">
  </div>
  <div class="card__content">
    <p class="card__category">Technology</p>
    <h2 class="card__title">
      <a href="https://romainlefort.com" class="card__link" target="_blank" data-seo-target>The companies offering delivery to the Moon</a>
    </h2>
    <p class="card__excerpt">Not many people can say they have a doctorate in interplanetary navigation, but Tim Crain can.</p>
  </div>
</div>
```
- Breakpoints are also referred to in a map

``` css
$breakpoints: (
  xs: rem(360px),
  sm: rem(480px),
  md: rem(768px),
  lg: rem(1024px),
  xl: rem(1280px),
  2xl: rem(1440px),
);

// Then use mq mixin
.container {
  max-width: 100%;

  @include mq(lg) {
    max-width: rem(1024px);
  }
}
```

## Building assets

**Development**

Start a local development server:

``$ npm start``

**Production**

Build all assets for production :

``$ npm build``
