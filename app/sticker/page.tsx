import Image from "next/image";
import { Navbar } from "@/components/StickerGenerator/UI/navbar";
import { StickerGen } from "@/components/StickerGenerator/UI/stickerGen";

export default function Home() {
  return (
    <main className="flex flex-col h-full overflow-y-hidden items-center justify-between bg-[#1E1E1E]">
        {/* <Navbar/> */}
        <StickerGen/>
    </main>
  );
}
