import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {}

// @Controller('earnings')
// export class EarningsController {
//   constructor(private readonly earningsService: EarningsService) {}

//   @Post('calculate')
//   calculateEarnings(
//     @Body() calculationParams: CalculationParamsDto,
//   ): EarningsResponseDto {
//     return this.earningsService.calculateEarnings(calculationParams);
//   }
// }

