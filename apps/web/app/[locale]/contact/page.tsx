import Link from "next/link";

const CONTACT_EMAIL = "[ADMIN_EMAIL]";
const DISCORD_URL = "https://discord.gg/dvbDuJVwNa";
const GITHUB_ISSUES_URL = "https://github.com/RatLoopz/sahidawa-india/issues/new?template=bug_report.md";
const CONTRIBUTING_URL = "https://github.com/RatLoopz/sahidawa-india/blob/main/CONTRIBUTING.md";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="text-center py-16 px-4 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          GSSoC 2026 Open Source Project
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Get In <span className="text-green-500">Touch</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Have questions, ideas, or want to contribute? We would love to hear from you.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2">

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-500 text-sm mb-4">
              For privacy queries, partnerships, or serious concerns.
            </p>
            <a
              href={"mailto:" + CONTACT_EMAIL}
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Discord Community</h3>
            <p className="text-gray-500 text-sm mb-4">
              Join contributors, ask questions, and get announcements.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="text-3xl mb-3">🐛</div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Report a Bug</h3>
            <p className="text-gray-500 text-sm mb-4">
              Found an issue? Open a GitHub issue and we will fix it fast.
            </p>
            <a
              href={GITHUB_ISSUES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Open Issue
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Contribute</h3>
            <p className="text-gray-500 text-sm mb-4">
              Want to help build SahiDawa? Read our contributing guide.
            </p>
            <a
              href={CONTRIBUTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Read Guide
            </a>
          </div>

        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Helpful Links</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/about"
              className="border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600 text-sm px-5 py-2 rounded-full transition-colors"
            >
              About SahiDawa
            </Link>
            <Link
              href="/privacy"
              className="border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600 text-sm px-5 py-2 rounded-full transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              className="border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600 text-sm px-5 py-2 rounded-full transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Note */}
      <section className="text-center py-10 px-4 border-t border-gray-100">
        <p className="text-gray-400 text-sm">
          SahiDawa is free, open-source, and built for 1.4 billion Indians. No ads. No premium. No data sold. Ever.
        </p>
      </section>

    </main>
  );
}