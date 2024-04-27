import { auth } from "@clerk/nextjs";

const adminIds = ["user_2fhMn8I4ykLYZy36SSFTNAwRNAN"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
