import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <Container className = "flex bg-light-pink">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className = "w-lg h-96 relative mb-10 justify-center items-center">
          <h2 className="text-xl font-bold">Hello!</h2>
          <p>Welcome to Davalos Clothing! You will find a variety of valuable items for selection here. Start shopping now and find the perfect item for you!</p>
          <Button variant="default" size="lg">Shop Now</Button>
        </div>
      </main>
    </Container>
  );
}