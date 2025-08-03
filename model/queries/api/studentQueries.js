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
}


export const studentMethods = new Student();
