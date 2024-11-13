// function countWithoutInterval(count) {
//     setTimeout(() => {
//         console.log(count++);
//         countWithoutInterval(count);
//     }, 1000);
// }

// countWithoutInterval(1)





let count = 0;

function counter() {
    count += 1;
    console.log(count);
    if (count < 10) {
        setTimeout(counter, 1000)
    }
}

counter();