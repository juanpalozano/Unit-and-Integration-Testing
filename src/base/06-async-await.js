// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImage = async() => {
    try {
        const apiKey    = 'Hxs4RLxDMJ4cggkufUuiQvQH43vTRKBD';
        const resp      = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data }  = await resp.json(); 
        const { url }   = data.images.original;
        return url;
    }
    catch (error) {
        return 'The url does not exist.';
    } 
}