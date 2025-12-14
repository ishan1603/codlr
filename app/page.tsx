import Image from "next/image";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";

export default async function Home() {
  return (
    <div>
      <Button />
      <UserButton />
    </div>
  );
}
