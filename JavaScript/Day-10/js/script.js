import { countries } from "../data/countries.js";

const loadCountries = () =>
{
    let strCountry = "";

    countries.forEach ((item) =>
    {
        strCountry +=  <option>Angola</option>
    })

    const lstCountries = document.querySelector("#lstCountries");

    lstCountries.innerHTML = strCountry;
}


loadCountries(); 
