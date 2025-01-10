import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video } from "lucide-react";
import Link from "next/link";
import CreateRoomButton from "@/components/create-room-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 bg-white/10 backdrop-blur-lg border-white/20">
        <div className="flex flex-col items-center space-y-6">
          <div className="rounded-full bg-primary/10 p-4">
            <Video className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white text-center">Welcome to Video Chat</h1>
          <p className="text-slate-300 text-center">
            Connect with anyone, anywhere through high-quality video calls
          </p>
          <div className="flex flex-col w-full space-y-4">
            <CreateRoomButton />
            <Button variant="outline" className="w-full" asChild>
              <Link href="/join">Join Existing Room</Link>
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}