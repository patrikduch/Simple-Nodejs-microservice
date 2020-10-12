import 'reflect-metadata'; // this shim is required

import { injectable } from 'inversify';
import ITestFasade from '../typescript/interfaces/fasades/ITest-Fasade';

/**
 * @class TestFasade Example fasade that is under IoC control.
 */

@injectable()
class TestFasade implements ITestFasade {
    getHelloWorld(): string {
        return 'Hello world from Patrik Duch';
    }
}
export default TestFasade;