import {
  Activity,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquare,
  Pause,
  Play,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const decisions = [
  {
    customer: "Rahul Sharma",
    amount: "₹2,499",
    issue: "UPI Timeout",
    score: 92,
    action: "Retry payment",
    channel: "WhatsApp",
    status: "Ready",
    time: "2 min ago",
  },
  {
    customer: "Priya Singh",
    amount: "₹4,999",
    issue: "Bank Declined",
    score: 84,
    action: "Send payment link",
    channel: "Email",
    status: "Processing",
    time: "5 min ago",
  },
  {
    customer: "Arjun Mehta",
    amount: "₹3,499",
    issue: "Payment Abandoned",
    score: 78,
    action: "Send reminder",
    channel: "WhatsApp",
    status: "Completed",
    time: "8 min ago",
  },
];

function Score({ value }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-[11px] font-semibold">
      {value}% likely
    </span>
  );
}

function AIAgent() {
  return (
    <section className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-[#17152b]">
              AI Recovery Agent
            </h1>

            <span className="px-2 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-semibold">
              LIVE
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Autonomous AI agent monitoring failed payments and recovering revenue.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-xs font-semibold transition">
          <Pause size={14} />
          Pause Agent
        </button>

      </div>

      {/* Agent status */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 mb-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Agent Status
            </p>

            <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
              <Activity size={16} />
            </div>
          </div>

          <p className="text-xl font-bold text-green-600 mt-3">
            Active
          </p>

          <p className="text-[10px] text-gray-400 mt-1">
            Monitoring continuously
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Payments Analyzed
            </p>

            <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
              <BrainCircuit size={16} />
            </div>
          </div>

          <p className="text-xl font-bold mt-3">
            1,284
          </p>

          <p className="text-[10px] text-gray-400 mt-1">
            This month
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Actions Taken
            </p>

            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Zap size={16} />
            </div>
          </div>

          <p className="text-xl font-bold mt-3">
            326
          </p>

          <p className="text-[10px] text-green-600 mt-1">
            +18.4% this month
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Revenue Recovered
            </p>

            <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
              <CheckCircle2 size={16} />
            </div>
          </div>

          <p className="text-xl font-bold text-green-600 mt-3">
            ₹8.42L
          </p>

          <p className="text-[10px] text-gray-400 mt-1">
            Through AI actions
          </p>
        </div>

      </div>

      {/* Agent brain */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-5">

        {/* Main brain card */}
        <div className="xl:col-span-2 bg-[#11101f] text-white rounded-2xl p-5 sm:p-7 overflow-hidden relative">

          <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="relative">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-11 h-11 rounded-xl bg-violet-600 flex items-center justify-center">
                <Bot size={22} />
              </div>

              <div>
                <h2 className="font-semibold">
                  Recovery Decision Engine
                </h2>

                <p className="text-[11px] text-gray-400">
                  Agent reasoning pipeline
                </p>
              </div>

              <span className="ml-auto flex items-center gap-1.5 text-[10px] text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Processing
              </span>

            </div>

            {/* Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center mb-3">
                  <ShieldCheck size={16} />
                </div>

                <p className="text-xs font-semibold">
                  Detect
                </p>

                <p className="text-[10px] text-gray-500 mt-1">
                  Payment failure detected
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
                  <BrainCircuit size={16} />
                </div>

                <p className="text-xs font-semibold">
                  Analyze
                </p>

                <p className="text-[10px] text-gray-500 mt-1">
                  Customer behaviour analyzed
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <Sparkles size={16} />
                </div>

                <p className="text-xs font-semibold">
                  Decide
                </p>

                <p className="text-[10px] text-gray-500 mt-1">
                  Best recovery action selected
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-3">
                  <Zap size={16} />
                </div>

                <p className="text-xs font-semibold">
                  Act
                </p>

                <p className="text-[10px] text-gray-500 mt-1">
                  Recovery action executed
                </p>
              </div>

            </div>

            {/* Current reasoning */}
            <div className="mt-5 border border-violet-500/20 bg-violet-500/5 rounded-xl p-4">

              <p className="text-[10px] text-violet-300 font-semibold uppercase tracking-wider">
                Current Agent Reasoning
              </p>

              <p className="text-xs text-gray-300 mt-2 leading-5">
                Rahul Sharma's UPI payment failed due to a timeout.
                Previous payments show successful UPI usage. The agent
                predicts a high probability of recovery and recommends
                an immediate retry instead of sending a reminder.
              </p>

            </div>

          </div>
        </div>

        {/* Configuration */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <Bot size={18} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Agent Configuration
              </h3>

              <p className="text-[10px] text-gray-400">
                Current recovery policy
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Auto recovery
              </span>

              <span className="text-xs font-semibold text-green-600">
                Enabled
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Minimum score
              </span>

              <span className="text-xs font-semibold">
                70%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Max retry attempts
              </span>

              <span className="text-xs font-semibold">
                2
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Preferred channel
              </span>

              <span className="text-xs font-semibold">
                WhatsApp
              </span>
            </div>

            <div className="border-t border-gray-100 pt-4">

              <p className="text-[10px] text-gray-400 mb-3">
                Recovery actions
              </p>

              <div className="flex flex-wrap gap-2">

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg text-[10px] text-gray-600">
                  <RefreshCw size={11} />
                  Retry
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg text-[10px] text-gray-600">
                  <MessageSquare size={11} />
                  WhatsApp
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg text-[10px] text-gray-600">
                  <Mail size={11} />
                  Email
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Decisions */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-5 sm:p-6 border-b border-gray-100">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="font-semibold text-gray-900">
                Recent Agent Decisions
              </h3>

              <p className="text-[11px] text-gray-400 mt-1">
                Actions selected autonomously by the recovery agent
              </p>
            </div>

            <button className="hidden sm:inline-flex items-center gap-1 text-xs text-violet-600 font-medium">
              View Logs
              <Activity size={13} />
            </button>

          </div>

        </div>

        {/* Desktop */}
        <div className="hidden md:block overflow-x-auto">

          <table className="w-full text-sm">

            <thead>
              <tr className="text-left text-[11px] text-gray-400 border-b border-gray-100">

                <th className="px-5 py-3 font-medium">
                  Customer
                </th>

                <th className="px-5 py-3 font-medium">
                  Issue
                </th>

                <th className="px-5 py-3 font-medium">
                  Recovery Probability
                </th>

                <th className="px-5 py-3 font-medium">
                  AI Action
                </th>

                <th className="px-5 py-3 font-medium">
                  Channel
                </th>

                <th className="px-5 py-3 font-medium">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              {decisions.map((decision) => (
                <tr
                  key={decision.customer}
                  className="border-b border-gray-100 last:border-0"
                >

                  <td className="px-5 py-4">
                    <p className="text-xs font-semibold text-gray-800">
                      {decision.customer}
                    </p>

                    <p className="text-[10px] text-gray-400 mt-1">
                      {decision.amount} · {decision.time}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-xs text-gray-500">
                    {decision.issue}
                  </td>

                  <td className="px-5 py-4">
                    <Score value={decision.score} />
                  </td>

                  <td className="px-5 py-4 text-xs font-medium text-gray-700">
                    {decision.action}
                  </td>

                  <td className="px-5 py-4 text-xs text-gray-500">
                    {decision.channel}
                  </td>

                  <td className="px-5 py-4">

                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-green-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {decision.status}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile */}
        <div className="md:hidden p-3 space-y-3">

          {decisions.map((decision) => (
            <div
              key={decision.customer}
              className="border border-gray-100 rounded-xl p-4"
            >

              <div className="flex items-start justify-between gap-3">

                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    {decision.customer}
                  </p>

                  <p className="text-[10px] text-gray-400 mt-1">
                    {decision.amount}
                  </p>
                </div>

                <Score value={decision.score} />

              </div>

              <div className="mt-4 space-y-2">

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">
                    Issue
                  </span>

                  <span className="font-medium text-gray-700">
                    {decision.issue}
                  </span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">
                    AI Action
                  </span>

                  <span className="font-medium text-gray-700">
                    {decision.action}
                  </span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">
                    Channel
                  </span>

                  <span className="font-medium text-gray-700">
                    {decision.channel}
                  </span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">
                    Status
                  </span>

                  <span className="font-semibold text-green-600">
                    {decision.status}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Agent activity */}
      <div className="mt-5 bg-green-50 border border-green-100 rounded-2xl p-4 sm:p-5">

        <div className="flex gap-3">

          <div className="w-9 h-9 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shrink-0">
            <Clock3 size={17} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Agent is operating autonomously
            </p>

            <p className="text-xs text-gray-500 mt-1 leading-5">
              The agent continuously monitors payment events,
              evaluates recovery probability, selects the most
              suitable action, and records the result.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AIAgent;