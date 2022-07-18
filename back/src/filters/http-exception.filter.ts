import { Catch } from '@nestjs/common';
import { ExceptionFilter } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();

    const response = http.getResponse<Response>();

    response.status(400).json({
      message: 'Caminho da API não foi encontrado',
      statusCode: exception.getStatus(),
      data: exception.getResponse(),
    });
  }
}
