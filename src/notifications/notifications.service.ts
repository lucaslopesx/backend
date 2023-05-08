import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  create(
    notification: Prisma.NotificationCreateInput,
    clientId: string,
    psychologistId: string,
  ) {
    const data = { ...notification };

    if (clientId) {
      data.client = {
        connect: {
          id: clientId,
        },
      };
    }

    return this.prisma.notification.create({
      data: {
        ...notification,
      },
    });
  }

  findAll() {
    return `This action returns all notifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
