import { useI18n } from "../i18n";

export function WhatModalContent() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="italic text-2xl border-b w-fit border-orange-300 mb-4">
        {t.modal.whatIsIt.title}
      </h2>

      {t.modal.whatIsIt.description.map((paragraph, index) => (
        <p key={index} className={index === 1 ? "font-bold" : index === 4 ? "italic" : ""}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
