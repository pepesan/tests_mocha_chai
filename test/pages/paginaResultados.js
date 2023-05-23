const {By} = require("selenium-webdriver");
module.exports = {
    "url": "https://cursosdedesarrollo.com/?",
    "searchTitle":(driver) =>{
        return driver.findElement(By.css("header.page-header h1"))
    }
}
