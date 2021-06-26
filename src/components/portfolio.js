import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { _axios } from '../plugins/axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
import rkm from '../assets/rkm-1.png';
import cbse from '../assets/cbse.jpg';
import nita1 from '../assets/nit-cse.jpg';
import nitalogo from '../assets/nita-logo.png';
import bslogo from '../assets/bs.svg';
import mblogo from '../assets/mb.svg';
import react from "../assets/react-js.png";
import angular from "../assets/angular.png";
import js from "../assets/js.png";
import nodejs from "../assets/node-js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import scss from "../assets/scss.png";
import bootstrap from "../assets/bootstrap.png";
import ts from "../assets/ts.png";
import gulp from "../assets/gulp.png";
import java from "../assets/java.png";
import cplus from "../assets/cplus.png";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import hackerrank from '../assets/hackerrank.jpeg';
import udemy from '../assets/udemy.jpeg';
import certificate from '../assets/certificate.png';
import iitkgp from '../assets/iitkgp.png';
import Aos from "aos";
import Typical from 'react-typical';
class PortfolioComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: "Subham Saha"
    }
  }
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  goToSumanSirWebsite() {
    window.open('https://sumandeb.com/', '_blank');
  }

  openEmail() {
    window.open('mailto: subhamsahadeep@gmail.com', '_blank');
  }
  openFB() {
    window.open('https://www.facebook.com/subhamsahadeep/', '_blank');
  }
  openWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=+918974279359', '_blank');
  }
  openGithub() {
    window.open('https://github.com/Subhamsahadeep', '_blank');
  }
  openLinkedIn() {
    window.open('https://www.linkedin.com/in/subham-saha-336170119/', '_blank');
  }
  openInsta() {
    window.open('https://www.instagram.com/behighforever/', '_blank');
  }
  openCaller() {
    window.open(`tel:+917005201073`, '_self');
  }

  sectionHeader() {
    return (
      <Jumbotron fluid className="m-b-0">
        <Container>
          <div className="intro" data-aos="fade" data-aos-offset="500" data-aos-easing="ease-in-out-cubic" data-aos-duration="5000">
            <div className="uppercase slim"> Welcome to my world</div>
            <div className="name">
              Hi, I'm <span>SUBHAM SAHA</span>
            </div>
            <div className="location p-t-10">
              <div className="dynamic-texts">
                <Typical
                  steps={[
                    'javascript', 
                    1000, 
                    'React', 
                    2000, 
                    'Node Js', 
                    2000,
                    'Angular',
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="div"
                  className="typing-custom lowercase"
                />
                <div className="font-size-sm p-t-10 uppercase">
                  developer
                </div>
              </div>
            </div>
          </div>

        </Container>
      </Jumbotron>
    )
  }

  sectionAboutMe() {
    return (
      <div className="about-me">
        <div className="font-size-xxl bold uppercase width-100">
          About Me
          <div className="border-bottom-red-animate p-b-3"></div>
        </div>
        <div>
          <div className="font-size-lg p-10 text-align-justify color-very-light-grey" data-aos="fade-left">
            I am a full-stack Web Application Developer and Software Developer,
            currently living in Bengaluru, India. I am having 2+ years of experience. Apart from that, I
            have a Bachelor of Technology in Computer Science and Engineering from NIT Agartala, India.
            My primary focus and inspiration for my studies is Software Development and building great
            products to solve the real life problems of people. In my free time, I study human computer
            interface, the psychology of human computer interaction and also research about the advancement
            of technologies in automating any manual task in multiple fields. I am both driven and self-motivated,
            and I am constantly experimenting with new technologies and techniques. I am very passionate about Web
            Development, and strive to better myself as a developer, and the development community as a whole.
        </div>
        </div>
      </div>
    )
  }

  sectionEducation() {
    return (
      <div className="education">
        <div className="font-size-xxl bold uppercase width-100">
          Education
        <div className="width-50 border-bottom-red p-b-3"></div>
        </div>

        <Container className="p-t-20">
          <Row>
            <Col sm={12} md={6}>
              <div data-aos="fade-right">
                <Image src={rkm} className="width-100 p-10" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="display-table overflow-hidden height-400px">
                <div className="text-align-justify display-table-cell vertical-align-middle" data-aos="fade-left">
                  <span className="bold">
                    <a target="_blank" href="http://rkmv.edu.in/">
                      Ramakrishna Mission Vidyalaya
                    </a>
                  </span> bears the sacred name of Sri Ramakrishna
                and is run by the esteemed organization Ramakrishna Mission,
                Belur Math, which was founded by Swami Vivekananda himself with the objective
                - "one’s own salvation and for the welfare of the world". Vivekananda’s concept
                of ‘Man making and character building education’ is our guiding light. In Tripura
                our Vidyalaya has been carrying a uniform track record of quality education with high
                moral values for twenty five years.
            </div>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col sm={12} md={5}>
              <div className="education-card m-10" data-aos="zoom-out-up" data-aos-duration="2000">
                <div className="display-flex flex-wrap">
                  <div className="logo-width margin-auto text-align-center">
                    <Image src={cbse} className="p-10" />
                  </div>
                  <div className="logo-content-width margin-auto p-10">
                    <div className="text-align-center font-size-sm">
                      Central Board of Secondary Education
                        </div>
                    <div className="bold text-align-center font-size-smd">
                      All India Secondary School Examination
                        </div>
                    <div className="bold text-align-center font-size-lg">
                      95%
                        </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={12} md={5}>
              <div className="education-card m-10" data-aos="zoom-out-up" data-aos-duration="2000">
                <div className="display-flex flex-wrap">
                  <div className="logo-width margin-auto text-align-center">
                    <Image src={cbse} className="p-10" />
                  </div>
                  <div className="logo-content-width margin-auto p-10">
                    <div className="text-align-center font-size-sm">
                      Central Board of Secondary Education
                        </div>
                    <div className="bold text-align-center font-size-smd">
                      All India Senior School Certificate Examination
                        </div>
                    <div className="bold text-align-center font-size-lg">
                      93%
                        </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>

        <Container className="p-t-20">
          <Row>
            <Col sm={12} md={6}>
              <div data-aos="fade-right">
                <Image src={nita1} className="width-100 p-10" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="display-table overflow-hidden height-300px" data-aos="fade-left">
                <div className="text-align-justify display-table-cell vertical-align-middle">
                  <span className="bold">
                    <a target="_blank" href="https://www.nita.ac.in/">
                      National Institute of Technology Agartala (NIT Agartala or NITA)
                  </a>
                  </span> is a technology-oriented institute of higher education
                established by India's Ministry of Human Resource Development Government of
                India in Agartala, India. It was founded as Tripura Engineering College in
                1965 and declared a National Institute of Technology (NIT) in 2006, thus being
                recognized as an Institute of National Importance.
            </div>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col sm={12} md={6}>
              <div className="education-card m-10" data-aos="zoom-out-up" data-aos-duration="2000">
                <div className="display-flex flex-wrap">
                  <div className="logo-width margin-auto text-align-center">
                    <Image src={nitalogo} className="p-10" />
                  </div>
                  <div className="logo-content-width margin-auto p-10">
                    <div className="text-align-center font-size-sm">
                      National Institute of Technology Agartala
                        </div>
                    <div className="bold text-align-center font-size-smd">
                      B.Tech in Computer Science and Engineering
                  </div>
                    <div className="bold text-align-center">
                      <span className="font-size-sm p-r-10">
                        CGPA:
                    </span>
                      <span className="font-size-lg">
                        8.38/
                    </span>
                      <span className="font-size-sm">
                        10
                          </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>

        </Container>

      </div>
    )
  }

  sectionExperience() {
    return (
      <div className="experience">
        <div className="work-experience-text">
          EXPERIENCE
      </div>
        <Container className="p-t-50">
          <Row>
            <Col sm={12} md={6}>
              <div className="main-education-card m-b-20" data-aos="flip-down" data-aos-offset="10" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000">
                <div className="education-card buildsupply-card p-0">
                  <div className="width-100 p-15 text-align-center">
                    <Image src={bslogo} className="width-50"></Image>
                  </div>
                  <div>

                  </div>
                </div>
                <div className="p-20 text-align-center bold uppercase bs-text">
                  June 2019 - June 2020
              </div>
              </div>


            </Col>
            <Col sm={12} md={6}>
              <div className="main-education-card m-b-20" data-aos="flip-down" data-aos-offset="10" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000">
                <div className="education-card medibuddy-card">
                  <div className="width-100 p-15 text-align-center">
                    <Image src={mblogo} className="width-50"></Image>
                  </div>
                </div>
                <div className="p-20 text-align-center bold uppercase mb-text">
                  July 2020 - Present
              </div>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  sectionSkills() {
    return (
      <div className="skills">
        <div className="skills-text">
          SKILLS
    </div>
        <Container className="p-t-30">

          <div className="display-flex justify-content-space-around flex-wrap width-100">
            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={react} className="width-100"></Image>
              </div>
              <div className="bold text-align-center">
                REACT
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={angular} className="width-100"></Image>
              </div>
              <div className="bold text-align-center">
                Angular
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={js} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                JavaScript
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={nodejs} className="width-69 m-t-25"></Image>
              </div>
              <div className="bold text-align-center">
                Node JS
              </div>
            </div>


            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={html} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                HTML
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={css} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                CSS
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={scss} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                SCSS
              </div>
            </div>
            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={bootstrap} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                Bootstrap
              </div>
            </div>

            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={ts} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                TypeScript
              </div>
            </div>

            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={gulp} className="width-35"></Image>
              </div>
              <div className="bold text-align-center">
                Gulp
              </div>
            </div>

            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={java} className="width-80"></Image>
              </div>
              <div className="bold text-align-center">
                Java
              </div>
            </div>


            <div className="skills-card" data-aos="zoom-in-up" data-aos-duration="2000">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={cplus} className="width-100 p-t-10 "></Image>
              </div>
              <div className="bold text-align-center">
                C++
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  sectionPublications() {
    return (
      <div className="publications">
        <div className="font-size-xxl bold uppercase width-100">
          Publications
          <div className="width-50 border-bottom-red p-b-3"></div>
        </div>
        <div className="p-t-25">
          <Accordion>
            <Card data-aos="fade-up-left" data-aos-duration="2500">
              <Accordion.Toggle as={Card.Header} eventKey="0" className="cursor-pointer">
                <div className="display-flex">
                  <div className="width-75">
                    <div className="bold font-size-md">
                      Designing a Mobile based Non-Verbal Classroom Interaction System
                  </div>
                    <div className="font-size-sm">
                      Mar 28, 2019 - SSRN
                  </div>
                    <div className="font-size-sm uppercase p-t-10 p-b-10">
                      <a target="_blank" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3361038">See Publication</a>
                    </div>
                  </div>
                  <div className="width-25 text-align-right">
                    <div className="bold font-size-sm">
                      Authors
                      </div>
                    <div className="font-size-smd">
                      Subham Saha
                      </div>
                    <div className="font-size-smd suman-sir" onClick={() => this.goToSumanSirWebsite()}>
                      Suman Deb
                      </div>
                  </div>

                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="p-10 text-align-justify">
                    Affordable technology has made mobile devices very popular and a
                    ubiquitous part of our everyday life. So, as it has also influenced
                    the people’s activity and conduct. We will discuss a very specific domain
                    of influence with this mobile, a classroom of higher studies. In general,
                    a classroom is a one to many interaction environments where one teacher
                    largely addresses a topic to a group of students. This work explored how
                    this mobile technology can be used as an interactive tool in the classroom
                    environment. In higher studies, students have their own phase of
                    understanding and cognitive decision making, which makes it difficult
                    to accept all the classroom deliverables with attention. Moreover, with
                    the availability of Massive Open Online Courses (MOOCs) and self-phased
                    learning contents from all over the world, the classroom interaction becomes
                    very difficult for a teacher. In this work, we tried to explore the potential
                    of mobile devices which can be transformed into a usable interaction alternative
                    for enhancing the classroom delivery and interaction mechanism as an engaging framework.
                    Pleasurable learning is an activity which is parameterised and obtained as a feedback
                    through Rapid Responsive Optical Marker System (RROMS). The studies and experiments
                    conducted in this paper clearly reveal that rapid interaction in one-to-many scenario
                    can be achieved effortlessly without any additional infrastructure load with optical
                    marker based and nonverbal response collection system. We tried to explore different
                    possibilities of quick markers as a mobile supported interactive classroom design with
                    a formative interaction for a teacher to get an insight into learners’ activity.
                </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>


            <Card data-aos="fade-up-right" data-aos-duration="2500">
              <Accordion.Toggle as={Card.Header} eventKey="1" className="cursor-pointer">
                <div className="display-flex">
                  <div className="width-75">
                    <div className="bold font-size-md">
                      BYOD Supported Multimodal Classroom Interaction
                  </div>
                    <div className="font-size-sm">
                      Apr 17, 2020 - Elsevier
                  </div>
                    <div className="font-size-sm uppercase p-t-10 p-b-10">
                      <a target="_blank" href="https://www.sciencedirect.com/science/article/pii/S1877050920308309?via%3Dihub">See Publication</a>
                    </div>
                  </div>
                  <div className="width-25 text-align-right">
                    <div className="bold font-size-sm">
                      Authors
                      </div>
                    <div className="font-size-smd">
                      Subham Saha
                      </div>
                    <div className="font-size-smd suman-sir" onClick={() => this.goToSumanSirWebsite()}>
                      Suman Deb
                      </div>
                  </div>

                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div className="p-10 text-align-justify">
                    Classroom is an exclusive place of face to face interaction,
                    where learning takes place primarily in a broadcast mode and knowledge
                    is transferred from teacher to students in a one to many face to face interaction
                    manner. Significantly during this interaction, different cognitive level of students
                    are assembled together. Because of variation in intellectual levels of students, some
                    students can grab the lecture very quickly while others may lag. Therefore, systematic
                    interaction in classroom is very essential at present context where there are large number
                    of learning alternatives available and importance of classroom may be misunderstood by
                    students. The development and usage of different technologies for teaching and learning in
                    last few years have grown exponentially whereas no such advancements in case of classroom
                    interactions. This work is an emphasis on exploring BYOD systems which include mobile phones,
                    tablets, laptops etc as a cost effective interaction tool in face to face learning.
                    A Multilayer interaction was used where a teacher can get a feedback from the students as
                    well as students can express their doubts in non-verbal manner. It was tried to put
                    emphasis on human natural interaction ability and expressions, not revealing ones personal
                    doubts in public as well as removing the stigma of public hand raising. Non-verbal
                    interaction in term of screen tapping and feedback are combined together to find the
                    comfortable interaction between the teachers and students. It is found use of mobile devices
                    is a cost effective system that students are more active and engaged on in interacting in
                    teaching learning activity in traditional classroom pedagogy. Overall this work is an effort
                    to increase the pleasure level of students, by allowing them to participate in an active
                    formative class room interaction and the classroom can be extended as an augmented layer
                    for teacher to have an insight in to an individual students.
                 </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    )
  }

  sectionCertifications() {
    return (
      <div className="publications">
        <div className="font-size-xxl bold uppercase width-100">
          Internships and Certifications
          <div className="width-50 border-bottom-red p-b-3"></div>
        </div>
        <div className="certifaction-card display-flex flex-wrap m-15" data-aos="zoom-out-up" data-aos-duration="2000">
          <div className="width-10">
            <Image src={hackerrank} className="width-100"></Image>
          </div>
          <div className="width-70 p-20">
            <div className="bold font-size-md">
              Problem Solving
            </div>
            <div className="font-size-md">
              HackerRank
            </div>
            <div className="bold font-size-smd uppercase">
              September 2020
            </div>
            <div className="uppercase font-size-sm p-t-10">
              <a target="_blank" href="https://www.hackerrank.com/certificates/2cf22acfe952">See Certification</a>
            </div>
          </div>
          <div className="width-20 text-align-right">
            <div className="width-100">
              <Image className="certificate-logo" src={certificate}></Image>
            </div>
            <div className="uppercase font-size-sm">
            </div>
          </div>
        </div>

        <div className="certifaction-card display-flex flex-wrap m-15" data-aos="zoom-out-up" data-aos-duration="2000">
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
              <a target="_blank" href="https://drive.google.com/file/d/1oHS-1vI71xwXmd9VuEWSYqx0O2GqynfY/view?usp=sharing">See Certification</a>
            </div>
          </div>
          <div className="width-20 text-align-right">
            <div className="width-100">
              <Image className="certificate-logo" src={certificate}></Image>
            </div>
            <div className="uppercase font-size-sm">
            </div>
          </div>
        </div>

        <div className="certifaction-card display-flex flex-wrap m-15" data-aos="zoom-out-up" data-aos-duration="2000">
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
            <div className="bold font-size-smd uppercase">
              December 2018
            </div>
            <div className="uppercase font-size-sm p-t-10">
              <a target="_blank" href="https://drive.google.com/file/d/16GeZyPmx2WgKFSgFRnf_LN3er8sU3bxo/view?usp=drivesdk">See Certification</a>
            </div>
          </div>
          <div className="width-20 text-align-right">
            <div className="width-100">
              <Image className="certificate-logo" src={certificate}></Image>
            </div>
            <div className="uppercase font-size-sm">
            </div>
          </div>
        </div>

        <div className="certifaction-card display-flex flex-wrap m-15" data-aos="zoom-out-up" data-aos-duration="2000">
          <div className="width-10">
            <Image src={udemy} className="width-100"></Image>
          </div>
          <div className="width-70 p-20">
            <div className="bold font-size-md">
              Building Database Web App using PHP, OOP, PDO, AJAX and MySQL
            </div>
            <div className="font-size-md">
              Udemy
            </div>
            <div className="bold font-size-smd uppercase">
              September 2018
            </div>
            <div className="uppercase font-size-sm p-t-10">
              <a target="_blank" href="https://drive.google.com/drive/u/0/folders/1NtzF7W7hir2pvh-MkatDA3NIsjS4YHtu">See Certification</a>
            </div>
          </div>
          <div className="width-20 text-align-right">
            <div className="width-100">
              <Image className="certificate-logo" src={certificate}></Image>
            </div>
            <div className="uppercase font-size-sm">
            </div>
          </div>
        </div>

      </div>
    )
  }

  sectionFooter() {
    return (
      <div className="contact-card">
        <div className="font-size-xxl bold uppercase text-align-center width-100" data-aos="fade">
          Contact
          <div className="margin-auto width-50 border-bottom-red p-b-3"></div>
        </div>
        <div className="text-align-center m-t-30" data-aos="fade">
          <div className="wrapper">
            <div className="icon facebook" onClick={() => this.openFB()}>
              <div className="tooltip">Facebook</div>
              <span><i className="fa fa-facebook-f"></i></span>
            </div>
            <div className="icon whatsapp" onClick={() => this.openWhatsapp()}>
              <div className="tooltip">Whatsapp</div>
              <span>
                <i className="fa fa-whatsapp"></i>
              </span>
            </div>
            <div className="icon instagram" onClick={() => this.openInsta()}>
              <div className="tooltip">Instagram</div>
              <span><i className="fa fa-instagram"></i></span>
            </div>
            <div className="icon github" onClick={() => this.openGithub()}>
              <div className="tooltip">Github</div>
              <span><i className="fa fa-github"></i></span>
            </div>
            <div className="icon linkedin" onClick={() => this.openLinkedIn()}>
              <div className="tooltip">LinkedIn</div>
              <span><i className="fa fa-linkedin"></i></span>
            </div>
          </div>
        </div>

        <div data-aos="fade">
          <div className="text-align-center p-10">
            <div>
              <span><i className="fa fa-envelope"></i></span>
            </div>
            <div>
              subhamsahadeep@gmail.com
            </div>
          </div>

          <div className="text-align-center p-10">
            <div>
              <span><i className="fa fa-phone"></i></span>
            </div>
            <div className="cursor-pointer" onClick={() => this.openCaller()}>
              +91-7005201073
            </div>
          </div>
        </div>

      </div>
    )
  }
  render() {
    return (
      <div>
        {this.sectionHeader()}
        {this.sectionAboutMe()}
        {this.sectionEducation()}
        {this.sectionExperience()}
        {this.sectionSkills()}
        {this.sectionPublications()}
        {this.sectionCertifications()}
        {this.sectionFooter()}
      </div>
    )
  }
}
export default PortfolioComponent;