import Image from 'next/image';
export default function Header() {
  return <header className="flex h-24 items-center justify-center bg-white px-6 sm:h-28"><Image src="/logo.svg" alt="Websathi" width={218} height={52} priority /></header>;
}
