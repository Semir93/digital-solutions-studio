"use client";

import Image from "next/image";
import { useEffect, useState, type MouseEventHandler } from "react";
import type { Project } from "@/lib/portfolio-data";

type PreviewMode = "mobile" | "web" | "proof";

const previewModes: Array<{
  id: PreviewMode;
  label: string;
  eyebrow: string;
  title: string;
  detail: string;
  metric: string;
  metricLabel: string;
}> = [
  {
    id: "mobile",
    label: "Telefon",
    eyebrow: "Terenski pristup",
    title: "Mobile pristup za radnike",
    detail:
      "Radnici mogu otvoriti platformu na telefonu i brzo pristupiti osnovnim informacijama u pokretu.",
    metric: "Web + App",
    metricLabel: "jedan sistem",
  },
  {
    id: "web",
    label: "Web panel",
    eyebrow: "Pregled rada",
    title: "Interni dashboard",
    detail:
      "Kancelarija dobija pregled radnih naloga, materijala, radnika i statusa na jednom mjestu.",
    metric: "B2B",
    metricLabel: "operativni sistem",
  },
  {
    id: "proof",
    label: "Proces",
    eyebrow: "Tok firme",
    title: "Manje rasutih informacija",
    detail:
      "Umjesto poruka, papira i odvojenih evidencija, firma ima povezan web i mobile tok rada.",
    metric: "1",
    metricLabel: "centralna platforma",
  },
];

export function HeroLivePreview({ project }: { project: Project }) {
  const [activeMode, setActiveMode] = useState<PreviewMode>("mobile");
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const [desktopImageIndex, setDesktopImageIndex] = useState(0);

  const mobileImages =
    project.images?.filter((item) => {
      const normalized = item.toLowerCase();
      return normalized.includes("app") || normalized.includes("mobile");
    }) ?? [];
  const desktopImages =
    project.images?.filter((item) => {
      const normalized = item.toLowerCase();
      return !normalized.includes("app") && !normalized.includes("mobile");
    }) ?? [];

  const mobilePreviewImages =
    mobileImages.length > 0
      ? mobileImages
      : project.image
        ? [project.image]
        : project.images?.slice(0, 1) ?? [];

  const desktopPreviewImages =
    desktopImages.length > 0
      ? desktopImages
      : project.image
        ? [project.image]
        : project.images?.slice(0, 1) ?? [];

  const mobileImage =
    mobilePreviewImages[mobileImageIndex % mobilePreviewImages.length];
  const desktopImage =
    desktopPreviewImages[desktopImageIndex % desktopPreviewImages.length];

  const activePreview =
    previewModes.find((mode) => mode.id === activeMode) ?? previewModes[0];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMobileImageIndex((index) =>
        mobilePreviewImages.length > 1
          ? (index + 1) % mobilePreviewImages.length
          : index,
      );
      setDesktopImageIndex((index) =>
        desktopPreviewImages.length > 1
          ? (index + 1) % desktopPreviewImages.length
          : index,
      );
    }, 4000);

    return () => window.clearInterval(timer);
  }, [desktopPreviewImages.length, mobilePreviewImages.length]);

  const handlePointerMove: MouseEventHandler<HTMLDivElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setPointer({ x, y });
  };

  const resetPointer = () => setPointer({ x: 0, y: 0 });

  return (
    <div
      className="tesla-product-stage"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
    >
      <div className="tesla-product-topbar">
        <div className="tesla-mode-tabs" aria-label="Preview modes">
          {previewModes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveMode(mode.id)}
              className={activeMode === mode.id ? "is-active" : ""}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <div className="tesla-live-pill">
          <span className="live-dot" />
          {activePreview.eyebrow}
        </div>
      </div>

      <div className="tesla-product-visual">
        {activeMode === "mobile" ? (
          <PhonePreview image={mobileImage} title={project.title} pointer={pointer} />
        ) : null}

        {activeMode === "web" ? (
          <DesktopPreview image={desktopImage} title={project.title} pointer={pointer} />
        ) : null}

        {activeMode === "proof" ? (
          <ExperiencePreview
            mobileImage={mobileImage}
            desktopImage={desktopImage}
            title={project.title}
            outcome={project.outcomes[0]}
            pointer={pointer}
          />
        ) : null}
      </div>

      <div className="tesla-product-caption">
        <div>
          <p>{project.category}</p>
          <h2>{activePreview.title}</h2>
        </div>
        <div>
          <strong>{activePreview.metric}</strong>
          <span>{activePreview.metricLabel}</span>
        </div>
      </div>

      <p className="tesla-product-detail">{activePreview.detail}</p>
    </div>
  );
}

