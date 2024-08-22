// async promise 
async function MyProfile() {
    const url = 'https://api.github.com/users/TahirUddinAhmed';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if(!response.ok) {
            throw new Error(`HTTP ERROR! status code ${response.status}`);
        }

        console.log(data);
        console.log(response.status);
        
    } catch(err) {
        console.log('Err: ', err);
    }
}

MyProfile();