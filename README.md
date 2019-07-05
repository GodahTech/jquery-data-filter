# Jquery Data Filter JS
Filter object by data or data has specific data value

## Usage:

#### HTML
```html
<div>
    <p class="filter-me" data-age="12">Henrique, age 12</p>
    <p class="filter-me" data-age="14">Raquel, age 14</p>
    <p class="filter-me" data-age="14">Godoy, age 14</p>
    <p class="filter-me" data-city="São Paulo">Godoy</p>
    <p class="filter-me" data-city="Paraíba">Henrique</p>
    <p class="filter-me" data-city="Paraíba">Goreth</p>
    <p class="filter-me" data-city="Paraíba">Iracy</p>
    <p class="filter-me" data-city="Paraíba">Raquel</p>
    <p class="filter-me" data-city="São Paulo">Leandro</p>
<div>
```

#### JAVASCRIPT
```javascript
    $(".filter-me").filterData("age").length
    //Output: 3

    $(".filter-me").filterData("age", 12).length
    //Output: 1

    $(".filter-me").filterData("city").length
    //Output: 3

    $(".filter-me").filterData("city", "São Paulo").length
    //Output: 2
```
