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
      where: { accountId: teacherId },
      include: {
        student: true
      }
    })
  }

  async getAttendanceDate(attendanceDateId) {
    return await prisma.attendanceDate.findUnique({
      where: { attendanceDateId: attendanceDateId },
      include: { student: true }
    })
  }

  async updateAttendanceDate(date, status, attendanceDateId) {
    return await prisma.attendanceDate.update({
      where: { attendanceDateId: attendanceDateId },
      data: {
        date: date,
        status: status
      }
    })
  }

  async deleteAttendanceDate(attendanceDateId) {
    return await prisma.attendanceDate.delete({
      where: { attendanceDateId: attendanceDateId }
    })
  }
}

export const attendanceDateMethods = new AttendanceDate()