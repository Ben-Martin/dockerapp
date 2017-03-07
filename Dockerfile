# environment
FROM node:4-onbuild

# environment variable - can be removed
ENV NODE_ENV production


# Node port to expose
EXPOSE 3000

# command to start the application
CMD [ "npm", "start" ]