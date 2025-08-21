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

  async updateAttendanceDate(status, attendanceDateId) {
    return await prisma.attendanceDate.update({
      where: { attendanceDateId: attendanceDateId },
      data: {
        status: status
      }
    })
  }

  async deleteAttendanceDate(attendanceDateId) {
    return await prisma.attendanceDate.delete({
      where: { attendanceDateId: attendanceDateId }
    })
  }

  async totalAbsent(studentId) {
    return await prisma.attendanceDate.count({
      where: { 
        studentId: studentId,
        status: "ABSENT"
      }
    })
  }

  async totalPresent(studentId) {
    return await prisma.attendanceDate.count({
      where: { 
        studentId: studentId,
        status: "PRESENT"
      }
    })
  }
}

export const attendanceDateMethods = new AttendanceDate()