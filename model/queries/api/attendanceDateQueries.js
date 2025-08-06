import { prisma } from "../../prismaClient/prismaErrorHandler.js"

class AttendanceDate {
  async createAttendaceDate(date, status, studentId, teacherId) {
    return await prisma.attendanceDate.create({
      data: {
        date: date,
        status: status,
        studentId: studentId,
        accountId: teacherId
      }
    })
  }

  async getAllAttendanceDate(teacherId) {
    return await prisma.attendanceDate.findMany({
      where: { accountId: teacherId }
    })
  }
}

export const attendanceDateMethods = new AttendanceDate()