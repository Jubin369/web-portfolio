// Page Components START----------
import BlogsSection from "@components/Home/BlogsSection";
import SkillSection from "@components/Home/SkillSection";
// Page Components END------------

import Image from "next/image";
import Metadata from "@components/MetaData";
import Contact from "@components/Contact";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "@content/FramerMotionVariants";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import { homeProfileImage } from "@utils/utils";
import { getPinnedSkills } from "@lib/dataFetch";
import getRSS from "@lib/generateRSS";
import generateSitemap from "@lib/sitemap";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Ripples from "react-ripples";
import MDXContent from "@lib/MDXContent";
import pageMeta from "@content/meta";
import { MdLocationOn, MdWork, MdSchool } from "react-icons/md";

export default function Home({ skills }) {
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
      <div className="relative dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid place-content-center py-20  min-h-screen"
        >
          <div className="w-full relative mx-auto flex flex-col items-center gap-10">
            <motion.div
              variants={popUp}
              className="relative w-44 h-44 xs:w-52 xs:h-52 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                src={homeProfileImage}
                className="rounded-full shadow filter saturate-0"
                width={400}
                height={400}
                alt="cover Profile Image"
                quality={75}
                priority={true}
              />
            </motion.div>

            <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl lg:text-6xl font-bold font-sarina"
                >
                  Jubin Ayoob
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs md:text-sm lg:text-lg text-gray-500"
                >
                  React Developer, Competitive Programmer
                </motion.p>
              </div>

              <motion.p
                variants={opacityVariant}
                className=" text-slate-500 dark:text-gray-300 font-medium text-sm md:text-base text-center"
              >
                I am currently working in software company Cloodot.
              </motion.p>
            </div>

            <motion.div
              className="rounded-md overflow-hidden"
              variants={opacityVariant}
            >
              <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
                <button
                  className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none"
                  onClick={() => window.open("/resume.pdf")}
                >
                  <FiDownload />
                  <p>Resume</p>
                </button>
              </Ripples>
            </motion.div>
            <motion.div className="rounded-md overflow-hidden" variants={popUp}>
              <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
                <section id="Experience" className="px-0 py-20 mb-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <section id="work">
                      <div className="heading flex items-center pb-8">
                        <MdWork size="0.875rem" className="mr-2" />
                        <h6 className="font-bold uppercase text-sm leading-none">
                          Work
                        </h6>
                      </div>

                      <div className="flex">
                        <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
                        <div className="-ml-2">
                          <div
                            key={"0"}
                            className="py-4 flex wow fadeInDown"
                            style={{
                              animationDuration: `${0 * 200 + 500}ms`,
                            }}
                          >
                            {/* <Tooltip title={`(${"Sep 2021 - Oct 2022"})`} placement="left"> */}
                            <div
                              className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                                true ? "bg-white" : "bg-primary-500"
                              } duration-200`}
                            />
                            {/* </Tooltip> */}
                            <div className="ml-8">
                              <img
                                alt="logo"
                                className="w-auto h-8 object-contain"
                                src="https://www.cloodot.com/logo.svg"
                              />
                              <div className="mt-3 flex items-baseline">
                                <h6 className="font-semibold">
                                  {"cloodot pvt ltd"}
                                </h6>
                                <h6 className="text-xs ml-2">
                                  ({"Sep 21 - Oct 22"})
                                </h6>
                              </div>
                              <h6 className="text-sm">
                                {"Software Developer"}
                              </h6>
                              <div className="mt-2 flex items-center">
                                <MdLocationOn size="0.75rem" />
                                <h6 className="font-semibold text-xs ml-2">
                                  {"Ernakulam,India"}
                                </h6>
                              </div>
                              <h6 className="text-xs mt-2">
                                <strong>Frontend:</strong> Nextjs framework with
                                Chakra UI, and
                                <br />
                                <strong>Backend:</strong> Nodejs, Apollo
                                graphql, MongoDb
                              </h6>
                            </div>
                          </div>
                          <div
                            key={"1"}
                            className="py-4 flex wow fadeInDown"
                            style={{
                              animationDuration: `${1 * 200 + 500}ms`,
                            }}
                          >
                            {/* <Tooltip title={`(${"Sep 2021 - Oct 2022"})`} placement="left"> */}
                            <div
                              className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                                true ? "bg-white" : "bg-primary-500"
                              } duration-200`}
                            />
                            {/* </Tooltip> */}
                            <div className="ml-8">
                              {/* <img
                          alt="logo"
                          className="w-auto h-20 rounded-full object-contain"
                          src="logos/freelancer.png"
                        /> */}
                              <div className="mt-3 flex items-baseline">
                                <h6 className="font-semibold">
                                  {"Freelancer"}
                                </h6>
                                <h6 className="text-xs ml-2">
                                  ({"Jul 19 - Aug 21"})
                                </h6>
                              </div>
                              <h6 className="text-sm">
                                {"Fullstack web development"}
                              </h6>
                              <div className="mt-2 flex items-center">
                                <MdLocationOn size="0.75rem" />
                                <h6 className="font-semibold text-xs ml-2">
                                  {"Kumaranellur,Palakkad, India"}
                                </h6>
                              </div>
                              <h6 className="text-xs mt-2">
                                <strong>Frontend:</strong> ReactJs
                                <br />
                                <strong>Backend:</strong> Nodejs, Express,
                                MongoDb
                              </h6>
                            </div>
                          </div>
                          <div
                            key={"2"}
                            className="py-4 flex wow fadeInDown"
                            style={{
                              animationDuration: `${2 * 200 + 500}ms`,
                            }}
                          >
                            {/* <Tooltip title={`(${"Sep 2021 - Oct 2022"})`} placement="left"> */}
                            <div
                              className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                                true ? "bg-white" : "bg-primary-500"
                              } duration-200`}
                            />
                            {/* </Tooltip> */}
                            <div className="ml-8">
                              <img
                                alt="logo"
                                className="w-auto h-8 object-contain"
                                src="logos/codalyze.png"
                              />
                              <div className="mt-3 flex items-baseline">
                                <h6 className="font-semibold">
                                  {"Codalyze Technologies Pvt. Ltd."}
                                </h6>

                                <h6 className="text-xs ml-2">
                                  ({"Nov 18 - Apr 19"})
                                </h6>
                              </div>
                              <h6 className="text-sm">
                                {"Software Engineer Trainee"}
                              </h6>
                              <div className="mt-2 flex items-center">
                                <MdLocationOn size="0.75rem" />
                                <h6 className="font-semibold text-xs ml-2">
                                  {"Mumbai,India"}
                                </h6>
                              </div>
                              <h6 className="text-xs mt-2">
                                <strong>Worked with:</strong> NodeJs, used npm
                                elastic search library,and mongodb as backend
                              </h6>
                            </div>
                          </div>
                          <div
                            key={"3"}
                            className="py-4 flex wow fadeInDown"
                            style={{
                              animationDuration: `${3 * 200 + 500}ms`,
                            }}
                          >
                            {/* <Tooltip title={`(${"Sep 2021 - Oct 2022"})`} placement="left"> */}
                            <div
                              className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                                true ? "bg-white" : "bg-primary-500"
                              } duration-200`}
                            />
                            {/* </Tooltip> */}
                            <div className="ml-8">
                              <img
                                alt="logo"
                                className="w-auto h-10 object-contain"
                                src="logos/mountblue.png"
                              />
                              <div className="mt-3 flex items-baseline">
                                <h6 className="font-semibold">
                                  {"MountBlue Technologies Pvt Ltd"}
                                </h6>
                                <h6 className="text-xs ml-2">
                                  ({"May 18 - Sep 18"})
                                </h6>
                              </div>
                              <h6 className="text-sm">
                                {"Software Engineer Trainee"}
                              </h6>
                              <div className="mt-2 flex items-center">
                                <MdLocationOn size="0.75rem" />
                                <h6 className="font-semibold text-xs ml-2">
                                  {"Bengaluru, India"}
                                </h6>
                              </div>
                              <h6 className="text-xs mt-2">
                                <strong>Trained and worked with:</strong> HTML,
                                Javascript, NodeJs, React, Redux, mongodb
                              </h6>
                            </div>
                          </div>
                          <div
                            key={"4"}
                            className="py-4 flex wow fadeInDown"
                            style={{
                              animationDuration: `${4 * 200 + 500}ms`,
                            }}
                          >
                            {/* <Tooltip title={`(${"Sep 2021 - Oct 2022"})`} placement="left"> */}
                            <div
                              className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                                true ? "bg-white" : "bg-primary-500"
                              } duration-200`}
                            />
                            {/* </Tooltip> */}
                            <div className="ml-8">
                              <img
                                alt="logo"
                                className="w-auto h-8 object-contain"
                                src="logos/nucore.png"
                              />
                              <div className="mt-3 flex items-baseline">
                                <h6 className="font-semibold">
                                  {"Nucore Software Solutions"}
                                </h6>
                                <h6 className="text-xs ml-2">
                                  ({"Sep 17 - Feb 18"})
                                </h6>
                              </div>
                              <h6 className="text-sm">
                                {"Junior Software Engineer"}
                              </h6>
                              <div className="mt-2 flex items-center">
                                <MdLocationOn size="0.75rem" />
                                <h6 className="font-semibold text-xs ml-2">
                                  {"Calicut,India"}
                                </h6>
                              </div>
                              <h6 className="text-xs mt-2">
                                <strong>Trained and worked with:</strong>{" "}
                                PHP(Zend framework), HTML, Javascript, Jquery,
                                Ajax, PostgreSQL
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div
                      className="my-0 mx-auto max-w-xs w-3/4"
                      //style={{ width: "90vw", "max-width": "1170px", width: "80vw" }}
                    >
                      <div className="heading flex items-center pb-8">
                        <MdSchool size="0.875rem" className="mr-2" />
                        <h6 className="font-bold uppercase text-sm leading-none">
                          Education
                        </h6>
                      </div>
                      <div
                        className=" border-dashed m-0 px-8 py-8 relative border-r-2 ml-8 pl-0 timeline-item"
                        style={{
                          "border-bottom-right-radius": "2rem",
                        }}
                      >
                        <img
                          src="logos/freecodecamp.png"
                          className="inline-block"
                          style={{
                            "max-height": "2.5em",
                            "max-width": "2.5em",
                          }}
                          alt="logo"
                        />
                        <h4
                          className="text-base leading-none mb-3 capitalize"
                          style={{
                            "letter-spacing": "4px",
                            "font-family": "Roboto,sans-serif",
                            "font-weight": "bold",
                            color: "hsl(210, 31%, 80%)",
                          }}
                        >
                          2017
                        </h4>
                        <p
                          className="block text-base leading-normal mb-0"
                          style={{
                            "margin-block-start": "1em",
                            "margin-block-end": "1em",
                            "margin-inline-start": "0px",
                            "margin-inline-end": "0px",
                            "font-family": "Open Sans, sans-serif",
                          }}
                        >
                          FreeCodeCamp
                          <br />
                          Online
                        </p>
                        <span
                          className="right-0 bg-white grid place-items-center h-8 mb-0 absolute w-8"
                          style={{
                            top: "50%",
                            transform: "translate(50%, -50%)",
                            "border-radius": "50%",
                            "font-weight": "bold",
                          }}
                        >
                          4
                        </span>
                      </div>

                      <div
                        className=" border-dashed border-t-2 m-0 px-8 py-8 relative border-l-2 mr-8 pr-0 timeline-item"
                        style={{
                          "border-top-left-radius": "2rem",
                          "border-bottom-left-radius": "2rem",
                        }}
                      >
                        <img
                          src="icons/sreepathy.png"
                          className="inline-block"
                          style={{
                            "max-height": "2.5em",
                            "max-width": "2.5em",
                          }}
                          alt="logo"
                        />
                        <h4
                          className="text-base leading-none mb-3 capitalize"
                          style={{
                            "letter-spacing": "4px",
                            "font-family": "Roboto,sans-serif",
                            "font-weight": "bold",
                            color: "hsl(210, 31%, 80%)",
                          }}
                        >
                          2017
                        </h4>
                        <p
                          className="block text-base leading-normal mb-0"
                          style={{
                            "margin-block-start": "1em",
                            "margin-block-end": "1em",
                            "margin-inline-start": "0px",
                            "margin-inline-end": "0px",
                            "font-family": "Open Sans, sans-serif",
                          }}
                        >
                          B.tech in Computer Science & Engineering
                          <br />
                          Sreepathy Institute of Management and Technology
                          <br />
                          Vavanoor, Palakkad, India
                          <span
                            className="left-0 bg-white grid place-items-center h-8 mb-0 absolute w-8"
                            style={{
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                              "border-radius": "50%",
                              "font-weight": "bold",
                            }}
                          >
                            3
                          </span>
                        </p>
                      </div>

                      <div
                        className=" border-dashed border-t-2 m-0 px-8 py-8 relative border-r-2 ml-8 pl-0 timeline-item"
                        style={{
                          "border-top-right-radius": "2rem",
                          "border-bottom-right-radius": "2rem",
                        }}
                      >
                        <img
                          src="icons/kotakkal.png"
                          className="inline-block mb-1"
                          style={{
                            "max-height": "2.5em",
                            "max-width": "2.5em",
                          }}
                          alt="logo"
                        />
                        <h4
                          className="text-base leading-none mb-3 capitalize"
                          style={{
                            "letter-spacing": "4px",
                            "font-family": "Roboto,sans-serif",
                            "font-weight": "bold",
                            color: "hsl(210, 31%, 80%)",
                          }}
                        >
                          2014
                        </h4>
                        <p
                          className="block text-base leading-normal mb-0"
                          style={{
                            "margin-block-start": "1em",
                            "margin-block-end": "1em",
                            "margin-inline-start": "0px",
                            "margin-inline-end": "0px",
                            "font-family": "Open Sans, sans-serif",
                          }}
                        >
                          Entrance
                          <br />
                          Universal Institute
                          <br />
                          Kottakkal,India
                        </p>
                        <span
                          className="right-0 bg-white grid place-items-center h-8 mb-0 absolute w-8"
                          style={{
                            top: "50%",
                            transform: "translate(50%, -50%)",
                            "border-radius": "50%",
                            "font-weight": "bold",
                          }}
                        >
                          2
                        </span>
                      </div>

                      <div
                        className=" border-dashed border-t-2 m-0 px-8 py-8 relative border-l-2 mr-8 pr-0 timeline-item"
                        style={{
                          "border-top-left-radius": "2rem",
                        }}
                      >
                        <img
                          src="icons/ushus.png"
                          className="inline-block rounded-full"
                          style={{
                            "max-height": "2.5em",
                            "max-width": "2.5em",
                          }}
                          alt="logo"
                        />
                        <h4
                          className="text-base leading-none mb-3 capitalize"
                          style={{
                            "letter-spacing": "4px",
                            "font-family": "Roboto,sans-serif",
                            "font-weight": "bold",
                            color: "hsl(210, 31%, 80%)",
                          }}
                        >
                          2013
                        </h4>
                        <p
                          className="block text-base leading-normal mb-0"
                          style={{
                            "margin-block-start": "1em",
                            "margin-block-end": "1em",
                            "margin-inline-start": "0px",
                            "margin-inline-end": "0px",
                            "font-family": "Open Sans, sans-serif",
                          }}
                        >
                          Primary and High School
                          <br />
                          The Ushus Senior Secondary School
                          <br />
                          Vattamkulam,India
                        </p>
                        <span
                          className="left-0 bg-white grid place-items-center h-8 mb-0 absolute w-8"
                          style={{
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            "border-radius": "50%",
                            "font-weight": "bold",
                          }}
                        >
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </Ripples>
            </motion.div>
          </div>
        </motion.section>

        <div>
          <SkillSection skills={skills} />

          <Contact />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  //const blogs = new MDXContent("posts").getAllPosts().slice(0, 3);
  const skills = getPinnedSkills();
  await getRSS();
  await generateSitemap();

  return {
    props: { skills },
  };
}
