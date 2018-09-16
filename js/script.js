function title(element, words, time) {
  words.push('');
  let atualWord = 0;
  let atualCharacter = 0;
  let deleting = false;
  let loop = true;

  setInterval(() => {
  	if(atualCharacter > words[atualWord].length - 1)
  	  if(!deleting)
  	    return deleting = true;

  	if(!atualCharacter) {
  	  deleting = false;

  	  if(atualWord !== words.length - 1 && !loop)
  	    atualWord += 1;

  	  if(atualWord === words.length - 1) {
  	  	atualWord = 0;
  	    loop = true;
  	  }
  	}

  	if(deleting) {
  	  atualCharacter--;
  	} else {
  		atualCharacter++;
  	}

  	loop = false;

  	const text = words[atualWord].slice(0, atualCharacter);
  	element.innerText = text;
  }, time);
}

title(document.querySelector('h1'), ['Descubra', 'Viva', 'Liberte-se'], 150);