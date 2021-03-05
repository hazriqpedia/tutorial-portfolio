import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";

function AboutPage(props) {
  return (
    <div>
      <Hero {...props} />
      <Content>
        <p>
          My name’s Hazriq. A full-time dev (or DevOps) based in KL, Malaysia
          that is trying to survive after I finished my college degree in
          Software Engineering 3 years ago. I do techs like Java, Ansible,
          Vagrant, Puppet and many others.
        </p>

        <p>
          When I said panic, I really mean it… I’m trying to move away from Java
          and will embark on a new journey to explore the world of front-end. At
          least, that’s something that I’ve been telling myself for like 3
          months back. LOL.
        </p>

        <p>
          My another personal mission is to also try all Chili’s food that they
          have on their menu. I know it’s crazy, but it’s something that I want
          to do before I finish my life.
        </p>
        <p>-----</p>
        <p>
          <b>Programming Languages</b>: Java, Python.{" "}
        </p>

        <p>
          <b>Software</b>: Ansible, Vagrant, Puppet, Docker.{" "}
        </p>

        <p>
          <b>Databases</b>: PostgreSQL, ElasticSearch, MongoDB.{" "}
        </p>

        <p>
          <b>Others</b>: Linux (CentOS), Git, Jenkins, Bamboo, Bash, Vim,
          Microsoft Azure, Agile/ Scrum, Big Data: Hadoop (HDFS and MapReduce),
          Oozie workflow, Apache Hive, Apache Ambari.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
