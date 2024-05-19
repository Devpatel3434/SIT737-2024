FROM node:16
# we are using pre-existing image From Dockerhub

WORKDIR /usr/src/app
#  Location speciified to run app

COPY package*.json ./
# We are just selecting all dependency from package file for current work directory

RUN npm install

COPY . .
# We are coping the executable file to image file so it run as seperate ententy

EXPOSE 3040
# showing which port we are using to run app

CMD ["node", "calc.js"]
# The way to execute the file