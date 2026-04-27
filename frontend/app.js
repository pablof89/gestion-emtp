{\rtf1\ansi\ansicpg1252\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const app = document.getElementById("app");\
\
// URL de tu backend (la que ya funciona)\
const API = "https://gestion-emtp-production.up.railway.app";\
\
fetch(API)\
  .then(res => res.text())\
  .then(data => \{\
    app.innerHTML = `\
      <p>Conectado al backend:</p>\
      <pre>$\{data\}</pre>\
\
      <h2>\uc0\u55357 \u56517  Gantt simple</h2>\
      <div style="border:1px solid #ccc;padding:10px;">\
        <div>Proyecto A</div>\
        <div style="background:blue;height:20px;width:200px;"></div>\
      </div>\
    `;\
  \});}