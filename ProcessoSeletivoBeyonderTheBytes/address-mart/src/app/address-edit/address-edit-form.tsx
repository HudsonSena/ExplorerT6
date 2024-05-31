import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function AddressEditForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cadastro de Envio</CardTitle>
        <CardDescription>Informações do Remetente</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Maria de Souza" disabled />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phoneNumber">Número do Telefone</Label>
              <Input
                id="phoneNumber"
                type="number"
                placeholder="99-999-999-999"
                disabled
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="planet">Planeta</Label>
              <Input id="planet" placeholder="Terra" disabled />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Endereço/Lote</Label>
              <Input id="Address" placeholder="Endereço Completo" disabled />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="object">Objeto</Label>
              <Select>
                <SelectTrigger id="object">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="paper">Carta</SelectItem>
                  <SelectItem value="box">Caixa</SelectItem>
                  <SelectItem value="others">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <CardDescription>Informações do Destinatário</CardDescription>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="planet">Planeta</Label>
              <Select>
                <SelectTrigger id="planet">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="eart">Terra</SelectItem>
                  <SelectItem value="mart">Marte</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Endereço/Lote</Label>
              <Input id="Address" placeholder="Endereço Completo" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href="/"
          className="border border-zinc-800 text-zinc-800 rounded px-3 py-1 font-medium antialiased"
        >
          Voltar
        </Link>
        <Button>Enviar</Button>
      </CardFooter>
    </Card>
  );
}
