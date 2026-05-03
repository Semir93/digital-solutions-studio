import Image from "next/image";

export function BrandLogo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <span className="brand-logo-image-frame">
        <Image
          src="/logo-header.png"
          alt={showText ? "Digital Solutions Studio" : ""}
          width={1800}
          height={650}
          priority
          sizes="(max-width: 768px) 180px, 260px"
          className="brand-logo-image"
        />
      </span>
      {showText ? (
        <span className="brand-logo-wordmark">
          <span>Digital Solutions Studio</span>
          <span>Custom software studio</span>
        </span>
      ) : null}
    </span>
  );
}
