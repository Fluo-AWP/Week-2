test('Questions 5-6: Pet cannot be instantiated and Dog and Cat sound method cannot be changed', function () {	
	var myPet = new Pet();	
	ok(typeof myPet === 'undefined', 'Tried creating a Pet, should not be possible and it should be undefined');
});
