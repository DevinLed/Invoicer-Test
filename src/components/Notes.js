import React from "react";

export default function Notes({notes}) {
  return (
    <>
      <section className="mb-5">
        <p className="m:w-1/3 lg:w-1/2 xl:w-2/3">{notes}</p>
      </section>
    </>
  );
}
