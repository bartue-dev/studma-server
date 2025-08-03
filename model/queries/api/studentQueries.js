import { prisma } from "../../prismaClient/prismaErrorHandler.js";

class Student {
  async createStudent(firstname, lastname, teacherId) {
    return await prisma.student.create({
      data: { 
        firstname: firstname,
        lastname: lastname,
        accountId: teacherId
      }
    })
  }

  async getStudent(studentId) {
    return await prisma.student.findUnique({
      where: { studentId: studentId }
    })
  }

  async getAllStudent(teacherId) {
    return await prisma.student.findMany({
      where: { accountId: teacherId }
    })
  }
}


export const studentMethods = new Student();
