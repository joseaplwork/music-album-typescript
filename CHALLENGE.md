## Challenge

1 - Develop an Angular 5+ app with a simple view showing a list of music albums provided in the endpoint below. The cell item should show the name of the album, name of the artist, a thumbnail picture of the album and number of tracks.

Endpoint: https://itunes.apple.com/lookup?id=909253&entity=album

2 - Show a detail view on cell touch with a list of the tracks in the album and its duration, provided by this endpoint. 

Endpoint: https://itunes.apple.com/lookup?id={albumId}&entity=song

Api additional documentation: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

BONUS: Show a create track form that displays the valid form values on submit into the console.

## Implementation decisions
_ Added very basic implementation of the challengue using `NGRX`
_ ITCSS + SCSS for styles
_ One way data biding with observables

## Missing Implementation
_ Error handling
_ Server request loaders
_ Store requested data in memory to prevent multiple server calls
_ Unit tests
_ I was looking the SOLID principle but couldn't apply it to angular, because of the DI from angular (which references classes instead of interfaces) in general I could have followed more strictly the pattern but it was my first app in angular and couldn't relate concepts properly
_ e2e tests
