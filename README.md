Autor: Roger Oriol Pérez

E-mail de contacte: rogeroriwd@gmail.com

# Usual o Casual?
Usual o casual és una aplicació web progressiva amb el propòsit de divulgar informació sobre els preus de les noves tarifes de transport públic que entraran en vigor a partir de l'any 2020. L'intenció és fer fàcil la comparació de preu per viatge amb cada tarifa, per així poder fer una decisió informada sobre quina tarifa utilitzar.

Al ser una aplicació web progressiva, és possible utilitzarla offline i instal·lar-la al dispositiu mòvil com si es tractés d'una aplicació tradicional.

## Utilitza aquest repositori
Aquesta aplicació web es basa en el framework Svelte. A més utilitza Redux per a la gestió de l'estat de l'aplicació i Rollup per empaquetar l'aplicació.

Per començar a utilitar-la, primer instal·la les dependències:
```bash
npm install
```
Una vegada s'hagin instal·lat les dependències, podem començar a servir l'aplicació immediatament en la nostra màquina. Per a un desplegament de desenvolupament que disfruta de hot reloading, la comanda és:
```
npm run dev
```
Per a desplegar l'aplicació en un entorn productiu, primer s'ha de transpilar a un bundle utilitzant la comanda:
```
npm run build
```
Una vegada s'ha transpilat l'aplicació, es pot deixar el codi resultant en un servidor estàtic o s'en pot arrancar un utilitzant la llibreria sirv amb la comanda:
```
npm start
```