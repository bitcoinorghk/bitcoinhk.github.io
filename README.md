# [BAHK Website](https://www.bitcoin.org.hk/)

A Jekyll-flavored hosted on GitHub pages.

## To run/generate locally

Clone a copy of the repo, and then in the top directory of the cloned repo install the
required files:
```bundle install```

If that fails, install bundler `gem install bundler` or ```gem install jekyll bundler```
https://jekyllrb.com/docs/step-by-step/01-setup/

To to run the site:
```rake serve```

Or run Run jekyll serve and go to http://localhost:4000 in your browser. 
```bundle exec jekyll serve```

Ubuntu 20.04 dependencies:

sudo apt install make && gcc && build-essential && rbenv

OSX:

As the build is different from Ubuntu, you may need to delete the Gemfile.lock file before ```bundle install``` and ```rake serve```

