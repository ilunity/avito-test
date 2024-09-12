#!/bin/sh
npx json-server --watch db.json --port 8000 &
npm run preview
