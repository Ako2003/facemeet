"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JoinRoom() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomId.trim()) {
      router.push(`/room/${roomId}`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 bg-white/10 backdrop-blur-lg border-white/20">
        <div className="flex flex-col items-center space-y-6">
          <div className="rounded-full bg-primary/10 p-4">
            <Video className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-white">Join a Room</h1>
          <form onSubmit={handleJoin} className="w-full space-y-4">
            <Input
              type="text"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
            />
            <Button type="submit" className="w-full">
              Join Room
            </Button>
          </form>
        </div>
      </Card>
    </main>
  );
}