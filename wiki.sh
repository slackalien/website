# cleanup wiki files
#rm -rf src/wiki
#mkdir -p src/wiki

# enter wiki source folder
cd wiki-gesla

# convert dokuwiki to markdown
find . -name \*.txt -type f -exec pandoc -f mediawiki -t markdown -o {}.md {} \;

# move markdown files to 
mv -f abrazija.txt.md ../src/wiki/abrazija.md
mv -f a-okvir.txt.md ../src/wiki/a-okvir.md
mv -f banana.txt.md ../src/wiki/banana.md
mv -f bičev_vozel.txt.md ../src/wiki/bicev-vozel.md
mv -f deltasti_člen.txt.md ../src/wiki/deltasti-clen.md
mv -f dvig_na_trak.txt.md ../src/wiki/dvig-na-trak.md
mv -f frostov_vozel.txt.md ../src/wiki/frostov-vozel.md
mv -f glavni_trak.txt.md ../src/wiki/glavni-trak.md
mv -f jebeno_velik_vozel.txt.md ../src/wiki/jebeno-velik-vozel.md
mv -f kavbojski_vozel.txt.md ../src/wiki/kavbojski-vozel.md
mv -f maček.txt.md ../src/wiki/macek.md
mv -f mehanska_prednost.txt.md ../src/wiki/mehanska-prednost.md
mv -f minimalna_porušna_sila.txt.md ../src/wiki/minimalna-porusna-sila.md
mv -f množilnik.txt.md ../src/wiki/mnozilnik.md
mv -f najlonski_vozel.txt.md ../src/wiki/najlonski-vozel.md
mv -f največja_delovna_obremenitev.txt.md ../src/wiki/najvecja-delovna-obremenitev.md
mv -f napenjalna_stran.txt.md ../src/wiki/napenjalna-stran.md
mv -f napenjalni_sistem.txt.md ../src/wiki/napenjalni-sistem.md
mv -f napenjanje.txt.md ../src/wiki/napenjanje.md
mv -f napetost.txt.md ../src/wiki/napetost.md
mv -f neskončna_zanka.txt.md ../src/wiki/neskoncna-zanka.md
mv -f osmica.txt.md ../src/wiki/osmica.md
mv -f ovalni_člen.txt.md ../src/wiki/ovalni-clen.md
mv -f pilotna_vrv.txt.md ../src/wiki/pilotna-vrv.md
mv -f podloga.txt.md ../src/wiki/podloga.md
mv -f podložka.txt.md ../src/wiki/podlozka.md
mv -f pomožni_trak.txt.md ../src/wiki/pomozni-trak.md
mv -f popuščalka.txt.md ../src/wiki/popuscalka.md
mv -f postavljanje.txt.md ../src/wiki/postavljanje.md
mv -f primež.txt.md ../src/wiki/primez.md
mv -f raztezek.txt.md ../src/wiki/raztezek.md
mv -f redundanca.txt.md ../src/wiki/redundanca.md
mv -f segmentiranje.txt.md ../src/wiki/segmentiranje.md
mv -f sidrišče.txt.md ../src/wiki/sidrisce.md
mv -f šivana_zanka.txt.md ../src/wiki/sivana-zanka.md
mv -f škopec.txt.md ../src/wiki/skopec.md
mv -f škripec.txt.md ../src/wiki/skripec.md
mv -f skupna_točka.txt.md ../src/wiki/skupna-tocka.md
mv -f skupnost.txt.md ../src/wiki/skupnost.md
mv -f slackline.txt.md ../src/wiki/slackline.md
mv -f slovar.txt.md ../src/wiki/slovar.md
mv -f spletni_viri.txt.md ../src/wiki/spletni-viri.md
mv -f start.txt.md ../src/wiki/start.md
mv -f statična_stran.txt.md ../src/wiki/staticna-stran.md
mv -f tovorna_zanka.txt.md ../src/wiki/tovorna-zanka.md
mv -f trak.txt.md ../src/wiki/trak.md
mv -f trosmerna_obremenitev.txt.md ../src/wiki/trosmerna-obremenitev.md
mv -f varnostno_razmerje.txt.md ../src/wiki/varnostno-razmerje.md
mv -f verižna_odpoved.txt.md ../src/wiki/verizna-odpoved.md
mv -f visokica.txt.md ../src/wiki/visokica.md
mv -f vis.txt.md ../src/wiki/vis.md
mv -f vponka.txt.md ../src/wiki/vponka.md
mv -f vrvni_škopec.txt.md ../src/wiki/vrvni-skopec.md
mv -f vstajanje.txt.md ../src/wiki/vstajanje.md
mv -f za_začetnike.txt.md ../src/wiki/za-zacetnike.md

cd ../src/wiki

#rm -rf *.txt
# remove .txt files

# rename .txt.md to .md
#for f in *.txt.md; do 
#  mv -- "$f" "${f%.txt.md}.md"
#done

# remove wikilink
find . -name \*.md -type f -exec sed -i 's/ "wikilink"//g' {} \;
find . -name \*.md -type f -exec sed -i 's/\/\//*/g' {} \;
find . -name \*.md -type f -exec sed -i 's/](/](\//g' {} \;

# fix headings
find . -name \*.md -type f -exec sed -i 's/######/#/' {} \;
find . -name \*.md -type f -exec sed -i 's/#####/##/' {} \;
find . -name \*.md -type f -exec sed -i 's/####/###/' {} \;

