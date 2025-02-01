import Link from "next/link";
import SignInForm from "@/components/feature/sign-in/form";

const SignInPage = () => {

    return (
        <div className="flex items-center justify-center h-full bg-gray-100">
            <div className="bg-white flex border-2 border-gray-200 gap-4 p-8 rounded-lg w-[40%] max-w-[550px]">
                <div className="flex flex-col w-full gap-2">
                    {/* 로그인 페이지 제목 */}
                    <p className="flex font-bold text-title-1 justify-center select-none">Sign In</p>
                    {/* 로그인 폼 */}
                    <SignInForm/>
                    {/* 아이디가 없을 경우 sign-up 페이지로 안내 */}
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <p className="font-medium text-label-medium select-none">Does not have an account?</p>
                        <Link href="/admin/sign-up">
                            <p className="font-medium text-medium text-blue-300 underline">Sign up</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;