console.log('hi');

// $('#keyword').on('keydown');

const keyword = 'cat';
const q = encodeURIComponent(keyword);

$('#text-frame').prop('src', 'http://eow.alc.co.jp/sp/search.html?q=' + q);
$('#image-frame').prop('src', 'https://www.google.co.jp/search?q=' + q + '&tbm=isch&safe=high');

