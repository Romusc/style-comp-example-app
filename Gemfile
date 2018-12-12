# frozen_string_literal: true

source "https://rubygems.org"
ruby "2.5.1"

gem "rails", "5.2.1"
gem "puma", "~> 3.8"
gem "pg"
gem "jbuilder", "~> 2.6.3"
gem "devise"
gem "devise_invitable", "~> 1.7.0"
gem "redis", "~> 4.0"
gem "hiredis"
gem "redis-namespace"
gem "sass-rails"
gem "jquery-rails"
gem "uglifier"
gem "bootstrap-sass"
gem "font-awesome-sass"
gem "simple_form"
gem "autoprefixer-rails"
gem "faker", "~> 1.9.1"
gem "wicked_pdf"
gem "wkhtmltopdf-binary", "~> 0.12.3"
gem "paperclip", "~> 5.2.1" # File uploads
gem "paperclip-cloudinary"
gem "cloudinary"
gem "bootstrap-datepicker-rails"
gem "remotipart", git: "https://github.com/mshibuya/remotipart.git"
gem "rubyzip", ">= 1.2.2"
gem "zip-zip"
gem "select2-rails", "~> 4.0", ">= 4.0.3"
gem "combine_pdf" # sert a consolider des pdfs venant de differentes sources
gem "sidekiq"
gem "sidekiq-failures", git: "https://github.com/mhfs/sidekiq-failures.git"
gem "postmark-rails"
gem "hubspot-ruby", git: "https://github.com/Berardpi/hubspot-ruby.git", branch: "deal-and-company-all"
gem "google-api-client", "~> 0.24.3"

# For React
gem "webpacker", "~> 3.5"
gem "webpacker-react", "~> 0.3.2"

# Notifiers
gem "exception_notification"

# authorization library
gem "cancancan", "~> 2.2.0"

gem "bulk_insert"

# Pass Rails variables to JS
gem "gon"

gem "rails-i18n"
gem "i18n-js"

gem "file_validators"

gem "nokogiri"
gem "premailer-rails"

gem "seeuletter", "~> 1.1" # API client for seeuletter (physical mails)
gem "attr_encrypted", "~> 3.0.0" # Used to encrypt API keys stored in the database

gem "whenever"

gem "awesome_print"
gem "savon", "~> 2.12.0" # SOAP client

gem "currency-in-words" # Convert amount in word for formal wording
gem "slack-ruby-client" # Slack messages

gem "pdf-reader" # Count pages of a pdf

# Gocardless
gem "oauth2"
gem "gocardless_pro"

# Geocoding
gem "geocoder"

# Country manipulation
gem "countries", "~> 2.1"

# Temporary action cable fix
# https://github.com/faye/websocket-driver-ruby/issues/58
gem "websocket-driver", git: "https://github.com/faye/websocket-driver-ruby", ref: "ee39af83d03ae3059c775583e4c4b291641257b8"

gem "rack-timeout"

# String distance utils
gem "damerau-levenshtein"
gem "diff-lcs"

gem "serviceworker-rails"

# BIC code <> bank information
gem "iso-swift", git: "https://github.com/hugolantaume/iso-swift.git", branch: "master"

group :development do
  gem "foreman"
  gem "letter_opener" # sert a faker les envois d'email en development. au lieu d'envoyer un email, letter open ouvre un nouveau tab
end

group :development, :test do
  gem "rubocop"
  gem "test-prof"
  gem "figaro"
  gem "parallel_tests"
  gem "database_cleaner"
  gem "better_errors"
  gem "pry-byebug"
  gem "bullet"
  gem "pry-rails"
  gem "spring"
  gem "listen", "~> 3.0.5"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "factory_bot_rails", "~> 4.0"
  gem "railroady"
  gem "rspec-rails"
  gem "rspec-retry"
  gem "simplecov"
  gem "rails-controller-testing"

  gem "capybara"
  gem "selenium-webdriver"
  gem "chromedriver-helper"
end

group :staging, :development do
  gem "recipient_interceptor"
end
