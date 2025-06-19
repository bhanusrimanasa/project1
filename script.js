function showMessage(id) {
  const msg = document.getElementById('msg');
  const texts = {
    1: "Stepping into the unknown can spark creativity—our minds crave just enough chaos to break free from routine.",
    2: "In the silence of dread, we search for answers. It's in these moments that meaning can be born.",
    3: "Even in a crowd, loneliness finds us. Recognizing our inner isolation is a step toward true connection."
  };
  msg.innerText = texts[id];
}
