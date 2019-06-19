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
ember install ember-template-bread-crumbs
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

You can easily customize your HTML by providing a block to the `bread-crumbs` component:

```handlebars
<ul>
  {{#bread-crumbs as |item|}}
    <li>
      {{item.component class="my-item"}}
    </li>
  {{/bread-crumbs}}
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

For more advanced HTML customization you can always extend the `bread-crumbs` component.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
