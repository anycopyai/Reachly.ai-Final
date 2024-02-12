import React, { useEffect } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";

function Signup() {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const registerSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(registerSchema),
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
    } else if (errors?.password) {
      enqueueSnackbar(`${errors?.password?.message}`, { variant: "error" });
    } else if (errors?.confirmPassword) {
      enqueueSnackbar(`${errors?.confirmPassword?.message}`, {
        variant: "error",
      });
    }
  }, [errors]);
  const onSubmit = async (data) => {
    try {
      createUserWithEmailAndPassword(auth, data?.email, data?.password)
        .then((userCredential) => {
         reset();
          localStorage.setItem("accessToken", userCredential?.user?.accessToken);
          router.push("/Browse");
          enqueueSnackbar(`User registered successfully !`, {
            variant: "success",
          });
        })
        .catch((error) => {
          console.log(error);

          if (error?.code) {
            enqueueSnackbar(`${error?.code}`, { variant: "error" });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          localStorage.setItem("accessToken", token);
          router.push("/Browse");
          enqueueSnackbar(`Login successfully !`, {
            variant: "success",
          });
        })
        .catch((error) => {
          console.log(error);
          if (error?.code) {
            enqueueSnackbar(`${error?.code}`, { variant: "error" });
          }
        });
    } catch (error) {}
  };
  return (
    <>
     <div class=" dark:bg-slate-900 bg-gray-100 flex h-full py-10 ">
      <main class="w-full max-w-md mx-auto">
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
                Sign up
              </h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <Link href="/login" passHref>
                  <a class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Sign in here
                  </a>
                </Link>
              </p>
            </div>

            <div class="mt-1">
              <button
                onClick={signinWithGoogle}
                type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  class="w-4 h-auto"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>

              <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

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
                        {...register("email")}
                        type="email"
                        id="email"
                        name="email"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
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

                  <div>
                    <label
                      for="password"
                      class="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <div class="relative">
                      <input
                        {...register("password")}
                        type="password"
                        id="password"
                        name="password"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        aria-describedby="password-error"
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
                      id="password-error"
                    >
                      8+ characters required
                    </p>
                  </div>

                  <div>
                    <label
                      for="confirm-password"
                      class="block text-sm mb-2 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div class="relative">
                      <input
                        {...register("confirmPassword")}
                        type="password"
                        id="confirm-password"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        aria-describedby="confirm-password-error"
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
                      id="confirm-password-error"
                    >
                      Password does not match the password
                    </p>
                  </div>

                  <div class="flex items-center">
                    <div class="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        required
                        // class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div class="ms-3">
                      <label for="remember-me" class="text-sm dark:text-white">
                        I accept the{" "}
                        <a
                          class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign up
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

export default Signup;