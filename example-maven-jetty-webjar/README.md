build-it-better: example-maven-jetty-webjar
===============

Allow web assets to be quickly developed in jetty against src/main/webapp directory for 
easy checkin.
Distribute assets as webjar for inclusion as a libray in other war projects.

Third party libraries from webjar format. Maven resolves these dependencies transitively for you and adds them to consuming war project.

Karma based testing with maven jsunit plugin
- can run wachter style to continuously test.
- can run headless for CI build testing too.

