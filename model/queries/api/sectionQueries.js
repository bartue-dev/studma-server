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
}

export const sectionMethods = new Section();