import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — Sidan hittades inte</title>
      </Helmet>

      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold text-neutral-900">404</h1>
        <p className="mt-4 text-xl text-neutral-600">
          Sidan hittades inte
        </p>
        <p className="mt-2 text-neutral-500">
          Sidan du letar efter finns inte eller har flyttats.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Tillbaka till startsidan
        </Link>
      </main>
    </>
  );
}
