# TvManiac

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
node js- nvm -windows mozna zainstalowac wiecej wersji. package-lock i package.json dodajemy do repo
npx
nodeschool.io
.map-

var attr3=attr.map(function(item){
return item\*5
})
.some- do pierwszego true,

.every- do pierwszego false/
.reduce= przeksztalca na obiekt lubi inny typ

javascript.comparise table -< co jest równe czemu w js

LINTING- narzedzie do statecznej analizy kodu.
sonnarcube- narzedzie do weryfikacji kodu, technologii
prettier- do formatowania kodu
ecmascript - standard impl. js

var person ={
name:'t',
index: 'b',
city:'c'
}

var {x,yz:location} = person
przypisze do pol x,location wartosci z obiektu person.

var arr = [1,2,3]
var arr2=[0,...arr]; plaska kopia tablicy
var o={}
var o2={...o, b:12}

https://devdocs.io/javascript/global_objects/array
kangax
array.of
array.from
callback
roznica miedzy promise a callbackiem'
Promise.all, promise.allSettled, promise.race(kto pierwszy ten lepszy)
jak jest async to zawsze zwrocona wartosc jest awaitem!!

Category[Category.IT]
const enum Category{H,I,F}
let c = Category.F
c=Category.I
<-duzo wieksza wydajnosc

ANGULAR:

modul worek na funkcjonalnosci
ngcontainer do grupowania logiki
ng-content: mozemy wkleic html
(zalogowanie, wypis stacji bazowych, ustawienie preferencji)
angular jest poodzielony na moduly. formsModule,HtppModule, RouterMidule
glowne czesci modułu:
providers: uslugi
declarations: wizualne to co w szablonach, componenny, dyrektywy pipes
exporty:
importy:
bootstrap: glowny komponent aplikacji

Aplikacja to drzewo komponentow
komponenty: reuzywalnosc i izolacja
komponent moze miec dostep tylko do swoich pol

https://zealdocs.org/

ngOnChanges tylko dla inputow

this.route.params.subscribe(console.log)
\$ ng new tv-maniac --skip-tests --style=scss --prefix=tm --routing
tslint- reguly do statecznej analizy kodu
ctrl + spacja: podpowiedz
tsconfig- restrykcje
browswerlist konfiguracja buildu

jak zaimportujemy bootstrapa a chcemy by np. kolor byl inny niz zdefiniowany to trzbe aprzed importem zmienic kolor \$primary: #bada55

rosoft Windows [Wersja 6.1.7601]
Copyright (c) 2009 Microsoft Corporation. Wszelkie prawa zastrzeżone.
C:\Users\Administrator\Desktop\2019-11-19\tv-maniac>npm i bootstrap
npm WARN bootstrap@4.3.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.3.1 requires a peer of popper.js@^1.14.7 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\karma\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\@angular\compiler-cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

- bootstrap@4.3.1
  added 1 package from 2 contributors and audited 18873 packages in 15.401s
  found 0 vulnerabilities

C:\Users\Administrator\Desktop\2019-11-19\tv-maniac>ng add @schurchard/prettier
Unable to fetch package metadata: 404 Not Found - GET https://registry.npmjs.org/@schurchard%2fprettier - Not found

C:\Users\Administrator\Desktop\2019-11-19\tv-maniac>ng add @schuchard/prettier
Installing packages for tooling via npm.
npm WARN deprecated fsevents@1.2.9: One of your dependencies needs to upgrade to fsevents v2: 1) Proper nodejs v10+ support 2) No more fetching binaries from AWS, smaller package size
npm WARN bootstrap@4.3.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.3.1 requires a peer of popper.js@^1.14.7 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

- @schuchard/prettier@3.1.0
  added 20 packages from 66 contributors and audited 23201 packages in 24.859s
  found 0 vulnerabilities

Installed packages for tooling via npm.
? Specify the line length that the printer will wrap on (default: 80) 100
? Specify the number of spaces per indentation-level 2
? Print semicolons at the ends of statements? No
? Use single quotes instead of double quotes? Yes
? Print trailing commas wherever possible when multi-line? (default: none) all
? Add lint-staged for running Prettier against staged files? Yes
? Format all Angular Files {js,json,css,scss,less,md,ts,html,component.html} > Yes! :) Yes
CREATE .prettierignore (17 bytes)
CREATE prettier.config.js (321 bytes)
UPDATE package.json (1798 bytes)
UPDATE tslint.json (1991 bytes)
UPDATE .editorconfig (246 bytes)
npm WARN deprecated fsevents@1.2.9: One of your dependencies needs to upgrade to fsevents v2: 1) Proper nodejs v10+ support 2) No more fetching binaries from AWS, smaller package size

> husky@3.1.0 install C:\Users\Administrator\Desktop\2019-11-19\tv-maniac\node_modules\husky
> node husky install

husky > Setting up git hooks
husky > Done

> husky@3.1.0 postinstall C:\Users\Administrator\Desktop\2019-11-19\tv-maniac\node_modules\husky
> opencollective-postinstall || exit 0

npm WARN bootstrap@4.3.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.3.1 requires a peer of popper.js@^1.14.7 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\karma\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\@schuchard\prettier\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\@angular\compiler-cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 96 packages from 41 contributors and audited 23510 packages in 30.121s
found 0 vulnerabilities

C:\Users\Administrator\Desktop\2019-11-19\tv-maniac>

ctrl-shift- home
ctrl+w - zaznaczanie kontekstowe

serwisy i moduły nie generuja sie automatycznie
+konwesja na liczbe
augury

ng g m tv -m app generowanie moduly i dolaczenie do modulu glownego

tailwind css <- stylowanie
json formatter chrome
rxjs marbles - interactive diagrams
strumienie wiele wartosci, sama definicja strumienia nie zxnaczy ze to sie od razu zaczyna wykonywac, dopoki nie zaczniemy go obserwowac to on sie nie wykonuje. asynchroniczne wartosci

ngOnChanges tylko dla @Inputow

changeDetection: ChangeDetectionStrategy.OnPush - sprawdza tylko referencje

will of time

npm i -D json-server

const values = [2,5,7,8]
const endResult = values.reduce((acc, item) => {
return acc+item},0)

ng add @ngrx/store
redux devtools z chrome webstore
plugin do webstorma material theme UI

//schematics trzeba doczytac

1.akcja

2. co akcja zrobila jaki miala skutek
3. podlaczenie do uslugi
   https://bitbucket.org/tomsu/tv-maniac-2019-11-20/src/7f1d6fe80c04d549e50dea1955b5b9e3e3108bac/src/styles.scss
