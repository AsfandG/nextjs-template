"use client";
import React from "react";
import "./form.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

type FormFields = z.infer<typeof schema>;
// type FormFields = {
//   email: string;
//   password: string;
// };

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      console.log(data.password);
      throw new Error("Email already taken!");
    } catch (error) {
      setError("root", {
        message: "Email already taken",
      });
    }
  };
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email")}
          //   {...register("email", {
          //     required: "*Email is Required",
          //     pattern: {
          //       value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          //       message: "Email input is not valid.",
          //     },
          //     // validate: (value) => value.includes("@"),
          //   })}
          placeholder="Email"
        />
        {errors.email && (
          <div style={{ color: "red" }}>{errors.email.message}</div>
        )}
        <input
          type="password"
          {...register("password")}
          //   {...register("password", {
          //     required: "*password is required",
          //     minLength: {
          //       value: 5,
          //       message: "*passowrd must atleast have 5 characters",
          //     },
          //   })}
          placeholder="Password"
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password.message}</div>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading...." : "Submit"}
        </button>

        {errors.root && (
          <div style={{ color: "red" }}>{errors.root.message}</div>
        )}
      </form>
    </div>
  );
};

export default ReactHookForm;
