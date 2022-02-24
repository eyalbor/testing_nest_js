import {
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Header,
  HttpStatus,
  Redirect,
  Query,
  Param,
  Body,
  ForbiddenException,
  UseFilters,
  ParseIntPipe,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../common/exceptions/http-exception.filter';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/metadata/user-types.decorator';

@ApiTags('cats')
@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catService: CatsService) {}

  @Header('Cache-Control', 'no-cache')
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto);
  }

  @Delete('delete/:id')
  @Roles('admin')
  async delete(@Param('id') id: string) {
    return this.catService.delete(id);
  }

  @Get()
  async findAll(@Req() request: Request): Promise<any[]> {
    return this.catService.findAll();
  }

  @Get('cat_*')
  findCat(): string {
    return 'This action returns a specific cat';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com/', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Param() params) {
    console.log(params.id);
    throw new ForbiddenException();
    //  Prefer applying filters by using classes instead of instances when possible. It reduces memory usage since Nest can easily reuse instances of the same class across your entire module.
  }

  @Get('exp')
  async throwException() {
    throw new ForbiddenException();
  }

  @Get('pipe/:name')
  async usePipe(@Param('name', ParseIntPipe) name: string) {
    return this.catService.findOne(name);
  }
}
