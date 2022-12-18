// //Contoh Default
// const getUserSync = (id) => {
//     const nama = id === 1 ? 'Dimas' : id === 2 ? 'Aryasatya' : 'tidak ada';
//     return {id, nama};
// }

// const userSatu = getUserSync(1);

// const userDua = getUserSync(2);

// const halo = "Hello Word"

//Contoh Default
const getUserSync = (id, result) => {
    const time = id === 1 ? 3000 : 2000; 
    setTimeout(() => {
        const  nama = id === 1 ? "Dimas Aryasatya" : "Daryas";
        result = {id, nama};
    }, time);
}

const userSatu = getUserSync(1, (result) => {
    console.log(result);
});

const userDua = getUserSync(2, (result) => {
    console.log(result);
});

const halo = "Hello Word";