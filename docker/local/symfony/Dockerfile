FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install --no-install-recommends -y \
  git unzip libpq-dev libonig-dev \
  && docker-php-ext-install pdo pdo_pgsql

# devcontainer dependencies and utils
RUN apt-get update && apt-get install --no-install-recommends -y \
  sudo bash-completion nano ssh jq
# Create devcontainer user and add it to sudoers
RUN groupadd --gid 1000 dev-user \
  && useradd --uid 1000 --gid dev-user --shell /bin/bash --create-home dev-user \
  && echo dev-user ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/dev-user \
  && chmod 0440 /etc/sudoers.d/dev-user

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app/backend

# Copy project files
COPY . /app

# Install dependencies
RUN composer install --no-scripts --no-interaction
