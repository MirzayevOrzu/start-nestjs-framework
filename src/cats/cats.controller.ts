import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, SetMetadata, UseGuards, UsePipes } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto';
import { CatsService } from './cats.service';
import { ValidationPipe } from 'src/common/validation/validation.pipe';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { Roles } from 'src/common/decorator';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    @Roles('admin')
    async create(
        @Body(new ValidationPipe()) createCatDto: CreateCatDto
    ) {
        this.catsService.create(createCatDto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return `This action return a #${id} cat`;
    }

    @Get()
    async findAll() {
        return this.catsService.findAll();
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return `This action deletes a #${id} cat`;
    }
}