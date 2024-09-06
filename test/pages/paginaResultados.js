import {By} from "selenium-webdriver";

export const paginaResultados ={
    "url": "https://cursosdedesarrollo.com/?",
    "searchTitle":(driver) =>{
        return driver.findElement(By.css("header.page-header h1"))
    }
}
