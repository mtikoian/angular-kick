# Version 1.1.1:

* Fix: Typo in function name caused HTML templates not to load

# Version 1.1.0:

* Fix: HTML templates work correctly in production
* Fix: Add missing Inject decorator in generated files
* Fix: Change versions of style, autoprefixer and sass loaders

__Important change__: All the HTML templates are now required dynamically
from app.js. Instead of using require to bring templates inside states,
you can now only pass absolute path to a template from your app root


# Version 1.0.2:

* Feature: Enabled ES7 decorators
* Feature: Created @Inject decorator instead of ClassName.$inject syntax
* Fix: Remove minor NodeJS version lock
* Fix: Improved ifEnv directive to be more efficient
* Fix: Yes/No questions are now following UNIX standards
