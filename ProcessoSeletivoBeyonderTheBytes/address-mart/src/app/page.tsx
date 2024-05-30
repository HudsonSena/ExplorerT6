import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-center">
      <h1 className="text-lg font-semibold">Correio interplanetário</h1>
      <nav className="flex flex-col gap-5 justify-center items-center">
        <Link href="#">Cadastre-se</Link>
        <Link href="#">Editar Endereço</Link>
      </nav>
    </main>
  );
}
