const candidate = Array(45).fill().map((value, index) => index+1);
const shuffle = [];

while(candidate.length > 0) {

    // 0부터 44 사이의 숫자 뽑는다. (random()이 0은 포함하고 1은 포함하지 않기 때문에)
    const random = Math.floor(Math.random() * candidate.length); 
    
    // candidate 배열에서 splice하면 배열이 잘려져서 나온다. 
    const spliceArray = candidate.splice(random, 1);

    // 해당 배열은 요소가 1개 밖에 없으므로 0번 인덱스로 값을 꺼낸다
    const value = spliceArray[0];

    // 해당 값을 shuffle에 넣는다.
    shuffle.push(value);
}


// 앞에서 부터 6개 ball을 가져오고 정렬한다.
const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);

// 보너스 볼을 slice하고 남은 7번쨰 인덱스에서 보너스 볼을 뽑는다.
const bonus = shuffle[7];



console.log(winBalls + "  " + bonus); 