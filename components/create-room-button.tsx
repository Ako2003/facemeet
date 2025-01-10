"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

export default function CreateRoomButton() {
  const router = useRouter();

  const createRoom = () => {
    const roomId = nanoid(10);
    router.push(`/room/${roomId}`);
  };

  return (
    <Button onClick={createRoom} className="w-full">
      Create New Room
    </Button>
  );
}