// The @Injectable() decorator attaches metadata, which declares that CatsService is a class that can be managed by the Nest IoC container"
// Nest IoC container =
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(name: string): Cat {
    return this.cats.find((cat) => cat.name === name);
  }
}
