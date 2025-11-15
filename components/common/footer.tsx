// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {EMAIL, SOCIAL_LINKS, getMenuRef} from "../../constants";
import Button, {ButtonTypes} from "./button";
import Image from "next/image";

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-3 px-2 uppercase tracking-wide text-sm"
        rel="noreferrer"
        target="_blank"
      >
        {el}
      </a>
    ));
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Let&apos;s build something meaningful.
      </h1>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/Ayush_Resume.pdf"
        ></Button>
        <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name="Email me"
          href={`mailto:${EMAIL}`}
        ></Button>
      </div>
      <h2 className="text-center text-sm sm:text-base mt-8">
        Designed and developed with ❤️ by Ayush Kumar.
      </h2>
    </>
  );

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={getMenuRef("Contact")}
    >
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        width={1440}
        sizes="100vw"
        priority={false}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
