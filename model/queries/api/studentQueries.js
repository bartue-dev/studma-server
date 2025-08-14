import { prisma } from "../../prismaClient/prismaErrorHandler.js";

class Student {
  async createStudent(firstname, lastname, grade, section, quarter, batch, teacherId) {
    return await prisma.student.create({
      data: { 
        firstname: firstname,
        lastname: lastname,
        grade: grade,
        section: section,
        quarter: quarter,
        batch: batch,
        accountId: teacherId
      }
    });
  }

  async getStudent(studentId) {
    return await prisma.student.findUnique({
      where: { studentId: studentId },
      include: {
        attendanceDate: { select: { attendanceDateId: true ,date: true, status: true }},
      }
    });
  }

  async getAllStudent(teacherId) {
    return await prisma.student.findMany({
      where: { accountId: teacherId },
      include: {
        attendanceDate: { select: {attendanceDateId: true, date: true, status: true }},
      }
    });
  }

  async updateStudent(studentId, firstname, lastname, grade, section, quarter, batch, teacherId) {
    return await prisma.student.update({
      where: { studentId: studentId },
      data: {
        firstname: firstname,
        lastname: lastname,
        grade: grade,
        section: section,
        quarter: quarter,
        batch: batch,
        accountId: teacherId
      }
    });
  }

  async deleteStudent(studentId) {
    return await prisma.student.delete({
      where: { studentId: studentId}
    })
  }
}


export const studentMethods = new Student();
