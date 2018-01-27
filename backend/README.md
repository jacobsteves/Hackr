# Hackr Backend
Built with PHP and Laravel

# Getting Started
## Prerequisites
- PHP version 7.1, to install (on mac), run:
```
curl -s http://php-osx.liip.ch/install.sh | bash -s 7.1
```
## Installing Laravel
- Install composer. Run:
```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```
This will add composer to the current directory.

- If you want, move composer to your bin to use it locally. Run:
```
mv composer.phar /usr/local/bin/composer
```

- Install Laravel Globally. Run:
```
composer global require "laravel/installer"
```

- Update your $PATH variable so that laravel can be located by your system
     - On Mac, in .bash_profile (or .zshrc, if you're using zsh), add
     ```
     export PATH=$PATH:$HOME/.composer/vendor/bin
     ```
     - On Linux / GNU, follow installation guide [here](https://laravel.com/docs/5.5/installation)

- Finally, run
```
composer install
```
to install all the dependancies

- copy `.env.example` to `.env`
     - Note: `.env` is specific to each project, never commit this file
     
## Starting the Server
- You must generate an application encryption key. Do so by running this command:
```
php artisan key:generate
```
- Now start the server:
```
php artisan serve
```

- In the expo app, scan the QR Code and start coding!
