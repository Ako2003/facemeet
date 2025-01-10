"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Video } from "lucide-react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function JoinRoom() {
    const router = useRouter();
    const [token, setToken] = useState();
    const {register, handleSubmit, formState: { errors },} = useForm();

    const handleCreateRoom = (info: any) => {
        (async () => {
            try {
                const resp = await fetch(`/api/token?room=${info.room_id}&username=${info.username}`);
                const data = await resp.json();
                // setToken(data.token);
                router.push(`/room/${data.token}`);
            } catch (e) {
                console.error(e);
            }
        })();
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
            <Card className="max-w-md w-full p-8 bg-white/10 backdrop-blur-lg border-white/20">
                <div className="flex flex-col items-center space-y-6">
                    <div className="rounded-full bg-primary/10 p-4">
                        <Video className="w-12 h-12 text-primary" />
                    </div>
                    <h1 className="text-2xl font-bold text-white">Join a Room</h1>
                    <form onSubmit={handleSubmit(handleCreateRoom)} className="w-full space-y-4">
                        <Input
                            type="text"
                            {...register("username", { required: true })}
                            placeholder="Enter Username"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        />
                        {errors.username?.type === "required" && (
                            <p className="mt-1 text-[#FF2400] text-left text-sm font-roboto">
                                Username is required
                            </p>
                        )}
                        <Input
                            type="text"
                            placeholder="Enter Room ID"
                            {...register("room_id", { required: true })}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                        />
                        {errors.room_id?.type === "required" && (
                            <p className="mt-1 text-[#FF2400] text-left text-sm font-roboto">
                                Room Id is required
                            </p>
                        )}
                        <Button type="submit" className="w-full">
                            Join Room
                        </Button>
                    </form>
                </div>
            </Card>
        </main>
    );
}