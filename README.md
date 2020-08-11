# GodahTech - Jquery Data Filter JS

<p>Filtrar objeto pelo atributo '.data' ou dados que possuem valor do atributo específico.</p>
<p>Filter object by '.data' attribute or data that has specific attribute value.</p>
<p>Godahtech | Soluções Digitais - Roberto W. Godoy</p>
<b>Version 1.0.2</b>

## 🛡 Pode Confiar

[link](https://google.com.br){:target="\_blank"}
[![Known Vulnerabilities](https://snyk.io/test/github/godoyrw/jquery-data-filter/badge.svg?targetFile=package.json)](https://snyk.io/test/github/godoyrw/jquery-data-filter?targetFile=package.json) [![npm](https://img.shields.io/npm/v/jquery-data-filter-js/latest?registry_uri=https%3A%2F%2Fregistry.npmjs.com%2Fjquery-data-filter-js&style=flat-square)](https://www.npmjs.com/package/jquery-data-filter-js) [![godahtech](https://img.shields.io/endpoint?url=https%3A%2F%2Fgodahtech.com.br%2Fgodahshield.json%3Furl%3Dhttps%3A%2Fgodahtech.com.br%2F)](http://godahtech.com.br/)

## 📦 Instalação

```bash
npm i jquery-data-filter-js
```
language: node_js
node_js:
- "9"

deploy:
  provider: script
  script: "cp .npmrc.template $HOME/.npmrc && npm publish"
  skip_cleanup: true
  on:
    tags: true

notifications:
  email:
    recipients:
    - julio@packagecloud.io
    on_success: change
    on_failure: always
## 🔨 Usando:

### HTML

```html
<div id="person-list">
  <p class="filter-me" data-age="12">
    Henrique, age 12
  </p>
  <p class="filter-me" data-age="14">
    Raquel, age 14
  </p>
  <p class="filter-me" data-age="14">
    Godoy, age 14
  </p>
  <p class="filter-me" data-city="São Paulo">
    Godoy
  </p>
  <p class="filter-me" data-city="Paraíba">
    Henrique
  </p>
  <p class="filter-me" data-city="Paraíba">
    Goreth
  </p>
  <p class="filter-me" data-city="Paraíba">
    Iracy
  </p>
  <p class="filter-me" data-city="Paraíba">
    Raquel
  </p>
  <p class="filter-me" data-city="São Paulo">
    Leandro
  </p>
</div>
```

### JAVASCRIPT

```javascript
$(document).ready(function() {
  console.log($(".filter-me").filterData("person").length);
  //Output: 0

  console.log($(".filter-me").filterData("age").length);
  //Output: 3

  console.log($(".filter-me").filterData("age", 12).length);
  //Output: 1

  console.log($(".filter-me").filterData("city").length);
  //Output: 6

  console.log($(".filter-me").filterData("city", "São Paulo").length);
  //Output: 2

  console.log(
    $(".filter-me")
      .filterData("city", "São Paulo")
      .text()
  );
  //Output: Godoy, Leandro

  console.log(
    $(".filter-me")
      .filterData("age", 14)
      .first()
      .text()
  );
  //Output: Raquel, age 14
});
```

## 🌍 Suporte aos ambientes

- Navegadores modernos e Internet Explorer 11

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | últimas 2 versões                                                                                                                                                                                                 | últimas 2 versões                                                                                                                                                                                             | últimas 2 versões                                                                                                                                                                                             | últimas 2 versões                                                                                                                                                                                         | últimas 2 versões                                                                                                                                                                                                     |

## 🖥 Desenvolvimento

Use Gitpod, um ambiente de desenvolvimento online para GitHub.

[![Abrir no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/godoyrw/jquery-data-filter)

Ou clone localmente:

```bash
$ git clone https://github.com/godoyrw/jquery-data-filter.git
$ cd jquery-data-filter
$ npm install
$ npm start
```

<script
function externalLinks() { 
    for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) { 
        var b = c[a]; 
        b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank") 
    } 
} ; 
externalLinks();
></script>
