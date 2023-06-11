import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const styling = {
    backgroundImage: `url('/Dhome.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100",
  };
  return (
    <div style={styling} className=" h-screen ">
      <div className="flex items-center justify-evenly p-4">
        <div className="text-black text-lg font-medium">DOCTOR 3.0</div>
        <div>
          <ConnectButton />
        </div>
      </div>
      <Header />

      {/* <div>Hospital</div>
      <div>
        <ConnectButton />
      </div> */}
    </div>
  );
}
