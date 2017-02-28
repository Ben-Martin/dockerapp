FROM node:4-onbuild

ENV NODE_ENV test

EXPOSE 3000
CMD [ "npm", "start" ]