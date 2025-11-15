import {getMenuRef} from "../../constants";

const ExperienceSection = () => {
  return (
    <section
      className="w-full relative select-none section-container py-16"
      id={getMenuRef("Experience")}
    >
      <p className="section-title-sm mb-2">EXPERIENCE</p>
      <h1 className="section-heading mb-4">Professional Journey</h1>
      <div className="rounded-3xl border border-gray-700/70 bg-gray-800/40 p-8 text-lg">
        <p className="font-medium text-white">
          Work experience entries will be added soon.
        </p>
        {/* Add Ayush's experience details later */}
      </div>
    </section>
  );
};

export default ExperienceSection;
