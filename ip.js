fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;              
                const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbw8NXTmGgbQGJQa5S2jxZe43tqQZxvyyCfdf9e-FcrnVr_hvm-Bc_KFffYOX_gUXnxBbw/exec';     
                const params = new URLSearchParams();
                params.append('ip', ip);
                fetch(googleSheetUrl, {
                    method: 'POST',
                    body: params,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                .then(response => response.text())
                .then(result => {                             
                })          
                .catch(error => console.error('Error:', error));
            })
            .catch(error => {
                console.error('Error:', error);
            });