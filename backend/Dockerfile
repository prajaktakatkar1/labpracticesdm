FROM node

WORKDIR /app

COPY . .

# run all the packages while creating the image
RUN npm install

EXPOSE 4000

# run the server when container gets created
CMD node server.js