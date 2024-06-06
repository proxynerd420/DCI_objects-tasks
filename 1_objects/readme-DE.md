# Übungsaufgaben: Abenteurergruppe auf Monsterjagd im Wald

### WICHTIG: NUTZT ZUM LÖSEN DER TASKS BITTE NODEMON, DAS IST ESSENZIELL!

### INFO: Alle Aufgaben können in der Datei 'lösung.js' bearbeitet werden. Ich habe jeden Task mit einem Divider unterteilt, von daher sollte es gut in der Konsole lesbar und separierbar sein.

### INFO 2: Ihr werdet in den Tasks den Kommentar '// ych' sehen. *ych* steht in diesem Fall für 'your code here'. Dort könnt ihr also innerhalb der Datei euren Code einfügen.

### INFO 3: Wenn ihr im Verlauf der Aufgaben in eurem Console Log im adventurer-Object unter attack den value [Function (anonymous)] bekommt, ignoriert das gerne. Hauptsache die Aufgaben funktionieren. :D

### INFO 4: Nicht wundern dass ihr bei Aufgabe 9 einen Fehler ausgegeben bekommt, das liegt an der nicht beschreibbaren und nicht aufzählbaren Eigenschaft 'role'.

### INFO 5: Zum Abschluss: Bitte bescheißt euch nicht selbst. Ich habe euch eine Datei mit der Musterlösung angefügt damit ihr euren Code ggf. korrigieren könnt. Bitte nutzt das nicht aus, sondern versucht es erstmal selbst.

## Task 1

1. Objekt-Basics

Aufgabe: Erstelle ein Objekt 'adventurer', das die grundlegenden Informationen über einen Abenteurer enthält.

```javascript
// Erstelle ein Objekt `adventurer` mit folgenden Eigenschaften:
// - name: "Aragorn"
// - class: "Ranger"
// - level: 5
// - hitPoints: 100

// Gebe das Objekt `adventurer` in der Konsole aus.

// Erwartete Ausgabe:
// {
//     name: "Aragorn",
//     class: "Ranger",
//     level: 5,
//     hitPoints: 100
// }

```

## Task 2

2. Hinzufügen und Ändern von Eigenschaften

Aufgabe: Füge dem adventurer-Objekt eine Eigenschaft weapon hinzu, gebe der weapon-Property einen Value deiner Wahl (suche dir selbst eine Waffe aus) und ändere die level-Eigenschaft des Abenteurers auf einen beliebigen Wert.

```javascript
// Füge dem Objekt `adventurer` eine neue Eigenschaft `weapon` hinzu, setze den Wert auf eine Waffe deiner Wahl.
// Ändere die Eigenschaft `level` von `adventurer` auf einen beliebigen Wert.

// Erwartete Ausgabe:
// {
//     name: "Aragorn",
//     class: "Ranger",
//     level: 6,
//     hitPoints: 100,
//     weapon: "Sword"
// }
```

## Task 3 

3. Methoden in Objekten

Aufgabe: Füge dem adventurer-Objekt eine Methode attack hinzu, die eine Nachricht über den Angriff des Abenteurers ausgibt.

```javascript
// Füge dem Objekt `adventurer` eine Methode `attack` hinzu.
// Die Methode soll in der Konsole ausgeben: "<name> attacks with <weapon>!".

// Rufe die Methode `attack` des `adventurer`-Objekts auf.

// Erwartete Ausgabe:
// "Aragorn attacks with Sword!"
```

## Task 4

4. Array von Objekten

Aufgabe: Erstelle ein Array party mit mehreren Abenteurern und greife auf ihre Eigenschaften zu.

```javascript
// Erstelle ein Array `party`, das die Objekte `adventurer` und zwei weitere Abenteurer enthält:
// - name: "Legolas", class: "Archer", level: 7, hitPoints: 90, weapon: "Bow"
// - name: "Gimli", class: "Warrior", level: 6, hitPoints: 120, weapon: "Axe"

// Gebe das Array `party` in der Konsole aus.

// Erwartete Ausgabe:
// [
//     {
//         name: "Aragorn",
//         class: "Ranger",
//         level: 6,
//         hitPoints: 100,
//         weapon: "Sword"
//     },
//     {
//         name: "Legolas",
//         class: "Archer",
//         level: 7,
//         hitPoints: 90,
//         weapon: "Bow"
//     },
//     {
//         name: "Gimli",
//         class: "Warrior",
//         level: 6,
//         hitPoints: 120,
//         weapon: "Axe"
//     }
// ]

// Greife auf den Namen und die Waffe des zweiten Abenteurers in `party` zu und gebe diese aus.

// Erwartete Ausgabe:
// "Legolas wields a Bow."
```

