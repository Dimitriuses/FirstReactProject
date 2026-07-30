# Third-party notices

The MIT licence in `LICENSE` covers the code in this repository. It does not cover the
third-party resources the page loads at runtime, none of which are redistributed here:

| Resource | Used for | Licence |
|---|---|---|
| [Bootstrap 4.0.0](https://getbootstrap.com/) (`maxcdn.bootstrapcdn.com`) | Layout and components | MIT |
| [Bootstrap Material Design 4.1.1](https://fezvrasta.github.io/bootstrap-material-design/) (`unpkg.com`) | The material skin and the snackbar styling | MIT |
| [Font Awesome 4.0.3](https://fontawesome.com/v4/) (`netdna.bootstrapcdn.com`) | Star and heart icons | Font: SIL OFL 1.1 · CSS: MIT |
| [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) (`fonts.googleapis.com`) | The heading typeface | SIL OFL 1.1 |
| [randomuser.me](https://randomuser.me/) portraits | Contact avatars, fetched per contact | See randomuser.me — the images are hotlinked at runtime and no copy is stored in this repository |

`public/favicon.ico` is the Create React App template favicon, from
[create-react-app](https://github.com/facebook/create-react-app) (MIT).

The four seed contacts in `src/store/contacts.js` are invented names with placeholder
lorem ipsum text. They are not real people, and the portraits shown against them are
whatever randomuser.me returns for that index.
