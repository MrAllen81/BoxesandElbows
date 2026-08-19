// Subscribe form — sends silently via Formspree, no email client required.
function handleSubscribe(event){
  event.preventDefault();
  const input = document.getElementById('subEmail');
  const success = document.getElementById('subSuccess');
  const email = input.value.trim();
  if(!email){return false;}

  fetch('https://formspree.io/f/xbgrqydv', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(event.target)
  })
  .then(response => {
    if(response.ok){
      success.textContent = "You're on the list! Look for a confirmation at " + email + ".";
      success.style.display = 'block';
      input.value = '';
    } else {
      success.textContent = "Something went wrong — try again in a bit.";
      success.style.display = 'block';
    }
  })
  .catch(() => {
    success.textContent = "Something went wrong — try again in a bit.";
    success.style.display = 'block';
  });

  return false;
}

// Contact form — sends silently via Formspree, no email client required.
function handleContact(event){
  event.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  const msg = document.getElementById('contactMsg');

  if(!name || !email || !message){
    msg.textContent = 'Fill in every field and I\'ll get right back to you.';
    return false;
  }

  fetch('https://formspree.io/f/mgawryon', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(event.target)
  })
  .then(response => {
    if(response.ok){
      msg.textContent = "Message sent — I'll get back to you soon.";
      document.getElementById('cName').value = '';
      document.getElementById('cEmail').value = '';
      document.getElementById('cMessage').value = '';
    } else {
      msg.textContent = "Something went wrong — try again in a bit.";
    }
  })
  .catch(() => {
    msg.textContent = "Something went wrong — try again in a bit.";
  });

  return false;
}
