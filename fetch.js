
document.querySelector('#cp').addEventListener('input', function() {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
        fetch(url).then((rep) => 
                rep.json().then((data) => {
                        console.log(data)
                        let affichage = '<ul>'
                        for(let ville of data){
                                affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} </li>`
                        }
                        affichage += '</ul>'
                        document.querySelector('#ville').innerHTML = affichage;

                }))
                .catch(err => console.log('not valide'))
});