console.clear()

const divider = (input) => {
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Task 1');

// Erstelle ein Objekt `adventurer` mit folgenden Eigenschaften:
// - name: "Aragorn"
// - class: "Ranger"
// - level: 5
// - hitPoints: 100

// hier bin ich mal nett und mache für euch den Anfang, doch ab jetzt seid ihr auf euch allein gestellt, muahahahahahaha!! :D

const adventurer = {
    name: "Aragorn",
    class: "Ranger",
    level: 5,
    hitPoints: 100
};

// Gebe das Objekt `adventurer` in der Konsole aus.
console.log(adventurer);

divider('Task 2');

// Füge dem Objekt `adventurer` eine neue Eigenschaft `weapon` hinzu, setze den Wert auf "Sword".

adventurer.weapon = "Sword";

// Ändere die Eigenschaft `level` von `adventurer` auf 6.

adventurer.level = 6;

// Gebe das aktualisierte Objekt `adventurer` in der Konsole aus.
console.log(adventurer);

divider('Task 3');

// Füge dem Objekt `adventurer` eine Methode `attack` hinzu.
// Die Methode soll in der Konsole ausgeben: "<name> attacks with <weapon>!".

adventurer.attack = function() {
    console.log(`${this.name} attacks with ${this.weapon}!`);
};

// Rufe die Methode `attack` des `adventurer`-Objekts auf.
adventurer.attack();

divider('Task 4');

// Erstelle ein Array `party`, das die Objekte `adventurer` und zwei weitere Abenteurer enthält:
// - name: "Legolas", class: "Archer", level: 7, hitPoints: 90, weapon: "Bow"
// - name: "Gimli", class: "Warrior", level: 6, hitPoints: 120, weapon: "Axe"

const party = [
    adventurer,
    {
        name: "Legolas",
        class: "Archer",
        level: 7,
        hitPoints: 90,
        weapon: "Bow"
    },
    {
        name: "Gimli",
        class: "Warrior",
        level: 6,
        hitPoints: 120,
        weapon: "Axe"
    }
];

// Gebe das Array `party` in der Konsole aus.
console.log(party);

// Greife auf den Namen und die Waffe des zweiten Abenteurers in `party` zu und gebe diese aus.
console.log(`${party[1].name} wields a ${party[1].weapon}.`);

divider('Task 5');

// Kopiere das Objekt `Legolas` aus dem Array `party` in eine neue Variable `archerCopy`
// Verwende den Spread-Operator, um das Objekt zu kopieren.

const archerCopy = { ...party[1] };

// Ändere die Eigenschaft `name` von `archerCopy` auf "Thranduil" und `level` auf 8.

archerCopy.name = "Thranduil";
archerCopy.level = 8;

// Gebe `archerCopy` und `party[1]` in der Konsole aus, um sicherzustellen, dass das Originalobjekt unverändert bleibt.
console.log(archerCopy);
console.log(party[1]);

divider('Task 6');

// Versiegle das Objekt `adventurer`.

Object.seal(adventurer);

// Versuche, eine neue Eigenschaft `armor` mit dem Wert "Leather" hinzuzufügen.

adventurer.armor = "Leather";

// Versuche, die Eigenschaft `hitPoints` zu löschen.

delete adventurer.hitPoints;

// Ändere die Eigenschaft `hitPoints` auf 110.

adventurer.hitPoints = 110;

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.
console.log(adventurer);

divider('Task 7');

// Friere das Objekt `adventurer` ein.

Object.freeze(adventurer);

// Versuche, die Eigenschaft `weapon` auf "Dagger" zu ändern.

adventurer.weapon = "Dagger";

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.
console.log(adventurer);

divider('Task 8');

// Verwende `Object.entries()`, um die Einträge von `adventurer` in ein Array umzuwandeln.

const adventurerEntries = Object.entries(adventurer);
console.log(adventurerEntries);

// Verwandle das Array `adventurerEntries` zurück in ein Objekt mit `Object.fromEntries()`.

const newAdventurer = Object.fromEntries(adventurerEntries);
console.log(newAdventurer);

// Verwende `Object.keys()`, um die Schlüssel des Objekts `adventurer` zu bekommen.

const adventurerKeys = Object.keys(adventurer);
console.log(adventurerKeys);

// Verwende `Object.values()`, um die Werte des Objekts `adventurer` zu bekommen.

const adventurerValues = Object.values(adventurer);
console.log(adventurerValues);

divider('Task 9');

// Verwende `Object.defineProperty()`, um eine Eigenschaft `role` zu `adventurer` hinzuzufügen.
// Die Eigenschaft soll nicht aufgezählt werden können (enumerable: false) und nicht beschreibbar sein (writable: false).

Object.defineProperty(adventurer, 'role', {
    value: 'Leader',
    enumerable: false,
    writable: false
});

// Versuche, die Eigenschaft `role` zu ändern.

adventurer.role = 'Scout';

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.
console.log(adventurer);

// Versuche, die Eigenschaft `role` aufzulisten.

console.log(Object.keys(adventurer));
console.log(adventurer.role);
