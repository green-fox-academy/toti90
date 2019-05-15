/* You can work in the html or in a separate js file. Like:

    <script>
      Turn the party on and off by clicking the button. (the whole page)
    </script>

    OR

    <script src="events-1.js"></script> */

    const button = document.querySelector('button');
    let isParty = false;
    button.onclick = () => {
      if (isParty === false) {
        document.querySelector('body').classList.add('party')
        isParty = true
      } else {
        document.querySelector('body').classList.remove('party')
        isParty = false
      }
    };