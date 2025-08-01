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

  async currentAccountByUsername(username) {
    return await prisma.account.findUnique({
      where: {
        username: username
      }
    });
  }
}

class RefreshToken {
  async saveRefreshToken(accountId, token) {
    return await prisma.refreshToken.create({
      data: {
        accountId: accountId,
        refreshToken: token,
      }
    });
  }

 async currentAccountByToken(refreshToken) {
  return await prisma.refreshToken.findFirst({
    where: { refreshToken: refreshToken}
  })
 }
}

export const accountMethods = new Account();
export const refreshTokenMethods = new RefreshToken();