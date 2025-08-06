import { prisma } from "../../prismaClient/prismaErrorHandler.js"

class Batch {
  async createBatch(year, studentId, teacherId) {
    return await prisma.batch.create({
      data: {
        year: year,
        studentId: studentId,
        accountId: teacherId
      }
    })
  }

  async getAllBatch(teacherId) {
    return await prisma.batch.findMany({
      where: { accountId: teacherId }
    })
  }

  async getBatch(batchId) {
    return await prisma.batch.findUnique({
      where: { batchId: batchId }
    })
  }

  async updateBatch(year, batchId) {
    return await prisma.batch.update({
      where: { batchId: batchId },
      data: { year: year }
    })
  }

  async deleteBatch(batchId) {
    return await prisma.batch.delete({
      where: { batchId: batchId }
    })
  }
}

export const batchMethods = new Batch();