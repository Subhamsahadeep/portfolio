import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import rkm from '../assets/rkm-1.png';
import resume from '../documents/resume.pdf';
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
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import cplus from "../assets/cplus.png";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import hackerrank from '../assets/hackerrank.jpeg';
import udemy from '../assets/udemy.jpeg';
import certificate from '../assets/certificate.png';
import iitkgp from '../assets/iitkgp.png';
import nextjs from '../assets/nextjs.png';
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

  openResume(){
    window.open('../documents/resume.pdf', 'Download');
  }
  goToSumanSirWebsite() {
    window.open('https://sumandeb.com/', '_blank');
  }

  openEmail() {
    window.open('mailto: subhamsahadeep@gmail.com', '_blank');
  }
  openBuildSupply(){
    // window.open('https://buildsupply.com/','_blank');
  }
  openMedibuddy(){
    window.open('https://medibuddy.in/','_blank');
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
      <div className="main-jumbo-div position-relative">
      <Jumbotron fluid className="m-b-0">
        <Container>
          <div className="intro" data-aos="fade" data-aos-offset="200" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000">
            <div className="uppercase slim"> Thank you for visiting </div>
            <div className="name">
              Hi, I'm <span> SUBHAM SAHA</span>
            </div>
            <div className="location p-t-10">
              <div className="dynamic-texts">
                <Typical
                  steps={[
                    'Javascript', 
                    2000, 
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
         
        <a href={resume} download="resume" target='_blank'>
        <div className="wrapper-resume resume">
              <div className="icon resume-fafa">
            
                <div className="tooltip">Resume</div>
             
               
                <span><i className="fa fa-file-pdf-o"></i></span>
              </div>
            </div>
          </a>
           
         
      </Jumbotron>
      </div>
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
          <div className="responsive-text p-10 text-align-justify color-very-light-grey">
          I'm a Software Development Engineer 2 and a Full Stack Web Developer with 4 years of experience. I have a proven track record of developing innovative and user-friendly web applications, with over 7 customer-facing products that have gained a user base from all over India. <br></br>

Working in a startup culture from the beginning has provided me with valuable experience in all aspects of web development, including design, development, testing, and deployment. I have a deep understanding of user experience and design principles, which allows me to create interfaces that are visually appealing and intuitive.  <br></br>

Overall, I'm a dedicated developer who is passionate about delivering exceptional results. My strong problem-solving skills and ability to learn and adapt quickly to new technologies and programming languages have been instrumental in delivering quality products that meet the needs of clients and users.
        </div>
        </div>
      </div>
    )
  }

  sectionEducation() {
    return (
      <div className="education">
        <div className="font-size-xxl bold uppercase width-100">
          ACADEMIA
        <div className="width-50 border-bottom-red p-b-3"></div>
        </div>

        <Container className="p-t-20">
          <Row className="p-b-20">
            <Col sm={12} md={6}>
              <div>
                <div className="education-image-div p-10">
                  <Image src={rkm} className="width-100 image-border-shadow" />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="display-table overflow-hidden height-rkm-text">
                <div className="text-align-justify display-table-cell vertical-align-middle responsive-text">
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
        </Container>

        <Container className="p-t-20">
          <Row className="p-b-20">
            <Col sm={12} md={6}>
              <div>
              <div className="education-image-div p-10">
                <Image src={nita1} className="width-100 image-border-shadow" />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="display-table overflow-hidden height-300px">
                <div className="text-align-justify display-table-cell vertical-align-middle responsive-text">
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
         </Container>

      </div>
    )
  }

  sectionExperience() {
    return (
      <div className="experience">
        <div className="work-experience-text">
          {/* EXPERIENCE */}
          I am proud to be associated with these amazing companies
      </div>
        <Container className="p-t-50">
          <Row>
            <Col sm={12} md={6}>
              <div className="main-education-card m-b-20 cursor-pointer" onClick={() => this.openMedibuddy()}>
                <div className="education-card medibuddy-card">
                  <div className="width-100 p-15 text-align-center">
                    <Image src={mblogo} className="width-50"></Image>
                   </div>
                   <div className="gray-color text-center p-1">
                      Software Development Engineer - II 
                    </div>
                </div>
                <div className="p-20 text-align-center bold uppercase mb-text">
                  July 2020 - Present
                 
              </div>
              </div>

            </Col>
            <Col sm={12} md={6}>
              <div className="main-education-card m-b-20" onClick={() => this.openBuildSupply()}>
                <div className="education-card buildsupply-card p-0">
                  <div className="width-100 p-15 text-align-center">
                    <Image src={bslogo} className="width-50"></Image>
                    </div>
                  <div>
                  <div className="gray-color text-center p-1">
                      Analyst - Software Engineer
                  </div>

                  </div>
                </div>
                <div className="p-20 text-align-center bold uppercase bs-text">
                  June 2019 - June 2020
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
          I've expertised in...
        </div>
        <Container className="p-t-30">
          <div className="display-flex justify-content-space-around flex-wrap width-100">
            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={react} className="width-100"></Image>
              </div>
              <div className="bold text-align-center">
                REACT
              </div>
            </div>
            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={nextjs} className="width-80"></Image>
              </div>
              <div className="bold text-align-center">
                Next Js
              </div>
            </div>
            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={angular} className="width-100"></Image>
              </div>
              <div className="bold text-align-center">
                Angular
              </div>
            </div>
            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={js} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                JavaScript
              </div>
            </div>
            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={nodejs} className="width-69 m-t-25"></Image>
              </div>
              <div className="bold text-align-center">
                Node JS
              </div>
            </div>

            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={ts} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                TypeScript
              </div>
            </div>

            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={tailwind} className="width-80"></Image>
              </div>
              <div className="bold text-align-center">
                Tailwind CSS
              </div>
            </div>

            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={css} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                CSS
              </div>
            </div>
            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={scss} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                SCSS
              </div>
            </div>
            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={bootstrap} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                Bootstrap
              </div>
            </div>

            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={java} className="width-80"></Image>
              </div>
              <div className="bold text-align-center">
                Java
              </div>
            </div>

            <div className="skills-card">
              <div className="width-100 p-15 text-align-center height-adjust-skill-card">
                <Image src={html} className="width-69"></Image>
              </div>
              <div className="bold text-align-center">
                HTML
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
            <Card>
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


            <Card>
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
        <div className="certifaction-card display-flex flex-wrap m-15" >
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

        <div className="certifaction-card display-flex flex-wrap m-15" >
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
              <a target="_blank" href="https://drive.google.com/file/d/1I4kma-Crd9wJwLkbWeBITAyByFBEQyA9/view?usp=sharing">See Certification</a>
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

        <div className="certifaction-card display-flex flex-wrap m-15" >
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
              <a target="_blank" href="https://drive.google.com/file/d/1qQJiVZlT24nYq7O_AmwEtGUpvxU5pQCT/view?usp=sharing">See Certification</a>
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
      <>
        {this.sectionHeader()}
        {this.sectionAboutMe()}
        {this.sectionEducation()}
        {this.sectionExperience()}
        {this.sectionSkills()}
        {this.sectionPublications()}
        {this.sectionCertifications()}
        {this.sectionFooter()}
      </>
    )
  }
}
export default PortfolioComponent;