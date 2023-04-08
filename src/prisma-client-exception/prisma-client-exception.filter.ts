import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');
    const CONFLICT = HttpStatus.CONFLICT;
    const NOT_FOUND = HttpStatus.NOT_FOUND;
    const BAD_REQUEST = HttpStatus.BAD_REQUEST;
    const FORBIDDEN = HttpStatus.FORBIDDEN;

    switch (exception.code) {
      case 'P2002':
        getResponse(CONFLICT, message); //Devemos trocar tudo pra essa função ou não tem necessidade?
        break;
      case 'P2003':
        response.status(NOT_FOUND).json({
          statusCode: NOT_FOUND,
          message: message,
        });
        break;

      case 'P2004':
        response.status(BAD_REQUEST).json({
          statusCode: BAD_REQUEST,
          message: message,
        });
        break;
      case 'P2005':
        response.status(FORBIDDEN).json({
          statusCode: FORBIDDEN,
          message: message,
        });
        break;
      case 'P2025':
        response.status(NOT_FOUND).json({
          statusCode: NOT_FOUND,
          message: message,
        });
        break;
      default:
        super.catch(exception, host);
        break;
    }

    function getResponse(status: HttpStatus, message: string) {
      return response.status(status).json({
        statusCode: status,
        message: message,
      });
    }
  }
}
