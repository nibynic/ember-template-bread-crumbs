Ember Template Breadcrumbs
==============================================================================

Template based breadcrumbs for Ember.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-template-breadcrumbs
```


Usage
------------------------------------------------------------------------------

Ember Template Breadcrumbs is inspired by [ember-page-title](https://github.com/adopted-ember-addons/ember-page-title)
and works in a similar way.

First you'll need to render your breadcrumbs somewhere:

```handlebars
{{! templates/application.hbs  }}
{{bread-crumbs}}
```

And then define breadcrumbs for each route:

```handlebars
{{! templates/accounts.hbs  }}
{{bread-crumb "All accounts" "accounts"}}
```

```handlebars
{{! templates/accounts/new.hbs  }}
{{bread-crumb "New" "accounts.new"}}
```

If you'd like to display a static text instead of a link, just skip the second argument:

```handlebars
{{! templates/accounts/new.hbs  }}
{{bread-crumb "New"}}
```

### Customization

To customize generated HTML, just extend the `bread-crumbs` component.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
