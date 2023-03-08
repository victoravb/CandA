import Page from './page.js';

class MyAccountPage extends Page {

    // Selectors

    public get appOptionsButton () {
        $('~Filtros').waitForClickable({ timeout: 2000 });
        return $('~Filtros');
    }

    public get countryInformation () {
        $('id:com.canda.mobileapp:id/country_entry').waitForClickable({ timeout: 2000});
        return $('id:com.canda.mobileapp:id/country_entry');
    }

    public get trackingInformation() {
        $('id:com.canda.mobileapp:id/tracking_entry').waitForClickable({ timeout: 2000});
        return $('id:com.canda.mobileapp:id/tracking_entry');
    }

    public get countryField() {
        $('id:com.canda.mobileapp:id/country_spinner').waitForExist({ timeout: 2000});
        return $('id:com.canda.mobileapp:id/country_spinner').$('android.widget.TextView');
    }

    public get languageField() {
        $('id:com.canda.mobileapp:id/language_spinner').waitForExist({ timeout: 2000});
        return $('id:com.canda.mobileapp:id/language_spinner').$('android.widget.TextView');
    }

    public get consentSwitch() {
        $('id:com.canda.mobileapp:id/tracking_switch').waitForClickable({ timeout: 2000});
        return $('id:com.canda.mobileapp:id/tracking_switch');
    }

    // Methods

    public async tapOnAppOptions () {
        await this.appOptionsButton.click();
    }

    public async tapOnCountryInformation() {
        await this.countryInformation.click();
    }

    public async tapOnTrackingInformation() {
        await this.trackingInformation.click();
    }
}

export default new MyAccountPage();