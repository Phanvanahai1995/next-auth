import React from "react";
import { auth, signOut } from "@/auth";

export default async function SettingPage() {
  const session = await auth();

  return (
    <div className="text-center py-4">
      <h2>Hello: {session?.user?.name}</h2>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className="border px-4 py-2 rounded-none bg-indigo-500 text-white"
          type="submit"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
