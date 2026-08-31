import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await signup(form.name, form.email, form.password);

      navigate("/");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to create your merchant account."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050506] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-700/[0.08] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">

        <Link to="/" className="flex items-center gap-2.5">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-black text-black">
            R
          </div>

          <span className="text-[15px] font-semibold tracking-tight">
            Razor<span className="text-violet-400">Recover</span>
          </span>

        </Link>

        <Link
          to="/"
          className="text-xs text-zinc-500 transition hover:text-white"
        >
          ← Back to home
        </Link>

      </nav>

      {/* Main */}
      <main className="relative z-10 flex min-h-[calc(100vh-72px)] items-center justify-center px-5 py-10">

        <div className="w-full max-w-[430px]">

          {/* Heading */}
          <div className="mb-7">

            <div className="mb-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-violet-400">
              <span className="h-px w-7 bg-violet-500/60" />
              Merchant onboarding
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Start recovering.
            </h1>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              Create your merchant account and turn failed payments into
              recovered revenue.
            </p>

          </div>

          {/* Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-6 shadow-2xl shadow-black/40 sm:p-7">

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>

                <label className="mb-2 block text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  Full name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="JD Merchant"
                  autoComplete="name"
                  className="h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-500/50 focus:bg-white/[0.04]"
                />

              </div>

              {/* Email */}
              <div>

                <label className="mb-2 block text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  Business email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                  className="h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-500/50 focus:bg-white/[0.04]"
                />

              </div>

              {/* Password */}
              <div>

                <label className="mb-2 block text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Minimum 6 characters"
                    autoComplete="new-password"
                    className="h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 pr-16 text-sm text-white outline-none placeholder:text-zinc-700 transition focus:border-violet-500/50 focus:bg-white/[0.04]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 px-2 text-[9px] uppercase tracking-wider text-zinc-600 transition hover:text-zinc-300"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-500/15 bg-red-500/[0.05] px-4 py-3 text-xs text-red-400">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-2 flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-violet-500 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Creating account...
                  </>
                ) : (
                  <>
                    Create merchant account
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </button>

            </form>

            {/* Terms */}
            <p className="mt-5 text-center text-[9px] leading-5 text-zinc-700">
              By creating an account, you agree to RazorRecover's
              <br />
              terms of service and privacy policy.
            </p>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">

              <div className="h-px flex-1 bg-white/[0.06]" />

              <span className="text-[8px] uppercase tracking-wider text-zinc-700">
                Existing merchant
              </span>

              <div className="h-px flex-1 bg-white/[0.06]" />

            </div>

            {/* Login */}
            <Link
              to="/login"
              className="flex h-11 w-full items-center justify-center rounded-lg border border-white/[0.08] text-xs font-medium text-zinc-400 transition hover:border-white/[0.15] hover:bg-white/[0.03] hover:text-white"
            >
              Sign in to your account
            </Link>

          </div>

          {/* Security */}
          <div className="mt-5 flex items-center justify-center gap-2 text-[9px] text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
            Secure merchant onboarding
          </div>

        </div>

      </main>

    </div>
  );
}

export default Signup;