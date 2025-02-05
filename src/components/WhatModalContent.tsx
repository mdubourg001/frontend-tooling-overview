export function WhatModalContent() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="italic text-2xl border-b w-fit border-orange-300 mb-4">
        What is it?
      </h2>

      <p>
        This is a visual representation of the tools and technologies used in
        frontend development.
      </p>

      <p>
        Frontend tooling is a vast world: there are many tools with different
        approaches available.{" "}
        <b>
          This visual representation aims to help understand what different
          categories of tools exist, which categories common well-known tools
          belong to, and how they interact with each other.
        </b>
      </p>

      <p>
        The tools are categorized by their purpose and are connected to each
        other to show how they interact.
      </p>

      <p className="italic">
        Disclaimer: This is a simplified representation, and some tools might be
        purposely missing to keep the visual representation clear.
      </p>
    </div>
  );
}
