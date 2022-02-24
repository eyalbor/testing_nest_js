import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
@Module({
  exports: [CommonModule],
  providers: [CommonService],
})
export class CommonModule {
  //A module class can inject providers as well (e.g., for configuration purposes):
  //However, module classes themselves cannot be injected as providers due to circular dependency .
  constructor(private readonly commonService: CommonService) {}
}
