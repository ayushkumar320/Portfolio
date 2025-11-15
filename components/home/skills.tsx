import {SKILLS, getMenuRef} from "../../constants";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {gsap, Linear} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({defaults: {ease: Linear.easeNone}});
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      {opacity: 0, duration: 0.5, stagger: 0.5},
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">TECH STACK</p>
      <h1 className="section-heading seq mt-2">Tools I Build With</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
        Focused on MERN applications, production-ready data tooling, and
        containerized workflows.
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => null;

  const renderSkillColumn = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div
        className={`flex flex-wrap seq ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="mr-4 mb-4 rounded-full border border-gray-700/60 px-4 py-2 text-sm font-medium uppercase tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div
        className={SKILL_STYLES.SECTION}
        id={getMenuRef("Tech Stack")}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="mt-10">
            {renderSkillColumn("MERN Core", SKILLS.core)}
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-6 mb-6">
              {renderSkillColumn("Data & Persistence", SKILLS.data)}
            </div>
            <div>{renderSkillColumn("Tooling", SKILLS.tooling)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
