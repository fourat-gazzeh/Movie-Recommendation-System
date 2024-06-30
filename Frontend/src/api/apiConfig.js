const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '76e776d46bcb37fe335ab9a90bd0a942',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default apiConfig;