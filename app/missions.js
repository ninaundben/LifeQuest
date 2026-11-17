/* LifeQuest – Standard-Rubriken, Ausstattung und Missions-Vorlagen.
   Eigene Missionen legen Eltern direkt in der App an (Mehr → Missions-Bibliothek). */
window.LQ_DATA = (() => {
  const CATS = {
    wissen:   {n:'Allgemeinwissen', e:'🧠', c:'#7C5CFF'},
    finanzen: {n:'Finanzen',        e:'💰', c:'#E3A008'},
    literatur:{n:'Literatur',       e:'📚', c:'#FF7A59'},
    musik:    {n:'Musizieren',      e:'🎸', c:'#E6489E'},
    sprachen: {n:'Sprachen',        e:'🗣️', c:'#14A8B8'},
    soziales: {n:'Soziales',        e:'🤝', c:'#FF5470'},
    sport:    {n:'Sport',           e:'⚽', c:'#22B05F'},
    technik:  {n:'Technik',         e:'🔧', c:'#3E7BFA'},
    natur:    {n:'Natur',           e:'🌱', c:'#59A82A'},
    kochen:   {n:'Alltagsskills',   e:'🍳', c:'#FF9417'},
  };
  const EQUIP = {
    fahrrad:{n:'Fahrrad',e:'🚲'}, ball:{n:'Ball',e:'⚽'}, instrument:{n:'Instrument',e:'🎸'},
    garten:{n:'Garten / Balkon',e:'🌻'}, kueche:{n:'Küche',e:'🍳'}, haustier:{n:'Haustier',e:'🐰'},
    taschengeld:{n:'Taschengeld',e:'💶'}, buecher:{n:'Bücher',e:'📚'}, werkzeug:{n:'Werkzeug',e:'🧰'},
    computer:{n:'Computer / Tablet',e:'💻'}, sportverein:{n:'Sportverein',e:'🏅'},
  };
  const Q = t => ({t, check:'qr'}), P = t => ({t, check:'peer'}), E = t => ({t, check:'parent'});
  const M = (id, cat, e, title, age, weeks, needs, desc, steps) => ({id, cat, e, title, age, weeks, needs, desc, steps});
  const MISSIONS = [
    M('museum','wissen','🦕','Museums-Expedition',[7,17],2,[],'Ein Museum besuchen, vor Ort einchecken und beim Abendessen 3 überraschende Fakten präsentieren.',['Museum aussuchen & Besuch planen',Q('Im Museum: QR-Code scannen (Eltern zeigen ihn)'),'3 überraschende Fakten notieren',P('Beim Abendessen präsentieren')]),
    M('sterne','wissen','🌌','Nacht der Sterne',[8,17],2,[],'Ein Sternbild lernen, den Mond beobachten und skizzieren.',['Sternbild aussuchen & im Buch/Netz anschauen',P('Sternbild am Himmel finden'),'Mond skizzieren',P('Familie zeigen & erklären')]),
    M('wetter','wissen','⛅','Wetter-Forscher:in',[6,10],1,[],'Eine Woche lang Wolken, Wind und Temperatur beobachten und ein Wettertagebuch malen.',['Wolkenarten anschauen','3 Tage Wetter aufmalen','Bauernregel testen',P('Wetter von morgen vorhersagen')]),
    M('erklaer','wissen','🎙️','Erklär’s in 2 Minuten',[12,17],4,[],'Jede Woche ein Thema aus seriösen Quellen recherchieren und der Familie in 2 Minuten erklären.',['Thema & 2 seriöse Quellen',P('Thema 1 erklären'),P('Thema 2'),P('Thema 3'),P('Thema 4 – Fragerunde')]),
    M('sparschwein','finanzen','🐷','Sparschwein-Challenge',[6,10],4,['taschengeld'],'Ein Sparziel festlegen, aufmalen und 4 Wochen lang näher kommen.',['Sparziel malen','Woche 1 gespart','Woche 2','Woche 3',E('Ziel erreicht – feiern!')]),
    M('tgprofi','finanzen','📒','Taschengeld-Profi',[10,14],4,['taschengeld'],'Haushaltsbuch führen und Geld in Sparen / Ausgeben / Teilen aufteilen.',['Drei Töpfe festlegen','Woche 1 notieren','Woche 2 notieren','Spar-Ziel definieren',E('Bilanz ziehen'),'Einen Teil verschenken']),
    M('preisdetektiv','finanzen','🔎','Preis-Detektiv',[9,14],1,[],'Im Supermarkt Grundpreise vergleichen und den günstigsten Einkauf für ein Familienrezept finden.',['Grundpreis verstehen','5 Produkte vergleichen',E('Rezept günstig einkaufen')]),
    M('budget','finanzen','📊','Mein erstes Budget',[14,17],4,['taschengeld'],'Monatsbudget aufstellen, Abos checken und Zinseszins verstehen.',['Einnahmen & Fixkosten','Abos & In-App-Käufe checken','Zinseszins ausprobieren',E('Budget einen Monat halten')]),
    M('lesesommer','literatur','📖','Lesesommer',[6,14],4,[],'Bibliotheksausweis holen, drei Bücher lesen und beim Zurückgeben feiern.',[Q('In der Bibliothek: QR-Code scannen'),'Buch 1 gelesen','Buch 2 gelesen',P('Buch 3 gelesen & erzählt')]),
    M('leserakete','literatur','🚀','Lese-Rakete',[6,9],2,['buecher'],'14 Tage lang jeden Tag 10 Minuten lesen oder vorlesen.',['Lieblingsbuch aussuchen','Tag 1–3','Tag 4–7','Tag 8–11',P('Buch jemandem vorstellen')]),
    M('buchclub','literatur','📚','Buch-Club',[10,17],3,['buecher'],'Ein Buch mit einer Freundin oder einem Freund lesen und euch offline austauschen.',['Buch gemeinsam aussuchen','Erstes Drittel & Treffen','Zweites Drittel & Treffen','Fertig & bewerten']),
    M('ersteslied','musik','🎵','Mein erstes Lied',[8,14],3,['instrument'],'Ein Lied auf deinem Instrument lernen und ein kleines Familienkonzert geben.',['Lied aussuchen','Erste Hälfte','Zweite Hälfte',P('Familienkonzert!')]),
    M('toepfeband','musik','🥁','Töpfe-Band',[6,12],1,[],'Body-Percussion, Töpfe und Löffel – erfinde einen eigenen Beat.',['3 Body-Percussion-Sounds','Küchen-Instrumente bauen',P('Beat aufführen')]),
    M('hauskonzert','musik','🎤','Hauskonzert',[13,17],4,['instrument'],'Drei Stücke einstudieren und ein kleines Konzert für Freund:innen oder Nachbar:innen geben.',['3 Stücke auswählen','Stück 1 sitzt','Stück 2 sitzt','Stück 3 sitzt',P('Konzert geben')]),
    M('woerter','sprachen','🏷️','Wörter-Sammler:in',[6,10],2,[],'Jeden Tag ein Wort in einer neuen Sprache lernen und Zettel an Gegenstände kleben.',['Sprache aussuchen','5 Wörter-Zettel','10 Wörter',P('Familie abfragen')]),
    M('sprechen','sprachen','🗣️','10 Minuten sprechen',[11,17],4,[],'Täglich laut sprechen statt nur tippen – einmal pro Woche mit einer echten Person (Tandem).',['Tandem-Partner:in finden','Woche 1: täglich 10 Min','Woche 2 + Tandem','Woche 3 + Tandem',P('5 Min frei erzählen')]),
    M('hallo','soziales','👋','Hallo-Held:in',[6,10],1,[],'Eine Woche lang jeden Tag jemandem eine kleine Freude machen.',['Nachbarn freundlich grüßen','Ungefragt helfen','Bild verschenken','Kind mitspielen lassen']),
    M('mut','soziales','🦁','Mut-Training',[12,17],6,[],'Schritt für Schritt raus aus der Komfortzone – von klein bis groß.',['Im Café selbst bestellen','Fremde nach dem Weg fragen','Ein Kompliment machen','Im Unterricht freiwillig sprechen','Jemanden Neues ansprechen','Bei einem Verein schnuppern',P('Kurzen Vortrag halten'),'Etwas für andere organisieren']),
    M('offlinetreff','soziales','🧺','Offline-Treff',[10,17],2,[],'Picknick, Spieleabend oder Ausflug mit Freund:innen planen – Handys kommen in die Box.',['Idee & Datum','Persönlich einladen','Planung: Essen, Spiele, Ort',E('Treffen – Handy-Box!')]),
    M('klettern','sport','🧗','Erste Kletterroute',[8,17],3,[],'Schnupperkurs in einer Kletterhalle, Knoten lernen und die erste Route schaffen.',[Q('In der Kletterhalle: QR-Code scannen'),'Achterknoten lernen','3× trainieren',P('Route geschafft!')]),
    M('radentdecker','sport','🚲','Fahrrad-Entdecker:in',[7,13],3,['fahrrad'],'5 neue Orte in der Umgebung mit dem Rad entdecken (mit Erlaubnis/Begleitung).',['Karte malen','Ort 1 + 2','Ort 3 + 4',E('Ort 5 & Karte fertig')]),
    M('jonglieren','sport','⚽','Ball-Künstler:in',[7,13],3,['ball'],'Vom ersten Kick bis 50× jonglieren.',['5× jonglieren','10×','20×','35×',P('50× – jemand zählt mit!')]),
    M('c25k','sport','🏃','Couch to 5K',[13,17],8,[],'In 8 Wochen vom Spaziergang zu 5 km am Stück.',['Gehen/Laufen im Wechsel','5 Min am Stück','15 Min am Stück','25 Min',P('5 km!')]),
    M('raddoktor','technik','🔧','Fahrrad-Doktor',[9,15],2,['fahrrad','werkzeug'],'Platten flicken, Kette ölen, Bremsen checken – das Rad selbst fit machen.',['Werkzeug kennenlernen','Kette ölen','Schlauch flicken',E('Bremsen & Licht')]),
    M('scratch','technik','🎮','Mein erstes Spiel',[9,14],3,['computer'],'Sinnvolle Bildschirmzeit: ein eigenes kleines Spiel programmieren.',['Figur bewegen','Punkte zählen','Level 2',P('Familie testen lassen')]),
    M('reparieren','technik','🛠️','Repair-Café',[11,17],3,[],'Ein kaputtes Gerät reparieren statt wegwerfen.',['Kaputtes Ding finden','Fehler recherchieren',Q('Im Repair-Café / in der Werkstatt einchecken'),P('Vorher/Nachher zeigen')]),
    M('naturdetektiv','natur','🔍','Natur-Detektiv:in',[6,10],2,[],'5 Pflanzen oder Tiere draußen bestimmen und Kresse auf der Fensterbank ziehen.',['Kresse säen','2 Pflanzen bestimmen','2 Tiere entdecken',P('Kresse ernten'),'Naturbuch fertig']),
    M('beet','natur','🌱','Mein Balkonbeet',[9,17],6,['garten'],'Eigenes Gemüse oder Kräuter von der Saat bis zur Ernte.',['Pflanzen aussuchen','Säen','2 Wochen pflegen',P('Erste Ernte'),'Etwas daraus kochen']),
    M('minikoch','kochen','🥗','Kleine Küchen-Crew',[6,10],2,['kueche'],'Obstsalat, Pausenbrot, Müsli – einfache Gerichte mit Erwachsenen zubereiten.',['Küchenregeln','Obstsalat','Pausenbrot für alle',E('Familien-Frühstück')]),
    M('dinner','kochen','🍝','Familien-Dinner',[12,17],4,['kueche'],'Einmal pro Woche für die Familie kochen – inkl. Einkauf und Budget.',['Rezept & Einkaufsliste',P('Dinner 1'),P('Dinner 2'),P('Dinner 3'),'Eigenes Rezept']),
    M('waesche','kochen','🧺','Wäsche-Profi',[11,17],1,[],'Sortieren, Waschmaschine bedienen, aufhängen, falten.',['Richtig sortieren','Maschine starten',E('Aufhängen & falten')]),
  ];
  return {CATS, EQUIP, MISSIONS};
})();
