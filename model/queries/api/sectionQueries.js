import { prisma } from "../../prismaClient/prismaErrorHandler.js"

class Section {
  async createSection(section, studentId, teacherId) {
    return await prisma.section.create({
      data: {
        section: section,
        studentId: studentId,
        accountId: teacherId
    }})
  }

  async getAllSection(teacherId) {
    return await prisma.section.findMany({
      where: { accountId: teacherId }
    })
  }
}

export const sectionMethods = new Section();