## Task 5

5. Kopieren von Objekten

Aufgabe: Kopiere einen Abenteurer aus der party und ändere dessen Eigenschaften, ohne das Original zu beeinflussen.

```javascript
// Kopiere das Objekt `Legolas` aus dem Array `party` in eine neue Variable `archerCopy`
// Verwende den Spread-Operator (...), um das Objekt zu kopieren.

// Ändere die Eigenschaft `name` von `archerCopy` auf "Thranduil" und `level` auf 8.

// Erwartete Ausgabe:
// {
//     name: "Thranduil",
//     class: "Archer",
//     level: 8,
//     hitPoints: 90,
//     weapon: "Bow"
// }

// Gebe `archerCopy` und `party[1]` in der Konsole aus, um sicherzustellen, dass das Originalobjekt unverändert bleibt.

// Erwartete Ausgabe:
// {
//     name: "Legolas",
//     class: "Archer",
//     level: 7,
//     hitPoints: 90,
//     weapon: "Bow"
// }

```

## Task 6

6. Verändern und Versiegeln von Objekten

Aufgabe: Versiegle das adventurer-Objekt und versuche, neue Eigenschaften hinzuzufügen und bestehende zu löschen.

```javascript
// Versiegle das Objekt `adventurer`.

// Versuche, die Eigenschaft `hitPoints` zu löschen.

// Ändere die Eigenschaft `hitPoints` auf 110.

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.

// Erwartete Ausgabe:
// {
//     name: "Aragorn",
//     class: "Ranger",
//     level: 6,
//     hitPoints: 110,
//     weapon: "Sword"
// }
```

## Task 7

7. Einfrieren von Objekten

Aufgabe: Friere das adventurer-Objekt ein und versuche, Eigenschaften zu ändern.

```javascript
// Friere das Objekt `adventurer` ein.

// Versuche, die Eigenschaft `weapon` auf "Dagger" zu ändern.

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.
// Erwartete Ausgabe:
// {
//     name: "Aragorn",
//     class: "Ranger",
//     level: 6,
//     hitPoints: 110,
//     weapon: "Sword"
// }
```

## Task 8

8. Objekt-Schlüssel und Werte

Aufgabe: Verwende Object.entries(), Object.fromEntries(), Object.keys() und Object.values(), um mit den Eigenschaften von adventurer zu arbeiten.

```javascript
// Verwende `Object.entries()`, um die Einträge von `adventurer` in ein Array umzuwandeln.
// Erwartete Ausgabe:
// [
//     ["name", "Aragorn"],
//     ["class", "Ranger"],
//     ["level", 6],
//     ["hitPoints", 110],
//     ["weapon", "Sword"]
// ]

// Verwandle das Array `adventurerEntries` zurück in ein Objekt mit `Object.fromEntries()`.
// Erwartete Ausgabe:
// {
//     name: "Aragorn",
//     class: "Ranger",
//     level: 6,
//     hitPoints: 110,
//     weapon: "Sword"
// }

// Verwende `Object.keys()`, um die Schlüssel des Objekts `adventurer` zu bekommen.
// Erwartete Ausgabe:
// ["name", "class", "level", "hitPoints", "weapon"]

// Verwende `Object.values()`, um die Werte des Objekts `adventurer` zu bekommen.
// Erwartete Ausgabe:
// ["Aragorn", "Ranger", 6, 110, "Sword"]
```

## Task 9

9. Definieren von Eigenschaften

Aufgabe: Verwende Object.defineProperty(), um eine neue Eigenschaft hinzuzufügen und deren Verhalten zu steuern.

```javascript
// Verwende `Object.defineProperty()`, um eine Eigenschaft `role` zu `adventurer` hinzuzufügen.
// Die Eigenschaft soll nicht aufgezählt werden können (enumerable: false) und nicht beschreibbar sein (writable: false).

// Versuche, die Eigenschaft `role` zu ändern.

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.
// Erwartete Ausgabe:
// {
//     name: "Aragorn",
//     class: "Ranger",
//     level: 6,
//     hitPoints: 110,
//     weapon: "Sword"
// }


// Versuche, die Eigenschaft `role` aufzulisten.

```
