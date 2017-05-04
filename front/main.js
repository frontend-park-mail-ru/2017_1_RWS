import Manage  from './services/manage'
import {Router} from './services/router'

(function () {

    let manage = new Manage();

    manage.sound();
    manage.showInd();

})();