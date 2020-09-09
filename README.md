Ember Template Bread Crumbs
==============================================================================

[![Build Status](https://travis-ci.com/nibynic/ember-template-bread-crumbs.svg?branch=master)](https://travis-ci.com/nibynic/ember-template-bread-crumbs)
[![npm version](https://badge.fury.io/js/ember-template-bread-crumbs.svg)](https://badge.fury.io/js/ember-template-bread-crumbs)
[![Ember Observer Score](https://emberobserver.com/badges/ember-template-bread-crumbs.svg)](https://emberobserver.com/addons/ember-template-bread-crumbs)


Template based breadcrumbs for Ember.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-template-bread-crumbs
```


Usage
------------------------------------------------------------------------------

Ember Template Breadcrumbs is inspired by [ember-page-title](https://github.com/adopted-ember-addons/ember-page-title)
and works in a similar way.

First you'll need to render your breadcrumbs somewhere:

```handlebars
{{! templates/application.hbs  }}
<BreadCrumbs />
```

And then define breadcrumbs for each route:

```handlebars
{{! templates/accounts.hbs  }}
{{bread-crumb "All accounts" route="accounts"}}
```

```handlebars
{{! templates/accounts/new.hbs  }}
{{bread-crumb "New" route="accounts.new"}}
```

If you'd like to display a static text instead of a link, just skip the route argument:

```handlebars
{{! templates/accounts/new.hbs  }}
{{bread-crumb "New"}}
```

### Customization

You can easily customize your HTML by providing a block to the `<BreadCrumbs />` component:

```handlebars
<ul>
  <BreadCrumbs as |item|>
    <li>
      <item.component class="my-item" />
    </li>
  </BreadCrumbs>
</ul>
```

The above will render as:

```html
<ul>
  <li>
    <a class="my-item" href="/accounts">All accounts</a>
  </li>
  <li>
    <span class="my-item">New</span>
  </li>
</ul>
```

For more advanced HTML customization you can always extend the `<BreadCrumbs />` component.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
