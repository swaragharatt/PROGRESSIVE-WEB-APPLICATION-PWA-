
# GearHead Auto Parts

A simple web-based storefront for automotive parts, built with HTML, CSS, and JavaScript. This Progressive Web Application (PWA) includes Firebase Cloud Messaging (FCM) support for push notifications.

---

## Features

* Product listings with prices in ₹ (Rupees)
* Cart icon with dynamic item count using `localStorage`
* Push notification support using Firebase Cloud Messaging
* Marquee banner displaying promotional offers

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Push Notifications:** Firebase Cloud Messaging
* **Server (for local testing):** Python

---

## Setup Instructions

1. **Clone or Download the Repository**

   ```bash
   git clone https://github.com/swaragharatt/gearhead-auto-parts.git
   cd gearhead-auto-parts
   ```

2. **Start a Local Server**

   Required for push notifications to work (they don’t run over `file://` protocol):

   ```bash
   python -m http.server 8080
   ```

3. **Open in Browser**

   Visit:
   `http://localhost:8080`

---

## Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Enable **Cloud Messaging**
3. In your project settings, obtain the `firebaseConfig` object
4. Replace the placeholder values in:

   * `index.html`
   * `firebase-messaging-sw.js`
5. Use a valid **VAPID key** if Firebase requires one for web push

---

## Notifications

After setup:

* Open your site in a browser
* Grant notification permission
* Copy the FCM token logged in the browser console
* Send test messages from the Firebase Console using that token

---

## Notes

* Push notifications **do not work** when opening the file directly (i.e., from `file://`). Always run a local server.
* The shopping cart system uses `localStorage` for simplicity.

---

## Author

**swaragharatt**

---

## Output

![Screenshot 2025-06-13 141556](https://github.com/user-attachments/assets/4f60da75-f729-40b1-af71-c0e28a3ded5a)

