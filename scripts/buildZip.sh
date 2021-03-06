#!/bin/zsh
rm -rf ./websiteZip.zip;
zip ./websiteZip.zip ./frontend/*;
zip ./websiteZip.zip ./frontend/component/**/*;
zip ./websiteZip.zip ./frontend/pages/**/*;
zip ./websiteZip.zip ./frontend/src/**/*;
zip ./websiteZip.zip ./frontend/static/**/*;
zip ./websiteZip.zip ./frontend/.next/**/*;
zip ./websiteZip.zip ./frontend/.ebextensions/**/*;
zip ./websiteZip.zip ./wordpress/**/*;
zip ./websiteZip.zip ./.htaccess;
zip ./websiteZip.zip ./Dockerfile;
zip ./websiteZip.zip ./install.sh;
zip ./websiteZip.zip ./itermocil.yml;
zip ./websiteZip.zip ./mysql_config.sh;
zip ./websiteZip.zip ./package-lock.json;
zip ./websiteZip.zip ./package.json;
zip ./websiteZip.zip ./phpcs.xml;
zip ./websiteZip.zip ./robo.phar;
zip ./websiteZip.zip ./robo.yml;
zip ./websiteZip.zip ./RoboFile.php;
zip ./websiteZip.zip ./start_docker.sh;
zip ./websiteZip.zip ./wget-log;
zip ./websiteZip.zip ./wp-cli.yml;
zip ./websiteZip.zip ./yarn.lock;
zip ./websiteZip.zip ./Dockerrun.aws.json;
