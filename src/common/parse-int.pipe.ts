import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class MineParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const int = parseInt(value, 10);
    if (isNaN(int)) {
      throw new BadRequestException(`${value} is not an number`);
    }
    return int;
  }
}
