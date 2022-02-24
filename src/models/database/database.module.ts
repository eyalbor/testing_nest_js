// import { DynamicModule, Module } from '@nestjs/common';
//
// @Module({
//   providers: [Connection],
// })
// export class DatabaseModule {
//   static forRoot(entities = [], option?): DynamicModule {
//     const providers = createDatabaseProviders(option, entities);
//     return {
//       module: DatabaseModule,
//       providers: providers,
//       exports: providers,
//       imports: [],
//     };
//   }
// }
