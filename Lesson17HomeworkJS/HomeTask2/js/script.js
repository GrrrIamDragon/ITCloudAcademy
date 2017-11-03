var obj = {
	Minsk: 'Belarus',
  	Kiev: 'Ukraine',
  	London: 'United Kingdom',
  	Pyongyang: 'North Korea',
  	Brasilia: 'Brazil'
}
for(var key in obj) {
    console.log(key + "is the capital of " + obj[key] );
}