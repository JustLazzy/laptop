import { FormEvent, useState } from "react";
const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (password === "") {
      setError("Le mot de passe est requises.");
      setSuccess("");
    }
    if (password === "password") {
      setError("");
      setSuccess("Bienvenue sur Windows 11.");
      localStorage.setItem("isLogged", "true");
      localStorage.setItem("password", password);
      return (window.location.pathname = "/home");
    }
    if (password !== "password") {
      setError("Mot de passe incorrect.");
      setSuccess("");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-between backdrop-blur-lg">
        <main className="flex flex-col justify-center min-h-screen items-center w-full h-full">
          <div className="slide-in-top">
            <div className="space-y-2">
              <div className="flex justify-center items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/38817327?v=4"
                  className="w-48 h-48 rounded-full"
                  alt="me"
                />
              </div>
              <form method="POST" onSubmit={handleSubmit}>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-80 h-12 px-4 py-4 rounded-lg bg-neutral-900/70 text-gray-100 placeholder-gray-100 border-b-[3px] border-r-2 border-r-neutral-800 border-l-2 border-l-neutral-800 border-t-2 border-t-neutral-800 ${
                    error ? "border-b-red-700" : "border-b-orange-700"
                  } ${
                    success ? "border-b-green-700" : "border-b-orange-700"
                  } focus:outline-none focus:shadow-outline`}
                  placeholder="Mot de passe"
                  autoComplete="off"
                />
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                {success && (
                  <p className="text-green-600 text-sm mt-2">{success}</p>
                )}
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Login;
