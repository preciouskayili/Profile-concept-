// fetch api

document.querySelector("#load").addEventListener('click', e => {
    e.preventDefault()

    document.querySelector('#search').style.display = "block"
    const spinner = document.querySelector('.spinner-border')
    const url = 'json/users.json';

    fetch(url).then((response) => {
        spinner.style.display = "block";
        console.log('Resolved', response);
        return response.json();
    }).then(data => {
        spinner.style.display = "none";
        data.forEach(profile => {
            document.querySelector('.inner').innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <img src="${profile.img}" width="150" height="150" alt="Profile img" class="img-rounded d-block mx-auto">
                        <h4 id="username">${profile.username}</h4>
                        <p>${profile.languages}</p>
                        <i class="text-muted">${profile.email}</i>
                        <p class="text-muted">${profile.bio}</p>
                    </div>
                </div>
            </div>
            `
        });
        const search = document.querySelector('#search')

        search.addEventListener('keyup', form => {
            form.preventDefault()

            const term = form.target.value.toLowerCase()
            const profiles = document.querySelectorAll('h4');

            Array.from(profiles).forEach((profile) => {
                // const username = profile.firstElementChild.textContent;
                const username = "Karly Divirgilo"

                if (username.toLowerCase().indexOf(term) != -1) {

                    console.log("Successful");
                } else {
                    // profiles.style.display = 'none'
                    console.log("Unsucessful");
                }
            })
        })
    }).catch((err) => {
        console.log('Rejected', err);
    });

})

