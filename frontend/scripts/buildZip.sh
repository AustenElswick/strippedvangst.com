#!/bin/zsh
npm run next:build;
rm -rf ../websiteZip.zip;
zip ../websiteZip.zip ./*;
zip ../websiteZip.zip ./component/**/*;
zip ../websiteZip.zip ./pages/**/*;
zip ../websiteZip.zip ./src/**/*;
zip ../websiteZip.zip ./static/**/*;
zip ../websiteZip.zip ./.next/**/*;
zip ../websiteZip.zip ./.ebextensions/**/*;
