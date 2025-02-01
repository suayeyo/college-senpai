import React from "react";

export interface InputProps {
    label: string;
    placeholder: string;
    className?: string;
    inputType: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export interface UserProps {
    username: string;
    password: string;
}

export interface SignInProps extends UserProps {
    setUsername: (value: string) => void;
    setPassword: (value: string) => void;
    handleSignIn?: () => void;
    error?: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className: string;
}