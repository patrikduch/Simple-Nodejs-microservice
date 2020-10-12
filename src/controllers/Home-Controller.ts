
import 'reflect-metadata'; // this shim is required

import { inject } from 'inversify';
import { TYPES } from '../ioc/types';
import ITestFasade from '../typescript/interfaces/fasades/ITest-Fasade';
import { interfaces } from 'inversify-express-utils/dts/interfaces';
import { controller, httpGet } from 'inversify-express-utils';

@controller("")
/**
 * @class HomeController Example controller with injected IoC functionality.
 */
class HomeController implements interfaces.Controller{

   private _testFasade!: ITestFasade;

   constructor(
      @inject(TYPES.ITestFasade)
      testFasade: ITestFasade
    ) {
      this._testFasade = testFasade;
    }

    @httpGet("/")
    index() {
       return {
          test: this._testFasade.getHelloWorld()
       };
    }
}

export default HomeController;