import { Link } from "react-router-dom";

const recoveryEvents = [
  {
    time: "09:42:18",
    status: "PAYMENT FAILED",
    amount: "₹12,400",
    reason: "insufficient_funds",
    action: "SMART RETRY",
    recovered: true,
  },
  {
    time: "09:41:52",
    status: "PAYMENT FAILED",
    amount: "₹4,800",
    reason: "expired_card",
    action: "EMAIL + RETRY",
    recovered: true,
  },
  {
    time: "09:40:27",
    status: "PAYMENT FAILED",
    amount: "₹8,250",
    reason: "bank_declined",
    action: "ALTERNATE ROUTE",
    recovered: true,
  },
];

function Landing() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050506] text-white selection:bg-violet-500/30">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-350px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/[0.08] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="relative z-20 border-b border-white/[0.06]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">

          <Link
            to="/"
            className="flex items-center gap-2.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-black text-black">
              R
            </div>

            <span className="text-[15px] font-semibold tracking-tight">
              Razor<span className="text-violet-400">Recover</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-xs text-zinc-500 md:flex">
            <a
              href="#recovery"
              className="transition hover:text-white"
            >
              Recovery Engine
            </a>

            <a
              href="#intelligence"
              className="transition hover:text-white"
            >
              Intelligence
            </a>

            <a
              href="#how"
              className="transition hover:text-white"
            >
              How it works
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden px-3 py-2 text-xs text-zinc-400 transition hover:text-white sm:block"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main className="relative z-10">

        <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:pt-36">

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr]">

            {/* LEFT */}

            <div>

              <div className="mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-violet-400">
                <span className="h-px w-8 bg-violet-500/60" />
                Payment recovery intelligence
              </div>

              <h1 className="max-w-3xl text-[58px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">
                Your revenue
                <br />
                is{" "}
                <span className="text-zinc-600">
                  leaking.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
                RazorRecover finds failed payments, understands why they
                failed, and lets an AI recovery engine decide what to do next.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/signup"
                  className="group flex items-center justify-center gap-3 rounded-lg bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  Enter Recovery Engine

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-lg border border-white/10 px-6 py-3.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.04]"
                >
                  Merchant login
                </Link>

              </div>

              <div className="mt-8 flex items-center gap-5 text-[10px] uppercase tracking-wider text-zinc-700">
                <span>Built for merchants</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span>Real-time recovery</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span>AI assisted</span>
              </div>

            </div>

            {/* RIGHT — RECOVERY PIPELINE */}

            <div className="relative">

              <div className="absolute -inset-10 rounded-full bg-violet-600/[0.06] blur-3xl" />

              <div className="relative rounded-2xl border border-white/[0.08] bg-[#0a0a0d] p-4 shadow-2xl shadow-black/60 sm:p-5">

                {/* Window header */}

                <div className="mb-5 flex items-center justify-between border-b border-white/[0.06] pb-4">

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      Recovery engine
                    </span>
                  </div>

                  <span className="text-[9px] text-zinc-700">
                    LIVE
                  </span>

                </div>

                {/* Flow */}

                <div className="space-y-3">

                  <div className="rounded-xl border border-red-500/10 bg-red-500/[0.025] p-4">

                    <div className="flex items-start justify-between">

                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-red-400/70">
                          Payment failed
                        </p>

                        <p className="mt-2 text-xl font-semibold tracking-tight">
                          ₹12,400
                        </p>
                      </div>

                      <span className="rounded-md bg-red-500/10 px-2 py-1 text-[8px] text-red-400">
                        DECLINED
                      </span>

                    </div>

                    <div className="mt-3 font-mono text-[9px] text-zinc-700">
                      reason: insufficient_funds
                    </div>

                  </div>

                  {/* Connector */}

                  <div className="flex justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400">
                      ↓
                    </div>
                  </div>

                  <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.05] p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                        ✦
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-violet-400">
                          AI decision
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          Retry when funds are available
                        </p>
                      </div>

                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.05] pt-3">

                      <span className="font-mono text-[8px] text-zinc-600">
                        confidence: 94.8%
                      </span>

                      <span className="text-[8px] text-violet-400">
                        SMART RETRY
                      </span>

                    </div>

                  </div>

                  {/* Connector */}

                  <div className="flex justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      ↓
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/[0.025] p-4">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-emerald-400/70">
                          Payment recovered
                        </p>

                        <p className="mt-2 text-xl font-semibold tracking-tight">
                          ₹12,400
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                        ✓
                      </div>

                    </div>

                    <div className="mt-3 text-[9px] text-zinc-600">
                      Revenue returned to merchant
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            RECOVERY STREAM
        ===================================================== */}

        <section
          id="recovery"
          className="border-y border-white/[0.06] bg-[#08080b]"
        >

          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">

            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                  Live recovery stream
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Every failure gets a second chance.
                </h2>
              </div>

              <div className="flex items-center gap-2 text-[9px] text-zinc-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                ENGINE ACTIVE
              </div>

            </div>

            <div className="overflow-hidden rounded-xl border border-white/[0.07]">

              {/* Table header */}

              <div className="hidden grid-cols-[100px_1.1fr_100px_1fr_110px] border-b border-white/[0.06] px-5 py-3 text-[8px] uppercase tracking-wider text-zinc-700 sm:grid">
                <span>Time</span>
                <span>Event</span>
                <span>Amount</span>
                <span>AI action</span>
                <span>Result</span>
              </div>

              {recoveryEvents.map((event) => (
                <div
                  key={event.time}
                  className="grid gap-3 border-b border-white/[0.05] px-5 py-5 last:border-0 sm:grid-cols-[100px_1.1fr_100px_1fr_110px] sm:items-center sm:gap-0"
                >

                  <span className="font-mono text-[9px] text-zinc-700">
                    {event.time}
                  </span>

                  <div>
                    <p className="text-[10px] font-medium text-red-400">
                      {event.status}
                    </p>

                    <p className="mt-1 font-mono text-[9px] text-zinc-700">
                      {event.reason}
                    </p>
                  </div>

                  <span className="text-sm font-medium">
                    {event.amount}
                  </span>

                  <span className="text-[9px] text-violet-400">
                    {event.action}
                  </span>

                  <span className="flex items-center gap-2 text-[9px] text-emerald-400">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10">
                      ✓
                    </span>
                    RECOVERED
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            INTELLIGENCE
        ===================================================== */}

        <section
          id="intelligence"
          className="mx-auto max-w-7xl px-5 py-28 sm:px-8"
        >

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                The intelligence layer
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Recovery shouldn't be
                <span className="text-zinc-600"> guesswork.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500">
                Every failed payment tells a story. RazorRecover turns those
                signals into an action — automatically.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-6">
                <span className="text-xs text-violet-400">01</span>

                <h3 className="mt-12 text-lg font-medium">
                  Detect
                </h3>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  Identify payment failures and understand the underlying
                  failure reason in real time.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-6">
                <span className="text-xs text-violet-400">02</span>

                <h3 className="mt-12 text-lg font-medium">
                  Decide
                </h3>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  AI evaluates the context and chooses the recovery strategy
                  with the highest probability of success.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-6">
                <span className="text-xs text-violet-400">03</span>

                <h3 className="mt-12 text-lg font-medium">
                  Recover
                </h3>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  Trigger retries, communication, or alternative recovery
                  actions without manual intervention.
                </p>
              </div>

              <div className="rounded-xl border border-violet-500/15 bg-violet-500/[0.025] p-6">
                <span className="text-xs text-violet-400">04</span>

                <h3 className="mt-12 text-lg font-medium">
                  Learn
                </h3>

                <p className="mt-3 text-xs leading-6 text-zinc-600">
                  Recovery outcomes continuously improve the intelligence
                  behind future decisions.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          id="how"
          className="mx-auto max-w-7xl px-5 pb-28 sm:px-8"
        >

          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0e] px-6 py-20 text-center sm:px-10">

            <div className="absolute left-1/2 top-[-180px] h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

            <div className="relative">

              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                Stop leaking revenue
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Give every failed payment
                <span className="text-zinc-600">
                  {" "}another chance.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-zinc-500">
                Build your merchant account and start turning payment
                failures into recovered revenue.
              </p>

              <Link
                to="/signup"
                className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Create merchant account
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/[0.06]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-[9px] text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:px-8">

          <span className="font-medium text-zinc-500">
            Razor<span className="text-violet-500">Recover</span>
          </span>

          <span>
            Intelligent payment recovery for merchants.
          </span>

          <span>
            © 2026 RazorRecover
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Landing;