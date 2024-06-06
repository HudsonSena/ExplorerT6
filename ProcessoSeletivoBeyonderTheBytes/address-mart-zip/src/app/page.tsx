import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-200">
      <div className="flex flex-col gap-10 rounded-xl border bg-card text-card-foreground shadow p-10">
        <h1 className="font-semibold text-lg">Delivery Interplanetário</h1>
        <div className="flex flex-col gap-5">
          <Link
            href="/sign-up"
            className="flex justify-center border border-zinc-300 text-zinc-800 rounded px-3 py-1 font-medium antialiased"
          >
            Cadastre-se
          </Link>
          <Link
            href="/address-edit"
            className="flex justify-center border border-zinc-300 text-zinc-800 rounded px-3 py-1 font-medium antialiased"
          >
            Endereço de Envio
          </Link>
        </div>
      </div>
    </main>
  );
}
