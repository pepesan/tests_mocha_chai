const {By} = require("selenium-webdriver");
module.exports = {
    "url": "https://cursosdedesarrollo.com/",
    "searchInput":(driver) =>{
        return driver.findElement(By.id("wp-block-search__input-1"))
    },
    "searchButton":(driver) =>{
        return driver.findElement(By.css(".wp-block-search__button"))
    },
    /*
    "searchByTerm": async (driver, text) =>{
        console.log(this);
        // 3 | type | id=wp-block-search__input-1 | nas
        await this.searchInput(driver).sendKeys(text)
        // 4 | click | css=.wp-block-search__button |
        await this.searchButton(driver).click()
    }

     */
}
