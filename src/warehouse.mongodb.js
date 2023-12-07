use('warehouseDB');

db.createCollection('products');

db.products.insertMany([
{
    "name": "Ryż",
    "price": 5,
    "description": "Ryż w opakowaniu 300g.",
    "quantity": 478,
    "unit": "szt"
},
{
    "name": "Jabłka",
    "price": 3,
    "description": "Jabłka w skrzynkach.",
    "quantity": 280,
    "unit": "kg"
},
{
    "name": "Gruszki",
    "price": 5,
    "description": "Gruszki w skrzynkach.",
    "quantity": 190,
    "unit": "kg"
},
{
    "name": "Olej rzepakowy",
    "price": 13,
    "description": "Butelka 1 litr.",
    "quantity": 340,
    "unit": "szt"
},
{
    "name": "Koncentrat pomidorowy",
    "price": 7,
    "description": "Słoik 240g",
    "quantity": 140,
    "unit": "szt"
},
{
    "name": "Miotła",
    "price": 24,
    "description": "Syntetyczna miotła z drewnianym trzonkiem.",
    "quantity": 38,
    "unit": "szt"
},
{
    "name": "Skrętka kat.5e utp",
    "price": 4.50,
    "description": "Kabel na szpuli 500m",
    "quantity": 3876,
    "unit": "mb"
},
{
    "name": "Skrętka kat.6 sftp",
    "price": 7.80,
    "description": "Kabel na szpuli 500m",
    "quantity": 1760,
    "unit": "mb"
},
{
    "name": "Detergent do czyszczenia toalet",
    "price": 12,
    "description": "Butelka 800ml",
    "quantity": 89,
    "unit": "szt"
},
{
    "name": "Czarna herbata",
    "price": 8,
    "description": "Opakowanie 20 torebek",
    "quantity": 123,
    "unit": "szt"
},
{
    "name": "Sól drogowa",
    "price": 3.80,
    "description": "Przemysłowa sól na drogi",
    "quantity": 3589,
    "unit": "kg"
},
{
    "name": "Papier toaletowy",
    "price": 18,
    "description": "Opakowanie 10 rolek",
    "quantity": 130,
    "unit": "szt"
},
{
    "name": "Płatki owsiane",
    "price": 9.50,
    "description": "Opakowanie 500g",
    "quantity": 63,
    "unit": "szt"
},
{
    "name": "Latarka LED",
    "price": 24,
    "description": "Moc: 60W",
    "quantity": 46,
    "unit": "szt"
},
{
    "name": "Mąka pszenna - techniczna",
    "price": 2.80,
    "description": "Zamawiana na wagę",
    "quantity": 790,
    "unit": "kg"
},
{
    "name": "Olej palmowy - techniczny",
    "price": 1.90,
    "description": "Zamawiany na wagę",
    "quantity": 560,
    "unit": "litry"
},
{
    "name": "Dżem wiśniowy",
    "price": 8.50,
    "description": "Słoik 300g",
    "quantity": 61,
    "unit": "szt"
},
{
    "name": "Mleko 3.2% UHT",
    "price": 5.60,
    "description": "Karton 1l",
    "quantity": 392,
    "unit": "szt"
},
{
    "name": "Szampon",
    "price": 14.50,
    "description": "Butelka 500ml",
    "quantity": 44,
    "unit": "szt"
},
{
    "name": "Chipsy",
    "price": 6.70,
    "description": "Paczka 300g",
    "quantity": 239,
    "unit": "szt"
},
{
    "name": "Rękawice lateksowe",
    "price": 35.60,
    "description": "Opakowanie 200 szt",
    "quantity": 180,
    "unit": "szt"
},
{
    "name": "Papier ksero",
    "price": 20,
    "description": "Opakowanie 500 kartek.",
    "quantity": 152,
    "unit": "szt"
},
{
    "name": "Mydło w kostce",
    "price": 4.10,
    "description": "Antybakteryjne, nawilżające.",
    "quantity": 80,
    "unit": "szt"
},
{
    "name": "Drabina aluminiowa",
    "price": 87,
    "description": "15m rozkładana.",
    "quantity": 22,
    "unit": "szt"
},
{
    "name": "Pasta do zębów",
    "price": 7.80,
    "description": "Smak miętowy.",
    "quantity": 56,
    "unit": "szt"
},
{
    "name": "Cukier - techniczny",
    "price": 1.50,
    "description": "Zamawiany na wagę",
    "quantity": 480,
    "unit": "kg"
},
{
    "name": "Kawa rozpuszczalna",
    "price": 18.90,
    "description": "Opakowanie 400g",
    "quantity": 132,
    "unit": "szt"
},
{
    "name": "Jogurt naturalny",
    "price": 3.50,
    "description": "Opakowanie 200g.",
    "quantity": 39,
    "unit": "szt"
},
{
    "name": "Ser żółty",
    "price": 40,
    "description": "Opakowania 5kg - kupowany na dg",
    "quantity": 1000,
    "unit": "dg"
},
{
    "name": "Miód",
    "price": 36,
    "description": "Słoik 300g",
    "quantity": 192,
    "unit": "szt"
}]);