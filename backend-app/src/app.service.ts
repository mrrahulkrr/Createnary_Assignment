import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// @Injectable()
// export class EarningsService {
//   calculateEarnings(
//     calculationParams: CalculationParamsDto,
//   ): EarningsResponseDto {
//     // Perform calculation logic here and return the results
//   }
// }
