
        // ⚠️ GANTIKAN URL DI BAWAH DENGAN URL WEB APP GOOGLE APPS SCRIPT ANDA SEBELUM INI
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzoeFJxJxIMrb1M_yLHHVC1VweFXlchz80VpR97PUhvHVEIK0Wz9krNPl1tc49iyU0/exec';
        const form = document.forms['contactForm'];
        const btnHantar = document.getElementById('btnHantar');

        form.addEventListener('submit', e => {
            e.preventDefault();
            
            // Tukar teks butang semasa menghantar
            btnHantar.disabled = true;
            btnHantar.innerText = 'Sedang Dihantar...';
            
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    alert('Mesej anda berjaya dihantar dan direkodkan!');
                    form.reset();
                })
                .catch(error => {
                    alert('Ralat! Mesej gagal dihantar: ' + error.message);
                })
                .finally(() => {
                    // Kembalikan butang ke keadaan asal
                    btnHantar.disabled = false;
                    btnHantar.innerText = 'Hantar Mesej';
                });
        });
