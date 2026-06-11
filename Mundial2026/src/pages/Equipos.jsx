// src/pages/Equipos.jsx

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const equipos = [
  {
    nombre: "Colombia", bandera: "https://flagcdn.com/w160/co.png", grupo: "Grupo A",
    jugadores: [
      { nombre: "Camilo Vargas", posicion: "Portero" },
      { nombre: "Santiago Arias", posicion: "Defensa" },
      { nombre: "Dávinson Sánchez", posicion: "Defensa" },
      { nombre: "Yerry Mina", posicion: "Defensa" },
      { nombre: "Johan Mojica", posicion: "Defensa" },
      { nombre: "Wilmar Barrios", posicion: "Mediocampista" },
      { nombre: "Mateus Uribe", posicion: "Mediocampista" },
      { nombre: "James Rodríguez", posicion: "Mediocampista" },
      { nombre: "Luis Díaz", posicion: "Delantero" },
      { nombre: "Jhon Durán", posicion: "Delantero" },
      { nombre: "Radamel Falcao", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Brasil", bandera: "https://flagcdn.com/w160/br.png", grupo: "Grupo A",
    jugadores: [
      { nombre: "Alisson", posicion: "Portero" },
      { nombre: "Danilo", posicion: "Defensa" },
      { nombre: "Marquinhos", posicion: "Defensa" },
      { nombre: "Gabriel Magalhães", posicion: "Defensa" },
      { nombre: "Guilherme Arana", posicion: "Defensa" },
      { nombre: "Casemiro", posicion: "Mediocampista" },
      { nombre: "Bruno Guimarães", posicion: "Mediocampista" },
      { nombre: "Lucas Paquetá", posicion: "Mediocampista" },
      { nombre: "Rodrygo", posicion: "Delantero" },
      { nombre: "Vinícius Jr.", posicion: "Delantero" },
      { nombre: "Endrick", posicion: "Delantero" },
    ],
  },
  {
    nombre: "México", bandera: "https://flagcdn.com/w160/mx.png", grupo: "Grupo A",
    jugadores: [
      { nombre: "Guillermo Ochoa", posicion: "Portero" },
      { nombre: "Jorge Sánchez", posicion: "Defensa" },
      { nombre: "César Montes", posicion: "Defensa" },
      { nombre: "Johan Vásquez", posicion: "Defensa" },
      { nombre: "Jesús Gallardo", posicion: "Defensa" },
      { nombre: "Edson Álvarez", posicion: "Mediocampista" },
      { nombre: "Héctor Herrera", posicion: "Mediocampista" },
      { nombre: "Andrés Guardado", posicion: "Mediocampista" },
      { nombre: "Hirving Lozano", posicion: "Delantero" },
      { nombre: "Raúl Jiménez", posicion: "Delantero" },
      { nombre: "Henry Martín", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Canadá", bandera: "https://flagcdn.com/w160/ca.png", grupo: "Grupo A",
    jugadores: [
      { nombre: "Maxime Crépeau", posicion: "Portero" },
      { nombre: "Richie Laryea", posicion: "Defensa" },
      { nombre: "Kamal Miller", posicion: "Defensa" },
      { nombre: "Steven Vitória", posicion: "Defensa" },
      { nombre: "Sam Adekugbe", posicion: "Defensa" },
      { nombre: "Stephen Eustáquio", posicion: "Mediocampista" },
      { nombre: "Ismaël Koné", posicion: "Mediocampista" },
      { nombre: "Jonathan Osorio", posicion: "Mediocampista" },
      { nombre: "Alphonso Davies", posicion: "Delantero" },
      { nombre: "Jonathan David", posicion: "Delantero" },
      { nombre: "Cyle Larin", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Argentina", bandera: "https://flagcdn.com/w160/ar.png", grupo: "Grupo B",
    jugadores: [
      { nombre: "Emiliano Martínez", posicion: "Portero" },
      { nombre: "Nahuel Molina", posicion: "Defensa" },
      { nombre: "Cristian Romero", posicion: "Defensa" },
      { nombre: "Lisandro Martínez", posicion: "Defensa" },
      { nombre: "Nicolás Tagliafico", posicion: "Defensa" },
      { nombre: "Rodrigo De Paul", posicion: "Mediocampista" },
      { nombre: "Enzo Fernández", posicion: "Mediocampista" },
      { nombre: "Alexis Mac Allister", posicion: "Mediocampista" },
      { nombre: "Lionel Messi", posicion: "Delantero" },
      { nombre: "Lautaro Martínez", posicion: "Delantero" },
      { nombre: "Julián Álvarez", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Francia", bandera: "https://flagcdn.com/w160/fr.png", grupo: "Grupo B",
    jugadores: [
      { nombre: "Mike Maignan", posicion: "Portero" },
      { nombre: "Jules Koundé", posicion: "Defensa" },
      { nombre: "Dayot Upamecano", posicion: "Defensa" },
      { nombre: "Ibrahima Konaté", posicion: "Defensa" },
      { nombre: "Theo Hernández", posicion: "Defensa" },
      { nombre: "Aurélien Tchouaméni", posicion: "Mediocampista" },
      { nombre: "Adrien Rabiot", posicion: "Mediocampista" },
      { nombre: "Antoine Griezmann", posicion: "Mediocampista" },
      { nombre: "Kylian Mbappé", posicion: "Delantero" },
      { nombre: "Ousmane Dembélé", posicion: "Delantero" },
      { nombre: "Marcus Thuram", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Uruguay", bandera: "https://flagcdn.com/w160/uy.png", grupo: "Grupo B",
    jugadores: [
      { nombre: "Sergio Rochet", posicion: "Portero" },
      { nombre: "Nahitan Nández", posicion: "Defensa" },
      { nombre: "José María Giménez", posicion: "Defensa" },
      { nombre: "Ronald Araújo", posicion: "Defensa" },
      { nombre: "Mathías Olivera", posicion: "Defensa" },
      { nombre: "Rodrigo Bentancur", posicion: "Mediocampista" },
      { nombre: "Federico Valverde", posicion: "Mediocampista" },
      { nombre: "Nicolás De La Cruz", posicion: "Mediocampista" },
      { nombre: "Luis Suárez", posicion: "Delantero" },
      { nombre: "Darwin Núñez", posicion: "Delantero" },
      { nombre: "Facundo Pellistri", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Estados Unidos", bandera: "https://flagcdn.com/w160/us.png", grupo: "Grupo B",
    jugadores: [
      { nombre: "Matt Turner", posicion: "Portero" },
      { nombre: "Sergino Dest", posicion: "Defensa" },
      { nombre: "Miles Robinson", posicion: "Defensa" },
      { nombre: "Chris Richards", posicion: "Defensa" },
      { nombre: "Antonee Robinson", posicion: "Defensa" },
      { nombre: "Tyler Adams", posicion: "Mediocampista" },
      { nombre: "Weston McKennie", posicion: "Mediocampista" },
      { nombre: "Yunus Musah", posicion: "Mediocampista" },
      { nombre: "Christian Pulisic", posicion: "Delantero" },
      { nombre: "Ricardo Pepi", posicion: "Delantero" },
      { nombre: "Folarin Balogun", posicion: "Delantero" },
    ],
  },
  {
    nombre: "España", bandera: "https://flagcdn.com/w160/es.png", grupo: "Grupo C",
    jugadores: [
      { nombre: "Unai Simón", posicion: "Portero" },
      { nombre: "Dani Carvajal", posicion: "Defensa" },
      { nombre: "Pau Cubarsí", posicion: "Defensa" },
      { nombre: "Aymeric Laporte", posicion: "Defensa" },
      { nombre: "Alejandro Balde", posicion: "Defensa" },
      { nombre: "Rodri", posicion: "Mediocampista" },
      { nombre: "Pedri", posicion: "Mediocampista" },
      { nombre: "Fabián Ruiz", posicion: "Mediocampista" },
      { nombre: "Lamine Yamal", posicion: "Delantero" },
      { nombre: "Álvaro Morata", posicion: "Delantero" },
      { nombre: "Nico Williams", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Alemania", bandera: "https://flagcdn.com/w160/de.png", grupo: "Grupo C",
    jugadores: [
      { nombre: "Manuel Neuer", posicion: "Portero" },
      { nombre: "Joshua Kimmich", posicion: "Defensa" },
      { nombre: "Antonio Rüdiger", posicion: "Defensa" },
      { nombre: "Jonathan Tah", posicion: "Defensa" },
      { nombre: "David Raum", posicion: "Defensa" },
      { nombre: "Toni Kroos", posicion: "Mediocampista" },
      { nombre: "Florian Wirtz", posicion: "Mediocampista" },
      { nombre: "Leroy Sané", posicion: "Mediocampista" },
      { nombre: "Jamal Musiala", posicion: "Delantero" },
      { nombre: "Kai Havertz", posicion: "Delantero" },
      { nombre: "Thomas Müller", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Portugal", bandera: "https://flagcdn.com/w160/pt.png", grupo: "Grupo C",
    jugadores: [
      { nombre: "Diogo Costa", posicion: "Portero" },
      { nombre: "João Cancelo", posicion: "Defensa" },
      { nombre: "Rúben Dias", posicion: "Defensa" },
      { nombre: "Pepe", posicion: "Defensa" },
      { nombre: "Nuno Mendes", posicion: "Defensa" },
      { nombre: "Vitinha", posicion: "Mediocampista" },
      { nombre: "João Palhinha", posicion: "Mediocampista" },
      { nombre: "Bruno Fernandes", posicion: "Mediocampista" },
      { nombre: "Cristiano Ronaldo", posicion: "Delantero" },
      { nombre: "Rafael Leão", posicion: "Delantero" },
      { nombre: "Bernardo Silva", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Marruecos", bandera: "https://flagcdn.com/w160/ma.png", grupo: "Grupo C",
    jugadores: [
      { nombre: "Yassine Bounou", posicion: "Portero" },
      { nombre: "Achraf Hakimi", posicion: "Defensa" },
      { nombre: "Nayef Aguerd", posicion: "Defensa" },
      { nombre: "Romain Saïss", posicion: "Defensa" },
      { nombre: "Noussair Mazraoui", posicion: "Defensa" },
      { nombre: "Sofyan Amrabat", posicion: "Mediocampista" },
      { nombre: "Azzedine Ounahi", posicion: "Mediocampista" },
      { nombre: "Selim Amallah", posicion: "Mediocampista" },
      { nombre: "Hakim Ziyech", posicion: "Delantero" },
      { nombre: "Youssef En-Nesyri", posicion: "Delantero" },
      { nombre: "Soufiane Rahimi", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Inglaterra", bandera: "https://flagcdn.com/w160/gb-eng.png", grupo: "Grupo D",
    jugadores: [
      { nombre: "Jordan Pickford", posicion: "Portero" },
      { nombre: "Trent Alexander-Arnold", posicion: "Defensa" },
      { nombre: "John Stones", posicion: "Defensa" },
      { nombre: "Harry Maguire", posicion: "Defensa" },
      { nombre: "Luke Shaw", posicion: "Defensa" },
      { nombre: "Declan Rice", posicion: "Mediocampista" },
      { nombre: "Jude Bellingham", posicion: "Mediocampista" },
      { nombre: "Phil Foden", posicion: "Mediocampista" },
      { nombre: "Bukayo Saka", posicion: "Delantero" },
      { nombre: "Harry Kane", posicion: "Delantero" },
      { nombre: "Marcus Rashford", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Italia", bandera: "https://flagcdn.com/w160/it.png", grupo: "Grupo D",
    jugadores: [
      { nombre: "Gianluigi Donnarumma", posicion: "Portero" },
      { nombre: "Giovanni Di Lorenzo", posicion: "Defensa" },
      { nombre: "Alessandro Bastoni", posicion: "Defensa" },
      { nombre: "Giorgio Scalvini", posicion: "Defensa" },
      { nombre: "Federico Dimarco", posicion: "Defensa" },
      { nombre: "Jorginho", posicion: "Mediocampista" },
      { nombre: "Nicolò Barella", posicion: "Mediocampista" },
      { nombre: "Lorenzo Pellegrini", posicion: "Mediocampista" },
      { nombre: "Federico Chiesa", posicion: "Delantero" },
      { nombre: "Ciro Immobile", posicion: "Delantero" },
      { nombre: "Giacomo Raspadori", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Países Bajos", bandera: "https://flagcdn.com/w160/nl.png", grupo: "Grupo D",
    jugadores: [
      { nombre: "Bart Verbruggen", posicion: "Portero" },
      { nombre: "Denzel Dumfries", posicion: "Defensa" },
      { nombre: "Virgil van Dijk", posicion: "Defensa" },
      { nombre: "Stefan de Vrij", posicion: "Defensa" },
      { nombre: "Nathan Aké", posicion: "Defensa" },
      { nombre: "Frenkie de Jong", posicion: "Mediocampista" },
      { nombre: "Tijjani Reijnders", posicion: "Mediocampista" },
      { nombre: "Xavi Simons", posicion: "Mediocampista" },
      { nombre: "Cody Gakpo", posicion: "Delantero" },
      { nombre: "Memphis Depay", posicion: "Delantero" },
      { nombre: "Donyell Malen", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Croacia", bandera: "https://flagcdn.com/w160/hr.png", grupo: "Grupo D",
    jugadores: [
      { nombre: "Dominik Livaković", posicion: "Portero" },
      { nombre: "Josip Juranović", posicion: "Defensa" },
      { nombre: "Joško Gvardiol", posicion: "Defensa" },
      { nombre: "Duje Ćaleta-Car", posicion: "Defensa" },
      { nombre: "Borna Sosa", posicion: "Defensa" },
      { nombre: "Luka Modrić", posicion: "Mediocampista" },
      { nombre: "Marcelo Brozović", posicion: "Mediocampista" },
      { nombre: "Mateo Kovačić", posicion: "Mediocampista" },
      { nombre: "Ivan Perišić", posicion: "Delantero" },
      { nombre: "Andrej Kramarić", posicion: "Delantero" },
      { nombre: "Bruno Petković", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Bélgica", bandera: "https://flagcdn.com/w160/be.png", grupo: "Grupo E",
    jugadores: [
      { nombre: "Koen Casteels", posicion: "Portero" },
      { nombre: "Thomas Meunier", posicion: "Defensa" },
      { nombre: "Toby Alderweireld", posicion: "Defensa" },
      { nombre: "Jan Vertonghen", posicion: "Defensa" },
      { nombre: "Théo Bongonda", posicion: "Defensa" },
      { nombre: "Axel Witsel", posicion: "Mediocampista" },
      { nombre: "Kevin De Bruyne", posicion: "Mediocampista" },
      { nombre: "Youri Tielemans", posicion: "Mediocampista" },
      { nombre: "Leandro Trossard", posicion: "Delantero" },
      { nombre: "Romelu Lukaku", posicion: "Delantero" },
      { nombre: "Dries Mertens", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Suiza", bandera: "https://flagcdn.com/w160/ch.png", grupo: "Grupo E",
    jugadores: [
      { nombre: "Yann Sommer", posicion: "Portero" },
      { nombre: "Silvan Widmer", posicion: "Defensa" },
      { nombre: "Manuel Akanji", posicion: "Defensa" },
      { nombre: "Nico Elvedi", posicion: "Defensa" },
      { nombre: "Ricardo Rodríguez", posicion: "Defensa" },
      { nombre: "Granit Xhaka", posicion: "Mediocampista" },
      { nombre: "Remo Freuler", posicion: "Mediocampista" },
      { nombre: "Denis Zakaria", posicion: "Mediocampista" },
      { nombre: "Xherdan Shaqiri", posicion: "Delantero" },
      { nombre: "Breel Embolo", posicion: "Delantero" },
      { nombre: "Noah Okafor", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Dinamarca", bandera: "https://flagcdn.com/w160/dk.png", grupo: "Grupo E",
    jugadores: [
      { nombre: "Kasper Schmeichel", posicion: "Portero" },
      { nombre: "Rasmus Kristensen", posicion: "Defensa" },
      { nombre: "Andreas Christensen", posicion: "Defensa" },
      { nombre: "Joachim Andersen", posicion: "Defensa" },
      { nombre: "Joakim Mæhle", posicion: "Defensa" },
      { nombre: "Pierre-Emile Højbjerg", posicion: "Mediocampista" },
      { nombre: "Christian Eriksen", posicion: "Mediocampista" },
      { nombre: "Thomas Delaney", posicion: "Mediocampista" },
      { nombre: "Mikkel Damsgaard", posicion: "Delantero" },
      { nombre: "Jonas Wind", posicion: "Delantero" },
      { nombre: "Andreas Skov Olsen", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Suecia", bandera: "https://flagcdn.com/w160/se.png", grupo: "Grupo E",
    jugadores: [
      { nombre: "Robin Olsen", posicion: "Portero" },
      { nombre: "Emil Krafth", posicion: "Defensa" },
      { nombre: "Victor Lindelöf", posicion: "Defensa" },
      { nombre: "Isak Hien", posicion: "Defensa" },
      { nombre: "Ludwig Augustinsson", posicion: "Defensa" },
      { nombre: "Albin Ekdal", posicion: "Mediocampista" },
      { nombre: "Viktor Claesson", posicion: "Mediocampista" },
      { nombre: "Dejan Kulusevski", posicion: "Mediocampista" },
      { nombre: "Alexander Isak", posicion: "Delantero" },
      { nombre: "Zlatan Ibrahimović", posicion: "Delantero" },
      { nombre: "Anthony Elanga", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Japón", bandera: "https://flagcdn.com/w160/jp.png", grupo: "Grupo F",
    jugadores: [
      { nombre: "Shuichi Gonda", posicion: "Portero" },
      { nombre: "Hiroki Sakai", posicion: "Defensa" },
      { nombre: "Maya Yoshida", posicion: "Defensa" },
      { nombre: "Ko Itakura", posicion: "Defensa" },
      { nombre: "Yuto Nagatomo", posicion: "Defensa" },
      { nombre: "Wataru Endō", posicion: "Mediocampista" },
      { nombre: "Gaku Shibasaki", posicion: "Mediocampista" },
      { nombre: "Takumi Minamino", posicion: "Mediocampista" },
      { nombre: "Kaoru Mitoma", posicion: "Delantero" },
      { nombre: "Daichi Kamada", posicion: "Delantero" },
      { nombre: "Ritsu Dōan", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Corea del Sur", bandera: "https://flagcdn.com/w160/kr.png", grupo: "Grupo F",
    jugadores: [
      { nombre: "Kim Seung-gyu", posicion: "Portero" },
      { nombre: "Kim Moon-hwan", posicion: "Defensa" },
      { nombre: "Kim Min-jae", posicion: "Defensa" },
      { nombre: "Jung Seung-hyun", posicion: "Defensa" },
      { nombre: "Kim Jin-su", posicion: "Defensa" },
      { nombre: "Jung Woo-young", posicion: "Mediocampista" },
      { nombre: "Lee Jae-sung", posicion: "Mediocampista" },
      { nombre: "Hwang In-beom", posicion: "Mediocampista" },
      { nombre: "Son Heung-min", posicion: "Delantero" },
      { nombre: "Hwang Hee-chan", posicion: "Delantero" },
      { nombre: "Cho Gue-sung", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Australia", bandera: "https://flagcdn.com/w160/au.png", grupo: "Grupo F",
    jugadores: [
      { nombre: "Mathew Ryan", posicion: "Portero" },
      { nombre: "Nathaniel Atkinson", posicion: "Defensa" },
      { nombre: "Harry Souttar", posicion: "Defensa" },
      { nombre: "Kye Rowles", posicion: "Defensa" },
      { nombre: "Aziz Behich", posicion: "Defensa" },
      { nombre: "Aaron Mooy", posicion: "Mediocampista" },
      { nombre: "Jackson Irvine", posicion: "Mediocampista" },
      { nombre: "Riley McGree", posicion: "Mediocampista" },
      { nombre: "Mathew Leckie", posicion: "Delantero" },
      { nombre: "Mitchell Duke", posicion: "Delantero" },
      { nombre: "Martin Boyle", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Irán", bandera: "https://flagcdn.com/w160/ir.png", grupo: "Grupo F",
    jugadores: [
      { nombre: "Alireza Beiranvand", posicion: "Portero" },
      { nombre: "Sadegh Moharrami", posicion: "Defensa" },
      { nombre: "Majid Hosseini", posicion: "Defensa" },
      { nombre: "Milad Mohammadi", posicion: "Defensa" },
      { nombre: "Ehsan Hajsafi", posicion: "Defensa" },
      { nombre: "Saeid Ezatolahi", posicion: "Mediocampista" },
      { nombre: "Ali Gholizadeh", posicion: "Mediocampista" },
      { nombre: "Ahmad Nourollahi", posicion: "Mediocampista" },
      { nombre: "Mehdi Taremi", posicion: "Delantero" },
      { nombre: "Sardar Azmoun", posicion: "Delantero" },
      { nombre: "Karim Ansarifard", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Nigeria", bandera: "https://flagcdn.com/w160/ng.png", grupo: "Grupo G",
    jugadores: [
      { nombre: "Francis Uzoho", posicion: "Portero" },
      { nombre: "Ola Aina", posicion: "Defensa" },
      { nombre: "William Troost-Ekong", posicion: "Defensa" },
      { nombre: "Semi Ajayi", posicion: "Defensa" },
      { nombre: "Zaidu Sanusi", posicion: "Defensa" },
      { nombre: "Frank Onyeka", posicion: "Mediocampista" },
      { nombre: "Alex Iwobi", posicion: "Mediocampista" },
      { nombre: "Joe Aribo", posicion: "Mediocampista" },
      { nombre: "Samuel Chukwueze", posicion: "Delantero" },
      { nombre: "Victor Osimhen", posicion: "Delantero" },
      { nombre: "Kelechi Iheanacho", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Senegal", bandera: "https://flagcdn.com/w160/sn.png", grupo: "Grupo G",
    jugadores: [
      { nombre: "Édouard Mendy", posicion: "Portero" },
      { nombre: "Bouna Sarr", posicion: "Defensa" },
      { nombre: "Kalidou Koulibaly", posicion: "Defensa" },
      { nombre: "Abdou Diallo", posicion: "Defensa" },
      { nombre: "Formose Mendy", posicion: "Defensa" },
      { nombre: "Cheikhou Kouyaté", posicion: "Mediocampista" },
      { nombre: "Idrissa Gueye", posicion: "Mediocampista" },
      { nombre: "Pape Matar Sarr", posicion: "Mediocampista" },
      { nombre: "Sadio Mané", posicion: "Delantero" },
      { nombre: "Ismaïla Sarr", posicion: "Delantero" },
      { nombre: "Boulaye Dia", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Camerún", bandera: "https://flagcdn.com/w160/cm.png", grupo: "Grupo G",
    jugadores: [
      { nombre: "André Onana", posicion: "Portero" },
      { nombre: "Collins Fai", posicion: "Defensa" },
      { nombre: "Castelletto", posicion: "Defensa" },
      { nombre: " Nouhou Tolo", posicion: "Defensa" },
      { nombre: "Przemysław Frankowski", posicion: "Defensa" },
      { nombre: "Martin Hongla", posicion: "Mediocampista" },
      { nombre: "André-Frank Zambo Anguissa", posicion: "Mediocampista" },
      { nombre: "Samuel Gouet", posicion: "Mediocampista" },
      { nombre: "Karl Toko Ekambi", posicion: "Delantero" },
      { nombre: "Vincent Aboubakar", posicion: "Delantero" },
      { nombre: "Eric Maxim Choupo-Moting", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Egipto", bandera: "https://flagcdn.com/w160/eg.png", grupo: "Grupo G",
    jugadores: [
      { nombre: "Mohamed El-Shenawy", posicion: "Portero" },
      { nombre: "Ahmed El-Fotouh", posicion: "Defensa" },
      { nombre: "Ahmed Hegazi", posicion: "Defensa" },
      { nombre: "Omar Kamal", posicion: "Defensa" },
      { nombre: "Mahmoud Hamdy", posicion: "Defensa" },
      { nombre: "Tarek Hamed", posicion: "Mediocampista" },
      { nombre: "Emam Ashour", posicion: "Mediocampista" },
      { nombre: "Amr El-Sulaya", posicion: "Mediocampista" },
      { nombre: "Mohamed Salah", posicion: "Delantero" },
      { nombre: "Mostafa Mohamed", posicion: "Delantero" },
      { nombre: "Omar Marmoush", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Chile", bandera: "https://flagcdn.com/w160/cl.png", grupo: "Grupo H",
    jugadores: [
      { nombre: "Claudio Bravo", posicion: "Portero" },
      { nombre: "Mauricio Isla", posicion: "Defensa" },
      { nombre: "Gary Medel", posicion: "Defensa" },
      { nombre: "Paulo Díaz", posicion: "Defensa" },
      { nombre: "Marcos Acuña", posicion: "Defensa" },
      { nombre: "Erick Pulgar", posicion: "Mediocampista" },
      { nombre: "Charles Aránguiz", posicion: "Mediocampista" },
      { nombre: "Alexis Sánchez", posicion: "Mediocampista" },
      { nombre: "Eduardo Vargas", posicion: "Delantero" },
      { nombre: "Ben Brereton Díaz", posicion: "Delantero" },
      { nombre: "Iván Morales", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Perú", bandera: "https://flagcdn.com/w160/pe.png", grupo: "Grupo H",
    jugadores: [
      { nombre: "Pedro Gallese", posicion: "Portero" },
      { nombre: "Luis Advíncula", posicion: "Defensa" },
      { nombre: "Carlos Zambrano", posicion: "Defensa" },
      { nombre: "Alexander Callens", posicion: "Defensa" },
      { nombre: "Miguel Trauco", posicion: "Defensa" },
      { nombre: "Renato Tapia", posicion: "Mediocampista" },
      { nombre: "Yoshimar Yotún", posicion: "Mediocampista" },
      { nombre: "Christian Cueva", posicion: "Mediocampista" },
      { nombre: "André Carrillo", posicion: "Delantero" },
      { nombre: "Gianluca Lapadula", posicion: "Delantero" },
      { nombre: "Paolo Guerrero", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Ecuador", bandera: "https://flagcdn.com/w160/ec.png", grupo: "Grupo H",
    jugadores: [
      { nombre: "Hernán Galíndez", posicion: "Portero" },
      { nombre: "Angelo Preciado", posicion: "Defensa" },
      { nombre: "Félix Torres", posicion: "Defensa" },
      { nombre: "Piero Hincapié", posicion: "Defensa" },
      { nombre: "Pervis Estupiñán", posicion: "Defensa" },
      { nombre: "Moisés Caicedo", posicion: "Mediocampista" },
      { nombre: "Carlos Gruezo", posicion: "Mediocampista" },
      { nombre: "Romario Ibarra", posicion: "Mediocampista" },
      { nombre: "Gonzalo Plata", posicion: "Delantero" },
      { nombre: "Enner Valencia", posicion: "Delantero" },
      { nombre: "Michael Estrada", posicion: "Delantero" },
    ],
  },
  {
    nombre: "Paraguay", bandera: "https://flagcdn.com/w160/py.png", grupo: "Grupo H",
    jugadores: [
      { nombre: "Antony Silva", posicion: "Portero" },
      { nombre: "Robert Rojas", posicion: "Defensa" },
      { nombre: "Gustavo Gómez", posicion: "Defensa" },
      { nombre: "Fabián Balbuena", posicion: "Defensa" },
      { nombre: "Blas Riveros", posicion: "Defensa" },
      { nombre: "Mathías Villasanti", posicion: "Mediocampista" },
      { nombre: "Richard Sánchez", posicion: "Mediocampista" },
      { nombre: "Miguel Almirón", posicion: "Mediocampista" },
      { nombre: "Alejandro Romero Gamarra", posicion: "Delantero" },
      { nombre: "Antonio Sanabria", posicion: "Delantero" },
      { nombre: "Gabriel Ávalos", posicion: "Delantero" },
    ],
  },
];

const posicionColor = {
  Portero:       { bg: "#fff3cd", color: "#856404" },
  Defensa:       { bg: "#d1e7dd", color: "#0a3622" },
  Mediocampista: { bg: "#cfe2ff", color: "#084298" },
  Delantero:     { bg: "#f8d7da", color: "#842029" },
};

export default function Equipos() {
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);

  return (
    <>
      <Navbar />

      <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "2rem" }}>
        <h1 style={{ color: "#0a1628", marginBottom: "1.5rem" }}>Equipos Participantes</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {equipos.map((team, index) => (
            <div
              key={index}
              onClick={() => setEquipoSeleccionado(team)}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                cursor: "pointer",
                border: "0.5px solid #e5e5e5",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#c9a84c";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#e5e5e5";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={team.bandera}
                alt={team.nombre}
                style={{ width: "90px", height: "60px", objectFit: "cover", borderRadius: "8px", marginBottom: "12px" }}
              />
              <h3 style={{ margin: "0 0 8px", fontSize: "15px", color: "#0a1628" }}>{team.nombre}</h3>
              <span style={{ background: "#f5f5f5", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", color: "#666" }}>
                {team.grupo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de jugadores */}
      {equipoSeleccionado && (
        <div
          onClick={() => setEquipoSeleccionado(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "16px",
              width: "100%",
              maxWidth: "480px",
              maxHeight: "85vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Header del modal */}
            <div
              style={{
                background: "#0a1628",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <img
                src={equipoSeleccionado.bandera}
                alt={equipoSeleccionado.nombre}
                style={{ width: "54px", height: "36px", objectFit: "cover", borderRadius: "5px" }}
              />
              <div>
                <h2 style={{ margin: 0, color: "#fff", fontSize: "18px", fontWeight: 600 }}>
                  {equipoSeleccionado.nombre}
                </h2>
                <span style={{ fontSize: "12px", color: "#c9a84c" }}>{equipoSeleccionado.grupo}</span>
              </div>
              <button
                onClick={() => setEquipoSeleccionado(null)}
                style={{
                  marginLeft: "auto",
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  color: "#fff",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>
            </div>

            {/* Lista de jugadores */}
            <div style={{ overflowY: "auto", padding: "1rem 1.5rem" }}>
              {["Portero", "Defensa", "Mediocampista", "Delantero"].map((pos) => {
                const jugadoresPorPos = equipoSeleccionado.jugadores.filter(j => j.posicion === pos);
                if (!jugadoresPorPos.length) return null;
                return (
                  <div key={pos} style={{ marginBottom: "1rem" }}>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#999",
                        margin: "0 0 0.5rem",
                      }}
                    >
                      {pos}s
                    </p>
                    {jugadoresPorPos.map((j, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "9px 12px",
                          borderRadius: "8px",
                          marginBottom: "4px",
                          background: "#f9f9f9",
                          border: "0.5px solid #ebebeb",
                        }}
                      >
                        <span style={{ fontSize: "14px", color: "#0a1628" }}>{j.nombre}</span>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            padding: "2px 8px",
                            borderRadius: "10px",
                            background: posicionColor[j.posicion]?.bg,
                            color: posicionColor[j.posicion]?.color,
                          }}
                        >
                          {j.posicion}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}