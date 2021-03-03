
document.querySelector('#cp').addEventListener('input', () => {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;
});