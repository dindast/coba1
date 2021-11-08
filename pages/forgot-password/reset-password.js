import { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
    return (
      <>
        <Head>
          <title>LingoParents - Reset Password</title>
          <meta name="keywords" content="reset-password" />
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
              Create New Password
            </h1>
              <div className="p-[20px] sm:mb-[80px]">
                {/* <form onSubmit={this.handleSubmit}> */}
                  <div className="relative gap-4 mb-[15px] text-primary-orange">
                    <span class="z-10 h-full leading-snug font-normal absolute text-base w-8 pl-2 py-2 ">
                     <Image
                      src="/bx_bxs-lock-alt.svg"
                      alt="lock"
                      width={24}
                      height={24}
                     ></Image>
                    </span>
                    <input
                      className="w-2/3 h-[40px] pl-12 text-base placeholder-primary-orange border-b-2 border-primary-orange text-primary-orange placeholder-w-8 placeholder-opacity-60 font-semibold"
                      type="password"
                      placeholder="New Password"
                      required
                      // value={this.state.password}
                      // onChange={(event) => this.handleChange(event, "password")}
                    />
                  </div>
                  <div className="relative gap-4 mb-[15px] text-primary-orange">
                    <span class="z-10 h-full leading-snug font-normal absolute text-base w-8 pl-2 py-2">
                     <Image
                      src="/bx_bxs-lock-alt.svg"
                      alt="lock"
                      width={24}
                      height={24}
                     ></Image>
                    </span>
                    <input
                      className="w-2/3 h-[40px] pl-12 text-base placeholder-primary-orange border-b-2 border-primary-orange text-primary-orange placeholder-w-8 placeholder-opacity-60 font-semibold"
                      type="show?'password':'text'"
                      placeholder="Confirm New Password"
                      required
                      // value={this.state.confirmPassword}
                      // onChange={(event) =>
                      //   this.handleChange(event, "confirmPassword")
                      // }
                      // onKeyUp={this.checkConfirmPassword}
                    />
                    <button class="absolute inset-y-0 right-0 flex items-center pr-3 leading-5 h-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z" stroke="#F9663A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#F9663A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                {/* <img
                  className="h-[40px] object-right"
                  src="/akar-icons_eye.svg"
                  alt="Visibility Icon"
                  width={24}
                  height={24}
                /> */}
              </button>
                  </div>
                  
                  {/* {this.state.isSame && ( */}
                    <button className="w-2/3 h-[40px] mt-2 font-semibold text-sm rounded-md bg-primary-orange-lightest1 bg-opacity-60 text-white">
                      Continue
                    </button>
                  {/* )} */}
                  {/* {!this.state.isSame && ( */}
                    {/* <button className="w-full h-[40px] mt-2 rounded-md shadow-md bg-primary-green text-primary-blue cursor-not-allowed">
                      Reset Password
                    </button> */}
                  {/* )}
                  {this.state.success !== null && ( */}
                    <p className="mt-4 text-[green] w-72">
                      {/* {this.state.success} */}
                    </p>
                  {/* )}
                  {this.state.error !== null && ( */}
                    {/* <p className="mt-4 text-[red] w-72">{this.state.error}</p> */}
                  {/* )} */}
                {/* </form> */}
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