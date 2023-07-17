'#!/bin/bash'

cd ./goleaf-widget &&
npm run clean &&
npm run build &&
cd .. &&
find ./clientsOfGoLeaf/ -name 'goLeaf-widget.js' -delete &&
cp ./goleaf-widget/build/assets/* ./clientsOfGoLeaf/goLeaf-widget.js
npx serve -p 5012 ./clientsOfGoLeaf

