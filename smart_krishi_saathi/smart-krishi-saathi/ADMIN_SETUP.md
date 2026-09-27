# Creating the first administrator (Smart Krishi Saathi)

Admin/operator access is enforced in `firestore.rules` by reading a `role`
field on the signed-in user's own `/farmers/{uid}` document. A brand-new
account always gets `role: "farmer"` at signup (see
`firebaseService.js` → `registerWithEmail`). No one can promote themselves
to admin from the browser — the rules explicitly block a user from
changing their own `role` field.

There must always be a way to create the *first* admin without already
having an admin. Do this **once**, outside the deployed app, with one of:

## Option A — Firebase Console (simplest, good for a college demo)
1. Register a normal farmer account in the app (email + password).
2. In the Firebase Console → Firestore Database, open
   `farmers/{that user's uid}`.
3. Manually edit the `role` field from `"farmer"` to `"admin"`.
4. Log out and back in — the app's Admin tab will now appear, and
   `firestore.rules` will genuinely allow that account admin reads/writes.

## Option B — Admin SDK script (recommended for a real deployment)
Run a small trusted script with a Firebase **service account key** (never
put this key in frontend code or commit it to git):

```js
// setup-admin.js — run with: node setup-admin.js <uid>
const admin = require("firebase-admin");
admin.initializeApp({ credential: admin.credential.cert(require("./serviceAccountKey.json")) });
const uid = process.argv[2];
admin.firestore().collection("farmers").doc(uid).update({ role: "admin" })
  .then(() => console.log("Promoted", uid, "to admin"))
  .then(() => process.exit(0));
```

## Promoting operators (village support staff)
Same process, using `role: "operator"` instead of `"admin"`. Operators can
view/manage tickets, listings and support content but cannot manage other
users' roles (see `firestore.rules`).

## Why not a "Turn on Admin Mode" button?
The original demo build had a Settings toggle that only hid/showed the
Admin nav item — it granted no real access. That toggle has been kept for
**demo mode only** (when Firebase isn't configured) and is clearly labelled
as non-secure in the UI. Once Firebase is configured, real admin access is
always determined by the Firestore `role` field and enforced server-side
by Security Rules, never by frontend state.
