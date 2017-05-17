FROM debian:jessie

RUN apt-get update
RUN apt-get install -y curl php5-cli

WORKDIR /tmp

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs build-essential

RUN curl -sL https://getcomposer.org/installer | php

RUN mv composer.phar /usr/bin/composer
RUN chmod +x /usr/bin/composer

WORKDIR /var/www/site

CMD ["sh", "docker/init-vm.sh"]
