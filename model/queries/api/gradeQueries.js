import { prisma } from "../../prismaClient/prismaErrorHandler.js"

class Grade {
  async createGrade(grade, studentId, teacherId) {
    return await prisma.grade.create({
      data: {
        grade: grade,
        studentId: studentId,
        accountId: teacherId
      }
    });
  }
}

export const gradeMethods = new Grade();