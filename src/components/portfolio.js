import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import resume from "../documents/resume.pdf";
import nitalogo from "../assets/nita-logo.png";
import bslogo from "../assets/bs.svg";
import mblogo from "../assets/mb.svg";
import travelopia from "../assets/travelopia.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import hackerrank from "../assets/hackerrank.jpeg";
import certificate from "../assets/certificate.png";
import iitkgp from "../assets/iitkgp.png";
import Aos from "aos";
import Typical from "react-typical";
class PortfolioComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: "Subham Saha",
      travelopiaEx: [
        "Developed the ’myTCS’ and ’FourSeasons’ platform’s front-end (post reservation) ensuring consistent component structure across diverse brand themes using semantic tokens and extendTheme by Chakra UI. Enhanced platform capabilities significantly by seamlessly integrating static data fetching from a CMS tool (Sanity).",
        "Developing custom React components with individualized designs using Chakra UI’s defineStyle and semantics to maintain a similar user experience for all themes. Utilizing Storybook for thorough component testing.",
        "Batching HTTP requests with TRPC and Zod types ensures type safety and boosts reusability. AWS Step Functions synchronize payment flow processes, invoking lambda functions at each step.",
        "Improved app performance from 10 seconds to 500 milliseconds with a cache layer, enhancing user experience. Leveraged SQS for faster write operations and asynchronous data syncing, optimizing performance further.",
      ],
      mbEx2: [
        "Improving Medibuddy’s Core Vitals [ LCP , TBT ] ( Accessibility Score 65 to 80 and SEO Score 75 to 92 )",
        "Implemented Automated Dialler for Insurance business segment. This development helped to minimise manual calling to customers and more conversion of calls. [ Integrations with Kaleyra and Ameyo ]",
        "Real-time syncing of all the case data for different insurers - Internal tool developed for Analytics. ( receiving 70K requests on an average )",
        "Developed an internal Pdf tool that includes Splitting, Swapping, Rearranging, and Merging any kind of Pdfs.",
        "Migration of React Class Components to Functional Components and also to Next JS ( SSR ) and also revamping of complete UI for online-consultations app and other internal tools.",
        "End to end development of Phlebo APP ( Front-End ) which is used by all the Phlebotomists. It has features like login, order dashboard, camera features, bar-code scanner, etc.",
        "End to end development of Provider/Insurer Portal ( Front-End ) for all the providers and insurers to track each and every case detail and to handle daily tasks. Features: Different dashboards based on user roles, dynamic Routing, etc.",
        "Mentored a team of developers who were working on Front-End Offline Consults.",
      ],
      mbEx1: [
        "Development of Medibuddy Gold Page.",
        "Ownership of Medibuddy's Internal Tool Procheck for maintaining journey of any pre-policy cases.",
        "Generation of Digital Medical Examination Report ( DigiMER ) for all the insurers ( B2B ) and making sure the reports are generated according to their report standards which holds the details of the conversion between Doctors and Patients.",
        "Doctor Consultation Dashboard where the doctor can ask respective questions to the patients ( the questions are dynamic as those questions are different for each insurers )",
      ],
      bsEx: [
        "Designed and developed the Material Manager, an end-to-end construction-focused inventory management solution using Angular. This platform enables customers to efficiently manage project procurement and provides real-time tracking of material inventory across multiple projects. - 1000+ Cases Handing daily.",
      ],
      iitEx: [
        "Essential Drug Information System - Developed a comprehensive doctor dashboard with a medicine search engine for seamless prescription, including the ability to add new medicines to the database.",
      ],
    };
  }
  componentDidMount() {
    Aos.init({ duration: 1000, once: true });
  }

  openResume() {
    window.open("../documents/resume.pdf", "Download");
  }
  goToSumanSirWebsite() {
    window.open("https://sumandeb.com/", "_blank");
  }

  openEmail() {
    window.open("mailto: subhamsahadeep@gmail.com", "_blank");
  }
  openIIT() {
    window.open("https://www.iitkgp.ac.in/", "_blank");
  }
  openNita() {
    window.open("https://www.nita.ac.in/", "_blank");
  }
  openRkm() {
    window.open("http://rkmv.edu.in/", "_blank");
  }
  openTravelopia() {
    window.open("https://travelopia.com/", "_blank");
  }
  openMedibuddy() {
    window.open("https://medibuddy.in/", "_blank");
  }

  openGithub() {
    window.open("https://github.com/Subhamsahadeep", "_blank");
  }
  openLinkedIn() {
    window.open("https://www.linkedin.com/in/subhamsahadeep", "_blank");
  }

  openCaller() {
    window.open(`tel:+917005201073`, "_self");
  }

  sectionHeader() {
    return (
      <div className="main-jumbo-div position-relative">
        <Jumbotron fluid className="m-b-0">
          <Container>
            <div
              className="intro"
              data-aos="fade"
              data-aos-offset="200"
              data-aos-easing="ease-in-out-cubic"
            >
              <div className="uppercase slim"> Thank you for visiting </div>
              <div className="name">
                Hi, I'm <span> SUBHAM SAHA</span>
              </div>
              <div className="location p-t-10">
                <div className="dynamic-texts">
                  <Typical
                    steps={[
                      "Javascript",
                      2000,
                      "React js",
                      2000,
                      "Next js",
                      2000,
                      "Node Js",
                      2000,
                      "Angular",
                      2000,
                    ]}
                    loop={Infinity}
                    wrapper="div"
                    className="typing-custom lowercase"
                  />
                  <div className="font-size-sm p-t-10 uppercase">developer</div>
                </div>
              </div>
            </div>
          </Container>

          <a href={resume} download="resume" target="_blank">
            <div className="wrapper-resume resume">
              <div className="icon resume-fafa">
                <div className="tooltip">Resume</div>

                <span>
                  <i className="fa fa-file-pdf-o"></i>
                </span>
              </div>
            </div>
          </a>
        </Jumbotron>
      </div>
    );
  }

  sectionAboutMe() {
    return (
      <div className="about-me">
        <div className="font-size-xxl bold uppercase width-100">
          About Me
          <div className="border-bottom-red-animate p-b-3"></div>
        </div>
        <div>
          <div className="responsive-text p-10 text-align-justify color-very-light-grey">
            I'm a Software Development Engineer 2 and a Full Stack Web Developer
            with 5 years of experience. I have a proven track record of
            developing innovative and user-friendly web applications, with over
            7 customer-facing products that have gained a user base from all
            over India. <br></br>
            Working in a startup culture from the beginning has provided me with
            valuable experience in all aspects of web development, including
            design, development, testing, and deployment. I have a deep
            understanding of user experience and design principles, which allows
            me to create interfaces that are visually appealing and intuitive.{" "}
            <br></br>
            Overall, I'm a dedicated developer who is passionate about
            delivering exceptional results. My strong problem-solving skills and
            ability to learn and adapt quickly to new technologies and
            programming languages have been instrumental in delivering quality
            products that meet the needs of clients and users.
          </div>
        </div>
      </div>
    );
  }

  sectionEducation() {
    return (
      <div className="education">
        <div className="font-size-xxl bold uppercase width-100">
          ACADEMIA
          <div className="width-50 border-bottom-red p-b-3"></div>
        </div>

        <div className="p-20">
          <Row>
            <Col sm={12} md={6}>
              <div className="academia-main" data-aos="slide-up">
                <div
                  className="education-image-div bg-rkm cursor-pointer"
                  onClick={() => this.openRkm()}
                >
                  <div className="position-absolute bottom-0 color-white bold bg-linear-black font-size-smd text-center bold name-anchor width-100">
                    Ramakrishna Mission Vidyalaya
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="academia-main" data-aos="slide-up">
                <div
                  className="education-image-div bg-nita cursor-pointer"
                  onClick={() => this.openNita()}
                >
                  <div className="position-absolute bottom-0 color-white bold bg-linear-black font-size-smd text-center bold name-anchor width-100">
                    National Institute of Technology Agartala (NITA)
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  sectionExperience() {
    return (
      <div className="experience">
        <div className="work-experience-text" data-aos="zoom-in">
          I am proud to be associated with these amazing companies
        </div>
        <div className="p-t-50">
          <Row>
            <Col sm={12} md={{ span: 8, offset: 2 }}>
              <div
                className="main-education-card m-b-20 cursor-pointer"
                data-aos="zoom-in"
                onClick={() => this.openTravelopia()}
              >
                <div className="education-card travelopia-card">
                  <div className="width-100 m-auto pt-2 text-align-center">
                    <Image src={travelopia} className="brand-logo"></Image>
                  </div>
                  <div className="gray-color font-size-smd text-center p-1 bold">
                    Product Engineer
                  </div>
                  <div>
                    <div className="pl-3 pt-2 bold uppercase travelopia-text">
                      October 2023 - Present
                    </div>
                    <ul style={{ paddingLeft: "30px" }}>
                      {this.state.travelopiaEx.map((el, index) => (
                        <li className="exp-items" key={index}>
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr></hr>
                  <div
                    className="p-2 bold uppercase travelopia-text text-center"
                    style={{
                      fontSize: "12px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Languages and Skills :
                    Tailwind,Bootstrap,NextJs,Node.js,Express.js,ReactJs,JavaScript,
                    TypeScript, React Query, React Hook Form, Zod, TRPC, Chakra
                    UI, Libraries and Tools : Jenkins, GIT Actions, Docker,
                    StoryBook, Jest, React Testing Library, Husky, Lint-Stage,
                    AWS, Redis, Clevertap, Sentry, DataDog, Newrelic
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={{ span: 8, offset: 2 }}>
              <div
                className="main-education-card m-b-20 cursor-pointer"
                data-aos="zoom-in"
                onClick={() => this.openMedibuddy()}
              >
                <div className="education-card medibuddy-card">
                  <div className="width-100 m-auto p-15 text-align-center">
                    <Image src={mblogo} className="brand-logo"></Image>
                  </div>
                  <div className="gray-color font-size-smd text-center p-1 bold">
                    Software Development Engineer - II
                  </div>
                  <div>
                    <div className="pl-3 pt-2 bold uppercase mb-text">
                      January 2022 - October 2023
                    </div>
                    <ul style={{ paddingLeft: "30px" }}>
                      {this.state.mbEx2.map((el, index) => (
                        <li className="exp-items" key={index}>
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr></hr>
                  <div className="gray-color font-size-smd text-center p-1 bold">
                    Software Development Engineer - I
                  </div>
                  <div>
                    <div className="pl-3 pt-2 bold uppercase mb-text">
                      July 2020 - January 2022
                    </div>
                    <ul style={{ paddingLeft: "30px" }}>
                      {this.state.mbEx1.map((el, index) => (
                        <li className="exp-items" key={index}>
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr></hr>
                  <div
                    className="p-2 bold uppercase mb-text text-center"
                    style={{
                      fontSize: "12px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Worked On : React.js, Next.js, Node.js, Angular, TypeScript,
                    JavaScript, PostGres, Redis, MySQL, AWS SQS, Cloudwatch, S3,
                    Cloudfront, Docker, Jenkins. <br />
                    Analytics: Google Analytics, Branch, Clevertap, New-Relic,
                    Re-tool
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={{ span: 8, offset: 2 }}>
              <div
                className="main-education-card m-b-20"
                data-aos="zoom-in"
                onClick={() => this.openBuildSupply()}
              >
                <div className="education-card buildsupply-card p-0">
                  <div className="width-100 p-15 text-align-center">
                    <Image src={bslogo} className="brand-logo"></Image>
                  </div>
                  <div>
                    <div className="gray-color text-center p-1 bold">
                      Analyst - Software Engineer
                    </div>
                    <div>
                      <div className="pl-3 pt-2 bold uppercase  bs-text">
                        June 2019 - June 2020
                      </div>
                      <ul style={{ paddingLeft: "30px" }}>
                        {this.state.bsEx.map((el, index) => (
                          <li className="exp-items" key={index}>
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={{ span: 8, offset: 2 }}>
              <div
                className="main-education-card m-b-20"
                data-aos="zoom-in"
                onClick={() => this.openIIT()}
              >
                <div className="education-card iit-card p-0">
                  <div className="width-100 p-15 text-align-center">
                    <Image src={iitkgp} className="width-10"></Image>
                  </div>
                  <div>
                    <div className="gray-color text-center p-1 bold">
                      Indian Institute of Technology, Kharagpur
                    </div>
                    <div>
                      <div className="pl-3 pt-2 bold uppercase  iit-text">
                        May 2018 - June 2018 ( Summer Intern )
                      </div>
                      <ul style={{ paddingLeft: "30px", paddingTop: "5px" }}>
                        {this.state.iitEx.map((el, index) => (
                          <li className="exp-items" key={index}>
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  sectionPublications() {
    return (
      <div className="publications">
        <div className="font-size-xxl bold uppercase width-100">
          Publications
          <div className="width-50 border-bottom-red p-b-3"></div>
        </div>
        <div className="p-t-25" data-aos="fade">
          <Accordion>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="cursor-pointer"
              >
                <div className="display-flex">
                  <div className="width-75">
                    <div className="bold font-size-md">
                      Designing a Mobile based Non-Verbal Classroom Interaction
                      System
                    </div>
                    <div className="font-size-sm">Mar 28, 2019 - SSRN</div>
                    <div className="font-size-sm uppercase p-t-10 p-b-10">
                      <a
                        target="_blank"
                        href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3361038"
                      >
                        See Publication
                      </a>
                    </div>
                  </div>
                  <div className="width-25 text-align-right">
                    <div className="bold font-size-sm">Authors</div>
                    <div className="font-size-smd">Subham Saha</div>
                    <div
                      className="font-size-smd suman-sir"
                      onClick={() => this.goToSumanSirWebsite()}
                    >
                      Suman Deb
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="p-10 text-align-justify">
                    Affordable technology has made mobile devices very popular
                    and a ubiquitous part of our everyday life. So, as it has
                    also influenced the people’s activity and conduct. We will
                    discuss a very specific domain of influence with this
                    mobile, a classroom of higher studies. In general, a
                    classroom is a one to many interaction environments where
                    one teacher largely addresses a topic to a group of
                    students. This work explored how this mobile technology can
                    be used as an interactive tool in the classroom environment.
                    In higher studies, students have their own phase of
                    understanding and cognitive decision making, which makes it
                    difficult to accept all the classroom deliverables with
                    attention. Moreover, with the availability of Massive Open
                    Online Courses (MOOCs) and self-phased learning contents
                    from all over the world, the classroom interaction becomes
                    very difficult for a teacher. In this work, we tried to
                    explore the potential of mobile devices which can be
                    transformed into a usable interaction alternative for
                    enhancing the classroom delivery and interaction mechanism
                    as an engaging framework. Pleasurable learning is an
                    activity which is parameterised and obtained as a feedback
                    through Rapid Responsive Optical Marker System (RROMS). The
                    studies and experiments conducted in this paper clearly
                    reveal that rapid interaction in one-to-many scenario can be
                    achieved effortlessly without any additional infrastructure
                    load with optical marker based and nonverbal response
                    collection system. We tried to explore different
                    possibilities of quick markers as a mobile supported
                    interactive classroom design with a formative interaction
                    for a teacher to get an insight into learners’ activity.
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                className="cursor-pointer"
              >
                <div className="display-flex">
                  <div className="width-75">
                    <div className="bold font-size-md">
                      BYOD Supported Multimodal Classroom Interaction
                    </div>
                    <div className="font-size-sm">Apr 17, 2020 - Elsevier</div>
                    <div className="font-size-sm uppercase p-t-10 p-b-10">
                      <a
                        target="_blank"
                        href="https://www.sciencedirect.com/science/article/pii/S1877050920308309?via%3Dihub"
                      >
                        See Publication
                      </a>
                    </div>
                  </div>
                  <div className="width-25 text-align-right">
                    <div className="bold font-size-sm">Authors</div>
                    <div className="font-size-smd">Subham Saha</div>
                    <div
                      className="font-size-smd suman-sir"
                      onClick={() => this.goToSumanSirWebsite()}
                    >
                      Suman Deb
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div className="p-10 text-align-justify">
                    Classroom is an exclusive place of face to face interaction,
                    where learning takes place primarily in a broadcast mode and
                    knowledge is transferred from teacher to students in a one
                    to many face to face interaction manner. Significantly
                    during this interaction, different cognitive level of
                    students are assembled together. Because of variation in
                    intellectual levels of students, some students can grab the
                    lecture very quickly while others may lag. Therefore,
                    systematic interaction in classroom is very essential at
                    present context where there are large number of learning
                    alternatives available and importance of classroom may be
                    misunderstood by students. The development and usage of
                    different technologies for teaching and learning in last few
                    years have grown exponentially whereas no such advancements
                    in case of classroom interactions. This work is an emphasis
                    on exploring BYOD systems which include mobile phones,
                    tablets, laptops etc as a cost effective interaction tool in
                    face to face learning. A Multilayer interaction was used
                    where a teacher can get a feedback from the students as well
                    as students can express their doubts in non-verbal manner.
                    It was tried to put emphasis on human natural interaction
                    ability and expressions, not revealing ones personal doubts
                    in public as well as removing the stigma of public hand
                    raising. Non-verbal interaction in term of screen tapping
                    and feedback are combined together to find the comfortable
                    interaction between the teachers and students. It is found
                    use of mobile devices is a cost effective system that
                    students are more active and engaged on in interacting in
                    teaching learning activity in traditional classroom
                    pedagogy. Overall this work is an effort to increase the
                    pleasure level of students, by allowing them to participate
                    in an active formative class room interaction and the
                    classroom can be extended as an augmented layer for teacher
                    to have an insight in to an individual students.
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }

  sectionCertifications() {
    return (
      <div className="publications">
        <div className="font-size-xxl bold uppercase width-100">
          Internships and Certifications
          <div className="width-50 border-bottom-red p-b-3"></div>
        </div>
        <div className="certifaction-card display-flex flex-wrap m-15">
          <div className="width-10">
            <Image src={hackerrank} className="width-100"></Image>
          </div>
          <div className="width-70 p-20">
            <div className="bold font-size-md">Problem Solving</div>
            <div className="font-size-md">HackerRank</div>
            <div className="bold font-size-smd uppercase">September 2020</div>
            <div className="uppercase font-size-sm p-t-10">
              <a
                target="_blank"
                href="https://www.hackerrank.com/certificates/2cf22acfe952"
              >
                See Certification
              </a>
            </div>
          </div>
          <div className="width-20 text-align-right">
            <div className="width-100">
              <Image className="certificate-logo" src={certificate}></Image>
            </div>
            <div className="uppercase font-size-sm"></div>
          </div>
        </div>

        <div className="certifaction-card display-flex flex-wrap m-15">
          <div className="width-10">
            <Image src={iitkgp} className="width-100"></Image>
          </div>
          <div className="width-70 p-20">
            <div className="bold font-size-md">
              Essential Drug Information System
            </div>
            <div className="font-size-md">
              Indian Institute of Technology, Kharagpur
            </div>
            <div className="bold font-size-smd uppercase">
              May 2018 - June 2018 ( Summer Intern )
            </div>

            <div className="uppercase font-size-sm p-t-10">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1I4kma-Crd9wJwLkbWeBITAyByFBEQyA9/view?usp=sharing"
              >
                See Certification
              </a>
            </div>
          </div>
          <div className="width-20 text-align-right">
            <div className="width-100">
              <Image className="certificate-logo" src={certificate}></Image>
            </div>
            <div className="uppercase font-size-sm"></div>
          </div>
        </div>

        <div className="certifaction-card display-flex flex-wrap m-15">
          <div className="width-10">
            <Image src={nitalogo} className="width-100"></Image>
          </div>
          <div className="width-70 p-20">
            <div className="bold font-size-md">
              Designing an Optical Response Based Rapid Classroom Interaction
            </div>
            <div className="font-size-md">
              National Institute of Technology Agartala
            </div>
            <div className="bold font-size-smd uppercase">December 2018</div>
            <div className="uppercase font-size-sm p-t-10">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1qQJiVZlT24nYq7O_AmwEtGUpvxU5pQCT/view?usp=sharing"
              >
                See Certification
              </a>
            </div>
          </div>
          <div className="width-20 text-align-right">
            <div className="width-100">
              <Image className="certificate-logo" src={certificate}></Image>
            </div>
            <div className="uppercase font-size-sm"></div>
          </div>
        </div>
      </div>
    );
  }

  sectionFooter() {
    return (
      <div className="contact-card">
        <div
          className="font-size-xxl bold uppercase text-align-center width-100"
          data-aos="fade"
        >
          Contact
          <div className="margin-auto width-50 border-bottom-red p-b-3"></div>
        </div>
        <div className="text-align-center m-t-30" data-aos="fade">
          <div className="wrapper">
            <div className="icon github" onClick={() => this.openGithub()}>
              <div className="tooltip">Github</div>
              <span>
                <i className="fa fa-github"></i>
              </span>
            </div>
            <div className="icon linkedin" onClick={() => this.openLinkedIn()}>
              <div className="tooltip">LinkedIn</div>
              <span>
                <i className="fa fa-linkedin"></i>
              </span>
            </div>
          </div>
        </div>

        <div data-aos="fade">
          <div className="text-align-center p-10">
            <div>
              <span>
                <i className="fa fa-envelope"></i>
              </span>
            </div>
            <div>subhamsahadeep@gmail.com</div>
          </div>

          <div className="text-align-center p-10">
            <div>
              <span>
                <i className="fa fa-phone"></i>
              </span>
            </div>
            <div className="cursor-pointer" onClick={() => this.openCaller()}>
              +91-7005201073
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        {this.sectionHeader()}
        {this.sectionAboutMe()}
        {this.sectionEducation()}
        {this.sectionExperience()}
        {this.sectionPublications()}
        {/* {this.sectionCertifications()} */}
        {this.sectionFooter()}
      </>
    );
  }
}
export default PortfolioComponent;
