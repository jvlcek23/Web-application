let avenue = {
    photo: 'gallery/avenue.jpg',
    title: 'Avenue',
    description: 'Beautiful road with rays of sunlight coming through the mist'
};

let lake = {
    photo: 'gallery/lake.jpg',
    title: 'Lake',
    description: 'Calm morning from the pier on an exotic vacation'
};

let nature = {
    photo: 'gallery/nature.jpg',
    title: 'Nature',
    description: 'Lightning creating a perfect lighting for this picture'
};

let ocean = {
    photo: 'gallery/ocean.jpg',
    title: 'Ocean',
    description: 'Not even a smallest leaf will move without a gust of wind'
};

let road = {
    photo: 'gallery/road.jpg',
    title: 'Road',
    description: 'Life is not always perfect. Like a road, it has many bends, ups and down, but that’s its beauty.'
};

let tree = {
    photo: 'gallery/tree.jpg',
    title: 'Tree',
    description: 'Trees are sanctuaries. Whoever knows how to speak to them, whoever knows how to listen to them, can learn the truth.'
};

let waterfall = {
    photo: 'gallery/waterfall.jpg',
    title: 'Waterfall',
    description: 'Amazing how a thundering water can be so violent, and calming at once.'
};

let winter = {
    photo: 'gallery/winter.jpg',
    title: 'Winter',
    description: 'Massive mountains towering over a completely frozen lake'
};


let objectList = [avenue,lake,nature,ocean,road,tree,waterfall,winter];
let currentPhoto = 0;

let loadPhoto = (currentPhoto) => {
   $('#photo').attr('src',objectList[currentPhoto].photo);
    $('#title').html(objectList[currentPhoto].title);
    $('#description').html(objectList[currentPhoto].description); 
}

loadPhoto(currentPhoto);

$('#right').click(() => {
    currentPhoto++;
    if(currentPhoto > 7) {
        currentPhoto = 0;
    };
    loadPhoto(currentPhoto);
});

$('#left').click(() => {
    currentPhoto--;
    if(currentPhoto < 0) {
        currentPhoto = 7;
    };
    loadPhoto(currentPhoto);
});



