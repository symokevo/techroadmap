/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ResourceBadge } from "../../styles/styled-components/ResourceBadge.styled";
import { ResourceCard } from "../../styles/styled-components/ResourceCard.styled";
import { ResourceCardBody } from "../../styles/styled-components/ResourceCardBody.styled";
import { ResourceCardLinks } from "../../styles/styled-components/ResourceCardLinks.styled";
import { ResourceCardTitle } from "../../styles/styled-components/ResourceCardTitle.styled";
import { ResourceLink } from "../../styles/styled-components/ResourceLink.styled";
import { ResourceSection } from "../../styles/styled-components/ResourceSection.styled";
import { ResourceSectionBody } from "../../styles/styled-components/ResourceSectionBody.styled";
import { ResourceSectionHeading } from "../../styles/styled-components/ResourceSectionHeading.styled";
import { ResourceSectionLinks } from "../../styles/styled-components/ResourceSectionLinks.styled";

const Database = () => {
  return (
    <ResourceSection id="databases">
      <ResourceSectionHeading>Databases</ResourceSectionHeading>

      <ResourceSectionBody>
        <p>
          A database is a collection of data that is stored in a central place.
          It is a logical grouping of data that is organized in a way that is
          easy to access and manage, i.e., it allows for storing and retrieving
          of data. There are different types of databases and they can be
          divided into two categories: Relational and Non-Relational.
        </p>
        <p>
          Before picking your first database language, check these resource(s)
          out;
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/Tk1t3WKK-ZY"
          >
            What is a database in under 4 minutes ~ Linux Academy
          </a>
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/j09EQ-xlh88"
          >
            What is Database ~ TechTFQ
          </a>
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/cODCpXtPHbQ"
          >
            Database. Which, when and why? ~ CodeKarle
          </a>
          <a
            className="resourceLink paragraphLinks"
            href="https://youtu.be/ztHopE5Wnpc"
          >
            Database design full course ~ FreeCodeCamp
          </a>
        </p>
      </ResourceSectionBody>

      <ResourceSectionLinks>
        {/*  Relational Database */}
        <ResourceCard id="relational-db">
          <ResourceCardTitle>Relational Database</ResourceCardTitle>
          <ResourceCardBody>
            <p>
              Relational databases are the most common database type. They are a
              type of database that stores data in a structured way. They are
              usually used to store data in tables. The most common relational
              database is MySQL. Others are PostgreSQL, Microsoft SQL Server,
              Oracle, and SQLite.
            </p>
          </ResourceCardBody>

          <ResourceCardLinks>
            {/* my sql */}
            <ResourceCard id="mysql">
              <ResourceCardTitle>MySQL</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a href="https://www.mysql.com" target="_blank">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.youtube.com/watch?v=7S_tz1z_5bA"
                    target="_blank"
                  >
                    MySQL Tutorial for Beginners ~ Programming with Mosh
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://youtu.be/HXV3zeQKqGY" target="_blank">
                    MySQL tutorial full course ~ FreeCodeCamp
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.youtube.com/watch?v=EN6Dx22cPRI"
                    target="_blank"
                  >
                    Using MySQL with Node.js ~ Traversy Media
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://youtu.be/dPx1228_EYM" target="_blank">
                    Build a bank database using Sql ~ Great Learning
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>

            {/* postgresql Database */}
            <ResourceCard id="postgresql">
              <ResourceCardTitle>PostgreSQL</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a href="https://www.postgresql.org/" target="_blank">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://youtu.be/qw--VYLpxG4" target="_blank">
                    Learn PostgreSQL tutorial for beginners ~ FreeCodeCamp
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://youtu.be/Dd2ej-QKrWY" target="_blank">
                    Intro to PostgreSQL Databases with PgAdmin full course ~
                    Codemy - John Elder
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.youtube.com/playlist?list=PLillGF-RfqbaEmlPcX5e_ejaK7Y5MydkW"
                    target="_blank"
                  >
                    Recipe App using Node.js and PostgreSQL ~ Traversy Media
                  </a>
                  <ResourceBadge>Playlist</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://youtu.be/w25ea_I89iM" target="_blank">
                    Build and Deploy a Python Web App | Flask, Postgres and
                    Heroku ~ Traversy Media
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>

            {/* microsoftsql server Database */}
            <ResourceCard id="microsoftsqlserver">
              <ResourceCardTitle>Microsoft SQL Server</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a
                    href="https://www.microsoft.com/en-us/sql-server"
                    target="_blank"
                  >
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>

                <ResourceLink>
                  <a
                    href="https://www.youtube.com/playlist?list=PL08903FB7ACA1C2FB"
                    target="_blank"
                  >
                    Microsoft SQL Server Tutorial For Beginners ~ kudvenkat
                  </a>
                  <ResourceBadge>Playlist</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://www.sqlservertutorial.net/" target="_blank">
                    SQL Server Tutorial
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://learn.microsoft.com/en-us/sql/relational-databases/database-engine-tutorials?view=sql-server-ver15"
                    target="_blank"
                  >
                    Microsoft Docs Database Engine Tutorial
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href=" https://www.youtube.com/watch?v=YIUDgShB4Z8"
                    target="_blank"
                  >
                    Microsoft SQL Server Database Project ~ Brian Green
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>

            {/* Oracle Database */}
            <ResourceCard id="oracle">
              <ResourceCardTitle>Oracle</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a href="https://www.oracle.com/index.html" target="_blank">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>

                <ResourceLink>
                  <a
                    href="https://www.youtube.com/watch?v=ObbNGhcxXJA&ab_channel=GreatLearning"
                    target="_blank"
                  >
                    Oracle SQL Tutorial | Oracle DBA | Oracle SQL for Beginners
                    ~ Great Learning
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://www.oracletutorial.com/" target="_blank">
                    Oracle Tutorial
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.youtube.com/playlist?list=PLUWdEQb_2yqUaFAwNiYIh-KlnxWQiJQXJ"
                    target="_blank"
                  >
                    Oracle/SQL tutorials Projects ~ Tech Coach
                  </a>
                  <ResourceBadge>Playlist</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.youtube.com/watch?v=si9tjcnxruU&ab_channel=freeCodeCamp.org"
                    target="_blank"
                  >
                    The Oracle Foundations Associate Cloud Certification ~
                    FreeCodeCamp
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>

            {/* SQLite Database */}
            <ResourceCard id="SQLite">
              <ResourceCardTitle>SQLite</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a href="https://www.sqlite.org/index.html" target="_blank">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>

                <ResourceLink>
                  <a
                    href="https://www.youtube.com/watch?v=HQKwgk6XkIA"
                    target="_blank"
                  >
                    SQLite Tutorial For Beginners - Make A Database In No Time
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.youtube.com/watch?v=byHcYRpMgI4"
                    target="_blank"
                  >
                    SQLite Databases With Python ~ freeCodeCamp.org
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.youtube.com/watch?v=312RhjfetP8"
                    target="_blank"
                  >
                    SQLite Database for Android ~ freeCodeCamp.org
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>

            {/* Maria Database */}
            <ResourceCard id="mariadb">
              <ResourceCardTitle>MariaDB</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a href="https://mariadb.org" target="_blank">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>

                <ResourceLink>
                  <a
                    href="https://www.youtube.com/playlist?list=PL3bGLnkkGnuUOB9YjjVDty6aCJApvkw8O"
                    target="_blank"
                  >
                    MariaDB Tutorial for Beginners - Java Code Junkie
                  </a>
                  <ResourceBadge>Playlist</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://www.mariadbtutorial.com/" target="_blank">
                    MariaDB Tutorial
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://typescript.helpful.codes/tutorials/express/Building-a-CRUD-application-with-Express-and-MariaDB/"
                    target="_blank"
                  >
                    Building a CRUD application with Express and MariaDB in
                    typescript
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>
          </ResourceCardLinks>
        </ResourceCard>

        {/*  non-relational Database */}
        <ResourceCard id="nonrelational-db">
          <ResourceCardTitle>Non-Relational Database</ResourceCardTitle>
          <ResourceCardBody>
            <p>
              Non-Relational databases are a type of database that stores data
              in a non-structured way. They are usually used to store data in
              JSON format. The most common non-relational database is MongoDB.
              Others are CouchDB, Firebase, and Firestore.
            </p>
            <p>
              You can learn about JSON through the links below:
              <a
                className="resourceLink paragraphLinks"
                href="https://youtu.be/iiADhChRriM"
              >
                Learn JSON in 10 minutes. ~ Web Dev Simplified
              </a>
              <a
                className="resourceLink paragraphLinks"
                href="https://youtu.be/mAqYJF-yxO8"
              >
                Full JSON tutorial for beginners. ~ Techcode
              </a>
              <a
                className="resourceLink paragraphLinks"
                href="https://blog.siddu.tech/secret-json-features"
              >
                5 Secret features of JSON you didn&apos;t know about. ~
                Siddharth Shyniben
              </a>
            </p>
          </ResourceCardBody>

          <ResourceCardLinks>
            {/* Mongodb */}
            <ResourceCard id="mongodb">
              <ResourceCardTitle>MongoDB</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a href="https://www.mongodb.com" target="_blank">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://youtu.be/ofme2o29ngU" target="_blank">
                    Learn MongoDB in 30 minutes ~ WebDevSimplified
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA"
                    target="_blank"
                  >
                    Complete MongoDB tutorial ~ The Net Ninja
                  </a>
                  <ResourceBadge>Playlist</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a href="https://youtu.be/YlrmGs6YHHY" target="_blank">
                    MongoDB Customer Database project ~ Eduonix Learning
                    Solutions
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>

            {/* Couch Database */}
            <ResourceCard id="couchdb">
              <ResourceCardTitle>CouchDB</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a href="https://couchdb.apache.org/" target="_blank">
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://youtu.be/nlqv9Np3iAU?si=o9jwUjhoINOp69SJ"
                    target="_blank"
                  >
                    CouchDB for Beginners ~ Traversy Media
                  </a>
                  <ResourceBadge>Video</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.tutorialspoint.com/couchdb/index.htm"
                    target="_blank"
                  >
                    CouchDB Tutorial ~ tutorialspoint
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://medium.com/ksquare-inc/how-to-develop-your-first-couchdb-application-with-couchapp-and-js-e078271eb455"
                    target="_blank"
                  >
                    Application with CouchDB and JS - Jaque.
                  </a>
                  <ResourceBadge>Article</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>

            {/* Firestore Database */}
            <ResourceCard id="firestoredb">
              <ResourceCardTitle>FirestoreDB</ResourceCardTitle>
              <ResourceCardLinks>
                <ResourceLink>
                  <a
                    href="https://firebase.google.com/docs/firestore"
                    target="_blank"
                  >
                    Website
                  </a>
                  <ResourceBadge>Link</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb"
                    target="_blank"
                  >
                    Firestore for Beginners ~ Net Ninja
                  </a>
                  <ResourceBadge>Playlist</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://www.freecodecamp.org/news/firebase-firestore-crash-course/"
                    target="_blank"
                  >
                    Firestore Tutorial ~ freeCodeCamp.org
                  </a>
                  <ResourceBadge>Article</ResourceBadge>
                </ResourceLink>
                <ResourceLink>
                  <a
                    href="https://blog.logrocket.com/nextjs-cloud-firestore-full-stack-app-tutorial/"
                    target="_blank"
                  >
                    Application Using Firestore and NextJS - Doğacan Bilgili
                  </a>
                  <ResourceBadge>Article</ResourceBadge>
                </ResourceLink>
              </ResourceCardLinks>
            </ResourceCard>
            {/* next Database */}
          </ResourceCardLinks>
        </ResourceCard>
      </ResourceSectionLinks>
    </ResourceSection>
  );
};

export default Database;
