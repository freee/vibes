FROM node:14.15.4
ARG github_username
ARG github_token

ENV GITHUB_USERNAME $github_username
ENV GITHUB_TOKEN $github_token

WORKDIR /usr/src/app

COPY docker/git-credential-github-token /usr/local/bin
RUN apt-get update && apt-get install -y curl git
RUN mkdir /root/.ssh/ && \
  git config --global url."https://github.com".insteadOf ssh://git@github.com && \
  git config --global --add url."https://github.com".insteadOf git://git@github.com && \
  git config --global --add url."https://github.com/".insteadOf git@github.com: && \
  git config --global credential.helper github-token

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

EXPOSE 6006

CMD ["npm", "run", "storybook"]
