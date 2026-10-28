"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export type Certificate = {
  label: string;
  src: string;
};

export function CertModal({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="cert-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.label} certificate`}
      data-lenis-prevent="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="cert-modal__frame">
        <button
          type="button"
          className="label cert-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          Close ✕
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="cert-modal__img"
          alt={`${certificate.label} certificate`}
          src={certificate.src}
        />
      </div>
    </div>,
    document.body,
  );
}
