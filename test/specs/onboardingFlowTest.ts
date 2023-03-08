import appOnboardingPage from '../pageobjects/appOnboarding.js'
import homePage from '../pageobjects/home.page.js'
import myAccountPage from '../pageobjects/myAccount.page.js';

describe('Onboarding process', () => {
    it('should setup the country to Spain, language to Spanish and accept the cookies', async () => {

        // Select Country and Language and continue to the next step
        await appOnboardingPage.openCountryDropdown();
        await appOnboardingPage.selectCountry('España');
        await appOnboardingPage.clickSubmitButton();
        
        // Accept cookies
        await appOnboardingPage.clickSubmitButton();
        await appOnboardingPage.acceptCookies();
        //await appOnboardingPage.clickSkipButton(); // Discomment this line and comment the two above to make the test fail by not accepting the cookies

        // Continue through the introduction
        await appOnboardingPage.clickSubmitButton();
        await appOnboardingPage.clickSubmitButton();
        await appOnboardingPage.clickSubmitButton();
        await appOnboardingPage.clickSubmitButton();

        // Home asserts to check if text is being displayed in Spanish
        await expect(homePage.home.$('android.widget.TextView')).toHaveText('Inicio');
        await expect(homePage.products.$('android.widget.TextView')).toHaveText('Productos');
        await expect(homePage.wishlist.$('android.widget.TextView')).toHaveText('Favoritos');
        await expect(homePage.cart.$('android.widget.TextView')).toHaveText('Cesta');

        // Move to my account to check the settings
        await homePage.clickMyAccount();
        await myAccountPage.tapOnAppOptions();

        // Validate country=Spain language=Spanish
        await myAccountPage.tapOnCountryInformation();
        await expect(myAccountPage.countryField).toHaveText('España');
        await expect(myAccountPage.languageField).toHaveText('Español');

        await myAccountPage.clickBackButton();

        // Validate if cookies have been accepted
        await myAccountPage.tapOnTrackingInformation();
        await expect(myAccountPage.consentSwitch).toHaveText('ACTIVADO');

    })
})