function PhonePreview({
  image,
  title,
  pointer,
}: {
  image?: string;
  title: string;
  pointer: { x: number; y: number };
}) {
  return (
    <div
      className="device-frame relative h-[330px] w-[150px] overflow-hidden rounded-[1.7rem] p-1 transition duration-300"
      style={{
        transform: `translate3d(${pointer.x * -9}px, ${pointer.y * -7}px, 0) rotate(${
          pointer.x * -1.2
        }deg)`,
      }}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-600" />
      <div className="device-screen relative h-full overflow-hidden rounded-[1.75rem]">
        {image ? (
          <Image
            src={image}
            alt={`${title} mobile preview`}
            fill
            className="object-contain object-center"
            sizes="(min-width: 1280px) 14vw, 70vw"
          />
        ) : null}
      </div>
    </div>
  );
}

function DesktopPreview({
  image,
  title,
  pointer,
}: {
  image?: string;
  title: string;
  pointer: { x: number; y: number };
}) {
  return (
    <div
      className="browser-frame w-full max-w-[640px] overflow-hidden rounded-[1.1rem] border border-white/55 bg-[#11161f] p-2.5 transition duration-300"
      style={{
        transform: `translate3d(${pointer.x * 7}px, ${pointer.y * 5}px, 0)`,
      }}
    >
      <div className="mb-2.5 flex items-center justify-between rounded-[0.8rem] border border-white/8 bg-white/6 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-slate-300">
        <span>Administrativni pregled</span>
        <span className="text-emerald-300">online</span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden rounded-[1rem] border border-white/8 bg-slate-900/90">
        {image ? (
          <Image
            src={image}
            alt={`${title} web preview`}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1280px) 30vw, 80vw"
          />
        ) : null}
      </div>
    </div>
  );
}

function ExperiencePreview({
  mobileImage,
  desktopImage,
  title,
  outcome,
  pointer,
}: {
  mobileImage?: string;
  desktopImage?: string;
  title: string;
  outcome?: string;
  pointer: { x: number; y: number };
}) {
  return (
    <div className="grid w-full max-w-[760px] gap-4 md:grid-cols-[1fr_auto] md:items-end">
      <div
        className="browser-frame overflow-hidden rounded-[1.35rem] border border-white/55 bg-[#11161f] p-3 transition duration-300"
        style={{
          transform: `translate3d(${pointer.x * 5}px, ${pointer.y * 3}px, 0)`,
        }}
      >
        <div className="relative aspect-[16/8] overflow-hidden rounded-[1rem] border border-white/8 bg-slate-900/90">
          {desktopImage ? (
            <Image
              src={desktopImage}
              alt={`${title} desktop preview`}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1280px) 30vw, 80vw"
            />
          ) : null}
        </div>
      </div>

      <div className="grid max-w-[260px] gap-3">
        <div
          className="device-frame relative h-[196px] w-[88px] justify-self-center overflow-hidden rounded-[1.25rem] p-1.5 transition duration-300"
          style={{
            transform: `translate3d(${pointer.x * -4}px, ${pointer.y * -4}px, 0)`,
          }}
        >
          <div className="absolute left-1/2 top-1.5 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-600" />
          <div className="device-screen relative h-full overflow-hidden rounded-[1rem]">
            {mobileImage ? (
              <Image
                src={mobileImage}
                alt={`${title} mobile preview`}
                fill
                className="object-cover object-center"
                sizes="100px"
              />
            ) : null}
          </div>
        </div>
        <div className="tesla-output-note">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Rezultat projekta
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">
            {outcome}
          </p>
        </div>
      </div>
    </div>
  );
}
