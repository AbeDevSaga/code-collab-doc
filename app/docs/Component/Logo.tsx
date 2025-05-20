import Image from "next/image";

export default function Logo() {
  return (
    <div className="whitespace-nowrap flex items-center">
      <Image
        src="/images/Logo.png"
        alt="Code Collab Logo"
        width={80}
        height={20}
        priority
      />
    </div>
  );
}
