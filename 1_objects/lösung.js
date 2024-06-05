console.clear()

const divider = (input) =>
    {
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

// ych

divider('Task 2');

// Füge dem Objekt `adventurer` eine neue Eigenschaft `weapon` hinzu, setze den Wert auf "Sword".

// ych

// Ändere die Eigenschaft `level` von `adventurer` auf 6.

// ych

// Gebe das aktualisierte Objekt `adventurer` in der Konsole aus.

// ych

divider('Task 3');

// Füge dem Objekt `adventurer` eine Methode `attack` hinzu.
// Die Methode soll in der Konsole ausgeben: "<name> attacks with <weapon>!".

// ych

// Rufe die Methode `attack` des `adventurer`-Objekts auf.

// ych

divider('Task 4');

// Erstelle ein Array `party`, das die Objekte `adventurer` und zwei weitere Abenteurer enthält:
// - name: "Legolas", class: "Archer", level: 7, hitPoints: 90, weapon: "Bow"
// - name: "Gimli", class: "Warrior", level: 6, hitPoints: 120, weapon: "Axe"

// ych

// Gebe das Array `party` in der Konsole aus.

// ych

// Greife auf den Namen und die Waffe des zweiten Abenteurers in `party` zu und gebe diese aus.

// ych


divider('Task 5');

// Kopiere das Objekt `Legolas` aus dem Array `party` in eine neue Variable `archerCopy`
// Verwende den Spread-Operator, um das Objekt zu kopieren.

// ych

// Ändere die Eigenschaft `name` von `archerCopy` auf "Thranduil" und `level` auf 8.

// ych

// Gebe `archerCopy` und `party[1]` in der Konsole aus, um sicherzustellen, dass das Originalobjekt unverändert bleibt.

// ych

divider('Task 6');

// Versiegle das Objekt `adventurer`.

// ych

// Versuche, eine neue Eigenschaft `armor` mit dem Wert "Leather" hinzuzufügen.

// ych

// Versuche, die Eigenschaft `hitPoints` zu löschen.

// ych

// Ändere die Eigenschaft `hitPoints` auf 110.

// ych

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.

// ych

divider('Task 7');

// Friere das Objekt `adventurer` ein.

// ych

// Versuche, die Eigenschaft `weapon` auf "Dagger" zu ändern.

// ych

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.

// ych

divider('Task 8');

// Verwende `Object.entries()`, um die Einträge von `adventurer` in ein Array umzuwandeln.

// ych

// Verwandle das Array `adventurerEntries` zurück in ein Objekt mit `Object.fromEntries()`.

// ych

// Verwende `Object.keys()`, um die Schlüssel des Objekts `adventurer` zu bekommen.

// ych

// Verwende `Object.values()`, um die Werte des Objekts `adventurer` zu bekommen.

// ych


divider('Task 9');

// Verwende `Object.defineProperty()`, um eine Eigenschaft `role` zu `adventurer` hinzuzufügen.
// Die Eigenschaft soll nicht aufgezählt werden können (enumerable: false) und nicht beschreibbar sein (writable: false).

// ych

// Versuche, die Eigenschaft `role` zu ändern.

// ych

// Gebe das Objekt `adventurer` in der Konsole aus, um die Ergebnisse zu sehen.

// ych

// Versuche, die Eigenschaft `role` aufzulisten.

// ych


