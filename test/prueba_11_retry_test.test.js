import {Browser, Builder, By} from "selenium-webdriver";
import { assert } from 'chai';
describe('retries', function () {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
        //driver = await new Builder().forBrowser('chrome').build()
        driver = await new Builder().forBrowser(Browser.CHROME).build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    // Retry all tests in this suite up to 4 times
    this.retries(4);

    beforeEach(function () {
        driver.get('https://cursosdedesarrollo.com/');
    });

    it('should succeed on the 3rd try', async function () {
        // Specify this test to only retry up to 2 times
        this.retries(2);
        let textoBoton = await driver.findElement(By.css("button.wp-block-search__button.wp-element-button")).getText();
        console.log(textoBoton)
        assert.equal(textoBoton, 'Buscar', "no tiene el texto Buscar");
    });
});
