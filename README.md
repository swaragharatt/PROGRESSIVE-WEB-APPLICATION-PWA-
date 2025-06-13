# PROGRESSIVE-WEB-APPLICATION-PWA-
markdown
# GearHead Auto Parts

A basic web storefront for car parts with a clean layout and Firebase push notification support.

## Features

- Product listing with rupee pricing
- Cart icon with item count (localStorage)
- Firebase Cloud Messaging integration
- Marquee banner for offers

## Tech Stack

- HTML, CSS, JavaScript
- Firebase Cloud Messaging
- Python (for local server)

## Setup

1. Clone this repo.
2. Run a local server (for example, using Python):

bash
python -m http.server 8080

3. Visit `http://localhost:8080`

## Firebase Configuration

* Create a Firebase project
* Enable Cloud Messaging
* Replace `firebaseConfig` in `index.html` and `firebase-messaging-sw.js`
* Use a valid VAPID key if required

## Notifications

Use the Firebase console to send test push messages using the browser’s FCM token.

## Notes

* Notifications won’t work via direct file access, use a server
* Cart uses local storage

## Author
swaragharatt

![Screenshot 2025-06-13 141556](https://github.com/user-attachments/assets/4f60da75-f729-40b1-af71-c0e28a3ded5a)

