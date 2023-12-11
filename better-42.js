/ ==UserScript==

// @name         better42-remove-custom-fields

// @namespace    http://tampermonkey.net/

// @version      0.8

// @description  Remove empty customfields in Business App page from Device42

// @author       Mrp1xel

// @match        https://d42.url.com/admin/rackraj/businessapp/*

// @match        https://d42.url.com//admin/rackraj/businessapp/*

// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net

// @grant        none

// @exclude    https://d42.url.com//admin/rackraj/businessapp/*/edit/*

// @exclude    https://d42.url.com//admin/rackraj/businessapp/*/edit/*

// ==/UserScript==

 

 

 

 

(function() {

    'use strict';

 

    const elements = document.getElementsByClassName('dynamic-businessapp_custom_fields_set');

    const customfields = Array.from(elements);

    const baname = document.getElementsByClassName('field-box field-name');

    const bancorrectname = Array.from(baname);

 

// hide empty custom fields

    customfields.forEach(function(currentValue) {

        if (currentValue.getElementsByClassName('field-value')[0].innerText === "") {

         currentValue.hidden=true;

        };

    });

// hide app components

    document.getElementById('viewappcompinbusinessapp_set-group').hidden=true

// hide business elements

    document.getElementById('viewbusinessappelement_set-2-group').hidden=true

// hide of the migration group

    document.getElementsByClassName('field-box field-migration_group')[0].remove()

 

// hiding of related servers if business app is a SAAS one

    bancorrectname.forEach(function(currentValue) {

        if (currentValue.getElementsByClassName('readonly')[0].innerText.includes('-SAAS')) {

 

            document.getElementById("viewbusinessappelement_set-group").hidden=true;

         };

                            });

 

    var img_src =""

    const elements2 = document.getElementsByClassName('dynamic-businessapp_custom_fields_set');

    const customfields2 = Array.from(elements2);

    customfields2.forEach(function(currentValue) {

        if (currentValue.getElementsByClassName('field-cfield')[0].innerText === "LOGO" && currentValue.getElementsByClassName('field-value')[0].innerText !="") {

         currentValue.hidden=true;

            const img_src = currentValue.getElementsByClassName('field-value')[0].innerText.trim()

            const image_root_dir = https://cmdbdev.ofi-invest.com/mt/01010101010101010101010101010101/images/

            const final_img_src = image_root_dir + img_src

            console.log(final_img_src)

            const img = document.createElement("img");

            const div = document.createElement("div");

            div.className = "field-box"

            div.appendChild(img)

            img.setAttribute("src", final_img_src);

            img.setAttribute("height", "100px");

            img.setAttribute("width", "150px");

            img.setAttribute("alt", "Logo");

            const desc = document.getElementsByClassName("form-row field-vendor")[0].appendChild(div)

            // desc = document.getElementsByClassName("form-row field-vendor")[0].appendChild(img)

            console.log(desc);

        };

 

    });

    const table = document.querySelectorAll("[id^='viewbusinessappelement_set']")

    const taille = table.length - 2;

    console.log(taille)

 

 

})();