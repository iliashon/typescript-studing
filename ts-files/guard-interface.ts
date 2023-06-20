// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }
interface Request {
	animal: 'cat' | 'dog' | 'bird';
	breed: string;
	sterilizade?: string;
}

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }
interface ResponseRight {
	Status: string;
	data: {
		animal: 'cat' | 'dog' | 'bird';
		breed: string;
		sterilized?: string;
		location: string;
		age?: number;
		nextUpdateIn: Date;
		message: string
	}
}

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

function checkAnimalData(animal: ResponseRight) {
	if (animal.Status === 'available') {
		return animal.data;
	} else {
		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
	}
}

checkAnimalData({
	Status: 'available',
	data: {
		animal: 'cat',
		breed: 'sd',
		sterilized: 'false',
		location: 'minsk',
		age: 12,
		message: 'good',
		nextUpdateIn: new Date(),
	}
})
