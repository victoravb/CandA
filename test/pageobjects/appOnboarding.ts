import Page from './page.js';

class AppOnboardingPage extends Page {

    // Selectors

    public get countryDropdown () {
        $('id:com.canda.mobileapp:id/cell_value_textView').waitForClickable({ timeout: 2000 })
        return $('id:com.canda.mobileapp:id/cell_value_textView');
    }

    public get cookieConsentButton () {
        $('id:com.canda.mobileapp:id/cookieConsentAcceptAllButton').waitForClickable({ timeout: 2000 })
        return $('id:com.canda.mobileapp:id/cookieConsentAcceptAllButton');
    }

    //Methods

    public async openCountryDropdown () {
        await this.countryDropdown.click();
    }
    
    public async selectCountry (country: string) {
        await $(`//*[@text="${country}"]`).click();
    }

    public async acceptCookies () {
        await this.cookieConsentButton.click();
    }
}

export default new AppOnboardingPage();
