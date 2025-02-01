"use client"
import { useState } from "react";
import {useRouter} from "next/navigation";

export default function useSignIn() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = async () => {
        setError("");
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/sign-in`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Sign in success!");
                router.push("/admin");
                localStorage.setItem("user", JSON.stringify({ username }));
            } else {
                setError(data?.message || "Invalid username or password!");
                throw new Error(data?.message || "Sign in failed!");
            }

        } catch (error) {
            setError("Network error. Please try again later!");
            console.log(error);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        handleSignIn,
        error,
    };
}