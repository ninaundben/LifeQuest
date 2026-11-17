# LifeQuest

Klickbarer Demonstrator für Alltags-Gamification in Familien. Gedacht für Gespräche mit Familien, nicht für den echten Einsatz.

- `index.html`: die komplette Demo (eine Datei, kein Build-Schritt, keine Server-Daten)
- Alle Daten sind Beispieldaten und bleiben lokal im Browser (localStorage). „↺ Reset“ in der Demo-Leiste stellt den Ausgangszustand her.

## Was die Demo zeigt

- **Demo-Leiste oben:** Wechsel zwischen den Ansichten Eltern, Mia (7), Leon (11), Sofia (15) und Partner. Daneben das Onboarding, die Prinzipien mit Gesprächsfragen und Reset.
- **Altersabhängige Oberfläche:** Kids (6–9) bunt und verspielt, Tween (10–13) gemäßigt, Teen (14–17) dunkel und klar. Im Onboarding ändert der Alters-Regler die App live.
- **Agenda:** Regeltermine, Haushalt und Mikro-Habits. Eltern und Kinder können Punkte anlegen, optional mit Bestätigung durch die Eltern.
- **Missionen:** Rubriken durchsuchen, Vorschläge passend zu Alter, Ausstattung und Interessen, mehrwöchige Pläne mit Schritten.
- **Streaks:** Wochen-Serie (5 von 7 Tagen), Joker und Familien-Serie.
- **Freunde:** Verbindung nur per QR-Code, Feed, Koop-Mission. Ranking nur unter Freunden, unter 13 Jahren ohne öffentliche Ranglisten.
- **Vergleich:** anonyme Perzentile innerhalb der Altersgruppe (Beispieldaten).
- **Partner-QR-Check-ins:** Missionen mit fiktiven Partnern (Museum, Bibliothek, Kletterhalle …). Ein Schritt wird vor Ort per QR-Code erledigt (Scan-Button in der Mitte der Navigation), dazu gibt es einen Stempel im Pass und einen Partner-Vorteil. Partner-Orte auf einer Karte.
- **Partner-Sicht:** Dashboard eines fiktiven Museums mit Check-ins, QR-Poster zum Ausdrucken und Partnerschaftsmodell (nicht validiert).
- **Checks:** pro Aufgabe wählbar zwischen Selbst, Eltern-Check, Peer-Check (Geschwister, Freund:innen, Eltern) und QR vor Ort. Peer-Checks auch per QR-Code einer Freundin oder eines Freundes.
- **Eltern:** Familienübersicht, Agenda planen, eigene Ziele (auch von den Kindern bestätigt), Checks, Belohnungen, Familienregeln (z. B. Autonomie ab 14).

## Online ansehen

Einmalig GitHub Pages aktivieren: Repository → Settings → Pages → „Deploy from a branch“ → `main` / `/ (root)`.
Danach erreichbar unter `https://ninaundben.github.io/LifeQuest/`.

## Familien-App (`/app/`)

Lauffähige App für echte Familien: `https://ninaundben.github.io/LifeQuest/app/`

- Mehrere Familien möglich: Jede Familie gründet sich selbst und hat einen eigenen, abgeschotteten Datenbereich. Nur gekoppelte Geräte haben Zugriff.
- Familien-Onboarding mit gemeinsamen Familienzielen, Familien-Pakt, Belohnungen
- Agenda, Familienziele, Missionen mit Prüfung: selbst, Peer, Eltern oder QR-Code (ausdruckbar)
- Editierbare Missions-Bibliothek und eigene Ausstattung (z. B. Teleskop)
- Technik: eine HTML-Datei ohne Build-Schritt, Firebase (anonyme Anmeldung + Firestore), Geräte-Kopplung per Einmal-Code bzw. QR

Einrichtung: Firebase-Konfiguration in `app/index.html` bei `FB_CONFIG` eintragen und den Inhalt von `app/firestore.rules` in der Firebase-Konsole unter Firestore → Regeln einfügen. Ohne Konfiguration läuft die App im Testmodus (nur lokal, Profilwechsel oben).

Bibliotheken in `app/vendor/`: Firebase JS SDK 10.12.2 (compat), jsQR 1.4.0 (Apache-2.0), qrcode-generator 1.4.4 (MIT).