# fix urls
#find . -name \*.md -type f -exec sed -i 's/abrazija/abrazija/' {} \;
#find . -name \*.md -type f -exec sed -i 's/a-okvir/a-okvir/' {} \;
#find . -name \*.md -type f -exec sed -i 's/banana/banana/' {} \;
find . -name \*.md -type f -exec sed -i 's/bičev_vozel/bicev-vozel/' {} \;
find . -name \*.md -type f -exec sed -i 's/deltasti_člen/deltasti-clen/' {} \;
find . -name \*.md -type f -exec sed -i 's/dvig_na_trak/dvig-na-trak/' {} \;
find . -name \*.md -type f -exec sed -i 's/frostov_vozel/frostov-vozel/' {} \;
find . -name \*.md -type f -exec sed -i 's/glavni_trak/glavni-trak/' {} \;
find . -name \*.md -type f -exec sed -i 's/jebeno_velik_vozel/jebeno-velik-vozel/' {} \;
find . -name \*.md -type f -exec sed -i 's/kavbojski_vozel/kavbojski-vozel/' {} \;
#find . -name \*.md -type f -exec sed -i 's/maček/macek/' {} \;
find . -name \*.md -type f -exec sed -i 's/mehanska_prednost/mehanska-prednost/' {} \;
find . -name \*.md -type f -exec sed -i 's/minimalna_porušna_sila/minimalna-porusna-sila/' {} \;
#find . -name \*.md -type f -exec sed -i 's/množilnik/mnozilnik/' {} \;
find . -name \*.md -type f -exec sed -i 's/najlonski_vozel/najlonski-vozel/' {} \;
find . -name \*.md -type f -exec sed -i 's/največja_delovna_obremenitev/najvecja-delovna-obremenitev/' {} \;
find . -name \*.md -type f -exec sed -i 's/napenjalna_stran/napenjalna-stran/' {} \;
find . -name \*.md -type f -exec sed -i 's/napenjalni_sistem/napenjalni-sistem/' {} \;
#find . -name \*.md -type f -exec sed -i 's/napenjanje/napenjanje/' {} \;
#find . -name \*.md -type f -exec sed -i 's/napetost/napetost/' {} \;
find . -name \*.md -type f -exec sed -i 's/neskončna_zanka/neskoncna-zanka/' {} \;
#find . -name \*.md -type f -exec sed -i 's/osmica/osmica/' {} \;
find . -name \*.md -type f -exec sed -i 's/ovalni_člen/ovalni-clen/' {} \;
find . -name \*.md -type f -exec sed -i 's/pilotna_vrv/pilotna-vrv/' {} \;
#find . -name \*.md -type f -exec sed -i 's/podloga/podloga/' {} \;
#find . -name \*.md -type f -exec sed -i 's/podložka/podlozka/' {} \;
find . -name \*.md -type f -exec sed -i 's/pomožni_trak/pomozni-trak/' {} \;
#find . -name \*.md -type f -exec sed -i 's/popuščalka/popuscalka/' {} \;
#find . -name \*.md -type f -exec sed -i 's/postavljanje/postavljanje/' {} \;
find . -name \*.md -type f -exec sed -i 's/primež/primez/' {} \;
#find . -name \*.md -type f -exec sed -i 's/raztezek/raztezek/' {} \;
#find . -name \*.md -type f -exec sed -i 's/redundanca/redundanca/' {} \;
#find . -name \*.md -type f -exec sed -i 's/segmentiranje/segmentiranje/' {} \;
#find . -name \*.md -type f -exec sed -i 's/sidrišče/sidrisce/' {} \;
find . -name \*.md -type f -exec sed -i 's/šivana_zanka/sivana-zanka/' {} \;
#find . -name \*.md -type f -exec sed -i 's/škopec/skopec/' {} \;
#find . -name \*.md -type f -exec sed -i 's/škripec/skripec/' {} \;
find . -name \*.md -type f -exec sed -i 's/skupna_točka/skupna-tocka/' {} \;
#find . -name \*.md -type f -exec sed -i 's/skupnost/skupnost/' {} \;
#find . -name \*.md -type f -exec sed -i 's/slackline/slackline/' {} \;
#find . -name \*.md -type f -exec sed -i 's/slovar/slovar/' {} \;
find . -name \*.md -type f -exec sed -i 's/spletni_viri/spletni-viri/' {} \;
#find . -name \*.md -type f -exec sed -i 's/start/start/' {} \;
find . -name \*.md -type f -exec sed -i 's/statična_stran/staticna-stran/' {} \;
find . -name \*.md -type f -exec sed -i 's/tovorna_zanka/tovorna-zanka/' {} \;
#find . -name \*.md -type f -exec sed -i 's/trak/trak/' {} \;
find . -name \*.md -type f -exec sed -i 's/trosmerna_obremenitev/trosmerna-obremenitev/' {} \;
find . -name \*.md -type f -exec sed -i 's/varnostno_razmerje/varnostno-razmerje/' {} \;
find . -name \*.md -type f -exec sed -i 's/verižna_odpoved/verizna-odpoved/' {} \;
#find . -name \*.md -type f -exec sed -i 's/visokica/visokica/' {} \;
#find . -name \*.md -type f -exec sed -i 's/vis/vis/' {} \;
#find . -name \*.md -type f -exec sed -i 's/vponka/vponka/' {} \;
find . -name \*.md -type f -exec sed -i 's/vrvni_škopec/vrvni-skopec/' {} \;
#find . -name \*.md -type f -exec sed -i 's/vstajanje/vstajanje/' {} \;
find . -name \*.md -type f -exec sed -i 's/za_začetnike/za-zacetnike/' {} \;
