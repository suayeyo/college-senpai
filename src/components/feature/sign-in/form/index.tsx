"use client";

import SignInInput from "@/components/feature/sign-in/Input";
import useSignIn from "@/hooks/sign-in/useSignIn";
import CommonButton from "@/components/common/Button";

const SignInForm = () => {
    const { username, setUsername, password, setPassword, handleSignIn, error } = useSignIn();

    return (
        <div className="flex flex-col gap-4">
            <SignInInput
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                error={error}
            />
            <CommonButton onClick={handleSignIn} className="w-full px-4 py-2 border-2 bg-blue-500 rounded-md hover:bg-blue-700">
                <p className="text-white select-none">Sign In</p>
            </CommonButton>
        </div>
    );
};

export default SignInForm;