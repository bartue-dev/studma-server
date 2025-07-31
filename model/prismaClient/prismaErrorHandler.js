import { PrismaClient } from "@prisma/client";
import CustomErr from "../../helper/customErr.js";

export const prisma = new PrismaClient();

export const handlePrismaError = (err) => {

  switch (err.code){
    case "P2001": 
      // record not found
       return new CustomErr(`P2001: ${err.meta.cause}`, 404);

    case "P2002": 
      // handling duplicate err
       return new CustomErr(`P2002: ${err.meta.target} already exist`, 400);

    case "P2003":
      // handling foreign key constraint
      return new CustomErr(`P2003: Data doesn't exist in the database: ${err.meta.field_name}`, 400)

    case "P2025":
      // Operation failed due to records were not found
       return new CustomErr(`P2025: ${err.meta.cause}`, 404);

    default: 
      // handling other err
      return new CustomErr(`Something went wrong default prisma error: ${err.message}`, 500);

  }
}