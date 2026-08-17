// Subscribe form — demo behavior (no backend wired up yet).
// Swap this for a real request to Mailchimp / ConvertKit / your ESP of choice.
function handleSubscribe(event){
  event.preventDefault();
  const input = document.getElementById('subEmail');
  const success = document.getElementById('subSuccess');
  const email = input.value.trim();
  if(!email){return false;}
  success.textContent = "You're on the list! Look for a confirmation at " + email + ".";
  success.style.display = 'block';
  input.value = '';
  return false;
}

// Contact form — demo behavior. Opens the visitor's email client with the
// message pre-filled. Replace with a real form handler (Formspree, etc.)
// whenever you're ready to collect messages server-side.
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

  const subject = encodeURIComponent('Website message from ' + name);
  const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
  window.location.href = `mailto:hello@boxesandelbows.com?subject=${subject}&body=${body}`;
  msg.textContent = 'Opening your email app…';
  return false;
}
