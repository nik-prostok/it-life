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
  var id
	var cat
  var maxLevel = updateBDmax()
	if (skill == 1) {
		id = generateNumber(maxLevel[0])
		cat = [1,id]
   		return(cat)
  	} else if (skill == 2) {
  		id = generateNumber(maxLevel[1])
		cat = [2,id]
   		return(cat)
  	} else if (skill == 3) {
 		id = generateNumber(maxLevel[2])
		cat = [3,id]
   		return(cat)
 	} else if (skill == 4) {
  		id = generateNumber(maxLevel[3])
		cat = [4,id]
   		return(cat)
  	} else if (skill == 5) {
 		id = generateNumber(maxLevel[4])
		cat = [5,id]
   		return(cat)
 	} else if (skill == 6) {
  		id = generateNumber(maxLevel[5])
		cat = [6,id]
   		return(cat)
  	} else if (skill == 7) {
 		id = generateNumber(maxLevel[6])
		cat = [7,id]
   		return(cat)
 	} else if (skill == 8) {
  		id = generateNumber(maxLevel[7])
		cat = [8,id]
   		return(cat)
  	} else if (skill == 9) {
 		id = generateNumber(maxLevel[8])
		cat = [9,id]
   		return(cat)
 	} else if (skill == 10) {
 		id = generateNumber(maxLevel[9])
		cat = [10,id]
   		return(cat)
 	} else {
    	return('invalid value')
  	}

}

function updateBDmax (){
  //запрос в бд
}

function generateNumber (){
	let rand = 0 + Math.random() * (20 + 1);
	return(Math.floor(rand))
}