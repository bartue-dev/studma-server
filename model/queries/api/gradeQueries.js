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

  async getAllGrade(teacherId) {
    return await prisma.grade.findMany({
      where: {accountId: teacherId}
    })
  }

  async getGrade(gradeId) {
    return await prisma.grade.findUnique({
      where: { gradeId: gradeId }
    })
  }

  async updateGrade(gradeId, grade) {
    return await prisma.grade.update({
      where: {gradeId: gradeId},
      data: {grade: grade}
    })
  }

  async deleteGrade(gradeId) {
    return await prisma.grade.delete({
      where: { gradeId: gradeId}
    })
  }
}

export const gradeMethods = new Grade();