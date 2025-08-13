import { prisma } from "../../prismaClient/prismaErrorHandler.js";

class Student {
  async createStudent(firstname, lastname, quarter, teacherId) {
    return await prisma.student.create({
      data: { 
        firstname: firstname,
        lastname: lastname,
        quarter: quarter,
        accountId: teacherId
      }
    });
  }

  async getStudent(studentId) {
    return await prisma.student.findUnique({
      where: { studentId: studentId },
      include: {
        grade: { select: { grade: true }},
        section: { select: { section: true }},
        batch: { select : { year: true }},
        attendanceDate: { select: { attendanceDateId: true ,date: true, status: true }},
      }
    });
  }

  async getAllStudent(teacherId) {
    return await prisma.student.findMany({
      where: { accountId: teacherId },
      include: {
        grade: { select: { grade: true }},
        section: { select: { section: true }},
        batch: { select : { year: true }},
        attendanceDate: { select: {attendanceDateId: true, date: true, status: true }},
      }
    });
  }

  async updateStudent(studentId, firstname, quarter, lastname) {
    return await prisma.student.update({
      where: { studentId: studentId },
      data: { firstname: firstname, lastname: lastname, quarter: quarter}
    });
  }

  async deleteStudent(studentId) {
    return await prisma.student.delete({
      where: { studentId: studentId}
    })
  }
}


export const studentMethods = new Student();
