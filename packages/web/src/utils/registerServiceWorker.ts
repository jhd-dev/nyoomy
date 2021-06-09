import { PUBLIC_URL, __prod__ } from '@nyoomy/global';

// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the 'N+1' visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const SW_FILE = 'service-worker.js';

function isLocalhost(): boolean {
    /* eslint-disable pii/no-ip */
    return (
        window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/.exec(
            window.location.hostname
        ) !== null
    );
    /* eslint-enable pii/no-ip */
}

function onLoad(): void {
    const swUrl = new URL(SW_FILE, PUBLIC_URL);
    void (async () => {
        if (isLocalhost()) {
            // This is running on localhost. Lets check if a service worker still exists or not.
            await checkValidServiceWorker(swUrl);

            // Add some additional logging to localhost, pointing developers to the
            // service worker/PWA documentation.
            await navigator.serviceWorker.ready;
            console.debug(
                `'This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ`
            );
        } else {
            // Is not local host. Just register service worker
            await registerValidSW(swUrl);
        }
    })();
}

async function registerValidSW(swUrl: URL) {
    try {
        const registration = await navigator.serviceWorker.register(swUrl);
        registration.addEventListener('updatefound', () => {
            initInstallingWorker(registration.installing);
        });
    } catch (err: unknown) {
        console.error('Error during service worker registration:', err);
    }
}

function initInstallingWorker(installingWorker: ServiceWorker | null) {
    if (installingWorker == null) return;
    installingWorker.addEventListener('statechange', () => {
        if (installingWorker.state !== 'installed') return;
        console.info(
            navigator.serviceWorker.controller != null
                ? // At this point, the old content will have been purged and
                  // the fresh content will have been added to the cache.
                  // It's the perfect time to display a 'New content is
                  // available; please refresh.' message in your web app.
                  'New content is available; please refresh.'
                : // At this point, everything has been precached.
                  // It's the perfect time to display a
                  // 'Content is cached for offline use.' message.
                  'Content is cached for offline use.'
        );
    });
}

async function checkValidServiceWorker(swUrl: URL): Promise<void> {
    // Check if the service worker can be found. If it can't reload the page.
    try {
        const response = await fetch(swUrl.toString());
        // Ensure service worker exists, and that we really are getting a JS file.
        if (
            response.status === 404 ||
            !response.headers.get('content-type')?.includes('javascript')
        ) {
            // No service worker found. Probably a different app. Reload the page.
            const registration = await navigator.serviceWorker.ready;
            await registration.unregister();
            window.location.reload();
        } else {
            // Service worker found. Proceed as normal.
            await registerValidSW(swUrl);
        }
    } catch (err: unknown) {
        console.warn(
            'No internet connection found. App is running in offline mode.'
        );
    }
}

export default function register(): void {
    if (
        __prod__ &&
        'serviceWorker' in navigator &&
        PUBLIC_URL.origin !== window.location.origin
    ) {
        // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
        window.addEventListener('load', onLoad);
    }
}

export async function unregister(): Promise<void> {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        await registration.unregister();
    }
}
