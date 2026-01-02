export function HomePageHero() {
  return (
    <section id="page-hero" className="md:grid md:grid-cols-[max-content_1fr] md:gap-x-4 md:gap-y-2">
      <img
        src="/isaac-maddox.jpg"
        alt="Isaac Maddox"
        className="size-24 md:size-32 rounded-full row-span-2 border-2 border-gray-500 ring-8 ring-gray-500/15"
      />
      <h1 className="typo-jumbo max-md:my-2 self-end">Isaac Maddox</h1>
      <p className="paragraph text-lg self-start">Web Developer and Designer</p>
      <ul className="col-start-2 flex gap-5 items-center mt-4 md:mt-0">
        <li>
          <a
            href="mailto:isaacmaddox05@gmail.com"
            className="flex bg-green-300 hover:bg-green-200 hover:shadow-lg hover:shadow- hover:shadow-green-300/25 px-4 py-3 squircle-3xl">
            View Resume
          </a>
        </li>
        <li>
          <a href="mailto:isaacmaddox05@gmail.com" className="paragraph text-gray-800 dark:text-gray-300 underline underline-offset-3">
            Get in touch
          </a>
        </li>
      </ul>
    </section>
  );
}
