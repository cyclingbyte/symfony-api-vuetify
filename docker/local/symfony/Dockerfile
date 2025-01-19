FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
  git unzip libpq-dev libonig-dev \
  && docker-php-ext-install pdo pdo_pgsql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app/backend

# Copy project files
COPY ./backend /app/backend

# Install dependencies
RUN composer install --no-scripts --no-interaction
