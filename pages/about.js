import MDXComponents from "@components/MDXComponents";
import MetaData from "@components/MetaData";
import PageTop from "@components/PageTop";
import Support from "@components/Support";
import MDXContent from "@lib/MDXContent";
import { MDXRemote } from "next-mdx-remote";
import styles from "@styles/Blog.module.css";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { opacityVariant } from "@content/FramerMotionVariants";
import pageMeta from "@content/meta";
import { MdLocationOn, MdWork, MdSchool } from "react-icons/md";

export default function About({ about }) {
  return (
    <>
      <MetaData
        title={pageMeta.about.title}
        description={pageMeta.about.description}
        previewImage={pageMeta.about.image}
        keywords={pageMeta.about.keywords}
      />

      <section className="pageTop">
        <PageTop pageTitle="About me"></PageTop>
        <AnimatedDiv
          variants={opacityVariant}
          className={` ${styles.blog} blog-container prose-sm  3xl:prose-lg`}
        >
          <MDXRemote
            {...about.content}
            frontmatter={about.meta}
            components={MDXComponents}
          />
        </AnimatedDiv>
        <AnimatedDiv>
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
            integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
            crossorigin="anonymous"
          />

          <div class="min-h-screen ">
            <div class="min-h-screen flex justify-center">
              <div class="w-2/3 mx-auto">
                <div class="flex flex-row w-full">
                  <div class="w-2/5 px-2 py-10">
                    <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                      <div class="text-gray-600 mb-2 flex justify-between">
                        <div class="font-bold">Svjatoslav Torn</div>
                        <div class="flex flex-row">
                          <button class="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                            <i class="far fa-edit"></i>
                          </button>
                          <button class="text-red-500 hover:text-red-300 transition duration-200">
                            <i class="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                      <div class="text-gray-600">
                        Привет Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Ad corporis culpa deserunt,
                        dignissimos dolor esse fugit ipsam minus odit officiis
                        placeat qui, quidem quis soluta vero? Adipisci alias
                        eius et iure nam nihil reiciendis saepe, voluptatem.
                        Alias cumque dicta dignissimos ea et laborum, minima
                        similique.
                      </div>
                    </div>
                  </div>
                  <div class="w-1/5  flex justify-center">
                    <div class="relative flex h-full w-1 bg-green-300 items-center justify-center">
                      <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                        <div>20</div>
                        <div>September</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-2/5 px-2 py-10 "></div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="w-2/5 px-2 py-10"></div>
                  <div class="w-1/5  flex justify-center">
                    <div class="relative flex h-full w-1 bg-green-300 items-center justify-center">
                      <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                        <div>20</div>
                        <div>сентября</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-2/5 px-2 py-10 ">
                    <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                      <div class="text-gray-600 mb-2 flex justify-between">
                        <div class="font-bold">Svetlana Torn</div>
                      </div>
                      <div class="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Corporis enim esse fuga modi quisquam veritatis?
                        Привет Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Ad corporis culpa deserunt,
                        dignissimos dolor esse fugit ipsam minus odit officiis
                        placeat qui, quidem quis soluta vero? Adipisci alias
                        eius et iure nam nihil reiciendis saepe, voluptatem.
                        Alias cumque dicta dignissimos ea et laborum, minima
                        similique.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row w-full">
                  <div class="w-2/5 px-2 py-10">
                    <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                      <div class="text-gray-600 mb-2 flex justify-between">
                        <div class="font-bold">Svjatoslav Torn</div>
                        <div class="flex flex-row">
                          <button class="text-blue-500 mr-2 hover:text-blue-300 transition duration-200">
                            <i class="far fa-edit"></i>
                          </button>
                          <button class="text-red-500 hover:text-red-300 transition duration-200">
                            <i class="far fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                      <div class="text-gray-600">
                        Привет Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Ad corporis culpa deserunt,
                        dignissimos dolor esse fugit ipsam minus odit officiis
                        placeat qui, quidem quis soluta vero? Adipisci alias
                        eius et iure nam nihil reiciendis saepe, voluptatem.
                        Alias cumque dicta dignissimos ea et laborum, minima
                        similique.
                      </div>
                    </div>
                  </div>
                  <div class="w-1/5  flex justify-center">
                    <div class="relative flex h-full w-1 bg-green-300 items-center justify-center">
                      <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-green-300 leading-none text-center z-10 bg-white font-thin">
                        <div>20</div>
                        <div>сентября</div>
                      </div>
                    </div>
                  </div>
                  <div class="w-2/5 px-2 py-10 "></div>
                </div>
              </div>
            </div>
          </div> */}

          <section id="Experience" class="px-0 py-20 mb-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          <h6 className="font-semibold">{"cloodot pvt ltd"}</h6>
                          <h6 className="text-xs ml-2">
                            ({"Sep 21 - Oct 22"})
                          </h6>
                        </div>
                        <h6 className="text-sm">{"Software Developer"}</h6>
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
                          <strong>Backend:</strong> Nodejs, Apollo graphql,
                          MongoDb
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
                          <h6 className="font-semibold">{"Freelancer"}</h6>
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
                          <strong>Backend:</strong> Nodejs, Express, MongoDb
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
                          <strong>Worked with:</strong> NodeJs, used npm elastic
                          search library,and mongodb as backend
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
                          <strong>Trained and worked with:</strong> PHP(Zend
                          framework), HTML, Javascript, Jquery, Ajax, PostgreSQL
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div
                class="my-0 mx-auto max-w-xs w-3/4"
                //style={{ width: "90vw", "max-width": "1170px", width: "80vw" }}
              >
                <div className="heading flex items-center pb-8">
                  <MdSchool size="0.875rem" className="mr-2" />
                  <h6 className="font-bold uppercase text-sm leading-none">
                    Education
                  </h6>
                </div>
                <div
                  class=" border-dashed m-0 px-8 py-8 relative border-r-2 ml-8 pl-0 timeline-item"
                  style={{
                    "border-bottom-right-radius": "2rem",
                  }}
                >
                  <img
                    src="logos/freecodecamp.png"
                    class="inline-block"
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
                    class="block text-base leading-normal mb-0"
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
                    class="right-0 bg-white grid place-items-center h-8 mb-0 absolute w-8"
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
                  class=" border-dashed border-t-2 m-0 px-8 py-8 relative border-l-2 mr-8 pr-0 timeline-item"
                  style={{
                    "border-top-left-radius": "2rem",
                    "border-bottom-left-radius": "2rem",
                  }}
                >
                  <img
                    src="icons/sreepathy.png"
                    class="inline-block"
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
                    class="block text-base leading-normal mb-0"
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
                      class="left-0 bg-white grid place-items-center h-8 mb-0 absolute w-8"
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
                  class=" border-dashed border-t-2 m-0 px-8 py-8 relative border-r-2 ml-8 pl-0 timeline-item"
                  style={{
                    "border-top-right-radius": "2rem",
                    "border-bottom-right-radius": "2rem",
                  }}
                >
                  <img
                    src="icons/kotakkal.png"
                    class="inline-block mb-1"
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
                    class="block text-base leading-normal mb-0"
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
                    class="right-0 bg-white grid place-items-center h-8 mb-0 absolute w-8"
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
                  class=" border-dashed border-t-2 m-0 px-8 py-8 relative border-l-2 mr-8 pr-0 timeline-item"
                  style={{
                    "border-top-left-radius": "2rem",
                  }}
                >
                  <img
                    src="icons/ushus.png"
                    class="inline-block rounded-full"
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
                    class="block text-base leading-normal mb-0"
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
                    class="left-0 bg-white grid place-items-center h-8 mb-0 absolute w-8"
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
        </AnimatedDiv>
        {/* <Support /> */}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const { post: about } = await new MDXContent("static_pages").getPostFromSlug(
    "about"
  );

  return {
    props: {
      about,
    },
  };
}
