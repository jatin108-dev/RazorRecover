import {
  Bell,
  Bot,
  Check,
  KeyRound,
  Mail,
  Save,
  ShieldCheck,
  User,
  Webhook,
  Zap,
} from "lucide-react";

function Settings() {
  return (
    <section className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-[#17152b]">
          Settings
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Configure your RazorRecover account and AI recovery agent.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* Main settings */}
        <div className="xl:col-span-2 space-y-5">

          {/* Profile */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <User size={18} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Account Information
                </h2>

                <p className="text-[10px] text-gray-400">
                  Manage your account details
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <label className="block text-[11px] font-medium text-gray-500 mb-2">
                  Full Name
                </label>

                <input
                  defaultValue="RazorRecover Admin"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs outline-none focus:border-violet-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-gray-500 mb-2">
                  Email Address
                </label>

                <input
                  defaultValue="admin@razorrecover.ai"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs outline-none focus:border-violet-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-gray-500 mb-2">
                  Company
                </label>

                <input
                  defaultValue="Demo Store"
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs outline-none focus:border-violet-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-gray-500 mb-2">
                  Timezone
                </label>

                <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs outline-none bg-white">
                  <option>Asia/Kolkata (IST)</option>
                  <option>UTC</option>
                  <option>Asia/Singapore</option>
                </select>
              </div>

            </div>

          </div>

          {/* AI settings */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <Bot size={18} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  AI Recovery Settings
                </h2>

                <p className="text-[10px] text-gray-400">
                  Control how the recovery agent behaves
                </p>
              </div>

            </div>

            <div className="space-y-5">

              {/* Toggle */}
              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Autonomous Recovery
                  </p>

                  <p className="text-[10px] text-gray-400 mt-1">
                    Allow the AI agent to automatically execute recovery actions.
                  </p>
                </div>

                <div className="w-11 h-6 rounded-full bg-violet-600 p-1 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-white ml-auto shadow-sm" />
                </div>

              </div>

              <div className="border-t border-gray-100" />

              {/* Score */}
              <div>

                <div className="flex items-center justify-between mb-3">

                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Minimum Recovery Probability
                    </p>

                    <p className="text-[10px] text-gray-400 mt-1">
                      Agent will only act when confidence is above this score.
                    </p>
                  </div>

                  <span className="text-sm font-bold text-violet-600">
                    70%
                  </span>

                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="70"
                  className="w-full accent-violet-600"
                />

              </div>

              <div className="border-t border-gray-100" />

              {/* Retry */}
              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Maximum Retry Attempts
                  </p>

                  <p className="text-[10px] text-gray-400 mt-1">
                    Maximum number of automated payment retries.
                  </p>
                </div>

                <select className="border border-gray-200 rounded-lg px-3 py-2 text-xs bg-white">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>

              </div>

              <div className="border-t border-gray-100" />

              {/* Channel */}
              <div>

                <p className="text-xs font-semibold text-gray-800">
                  Preferred Recovery Channel
                </p>

                <p className="text-[10px] text-gray-400 mt-1 mb-3">
                  Choose the preferred communication channel for recovery.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                  <button className="border-2 border-violet-500 bg-violet-50 rounded-xl p-3 text-left">
                    <Zap size={15} className="text-violet-600 mb-2" />

                    <p className="text-xs font-semibold">
                      WhatsApp
                    </p>

                    <p className="text-[9px] text-gray-400 mt-1">
                      Recommended
                    </p>
                  </button>

                  <button className="border border-gray-200 rounded-xl p-3 text-left hover:bg-gray-50">
                    <Mail size={15} className="text-gray-500 mb-2" />

                    <p className="text-xs font-semibold">
                      Email
                    </p>

                    <p className="text-[9px] text-gray-400 mt-1">
                      Payment reminder
                    </p>
                  </button>

                  <button className="border border-gray-200 rounded-xl p-3 text-left hover:bg-gray-50">
                    <KeyRound size={15} className="text-gray-500 mb-2" />

                    <p className="text-xs font-semibold">
                      Payment Link
                    </p>

                    <p className="text-[9px] text-gray-400 mt-1">
                      Direct recovery
                    </p>
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Notifications */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Bell size={18} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Notifications
                </h2>

                <p className="text-[10px] text-gray-400">
                  Decide what updates you receive
                </p>
              </div>

            </div>

            <div className="space-y-4">

              {[
                "Successful payment recovery",
                "High-risk customer detected",
                "AI agent errors",
                "Daily recovery summary",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between"
                >

                  <p className="text-xs text-gray-700">
                    {item}
                  </p>

                  <div
                    className={`w-10 h-5 rounded-full p-0.5 ${
                      index === 2
                        ? "bg-gray-200"
                        : "bg-violet-600"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white shadow-sm ${
                        index === 2 ? "" : "ml-5"
                      }`}
                    />
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Save */}
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-xs font-semibold">
            <Save size={14} />
            Save Changes
          </button>

        </div>

        {/* Right column */}
        <div className="space-y-5">

          {/* Integration */}
          <div className="bg-[#11101f] text-white rounded-2xl p-5 sm:p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
                <Webhook size={18} />
              </div>

              <div>
                <h2 className="font-semibold">
                  Integrations
                </h2>

                <p className="text-[10px] text-gray-500">
                  Connected services
                </p>
              </div>

            </div>

            <div className="space-y-3">

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold">
                      Razorpay
                    </p>

                    <p className="text-[10px] text-gray-500 mt-1">
                      Payment gateway
                    </p>
                  </div>

                  <span className="flex items-center gap-1 text-[9px] text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Connected
                  </span>

                </div>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold">
                      Webhooks
                    </p>

                    <p className="text-[10px] text-gray-500 mt-1">
                      Payment events
                    </p>
                  </div>

                  <span className="flex items-center gap-1 text-[9px] text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Active
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Security */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Security
                </h2>

                <p className="text-[10px] text-gray-400">
                  Account protection
                </p>
              </div>

            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <Check size={13} />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    API credentials protected
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Encrypted and secure
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <Check size={13} />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    Webhook signatures verified
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Events are authenticated
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
                  <Check size={13} />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    AI actions logged
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Full audit trail available
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Status */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5">

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
                <Bot size={17} />
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-900">
                  AI Agent Status
                </p>

                <div className="flex items-center gap-1.5 mt-1">

                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />

                  <span className="text-[10px] text-green-600 font-medium">
                    Operational
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Settings;