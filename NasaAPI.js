fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.title
      document.querySelector('img').src = data.hdurl
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
