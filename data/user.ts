import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.User.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (err) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.User.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (err) {
    return null;
  }
};
