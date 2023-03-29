import bg from '../../public/about.jpeg';
import { skillsArr } from '../data/skills';

export default function About() {
  return (
    <section className="relative isolate text-white after:absolute after:inset-0 after:z-[-1] after:skew-y-[-6deg] after:bg-black">
      <section
        id="about"
        className="relative mx-auto w-10/12 bg-cover bg-center bg-no-repeat md:mt-24 md:py-24 lg:mt-28 lg:py-28 xl:mt-32 xl:py-32 2xl:mt-36 2xl:py-36 3xl:mt-40 3xl:py-40"
      >
        <h2 className="text-center font-archivo md:xl:text-6xl lg:xl:text-7xl xl:text-7.5xl 2xl:text-8xl 3xl:text-8.5xl">
          About{' '}
          <span
            className="bg-cover bg-center bg-no-repeat py-4 px-8 3xl:px-10"
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          >
            Me
          </span>
        </h2>

        <p className="mx-auto w-7/12 lg:mt-6 lg:text-lg xl:mt-8 xl:text-xl 2xl:mt-10 2xl:text-2xl 3xl:mt-12 3xl:text-3xl">
          I&apos;m a self-taught frontend developer from Ukraine who is
          passionate about working on challenging projects. I have a strong
          understanding of React and Angular and am eager to contribute my
          skills to high-value products. On a personal level, I am self-driven
          and hard-working, and I can adapt quickly to a fast-paced environment.
        </p>

        <p className="mx-auto w-7/12 lg:text-lg xl:mt-6 xl:text-xl 2xl:mt-8 2xl:text-2xl 3xl:mt-10 3xl:text-3xl">
          In my free time, I love watching films and series, reading literature,
          playing hockey and a few other things, so feel free to contact me
          whether it&apos;s a job opportunity or just a regular chat.
        </p>

        <h3 className="text-center font-archivo md:mt-32 md:text-4xl lg:mt-36 lg:text-5xl xl:mt-40 xl:text-6xl 2xl:mt-44 2xl:text-7xl 3xl:mt-48 3xl:text-7.5xl">
          Techical Skills
        </h3>

        <ul className="grid grid-cols-3 justify-items-center md:text-lg lg:mt-8 lg:text-xl xl:mt-10 xl:text-2xl 2xl:mt-12 2xl:text-3xl 3xl:mt-14 3xl:text-4xl">
          {skillsArr.map((skill, i) => (
            <div
              key={i}
              className="flex items-center xl:w-40 xl:py-3 2xl:w-52 2xl:py-4 3xl:w-60 3xl:py-5"
            >
              <li>{skill}</li>
            </div>
          ))}
        </ul>
      </section>
    </section>
  );
}
