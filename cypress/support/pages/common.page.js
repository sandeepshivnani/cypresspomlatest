import { actions } from "../actions";

class Common {
    constructor(){
        this.pageTitle = 'h1[class=page-title] span';
    }

    verifyPageTitle(expectedTitle){
       actions.verifyText({locator: this.pageTitle, expectedText: expectedTitle, exact: true}) 
    }
}

export const commonPage = new Common();