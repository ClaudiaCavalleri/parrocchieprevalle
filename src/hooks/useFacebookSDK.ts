import { useEffect } from 'react';

const useFacebookSDK = (enabled: boolean = true) => {
    useEffect(() => {
        if (!enabled) return;

        const loadFacebookSDK = () => {
            //@ts-ignore
            if (window.FB) return;

            // Aggiungi il div #fb-root se non esiste
            if (!document.getElementById('fb-root')) {
                const fbRoot = document.createElement('div');
                fbRoot.id = 'fb-root';
                document.body.appendChild(fbRoot);
            }

            // Carica lo script solo se non già presente
            ((d, s, id) => {
                const fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;

                const js = d.createElement(s) as HTMLScriptElement;
                js.id = id;
                js.src = "https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v19.0";
                fjs.parentNode?.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        };

        loadFacebookSDK();

        const interval = setInterval(() => {
            //@ts-ignore
            if (window.FB && window.FB.XFBML) {
                //@ts-ignore
                window.FB.XFBML.parse();
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [enabled]);
};

export default useFacebookSDK;
