import React, { useEffect } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";

function ForgotPassword() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  });

  const defaultValues = {
    email: "",
  };

  const methods = useForm({
    resolver: yupResolver(ForgotSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  useEffect(() => {
    if (errors?.email) {
      enqueueSnackbar(`${errors?.email?.message}`, { variant: "error" });
    }
  }, [errors]);
  const onSubmit = async (data) => {
    await sendPasswordResetEmail(auth, data?.email)
      .then(() => {
        reset()
        router.push('/login')
        enqueueSnackbar(`Password reset email sent!`, { variant: "success" });
      })
      .catch((error) => {
        if (error?.code) {
          enqueueSnackbar(`${error?.code}`, { variant: "error" });
        }
      });
  };

  return (
    <>
     <div class=" dark:bg-slate-900 bg-gray-100 flex h-full py-10 ">
      <main class="w-full max-w-md mx-auto p-6">
      <div class="text-center">
            <img
              src="../images/logo.png"
              style={{ maxHeight: 70, maxWidth: 70 }}
              class="mx-auto"
              alt="Logo"
            ></img>
          </div>
        <div class="mt-2 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <Link  href="/login" passHref>  
                <a
                  class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                 
                >
                  Sign in here
                </a>
                </Link>
              </p>
            </div>

            <div class="mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="grid gap-y-4">
                  <div>
                    <label
                      for="email"
                      class="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        {...register("email")}
                        aria-describedby="email-error"
                      />
                      <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          class="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      class="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>

                  <button
                    type="submit"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}

export default ForgotPassword;
