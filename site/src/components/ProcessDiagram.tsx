import Image from "next/image";

export function ProcessDiagram({ alt }: { alt: string }) {
  return (
    <Image src="/platform-diagram.png" alt={alt} width={620} height={620} className="process-diagram__image" priority />
  );
}
