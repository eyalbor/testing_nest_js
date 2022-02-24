import { Global, Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';

// re-export modules that they import

// However, module classes themselves cannot be injected as providers due to circular dependency .

// When you want to provide a set of providers which should be available everywhere out-of-the-box (e.g., helpers, database connections, etc.),
@Global()
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
