# Jquery Data Filter JS
<p>Filtrar objeto pelo atributo '.data' ou dados que possuem valor do atributo específico.</p>
<p>Filter object by '.data' attribute or data that has specific attribute value.</p>
<p>Godahtech | Soluções Digitais - Roberto W. Godoy</p>
<b>Version 1.0.0</b>

# Zero Vulnerabilidades
[![Known Vulnerabilities](https://snyk.io/test/github/godoyrw/jquery-data-filter/badge.svg?targetFile=package.json)](https://snyk.io/test/github/godoyrw/jquery-data-filter?targetFile=package.json)

# Instalação
npm i jquery-data-filter-js --save

## Usando:

#### HTML
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

#### JAVASCRIPT
```javascript
    $(document).ready(function () {

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

        console.log($(".filter-me").filterData("city", "São Paulo").text());
        //Output: Godoy, Leandro

        console.log($(".filter-me").filterData("age", 14).first().text());
        //Output: Raquel, age 14

    });
```
