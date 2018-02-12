## Project Settings CarScout

Wenn Ihr Probleme habt, wie z.B. AppComponent nicht gefunden, dann bitte folgende Zeile ausführen:
`npm install -g @angular/cli`
 
`npm install`
`npm install -g nodemon`
`npm install -g gulp`
`npm start`

Im Browser: localhost:4200

## Erstellen einer Component

`ng g component component_name`

## Services erstellen

`ng g service service_name`


set PATH=%PATH%;C:\deinpfad

## Weiterleitung

Im constructor als Argument 'private router: Router'
Dann innerhalb der Methode:
    `this.router.navigate(['route'])` 

Beispiel: 
    `this.router.navigate(['/login'])` 

## Cookies
Zum installieren
npm install ngx-cookie

Beim einloggen wird in der LoginComponent ein Cookie `online` auf success gesetzt.
Um den Cookie `online` abzurufen:
    `this.cookieService.get('online');`

Oder siehe LoginComponent unter save(); !!!

## MD5 

npm install 