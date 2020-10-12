import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import ITestFasade from '../typescript/interfaces/fasades/ITest-Fasade';
import TestFasade from '../fasades/Test-Fasade';

// Create blank IoC container.
const container = new Container();

/* 
  Fasades bindings
*/
container
  .bind<ITestFasade>(TYPES.ITestFasade)
  .to(TestFasade)
  .inRequestScope();

export default container;