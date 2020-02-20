function analysis (body)
{
	var category
	var scale = checkSkales(body.healthChangeValue,body.timeChangeValue,body.moneyChangeValue)
	if (scale != 'unspecial'){
		category = сategorySelection(body.skillChangeValue)
		return(category)
	} else {
		return(scale)
	}

}

function checkSkales (health,time,money)
{

	if (health <= 3 && health != 0) {
   		return('healthSpecial')
  	} else if (time <= 3 && time != 0) {
  		return('healthSpecial')
  	} else if (money <= 3 && money != 0) {
 		return('moneySpecial')
 	} else if (health == 0) {
 		return('looseHealth')
 	} else if (time == 0) {
 		return('looseTime')
 	} else if (money == 0) {
 		return('looseMoney')
 	} else {
    	return('unspecial')
  	}
}

function сategorySelection (skill)
{
	var cat
	if (skill == 1) {
		id = generateNumber()
		cat = [1,id]
   		return(cat)
  	} else if (skill == 2) {
  		id = generateNumber()
		cat = [2,id]
   		return(cat)
  	} else if (skill == 3) {
 		id = generateNumber()
		cat = [3,id]
   		return(cat)
 	} else if (skill == 4) {
  		id = generateNumber()
		cat = [4,id]
   		return(cat)
  	} else if (skill == 5) {
 		id = generateNumber()
		cat = [5,id]
   		return(cat)
 	} else if (skill == 6) {
  		id = generateNumber()
		cat = [6,id]
   		return(cat)
  	} else if (skill == 7) {
 		id = generateNumber()
		cat = [7,id]
   		return(cat)
 	} else if (skill == 8) {
  		id = generateNumber()
		cat = [8,id]
   		return(cat)
  	} else if (skill == 9) {
 		id = generateNumber()
		cat = [9,id]
   		return(cat)
 	} else if (skill == 10) {
 		id = generateNumber()
		cat = [10,id]
   		return(cat)
 	} else {
    	return('invalid value')
  	}

}

function generateNumber (){
	let rand = 0 + Math.random() * (20 + 1);
	return(Math.floor(rand))
}