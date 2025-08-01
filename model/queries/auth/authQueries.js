import { prisma } from "../../prismaClient/prismaErrorHandler.js"

class Account {
  async registerAccount(firstname, lastname, username, password) {
    return await prisma.account.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        teacher: {
          create: {
            firstname: firstname,
            lastname: lastname,
            username: username
          }
        }
      },
      include: {
        teacher:true
      }
    })
  }
}

export const accountMethods = new Account();