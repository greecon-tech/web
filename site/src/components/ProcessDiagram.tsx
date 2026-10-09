import Image from "next/image";

export function ProcessDiagram() {
  return (
    <Image
      src="/platform-diagram.jpg"
      alt="The Greecon Platform automating renewable energy, water management, and smart agriculture"
      width={620}
      height={620}
      className="process-diagram__image"
      priority
    />
  );
}
