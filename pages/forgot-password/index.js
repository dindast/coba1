import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <>
      <Head>
          <title>LingoParents - Forgot Password</title>
          <meta name="keywords" content="forgot-password" />
        </Head>
          <header className="flex flex-row justify-left">
          <Image
                  src="/navbar.svg"
                  alt="navbar"
                  width={354}
                  height={84}
                ></Image>
          </header>
      <main className="flex flex-col justify-center text-center h-screen p-8">
        <h1 className="text-center text-4xl font-semibold text-secondary-blue">
        Forgot your password?
        </h1>
        <div className="p-5 sm:mb-20">
                <form onSubmit>
                  <p className="m-6 text-center text-sm font-medium text-grey-darker">
                  Enter your email and we will send you instructions to reset your password.
                  </p>
                  <div className="relative gap-4 mb-4 text-primary-orange">
                  <span class="z-10 h-full leading-snug font-normal absolute text-base w-8 pl-2 py-2 ">
                  <Image
                  src="/eva_email-outline.svg"
                  alt="email"
                  width={24}
                  height={24}
                ></Image>
                </span>
                    <input
                      className="w-2/3 h-[40px] pl-12 mb-4 text-base placeholder-primary-orange border-b-2 border-primary-orange text-primary-orange placeholder-w-8 placeholder-opacity-60 font-semibold"
                      type="email"
                      placeholder="Email"
                      required
                      // value={this.state.email}
                      // onChange={(event) => this.handleChange(event, "email")}
                    />
                  </div>
                  <button className="w-2/3 h-[40px] mt-2 font-semibold text-sm rounded-md bg-primary-orange-lightest1 bg-opacity-60 text-white">
                    Continue
                  </button>
                  {/* {this.state.success !== null && ( */}
                    {/* <p className="mt-4 text-[green] w-72">
                      {this.state.success}
                    </p> */}
                  {/* )}
                  {this.state.error !== null && (
                    <p className="mt-4 text-[red] w-72">{this.state.error}</p>
                  )} */}
                </form>
                <p className="w-2/3 my-10 m-auto text-black text-sm font-medium text-right">
                  Back to{" "}
                  <span className="text-black text-sm font-medium">
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </span>
                </p>
              </div>
      </main>
    </>
  );
}