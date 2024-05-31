import  { useState } from "react";
import styles from "./Signin.module.scss";
import { SigninProps } from "./Signin.types.ts";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginHandler } from "../../auth/signin.ts";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SigninProps>();
  const [generalError, setGeneralError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SigninProps> = async (data: any) => {
    try {
      const response = await LoginHandler(data);
      console.log("Login successful:", response.data.data);
      localStorage.setItem("token", response?.data?.data.token);
      setGeneralError(null);
      navigate(`/${response.data.data.roleName}`);
    } catch (error: any) {
      console.error("Login failed:", error);

      if (error.response?.data?.message === "Invalid email") {
        setError("email", {
          type: "manual",
          message: "Invalid email address",
        });
      } else if (error.response?.data?.message === "Incorrect password") {
        setError("password", {
          type: "manual",
          message: "Incorrect password",
        });
      } else {
        setGeneralError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className={styles.Signin}>
      <h2>Sign-In</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            <input
              type="text"
              placeholder="Enter email:"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </p>
          <p>
            <input
              type="password"
              placeholder="Enter password:"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </p>
          <button type="submit">Sign-In</button>
        </form>
        {generalError && <p className="error-message">{generalError}</p>}
      </div>
    </div>
  );
};

export default Signin;

//// without using react-hook-form

// import styles from "./Signin.module.scss";
// import { SigninProps } from "./Signin.types.ts";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { login } from "../../auth/signin.ts";

// const Signin = ({}: SigninProps) => {
//   const [email, setemail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     try {
//       const response = await login({ password, email });

//       console.log("Login successful:", response.data.data.accessToken);
//       localStorage.setItem("token", response.data.data.accessToken);
//       //   alert("login successful!");
//     } catch (error: any) {
//       setErrorMessage(error.response?.data?.message || "Login failed");
//       //   alert("login fail. Try Again!");
//     }
//   };

//   return (
//     <div className={styles.Signin}>
//       <h2>Sign-In</h2>
//       <div>
//         <form action="" onSubmit={handleSubmit}>
//           <p>
//             <input
//               type="text"
//               placeholder="Enter email:"
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//             />
//           </p>
//           <p>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter password:"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </p>

//           <button>Sign-In</button>
//         </form>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//       </div>
//     </div>
//   );
// };

// export default Signin;
