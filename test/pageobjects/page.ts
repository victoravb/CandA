// Main page object containing all methods and selectors shared across all page object
export default class Page {
    
    // Selectors

    public get submitButton () {
        $('id:com.canda.mobileapp:id/submitButton').waitForClickable({ timeout: 2000 });
        return $('id:com.canda.mobileapp:id/submitButton');
    }

    public get skipButton () {
        $('id:com.canda.mobileapp:id/skipTextView').waitForClickable({ timeout: 2000 });
        return $('id:com.canda.mobileapp:id/skipTextView');
    }

    public get home () {
        $('id:com.canda.mobileapp:id/bottom_navigation_container').waitForExist({ timeout: 2000 });
        return $$('id:com.canda.mobileapp:id/bottom_navigation_container')[0];
    }

    public get products () {
        $('id:com.canda.mobileapp:id/bottom_navigation_container').waitForExist({ timeout: 2000 });
        return $$('id:com.canda.mobileapp:id/bottom_navigation_container')[1];
    }

    public get wishlist () {
        $('id:com.canda.mobileapp:id/bottom_navigation_container').waitForExist({ timeout: 2000 });
        return $$('id:com.canda.mobileapp:id/bottom_navigation_container')[2];
    }

    public get cart () {
        $('id:com.canda.mobileapp:id/bottom_navigation_container').waitForExist({ timeout: 2000 });
        return $$('id:com.canda.mobileapp:id/bottom_navigation_container')[3];
    }
    
    public get myAccount () {
        $('id:com.canda.mobileapp:id/bottom_navigation_container').waitForExist({ timeout: 2000 });
        return $$('id:com.canda.mobileapp:id/bottom_navigation_container')[4];
    }

    public get backButton () {
        $('~Desplazarse hacia arriba').waitForClickable({ timeout: 2000});
        return $('~Desplazarse hacia arriba');
    }

    // Methods

    public async clickSubmitButton () {
        await this.submitButton.click();
    }

    public async clickSkipButton () {
        await this.skipButton.click();
    }

    public async clickMyAccount() {
        await this.myAccount.click();
    } 

    public async clickBackButton() {
        await this.backButton.click();
    }
}
