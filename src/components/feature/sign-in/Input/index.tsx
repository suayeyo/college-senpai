import CommonInput from "@/components/common/Input";
import {SignInProps} from "@/types";

const SignInInput = (
    { username, setUsername, password, setPassword, error }: SignInProps
) => {
    const signInInputClassName = `p-1 border-2 rounded-md placeholder:text-gray-300 placeholder:text-medium min-w-12 w-full ${error ? "border-red-500" : "border-gray-300"}`;

    return (
        <>
            <CommonInput
                label="Username"
                inputType="text"
                className={signInInputClassName}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={error}
            />
            <CommonInput
                label="Password"
                inputType="password"
                className={signInInputClassName}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error}
            />
        </>
    );
};

export default SignInInput;